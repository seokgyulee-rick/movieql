export const people = [
  {
    id: "0",
    name: "Rick Lee",
    age: 27,
    gender: "Male"
  },
  {
    id: "1",
    name: "Dele Reed Gittus",
    age: 13,
    gender: "Male"
  },
  {
    id: "2",
    name: "Rhiann",
    age: 40,
    gender: "FeMale"
  },
  { id: "3", name: "Clint Leahy", age: 27, gender: "Male" },
  { id: "4", name: "Jordan O'brian", age: 23, gender: "Male" },
  { id: "5", name: "Rickily", age: 22, gender: "Male" }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};
