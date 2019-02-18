//var square = (x) => x*x;

var square = x => x*x;

console.log(square(9));

var user = {
  name: "Rahul",
  sayHi: () => {
    console.log(arguments);
    console.log('Hi');
  },
  sayHiAlt (){
    console.log(arguments);
    console.log("Hi, I am " + this.name);
  }
}

user.sayHi();
user.sayHiAlt(1, 2, 3);
