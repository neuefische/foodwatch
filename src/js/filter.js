export function filter(database, filter) {
  const filteredDatabase = database.filter(restaurant =>
    restaurant.filter.includes(filter)
  );
  console.log(filteredDatabase);
}
