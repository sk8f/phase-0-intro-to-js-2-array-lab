// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}

function appendCat(name){
    const catsTwo = [...cats, name];
    return catsTwo;
}

function prependCat(name){
    const catsTwo = [name, ...cats];
    return catsTwo;
}

function removeLastCat(name){
    const catsTwo = cats.slice(0, cats.length-1);
    return catsTwo;
}

function removeFirstCat(name){
    const catsTwo = cats.slice(1);
    return catsTwo;
}