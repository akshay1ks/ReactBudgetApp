import './App.css';
import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';
import { useSelector } from 'react-redux';

function App() {
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState();
  const { isOpen, id } = useSelector(state => state.modals);
  const entries = useSelector(state => state.entries)

  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id);
    setEntry(entries[index]);
  },[isOpen, id])

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    entries.map(entry => {
      if(entry.isExpense) {
        return (totalExpense += Number(entry.value));
      }
      return (totalIncome += Number(entry.value));    
    });
    setTotal(totalIncome - totalExpense);
    setIncomeTotal(totalIncome);
    setExpenseTotal(totalExpense);
  }, [entries]);

  return (
    <Container>
        <MainHeader title='Budget' />
        <DisplayBalance title='Your Balance' value={total} size='small' />
        
        <DisplayBalances totalIncome={incomeTotal} totalExpense={expenseTotal}/>

        <MainHeader title='History' type='h3'/>
        <EntryLines 
          entries={entries}
        />

        <MainHeader title='Add new transaction' type='h3'/>
        <NewEntryForm />
        <ModalEdit 
          isOpen={isOpen}
          {...entry}
        />
    </Container>
  );
}

export default App;

/////////////////////////////////////////////////////////////////
  // function entriesReducer(state = initialEntries, action) {
  //   let newState;
  //   switch (action.type) {
  //     case 'ADD_ENTRY':
  //       newState = state.concat({...action.payload});
  //       return newState;

  //     case 'DELETE_ENTRY':
  //       newState = state.filter(entry => 
  //         entry.id !== action.payload.id);
  //       return newState;

  //     default:
  //       return state;
  //   }
  // };

  // const combinedReducers = combineReducers({
  //   entries: entriesReducer,
  // });
  // const store = createStore(combinedReducers);
  // store.subscribe(() => {
  //   console.log('before', store.getState());
  // });
  
  // const payload_add = {
  //   id: 5,
  //   description: "Powerrrrrrr",
  //   value: 300,
  //   isExpense: false
  // };

  // function addEntryRedux(payload){
  //   return { type: 'ADD_ENTRY', payload };
  // }

  // function removeEntryRedux(id){
  //   return { type: 'DELETE_ENTRY', payload: { id } }
  // }

  // store.dispatch(addEntryRedux(payload_add));
  // store.dispatch(removeEntryRedux(2));
////////////////////////////////////////////////////////////////////

