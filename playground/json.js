// var obj = {
//   name: 'Ryan'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Ryan", "age": 35}';
// var person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

var originalNoteStr = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteStr);

var noteStr = fs.readFileSync('notes.json');
var note = JSON.parse(noteStr);

console.log(typeof note);
console.log(note);
console.log(note.title);