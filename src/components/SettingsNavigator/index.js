import React from "react"
import { useDispatch } from "react-redux"
import { NavLink as NavLinkRRD } from "react-router-dom"
import { DropdownMenu, DropdownItem, NavLink, Nav } from "reactstrap"

import "./style.css"

import { logOutRequest } from "../../store/modules/auth/actions"

function SettingsNavigator(props) {
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(logOutRequest())
  }

  return (
    <DropdownMenu right>
      <Nav>
        {props.links.length ? (
          props.links.map((link, idx) => (
            <DropdownItem key={idx}>
              <NavLink className="nav" to={link.to} tag={NavLinkRRD}>
                <i className={link.icon} />
                <span>{link.name}</span>
              </NavLink>
            </DropdownItem>
          ))
        ) : (
          <h1>error</h1>
        )}
        <DropdownItem
          onClick={e => {
            handleSubmit(e)
            window.location.reload(false)
          }}
        >
          <i className="ni ni-user-run" />
          <span>Sair</span>
        </DropdownItem>
      </Nav>
    </DropdownMenu>
  )
}

export default SettingsNavigator
