import React from "react";
import { Grid } from "semantic-ui-react";
import Table from "./Table";
import Modal from "./modal";
import Search from "./search";
import { FormattedMessage } from "react-intl";

const MyGrid = () => (
  <Grid>
    <Grid.Column width={11}>
      <Table />
    </Grid.Column>
    <Grid.Column width={5}>
      <Modal
        text={
          <p>
            <FormattedMessage id="addNew" defaultMessage="Add New" />
          </p>
        }
      />
      <Search style={{ paddingTop: "10px" }} />
    </Grid.Column>
  </Grid>
);

export default MyGrid;
