function *fibonacciA(numberOfParams){
    arr=[0,1]
for(var i=0;i<numberOfParams;i++){
    if(i>1)
        arr[i]=arr[i-1]+arr[i-2]
yield arr[i]
}

}

function *fibonacciB(maxValue){
arr=[0,1]
i=0
while(arr[i]<=maxValue)
{
    yield arr[i]
    i++
    if(i>1)
    arr[i]=arr[i-1]+arr[i-2]
}

}
console.log("Displaying the first fib")
var arrFibA=fibonacciA(5)
console.log(arrFibA.next())
console.log(arrFibA.next())
console.log(arrFibA.next())
console.log(arrFibA.next())
console.log(arrFibA.next())
console.log(arrFibA.next())
console.log("Displaying the second fib")
var arrFibB=fibonacciB(9)
console.log(arrFibB.next())
console.log(arrFibB.next())
console.log(arrFibB.next())
console.log(arrFibB.next())
console.log(arrFibB.next())
console.log(arrFibB.next())
console.log(arrFibB.next())
console.log(arrFibB.next())