import React from "react";
import { Grid } from "@material-ui/core";
import Category from "../../components/Category";

export default function AddCategory (props) {
    return (
      <Grid container>
        <Category {...props}/>
      </Grid>
    );
}
