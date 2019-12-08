import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Form, Input, Button } from "antd"

import { createCategoryRequest } from "../../../../../store/modules/category/actions"
import {
  updateCrumb,
  removeCrumb
} from "../../../../../store/modules/breadcrumb/actions"

export default function NewCategory(props) {
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const loading = useSelector(state => state.category.loading)

  useEffect(() => {
    dispatch(
      updateCrumb("Nova categoria", `${props.match.url}`, 3, "newCategory")
    )

    return () => {
      dispatch(removeCrumb("newCategory"))
    }
  }, [dispatch, props.match.url])

  async function handleSubmit(e) {
    e.preventDefault()
    dispatch(createCategoryRequest(name, description))
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
          Criar categoria
        </Button>
      </Form.Item>
    </Form>
  )
}
