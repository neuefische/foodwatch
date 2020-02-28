export function filter(database, filter) {
  const filteredDatabase = database.filter(() => {
    return database.filter === filter;
  });
}
