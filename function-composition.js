const people = ["Rafa", "Diego", "Dani", "Rod"];
const upperCasePeopleThatStartWithD = people
  .filter((person) => person.startdsWith("D"))
  .map((dperson) => dperson.toUpperCase());
