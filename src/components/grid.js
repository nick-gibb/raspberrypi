import React from 'react'
import { Grid } from 'semantic-ui-react'
import Table from './Table'
import Modal from './modal'
import Search from './search'


const MyGrid = () => (
  <Grid>
    <Grid.Column width={13}>
      <Table />
    </Grid.Column>
    <Grid.Column width={3}>
      <Modal text="Add New" />
      <Search style={{paddingTop:"10px"}}/>
    </Grid.Column>
  </Grid>
)

export default MyGrid