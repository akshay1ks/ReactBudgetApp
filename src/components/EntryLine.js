import React from 'react';
import { Segment, Grid, Icon } from 'semantic-ui-react';

function EntryLine({ description, value, color }) {
    return(
        <Segment color={color}>
          <Grid columns={3} textAlign='right'>
            <Grid.Column width={10} textAlign='left'>{description}</Grid.Column>
            <Grid.Column width={3} textAlign='right'>${description}</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit'></Icon>
              <Icon name='trash'></Icon>
            </Grid.Column>
          </Grid>
        </Segment>
    )
}

export default EntryLine