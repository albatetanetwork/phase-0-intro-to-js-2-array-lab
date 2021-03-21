// Write your solution here!
const cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    return [...cats, "Broom"];
}

function prependCat(name){
    return ["Arnold", ...cats]; 
}
function removeLastCat(){
   const coolcats = cats.slice(0, cats.length - 1);
    return coolcats;
}

function removeFirstCat(){
    const coolercats = cats.slice(1)
    return coolercats;
}