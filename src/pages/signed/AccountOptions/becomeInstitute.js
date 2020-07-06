import React, { useState, useEffect } from "react";
import { Button, Box, TextInput, } from 'components';
import { Row, Col, Grid } from 'styles/grid'
import { IconButton, Img } from './styles'
import { Center } from 'styles/global'
import { Icon } from "antd";
import { base } from "../../../config/api";
import { useCookies } from "react-cookie";

export default function BecomeInstitute(props) {
  const [cookies] = useCookies("jwt");

  const becomeInstituteSubmit = async e => {
    e.preventDefault();
    let res = await base
      .post("/makeinstitute", institute, {
        headers: { Authorization: `Bearer ${cookies.jwt}` }
      })
      .then(() => { })
      .catch(e => {
        setStatus({ ...status, code: 1, message: e.data });
      });
    console.log(res);
  };

  const [institute, setInstitute] = useState({
    fed_tax_ido: "",
    subd_tax_ido: "",
    city_tax_ido: "",
    name: ""
  });

  const [status, setStatus] = useState({ code: 0, message: "" });

  return (
    <Box label="Register your Institute">
      <div style={{ textAlign: "left" }}>
        {status.code === 0 ? (
          <>
            <div style={{ textAlign: "center" }}>
              <span style={{ lineHeight: "50px", }}>
                Create an institute to create events and sponsor riders
            </span>
            </div>
            <form
              onSubmit={becomeInstituteSubmit}
              style={{ width: "60%", margin: "auto" }}
            >
              <div>
                <TextInput
                  value={institute.name}
                  label="Name"
                  placeholder="Name"
                  onChange={e =>
                    setInstitute({ ...institute, name: e.currentTarget.value })
                  }
                />
              </div>
              <div>
                <TextInput isTopSpaced
                  value={institute.fed_tax_ido}
                  label="Country"
                  placeholder="Country"
                  onChange={e =>
                    setInstitute({
                      ...institute,
                      fed_tax_ido: e.currentTarget.value
                    })
                  }
                />
              </div>
              <div>
                <TextInput isTopSpaced
                  value={institute.subd_tax_ido}
                  label="State"
                  placeholder="State"
                  onChange={e =>
                    setInstitute({
                      ...institute,
                      subd_tax_ido: e.currentTarget.value
                    })
                  }
                />
              </div>
              <div>
                <TextInput isTopSpaced
                  value={institute.city_tax_ido}
                  label="City"
                  placeholder="City"
                  onChange={e =>
                    setInstitute({
                      ...institute,
                      city_tax_ido: e.currentTarget.value
                    })
                  }
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                <Button
                  onClick={() => props.setSwitcher(false)}
                  type="link"
                >
                  Cancel
                </Button>
                <Button
                  htmlType="submit"
                >
                  Send
                </Button>
              </div>
            </form>
          </>
        ) : (
            <div style={{ textAlign: "center" }}>
              <Icon
                type="warning"
                style={{ fontSize: "50px", color: "#d90909", display: "block" }}
              />
              <span
                style={{
                  display: "block",
                  fontSize: "20px",
                  fontWeight: "500",
                  marginTop: "5px"
                }}
              >
                Error!
            </span>
              <span>Failed</span>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button onClick={() => setStatus({ code: 0, message: "" })}>
                  Back
                </Button>
              </div>

            </div>
          )}
      </div>
    </Box >
  );
}
