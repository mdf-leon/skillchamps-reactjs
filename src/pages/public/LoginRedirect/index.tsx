/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useParams, useLocation } from "react-router-dom";

import { base, baseUrl } from "config/api";

export default function LoginRedirect(props: any) {
  let query = new URLSearchParams(useLocation().search);
  React.useEffect(() => {
    query.get("token") && localStorage.setItem("token", query.get("token")!);
    base
      .post("/user")
      .then((r) => {
        console.log(r);
        localStorage.setItem("token", r.data.token);

        localStorage.setItem(
          "events_on_management",
          JSON.stringify(r.data.eventsOnManagement)
        );
        if(!r.data.rider || !r.data.rider.name){
          window.location.href = "/finish_rider"
        }
        localStorage.setItem("rider_info", JSON.stringify(r.data.rider)); // informacoes do rider direto do back salvo no LS
        r.data.institute &&
          localStorage.setItem(
            "institute_info",
            JSON.stringify(r.data.institute)
          ); // informacoes do institute direto do back salvo no LS
        if (r.data.institute) {
          return props.history.replace(
            `/dashboard/institute/${r.data.institute.id}`
          );
        }
        // setCookie("jwt", r.data.token);
        // window.location.reload();
        window.location.href = "/dashboard/home"
      })
      .catch((e) => {
        // setMessageParams({
        //   message: "Please check your login information.",
        //   severity: "error",
        // });
        // setLoading(false);
        console.log(e.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div style={{ margin: 0 }}>loading</div>;
}
