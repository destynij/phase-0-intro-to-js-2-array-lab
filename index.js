const cats = ["Milo","Otis","Garfield"];
console.log(cats);
beforeEach(function() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
});
function destructivelyAppendCat(name){
    return name = cats.push("Ralph")
}
function destructivelyPrependCat(name){
    return name = cats.unshift("Bob")
}
function destructivelyRemoveLastCat(name){
    return name = cats.pop("Ralph")
}
function destructivelyRemoveFirstCat(name){
    return name = cats.shift("Bob")
}

beforeEach(function() {
    cats.length = 0;
    cats.push("Milo","Otis","Garfield");
});
function appendCat(name) {
    return name = [...cats, "Broom"]
}

function prependCat(name) {
    return name = ["Arnold", ...cats]
}


beforeEach(function() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield")
});
function removeLastCat(name) {
    return name = cats.slice(0, 2)
}

beforeEach(function() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
});

function removeFirstCat(name) {
    return name = cats.slice(1)
}