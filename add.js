const fs = require('fs');

var fetchNotes = () => {
  try{
    //Kind of initialising the notes array. So, that the data is not wiped after every entry.
    var noteString = fs.readFileSync("notesData.json");
    return JSON.parse(noteString);
  }
  catch(e){
    return [];
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('notesData.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title: title,
    body: body
  }

  //But, if the notesData.json file doesn't already exists, then it will throw an error.
  //Hence, we will require try catch blocks.


//filter() creates a new array with elements that falls under a given criteria from an existing array.
 var duplicateNotes = notes.filter((note) => {
  return note.title === title;
  //note.title is the title of the entries in the notes array and title is the passed parameter.
});
 if(duplicateNotes.length === 0){
   notes.push(note);
   saveNotes(notes);
   return note;
 }
}

var getAll = () => {
  return fetchNotes();
}

var getNote = (title) => {
  var notes = fetchNotes();
  var specificNote = notes.filter ((note) => note.title === title);
  return specificNote[0];
}

var removeNote = (title) => {
  var notes = fetchNotes();
  var filterNotes = notes.filter((note) => note.title !== title);
  saveNotes(filterNotes);

  return filterNotes.length !== notes.length;
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
