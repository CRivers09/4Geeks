let adjective = ["shiny", "wet", "red", "wish-granting"];
let noun = [" cat ", " dog ", " child "];
let verb = ["slashed ", "ate ", "stole "];
let noun_object = ["my tires", "my homework", "my keys"];

window.onLoad = ()=>{
    let str = "A " + adjective[Math.floor(Math.random() * adjective.length)] +
              noun[Math.floor(Math.random() * noun.length)] +
              verb[Math.floor(Math.random() * verb.length)] +
              noun_object[Math.floor(Math.random() * noun_object.length)] + ".";
    document.getElementById("excuse").innerHTML = str;
}
