import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Form, Input, Button } from "antd"

import { updateCategoryRequest } from "../../../../../store/modules/category/actions"
import api from "../../../../../services/api"
import {
  updateCrumb,
  removeCrumb
} from "../../../../../store/modules/breadcrumb/actions"

export default function EditCategory(props) {
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const loading = useSelector(state => state.category.loading)

  const id = props.match.params.id

  useEffect(() => {
    dispatch(
      updateCrumb("Editar categoria", `${props.match.url}`, 3, "editCategory")
    )

    return () => {
      dispatch(removeCrumb("editCategory"))
    }
  }, [dispatch, props.match.url])

  useEffect(() => {
    async function getCategory() {
      const response = await api.get(`yourmanager/category/show/${id}`)
      const { name, description } = response.data
      setName(name)
      setDescription(description)
    }

    getCategory()
  }, [id])

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(updateCategoryRequest(name, description, id))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        <Input
          disabled={loading}
          value={name}
          onChange={e => setName(e.currentTarget.value)}
          type="text"
          placeholder="Informe o nome da categoria"
        />
      </Form.Item>
      <Form.Item>
        <Input.TextArea
          disabled={loading}
          value={description}
          onChange={e => setDescription(e.currentTarget.value)}
          placeholder="Informe a descrição da categoria"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Atualizar
        </Button>
      </Form.Item>
    </Form>
  )
}
