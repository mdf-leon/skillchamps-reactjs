import React from "react"
import { useSelector } from "react-redux"

import { Breadcrumb as BreadCrumb } from "antd"

export default function Breadcrumb() {
  const breadcrumb = useSelector(state => state.breadcrumb.crumbs)
  return (
    <BreadCrumb separator=">">
      {breadcrumb.map((crumb, idx) => {
        if (idx === breadcrumb.length - 1) {
          return <BreadCrumb.Item key={idx}>{crumb.label}</BreadCrumb.Item>
        } else {
          return (
            <BreadCrumb.Item key={idx} href={crumb.to}>
              {crumb.label}
            </BreadCrumb.Item>
          )
        }
      })}
    </BreadCrumb>
  )
}
