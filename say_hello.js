// this function takes in a name, and says "Hello, <name>! Your name has <n> characters"
// where <n> is the number of characters.
// but it's not working.. :(
// Can you fix it?
function say_hello(name){
    let nameLength = name.length;

    console.log("Hello, " + name + "! Your name has " + 
		nameLength.toString() + " characters");
}


// check all these:
say_hello("colman");
say_hello("amaris");
say_hello("sam");
say_hello("alex")
