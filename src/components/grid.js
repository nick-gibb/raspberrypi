import React from "react";
import { Grid } from "semantic-ui-react";
import Table from "./Table";
import Modal from "./modal";
import Search from "./search";
import { FormattedMessage } from "react-intl";

const MyGrid = () => (
  <Grid>
        <Grid.Row>
    <Grid.Column width={6}>
      <Modal
        text={
          <p>
            <FormattedMessage id="addNew" defaultMessage="Add New" />
          </p>
        }
      />
    </Grid.Column>
    <Grid.Column width={10}>
      <Search style={{ paddingTop: "10px" }} />
    </Grid.Column>
    </Grid.Row>
    <Grid.Row>
    <Grid.Column width={16}>
      <Table />
    </Grid.Column>
    </Grid.Row>

  </Grid>
);

export default MyGrid;
