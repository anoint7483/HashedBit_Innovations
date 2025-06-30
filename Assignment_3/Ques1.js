// Remove state names starting with vowels

const states = ["Uttar Pradesh", "Andhra Pradesh", "Odisha", "Maharashtra", "Assam", "Kerala"];
const filteredStates = states.filter(state => !["A", "E", "I", "O", "U"].includes(state[0].toUpperCase()));
console.log(filteredStates);
