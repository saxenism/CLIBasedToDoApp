const add = require(__dirname + '/add.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


const argv = yargs
   .command("add", "Add a new note", {
     title: {
       describe: "Title of note to be added",
       demand: true,
       alias: "t"
     }, body: {
       describe: "Body of the new note",
       demand: true,
       alias: "b"
     }
   })
   .command("list", "List all the notes.")
   .command("read", "Read a Note.", {
     title:{
       describe: "Read a specifc note.",
       demand: true,
       alias: 't'
     }
   })
   .command("remove", "Remove a Note.", {
     title:{
       describe:"Remove a specific note.",
       demand: true,
       alias:"t"
     }
   })
   .help()
   .argv;
var command = process.argv[2];

if(command === 'add'){
  var note = add.addNote(argv.title, argv.body);
  if(typeof note === "undefined"){
    console.log("Use any other title. \n");
  }
  else{
    console.log("Note successfully logged :)\n");
    console.log("\nYour note title is:\t " + note.title);
    console.log("\nYour note body is:\t " + note.body);

  }
}
else if(command === 'list' || command === 'List'){
var allNotes = add.getAll();
console.log("Printing " + allNotes.length + " note(s)");
allNotes.forEach((note) => {
  console.log("TITLE: \t");
  console.log(JSON.stringify(note.title));
  console.log("BODY: \t");
  console.log(JSON.stringify(note.body));
})
}
else if(command === "read"){
  var isRead = add.getNote(argv.title);
  if(typeof isRead === "undefined"){
    console.log("No such record exists\n")
  }else{
    console.log("Message found....\nThe message is: \n");
    console.log(JSON.stringify(isRead.body));
  }
}
else if(command === "remove"){
  var ifRemove = add.removeNote(argv.title);
  var message = ifRemove ? "The specified note was removed.\n" : "No such note was removed.\n";
  console.log(message);
}
else{
  console.log("Invalid Command");
}
