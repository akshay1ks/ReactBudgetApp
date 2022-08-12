export const addEntryRedux = (payload) => {
  return { type: 'ADD_ENTRY', payload };
};

export const removeEntryRedux = (id) => {
  return { type: 'DELETE_ENTRY', payload: { id } }
};

export const editEntryRedux = (id, entry) => {
  return { type: 'EDIT_ENTRY', payload: { id, entry } }
};