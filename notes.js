const fs = require('fs');
const data = 'data.json';

var fetchNotes = () => {
  try {
    var notesStr = fs.readFileSync(data);
    return JSON.parse(notesStr);
  } catch (err) {
    return [];
  }
}

var saveNotes = (notes) => fs.writeFileSync(data, JSON.stringify(notes));

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {title, body};
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);

  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);

  return filteredNotes[0];
};

var getAll = () => fetchNotes();

var logNote = (note) => {
  console.log('---');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  removeNote,  
  getNote,
  getAll,
  logNote
};