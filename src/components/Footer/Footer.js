import React from 'react'
import { Grid, Rail, Segment } from 'semantic-ui-react'

const Footer = () => (
  <Grid centered columns={3}>
    <Grid.Column>
      <Segment>
        <h1> Company Mission Statement Here </h1>
        <Rail position='left'>
          <Segment>Page Links Here</Segment>
        </Rail>

        <Rail position='right'>
          <Segment>Social Media Links Here</Segment>
        </Rail>
      </Segment>
    </Grid.Column>
  </Grid>
)

export default Footer