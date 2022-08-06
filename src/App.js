import './App.css';
import React from 'react';
import { Container, Header, Segment, Statistic, Grid, Icon, Form, Button } from 'semantic-ui-react';

function App() {
  return (
    <Container>

        <Header as='h1'>Budget</Header>
        <Statistic size='small'>
          <Statistic.Label>Your Balance</Statistic.Label>
          <Statistic.Value>2,550.53</Statistic.Value>
        </Statistic>

        <Segment textAlign="center">
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Statistic sixe='tiny' color='green'>
                  <Statistic.Label style={{textAlign: 'left'}}>Income:</Statistic.Label>
                  <Statistic.Value>2,550.53</Statistic.Value>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
              <Statistic sixe='tiny' color='red'>
                  <Statistic.Label style={{textAlign: 'left'}}>Expense:</Statistic.Label>
                  <Statistic.Value>623.53</Statistic.Value>
                </Statistic>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Header as='h3'>History</Header>
        <Segment color='red'>
          <Grid columns={3} textAlign='right'>
            <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$10,00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit'></Icon>
              <Icon name='trash'></Icon>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment color='green'>
          <Grid columns={3} textAlign='right'>
            <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$100,00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit'></Icon>
              <Icon name='trash'></Icon>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment color='red'>
          <Grid columns={3} textAlign='right'>
            <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$900,00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit'></Icon>
              <Icon name='trash'></Icon>
            </Grid.Column>
          </Grid>
        </Segment>

        <Header as='h3'>Add new transaction</Header>
        <Form unstackable>
          <Form.Group>
            <Form.Input icon='tags' width={12} label='Description' placeholder="Placeholder text..."/>
            <Form.Input icon='dollar' iconPosition='left' width={4} label='Value' placeholder="Enter amount"/>
          </Form.Group>
          <Button.Group style={{marginTop: 20}}>
            <Button>Cancel</Button>
            <Button.Or />
            <Button primary>Ok</Button>
          </Button.Group>
        </Form>
    </Container>
  );
}

export default App;
