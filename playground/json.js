/*
var obj = {
  name: "Rahul"
};

var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);



var personString ='{"name": "Rahul Saxena", "age": 20}';
var person = JSON.parse(personString);

console.log(typeof personString);
console.log(typeof person);
console.log(person.age);
console.log(person.name);
console.log(personString);
*/



const fs = require('fs');

var originalNote = {
  title : "Some Title",
  body : "Some Body"
}

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);
var noteString = fs.readFileSync("notes.json");

var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
