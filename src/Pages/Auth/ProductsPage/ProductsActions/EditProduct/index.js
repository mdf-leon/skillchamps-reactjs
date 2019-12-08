import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  Form,
  Input,
  Button,
  Select,
  Upload,
  InputNumber,
  message,
  Icon
} from "antd"

import api from "../../../../../services/api"
import { updateProductRequest } from "../../../../../store/modules/product/actions"
import {
  updateCrumb,
  removeCrumb
} from "../../../../../store/modules/breadcrumb/actions"

export default function EditProduct(props) {
  const dispatch = useDispatch()
  const [loadingImage, setLoadingImage] = useState(false)
  const [imageUrl, setImageUrl] = useState("")
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState(null)
  const [price, setPrice] = useState("")
  const [categoryId, setCategoryId] = useState("")
  const categories = useSelector(state => state.category.categories)
  const loading = useSelector(state => state.product.loading)

  const id = props.match.params.id

  useEffect(() => {
    dispatch(
      updateCrumb("Editar produto", `${props.match.url}`, 3, "editProduct")
    )

    return () => {
      dispatch(removeCrumb("editProduct"))
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    async function getProduct() {
      const response = await api.get(`yourmanager/products/show/${id}`)

      const { name, description, price, category_id, image } = response.data
      setName(name)
      setDescription(description)
      setPrice(price)
      setCategoryId(category_id)
      if (image) {
        handleDefaultImage(image)
      }
      setImage(image)
    }

    // Function to render the default image, i mean, if have a image in the db will be render
    function handleDefaultImage(img) {
      const defaultImage = Buffer.from(img.data).toString("base64")
      setImageUrl(`data:image/png;base64, ${defaultImage}`)
    }

    getProduct()
    // eslint-disable-next-line
  }, [])
  // Function to getBase64 of image with action in Upload component
  function getBase64(img, callback) {
    setImage(img)
    const reader = new FileReader()
    reader.addEventListener("load", () => callback(reader.result))
    reader.readAsDataURL(img)
  }

  // Function to validate if image is valid or not
  function beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png"
    if (!isJpgOrPng) {
      message.error("Você pode apenas fazer o upload de arquivos JPG/PNG!")
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error("A imagem é muito grande!")
    }
    return isJpgOrPng && isLt2M
  }

  // Function to check if image is uploading or done of upload
  function handleChange(info) {
    if (info.file.status === "uploading") {
      setLoadingImage(true)
      return
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, imageUrl => {
        setImageUrl(imageUrl)
        setLoadingImage(false)
      })
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (image) {
      const formData = new FormData()
      formData.append("product_pic", image)
      // dispatch(up)
    }
    dispatch(updateProductRequest(name, description, price, categoryId, id))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        <Input
          disabled={loading}
          value={name}
          onChange={e => setName(e.currentTarget.value)}
          type="text"
          placeholder="Informe o nome do produto"
        />
      </Form.Item>
      <Form.Item>
        <Input.TextArea
          disabled={loading}
          value={description}
          onChange={e => setDescription(e.currentTarget.value)}
          placeholder="Informe uma breve descrição do produto"
        />
      </Form.Item>
      <Form.Item>
        <Select
          disabled={loading}
          onChange={id => setCategoryId(id)}
          placeholder="Selecione a categoria referente ao produto"
        >
          {categories.map((category, idx) => (
            <Select.Option value={category.id} key={idx}>
              {category.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item>
        <Upload
          disabled={loading}
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
          ) : (
            <div>
              <Icon type={loadingImage ? "loading" : "plus"} />
              <div className="ant-upload-text">Upload</div>
            </div>
          )}
        </Upload>
      </Form.Item>
      <Form.Item>
        <InputNumber
          disabled={loading}
          value={price}
          onChange={num => setPrice(num)}
          placeholder="Informe o preço do produto"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Atualizar produto
        </Button>
      </Form.Item>
    </Form>
  )
}
