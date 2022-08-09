import './App.css';
import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';
import { createStore, combineReducers } from 'redux';

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if(!isOpen && entryId){
      const index = entries.findIndex(entry => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isOpen])

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
  }, [entries])

/////////////////////////////////////////////////////////////////
  function entriesReducer(state = initialEntries, action) {
    let newState;
    switch (action.type) {
      case 'ADD_ENTRY':
        newState = state.concat({...action.payload});
        return newState;

      case 'DELETE_ENTRY':
        newState = state.filter(entry => 
          entry.id !== action.payload.id);
        return newState;

      default:
        return state;
    }
  };

  const combinedReducers = combineReducers({
    entries: entriesReducer,
  });
  const store = createStore(combinedReducers);
  store.subscribe(() => {
    console.log('before', store.getState());
  });
  
  const payload_add = {
    id: 5,
    description: "Powerrrrrrr",
    value: 300,
    isExpense: false
  };

  function addEntryRedux(payload){
    return { type: 'ADD_ENTRY', payload };
  }

  function removeEntryRedux(id){
    return { type: 'DELETE_ENTRY', payload: { id } }
  }

  store.dispatch(addEntryRedux(payload_add));
  store.dispatch(removeEntryRedux(2));
////////////////////////////////////////////////////////////////////

  const deleteEntry = id => {
    const result = entries.filter(entry => entry.id !== id);
    setEntries(result);
  }

  const editEntry = id => {
    if(id){
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];
      setEntryId(entry.id)
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  const addEntry = () => {
    const result = entries.concat({id: entries.length+1,
       description,
       value,
       isExpense
      });
    setEntries(result);
    resetEntry();
  }

  function resetEntry() {
    setDescription('');
    setValue('');
    setIsExpense(true);
  }

  return (
    <Container>
        <MainHeader title='Budget' />
        <DisplayBalance title='Your Balance' value={total} size='small' />
        
        <DisplayBalances totalIncome={incomeTotal} totalExpense={expenseTotal}/>

        <MainHeader title='History' type='h3'/>
        <EntryLines 
          entries={entries}
          deleteEntry={deleteEntry}
          editEntry={editEntry}
        />

        <MainHeader title='Add new transaction' type='h3'/>
        <NewEntryForm 
          addEntry={addEntry}
          description={description}
          value={value}
          isExpense={isExpense}
          setDescription={setDescription}
          setValue={setValue}
          setIsExpense={setIsExpense}
        />
        <ModalEdit 
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          addEntry={addEntry}
          description={description}
          value={value}
          isExpense={isExpense}
          setDescription={setDescription}
          setValue={setValue}
          setIsExpense={setIsExpense}
        />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: "Work income",
    value: 300,
    isExpense: false
  },
  {
    id: 2,
    description: "Water bill",
    value: 300,
    isExpense: true
  },
  {
    id: 3,
    description: "Rent",
    value: 300,
    isExpense: true
  },
  {
    id: 4,
    description: "Power Bill",
    value: 300,
    isExpense: true
  },
]
