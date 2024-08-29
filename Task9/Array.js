Apiarr=["apple","strawberry","banana","orange","mango"]

isString=Apiarr.every( element => typeof element === "string")
console.log(`is the array contains string elements ${isString}`)
startWithA=Apiarr.some(a => a.startsWith("a"))
console.log(`is the array contains any string start with  a ? ${startWithA}`)
let charsToCheck = ["b", "s"];

// Use some() to check if the string starts with any of the specified characters
let filteredArr =  Apiarr.filter(str => str.startsWith("b") || str.startsWith("s"));

console.log(filteredArr)
newArr=Apiarr.map(a=>`I like ${a}`)

newArr.forEach(element => {
    console.log(element)
});