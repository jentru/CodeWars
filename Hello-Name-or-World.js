//Description
// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

function hello(name) {
  if (name == undefined || name.length == 0){
    return 'Hello, World!';
  } else {
    name = name.split('').map((el,i) => i==0? el.toUpperCase() : el.toLowerCase()).join('');
    return `Hello, ${name}!`
  }
}