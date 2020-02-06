import React, { useState, useEffect } from "react";
import { Button } from "antd";

import { base } from "../../../config/api";
import { useCookies } from "react-cookie";
import Sidebar from "../../../components/navbar/sidebar";

import App from "../../../App";

export default function Dashboard(props) {
  const [cookies] = useCookies("jwt");

  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    console.log(cookies.jwt);
    base
      .get("/check", { headers: { Authorization: `Bearer ${cookies.jwt}` } })
      .then(r => {
        console.log(r);
      })
      .catch(e => {
        console.log(e.response);
      });
  }, []);

  return (
    <div>
      <Sidebar
        isCollapsed={setCollapsed} // isCollapsed retorna o estado atual da barra, true significa agrupado/fechado
        collapsed={collapsed} // collapsed recebe o valor que deseja, outro botao pode alterar a barra se quiser
        //manualCollapse // manualCollapse vai sumir com o botão se você quiser
        SeleKey={1}
      />

      <div
        className={
          "container justify-content-center align-items-center d-flex h-100"
        }
      ></div>
    </div>
  );
}
