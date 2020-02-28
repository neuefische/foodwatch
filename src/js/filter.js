export function filter(database, filter) {
  filter = filter.toLowerCase();
  const filteredDatabase = database.filter(restaurant =>
    restaurant.filter.includes(filter)
  );
  return filteredDatabase;
}
