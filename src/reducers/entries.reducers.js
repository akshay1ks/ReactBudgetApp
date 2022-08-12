const reducer = (state = initialEntries, action) => {
    let newState;
    switch (action.type) {
      case 'ADD_ENTRY':
        newState = state.concat({...action.payload});
        return newState;

      case 'DELETE_ENTRY':
        newState = state.filter(entry => 
          entry.id !== action.payload.id);
        return newState;

      case 'EDIT_ENTRY':
        newState = [...state];
        const index = newState.findIndex(entry => 
          entry.id === action.payload.id);
        newState[index] = {...action.payload.entry};
        return newState;

      default:
        return state;
    }
  };

  export default reducer;

  var initialEntries = [
    {
      id: 1,
      description: "Work income redux",
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