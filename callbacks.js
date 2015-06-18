
function Person(name, age){
  this.name = name;
  this.age  = age;
}

function isValid(person) {
  return (person.name !== undefined);
}


function personGreeter(person, greeter) {
  if (!isValid(person)) {
    return "Cannot greet;  not a person";
  }
  return greeter(person);
}


var standardGreeter = function(person){
  return "Nice to meet you, " + person.name;
}

