import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent } from "@material-ui/core";
import AppBar from "../../../components/AppBar";
import { base } from "../../../config/api";
import FirstTable from "./tables/firstTable";
import qs from "query-string";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function CustomizedTables(props: any) {
  const classes = useStyles();
  const [data, setData] = useState<any>({});

  let parameters = qs.parse(props.location.search);

  useEffect(() => {
    let tempParametersNameObject = {};

    for (let key in parameters) {
      let word = key.substring(0, key.length - 2);
      let letter = key.substring(key.length - 1, key.length);

      tempParametersNameObject[letter] = {
        ...tempParametersNameObject[letter],
        [word]: parameters[word + "_" + letter],
      };
    }

    let tempParametersNameArray: any[] = [];
    for (const key in tempParametersNameObject) {
      tempParametersNameArray.push(tempParametersNameObject[key]);
    }

    base
      .post(`/allRanking`, { events_request: tempParametersNameArray })
      .then((r) => {
        setData(r.data);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <AppBar title="Result" {...props} />
      <Card className={classes.root}>
        <CardContent>{/* <FirstTable data={data} /> */}</CardContent>
      </Card>
    </>
  );
}
