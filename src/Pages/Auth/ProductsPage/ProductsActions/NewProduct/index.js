import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  Form,
  Upload,
  Input,
  InputNumber,
  Icon,
  Button,
  Select,
  message
} from "antd"

import { createProductRequest } from "../../../../../store/modules/product/actions"
import {
  updateCrumb,
  removeCrumb
} from "../../../../../store/modules/breadcrumb/actions"

export default function NewProduct(props) {
  const [loadingImage, setLoadingImage] = useState(false)
  const [imageUrl, setImageUrl] = useState("")
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState(null)
  const [price, setPrice] = useState("")
  const [categoryId, setCategoryId] = useState("")
  const categories = useSelector(state => state.category.categories)
  const loading = useSelector(state => state.product.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateCrumb("Novo produto", `${props.match.url}`, 3, "newProduct"))

    return () => {
      dispatch(removeCrumb("newProduct"))
    }
  }, [dispatch, props.match.url])

  function getBase64(img, callback) {
    setImage(img)
    const reader = new FileReader()
    reader.addEventListener("load", () => callback(reader.result))
    reader.readAsDataURL(img)
  }

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

  async function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData()
    formData.append("category_id", categoryId)
    formData.append("product_pic", image)
    formData.append("name", name)
    formData.append("description", description)
    formData.append("price", parseInt(price))

    dispatch(createProductRequest(formData))
  }

  const uploadButton = (
    <div>
      <Icon type={loadingImage ? "loading" : "plus"} />
      <div className="ant-upload-text">Upload</div>
    </div>
  )

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        <Input
          value={name}
          disabled={loading}
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
            uploadButton
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
          Criar novo produto
        </Button>
      </Form.Item>
    </Form>
  )
}
