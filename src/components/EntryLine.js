import React, { Fragment } from 'react';
import { Segment, Grid, Icon } from 'semantic-ui-react';

function EntryLine({ id, description, value, isExpense = false, deleteEntry, editEntry }) {
    return(
      <Fragment>
        <Segment color={isExpense ? 'red' : 'green'}>
          <Grid columns={3} textAlign='right'>
            <Grid.Column width={10} textAlign='left'>{description}</Grid.Column>
            <Grid.Column width={3} textAlign='right'>${value}</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered onClick={() => editEntry(id)}></Icon>
              <Icon name='trash' bordered onClick={() => deleteEntry(id)}></Icon>
            </Grid.Column>
          </Grid>
        </Segment>        
      </Fragment>
    )
}

export default EntryLine