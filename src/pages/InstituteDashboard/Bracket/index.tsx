import React, { useEffect, useState } from "react";
import AppBar from "components/AppBar";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import {
  Container,
  BracketsDiv,
  SelectBracketDiv,
  Divider,
  Connector,
} from "./styles";
import { base } from "config/api";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
  mainDiv: {},
  card: {
    margin: "18px 8px 18px 8px",
  },
  options: {
    cursor: "pointer",
  },
  avatar: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Brackets(props) {
  const classes = useStyles();
  const [selectBracket, setSelectBracket] = useState<any>("0");
  // const [dataTrial, setDataTrial] = useState<any[]>([]);
  const [bracketData, setBrecketData] = useState<any>();

  const { trial_id } = useParams();

  useEffect(() => {
    base.get(`/trial/${trial_id}/getBrackets`).then((res) => {
      setBrecketData(res.data);
      console.log(res.data);
    });
  }, [trial_id]);

  return (
    <div style={{ height: "100%" }}>
      <AppBar title="Scoring for a rider" isManager {...props} />
      <Container>
        <SelectBracketDiv>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Round
            </InputLabel>
            <Select
              name="trial_id"
              label="Round"
              labelId="Round"
              id="Round"
              value={selectBracket}
              onChange={(e) => setSelectBracket(e.target.value)}
            >
              {Object.keys(bracketData?.tournament || {}).map((content) => (
                <MenuItem value={content}>Round {Number(content) + 1}</MenuItem>
              )) || <MenuItem value="0">0</MenuItem>}
            </Select>
          </FormControl>
        </SelectBracketDiv>

        {bracketData &&
          Object.keys(bracketData?.tournament[selectBracket]).map(
            (content) =>
              !bracketData?.tournament[selectBracket][content].winner && (
                <BracketsDiv
                  win={bracketData?.tournament[selectBracket][content].winner}
                  key={`position-${content}`}
                >
                  <div className="riders">
                    <div className="bracket">
                      <div className="d-flex">
                        <Typography
                          component={"span"}
                          style={{ margin: 0 }}
                          gutterBottom
                          variant="h6"
                          color="textSecondary"
                        >
                          {
                            bracketData?.tournament[selectBracket][content]
                              .rider1.id
                          }
                          .&nbsp;
                        </Typography>
                        <Typography
                          component={"span"}
                          gutterBottom
                          variant="h6"
                          style={{ margin: 0 }}
                        >
                          {
                            bracketData?.tournament[selectBracket][content]
                              .rider1.name
                          }
                        </Typography>
                      </div>
                      <div className="d-flex" style={{ alignItems: "center" }}>
                        <Typography
                          component={"span"}
                          style={{ margin: 0 }}
                          gutterBottom
                          variant="body2"
                          color="textSecondary"
                        >
                          {
                            bracketData?.tournament[selectBracket][content]
                              .rider2.category
                          }
                        </Typography>
                        <Typography
                          component={"span"}
                          style={{ margin: 0 }}
                          gutterBottom
                          variant="body2"
                          color="textSecondary"
                        >
                          &nbsp;-&nbsp;
                        </Typography>
                        <Typography
                          component={"span"}
                          style={{ margin: 0 }}
                          gutterBottom
                          variant="body2"
                          color="textSecondary"
                        >
                          {
                            bracketData?.tournament[selectBracket][content]
                              .rider2.category2
                          }
                        </Typography>
                      </div>
                    </div>
                    <div className="bracket">
                      <div className="d-flex">
                        <Typography
                          component={"span"}
                          style={{ margin: 0 }}
                          gutterBottom
                          variant="h6"
                          color="textSecondary"
                        >
                          {
                            bracketData?.tournament[selectBracket][content]
                              .rider2.id
                          }
                          .&nbsp;
                        </Typography>
                        <Typography
                          component={"span"}
                          gutterBottom
                          variant="h6"
                        >
                          {
                            bracketData?.tournament[selectBracket][content]
                              .rider2.name
                          }
                        </Typography>
                      </div>
                      <div className="d-flex" style={{ alignItems: "center" }}>
                        <Typography
                          component={"span"}
                          style={{ margin: 0 }}
                          gutterBottom
                          variant="body2"
                          color="textSecondary"
                        >
                          {
                            bracketData?.tournament[selectBracket][content]
                              .rider2.category
                          }
                        </Typography>
                        <Typography
                          component={"span"}
                          style={{ margin: 0 }}
                          gutterBottom
                          variant="body2"
                          color="textSecondary"
                        >
                          &nbsp;-&nbsp;
                        </Typography>
                        <Typography
                          component={"span"}
                          style={{ margin: 0 }}
                          gutterBottom
                          variant="body2"
                          color="textSecondary"
                        >
                          {
                            bracketData?.tournament[selectBracket][content]
                              .rider2.category2
                          }
                        </Typography>
                      </div>
                    </div>
                  </div>
                  <Connector>
                    <div />
                    <div />
                  </Connector>
                  <div className="winner">
                    <div className="bracket">
                      {bracketData?.tournament[selectBracket][content]
                        .winner === 0 ? (
                        <Typography
                          component={"span"}
                          gutterBottom
                          variant="h6"
                        >
                          There is no winner yet
                        </Typography>
                      ) : (
                        <div>
                          <div className="d-flex ">
                            <Typography
                              component={"span"}
                              style={{ margin: 0 }}
                              gutterBottom
                              variant="h6"
                              color="textSecondary"
                            >
                              {
                                bracketData?.tournament[selectBracket][content]
                                  .winner?.id
                              }
                              .&nbsp;
                            </Typography>
                            <Typography
                              component={"span"}
                              gutterBottom
                              variant="h6"
                            >
                              {
                                bracketData?.tournament[selectBracket][content]
                                  .winner?.name
                              }
                            </Typography>
                          </div>
                          <div
                            className="d-flex"
                            style={{ alignItems: "center" }}
                          >
                            <Typography
                              component={"span"}
                              style={{ margin: 0 }}
                              gutterBottom
                              variant="body2"
                              color="textSecondary"
                            >
                              {
                                bracketData?.tournament[selectBracket][content]
                                  .rider2.category
                              }
                            </Typography>
                            <Typography
                              component={"span"}
                              style={{ margin: 0 }}
                              gutterBottom
                              variant="body2"
                              color="textSecondary"
                            >
                              &nbsp;-&nbsp;
                            </Typography>
                            <Typography
                              component={"span"}
                              style={{ margin: 0 }}
                              gutterBottom
                              variant="body2"
                              color="textSecondary"
                            >
                              {
                                bracketData?.tournament[selectBracket][content]
                                  .rider2.category2
                              }
                            </Typography>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </BracketsDiv>
              )
          )}
        {bracketData ? (
          <Divider>
            <div className="titleDiv">
              <i>&#10038;</i>
              <h1>Already played</h1>
              <i>&#10038;</i>
            </div>
            <div className="divider" />
          </Divider>
        ) : null}

        {bracketData &&
          Object.keys(bracketData?.tournament[selectBracket]).map((content) =>
            bracketData?.tournament[selectBracket][content].winner ? (
              <BracketsDiv
                winner
                win={bracketData?.tournament[selectBracket][content].winner}
                key={`position-${content}`}
              >
                <div className="riders">
                  <div
                    className="bracket"
                    style={{
                      borderLeft:
                        bracketData?.tournament[selectBracket][content].winner
                          .id ===
                        bracketData?.tournament[selectBracket][content].rider1
                          .id
                          ? "5px solid #2ECC40"
                          : "5px solid #0000006e",
                    }}
                  >
                    <div className="d-flex">
                      <Typography
                        component={"span"}
                        style={{ margin: 0 }}
                        gutterBottom
                        variant="h6"
                        color="textSecondary"
                      >
                        {
                          bracketData?.tournament[selectBracket][content].rider1
                            .id
                        }
                        .&nbsp;
                      </Typography>
                      <Typography
                        component={"span"}
                        style={{
                          margin: 0,
                        }}
                        gutterBottom
                        variant="h6"
                      >
                        {
                          bracketData?.tournament[selectBracket][content].rider1
                            .name
                        }
                      </Typography>
                    </div>
                    <div className="d-flex" style={{ alignItems: "center" }}>
                      <Typography
                        component={"span"}
                        style={{ margin: 0 }}
                        gutterBottom
                        variant="body2"
                        color="textSecondary"
                      >
                        {
                          bracketData?.tournament[selectBracket][content].rider2
                            .category
                        }
                      </Typography>
                      <Typography
                        component={"span"}
                        style={{ margin: 0 }}
                        gutterBottom
                        variant="body2"
                        color="textSecondary"
                      >
                        &nbsp;-&nbsp;
                      </Typography>
                      <Typography
                        component={"span"}
                        style={{ margin: 0 }}
                        gutterBottom
                        variant="body2"
                        color="textSecondary"
                      >
                        {
                          bracketData?.tournament[selectBracket][content].rider2
                            .category2
                        }
                      </Typography>
                    </div>
                  </div>
                  <div
                    className="bracket"
                    style={{
                      borderLeft:
                        bracketData?.tournament[selectBracket][content].winner
                          .id ===
                        bracketData?.tournament[selectBracket][content].rider2
                          .id
                          ? "5px solid #2ECC40"
                          : "5px solid #0000006e",
                    }}
                  >
                    <div className="d-flex">
                      <Typography
                        component={"span"}
                        style={{ margin: 0 }}
                        gutterBottom
                        variant="h6"
                        color="textSecondary"
                      >
                        {
                          bracketData?.tournament[selectBracket][content].rider2
                            .id
                        }
                        .&nbsp;
                      </Typography>
                      <Typography
                        component={"span"}
                        style={{
                          margin: 0,
                        }}
                        gutterBottom
                        variant="h6"
                      >
                        {
                          bracketData?.tournament[selectBracket][content].rider2
                            .name
                        }
                      </Typography>
                    </div>
                    <div className="d-flex" style={{ alignItems: "center" }}>
                      <Typography
                        component={"span"}
                        style={{ margin: 0 }}
                        gutterBottom
                        variant="body2"
                        color="textSecondary"
                      >
                        {
                          bracketData?.tournament[selectBracket][content].rider2
                            .category
                        }
                      </Typography>
                      <Typography
                        component={"span"}
                        style={{ margin: 0 }}
                        gutterBottom
                        variant="body2"
                        color="textSecondary"
                      >
                        <Typography
                          component={"span"}
                          style={{ margin: 0 }}
                          gutterBottom
                          variant="body2"
                          color="textSecondary"
                        >
                          &nbsp;-&nbsp;
                        </Typography>
                      </Typography>
                      <Typography
                        component={"span"}
                        style={{ margin: 0 }}
                        gutterBottom
                        variant="body2"
                        color="textSecondary"
                      >
                        {
                          bracketData?.tournament[selectBracket][content].rider2
                            .category2
                        }
                      </Typography>
                    </div>
                  </div>
                </div>
                <Connector winner>
                  <div />
                  <div />
                </Connector>
                <div className="winner">
                  <div
                    className="bracket"
                    style={{
                      borderLeft:
                        bracketData?.tournament[selectBracket][content]
                          .winner !== 0
                          ? "5px solid #2ECC40"
                          : "5px solid #0000006e",
                    }}
                  >
                    {bracketData?.tournament[selectBracket][content].winner ===
                    0 ? (
                      <Typography component={"span"} gutterBottom variant="h6">
                        There is no winner yet
                      </Typography>
                    ) : (
                      <div>
                        <div className="d-flex ">
                          <Typography
                            component={"span"}
                            style={{ margin: 0 }}
                            gutterBottom
                            variant="h6"
                            color="textSecondary"
                          >
                            {
                              bracketData?.tournament[selectBracket][content]
                                .winner.id
                            }
                            .&nbsp;
                          </Typography>
                          <Typography
                            component={"span"}
                            style={{
                              margin: 0,
                            }}
                            gutterBottom
                            variant="h6"
                          >
                            {
                              bracketData?.tournament[selectBracket][content]
                                .winner.name
                            }
                          </Typography>
                        </div>
                        <div
                          className="d-flex"
                          style={{ alignItems: "center" }}
                        >
                          <Typography
                            component={"span"}
                            style={{ margin: 0 }}
                            gutterBottom
                            variant="body2"
                            color="textSecondary"
                          >
                            {
                              bracketData?.tournament[selectBracket][content]
                                .rider2.category
                            }
                          </Typography>
                          <Typography
                            component={"span"}
                            style={{ margin: 0 }}
                            gutterBottom
                            variant="body2"
                            color="textSecondary"
                          >
                            <Typography
                              component={"span"}
                              style={{ margin: 0 }}
                              gutterBottom
                              variant="body2"
                              color="textSecondary"
                            >
                              &nbsp;-&nbsp;
                            </Typography>
                          </Typography>
                          <Typography
                            component={"span"}
                            style={{ margin: 0 }}
                            gutterBottom
                            variant="body2"
                            color="textSecondary"
                          >
                            {
                              bracketData?.tournament[selectBracket][content]
                                .rider2.category2
                            }
                          </Typography>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </BracketsDiv>
            ) : null
          )}
      </Container>
    </div>
  );
}
