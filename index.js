// Declare the initial cats array
let cats = ["Milo", "Otis", "Garfield"];

// Destructive functions

// Appends a cat to the end of the cats array (mutates the original array)
function destructivelyAppendCat(name) {
    cats.push(name);
}

// Prepends a cat to the beginning of the cats array (mutates the original array)
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// Removes the last cat from the cats array (mutates the original array)
function destructivelyRemoveLastCat() {
    cats.pop();
}

// Removes the first cat from the cats array (mutates the original array)
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Non-destructive functions

// Appends a cat to the end of a new array without mutating the original cats array
function appendCat(name) {
    return [...cats, name];  // Uses spread operator to create a new array
}

// Prepends a cat to the beginning of a new array without mutating the original cats array
function prependCat(name) {
    return [name, ...cats];  // Uses spread operator to create a new array
}

// Removes the last cat from a new array without mutating the original cats array
function removeLastCat() {
    return cats.slice(0, cats.length - 1);  // Uses slice to return a new array
}

// Removes the first cat from a new array without mutating the original cats array
function removeFirstCat() {
    return cats.slice(1);  // Uses slice to return a new array starting from index 1
}
