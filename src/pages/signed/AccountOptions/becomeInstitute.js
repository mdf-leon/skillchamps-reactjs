import React, { useState } from "react";
import { base } from "../../../config/api";
import { Card, Icon, Button, Row, Col, Form, FormItem, Input } from "antd";
import { useCookies } from "react-cookie";

export default function BecomeInstitute(props) {
  const [cookies] = useCookies("jwt");

  const becomeInstituteSubmit = async e => {
    e.preventDefault();
    let res = await base
      .post("/makeinstitute", institute, {
        headers: { Authorization: `Bearer ${cookies.jwt}` }
      })
      .then(() => {})
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
    <Card size="small" title={"Register your Institute"}>
      <div style={{ textAlign: "center" }}>
        {status.code === 0 ? (
          <>
            <span style={{ lineHeight: "50px" }}>
              Create an institute to create events and sponsor riders
            </span>
            <Form
              onSubmit={becomeInstituteSubmit}
              style={{ width: "60%", margin: "auto" }}
            >
              <Form.Item>
                <Input
                  value={institute.name}
                  addonBefore="Name"
                  onChange={e =>
                    setInstitute({ ...institute, name: e.currentTarget.value })
                  }
                />
              </Form.Item>
              <Form.Item>
                <Input
                  value={institute.fed_tax_ido}
                  addonBefore="Country"
                  onChange={e =>
                    setInstitute({
                      ...institute,
                      fed_tax_ido: e.currentTarget.value
                    })
                  }
                />
              </Form.Item>
              <Form.Item>
                <Input
                  value={institute.subd_tax_ido}
                  addonBefore="State"
                  onChange={e =>
                    setInstitute({
                      ...institute,
                      subd_tax_ido: e.currentTarget.value
                    })
                  }
                />
              </Form.Item>
              <Form.Item>
                <Input
                  value={institute.city_tax_ido}
                  addonBefore="City"
                  onChange={e =>
                    setInstitute({
                      ...institute,
                      city_tax_ido: e.currentTarget.value
                    })
                  }
                />
              </Form.Item>
              <Form.Item>
                <Button
                  onClick={() => props.setSwitcher(false)}
                  type="link"
                  style={{ float: "left" }}
                >
                  Cancel
                </Button>
                <Button
                  type="primary"
                  style={{ float: "right" }}
                  htmlType="submit"
                >
                  Send
                </Button>
              </Form.Item>
            </Form>
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
            <span style={{ display: "block" }}>Failed</span>
            <Button onClick={() => setStatus({ code: 0, message: "" })}>
              Back
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}
