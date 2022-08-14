const types = {
  ADD_ENTRY: 'ADD_ENTRY',
  DELETE_ENTRY: 'DELETE_ENTRY',
  EDIT_ENTRY: 'EDIT_ENTRY',
  GET_ENTRIES: 'GET_ENTRIES',
  POPULATE_ENTRIES: 'POPULATE_ENTRIES'
};

export default types;

export const addEntryRedux = (payload) => {
  return { type: types.ADD_ENTRY, payload };
};

export const removeEntryRedux = (id) => {
  return { type: types.DELETE_ENTRY, payload: { id } };
};

export const editEntryRedux = (id, entry) => {
  return { type: types.EDIT_ENTRY, payload: { id, entry } };
};

export const getEntriesRedux = () => {
  return { type: types.GET_ENTRIES };
};

export const populateEntriesRedux = (entries) => {
  return { type: types.POPULATE_ENTRIES, payload: entries };
};