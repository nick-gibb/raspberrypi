import Login from "./login";
import React from "react";
import { Grid, Image } from "semantic-ui-react";

const GridExampleVerticallyDivided = () => (
  <Grid divided="vertically">
    <Grid.Row columns={2}>
      <Grid.Column>
        <Login />
      </Grid.Column>
      <Grid.Column>
        <Image src={require("./geology.png")} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridExampleVerticallyDivided;
