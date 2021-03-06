const getField = (obj, path) => {
  const parts = path.split('.');
  if (parts.length === 1) {
    return obj[parts[0]];
  }
  return getField(obj[parts[0]], parts.slice(1).join('.'));
};
const sortAsc = (a, b) => (a > b ? 0 : -1);
const sortDesc = (a, b) => (a > b ? -1 : 0);

export default {
  sortedBooks: (state) => (type, direction) => {
    if (!type) return state.books;
    const sortFunction = direction === 'asc' ? sortAsc : sortDesc;
    return state.books.sort((a, b) => sortFunction(getField(a, type), getField(b, type)));
  },
};
