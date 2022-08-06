import './App.css';
import React from 'react';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import EntryLine from './components/EntryLine';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';

function App() {
  return (
    <Container>

        <MainHeader title='Budget' />
        <DisplayBalance title='Your Balance' value='2,550.53' size='small' />
        
        <DisplayBalances />

        <MainHeader title='History' type='h3'/>
        <EntryLine description="Somthing new" value='1000' color='green' />
        <EntryLine description="Somthing new" value='1000' color='red' />
        <EntryLine description="Somthing new" value='1000' color='green' />

        <MainHeader title='Add new transaction' type='h3'/>
        <NewEntryForm />

    </Container>
  );
}

export default App;
