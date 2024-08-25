//first Task
var arr=Array(3);
console.log(arr.length)
for(var i=0 ;i<arr.length;i++){
    arr[i]=parseInt(prompt("Enter certain value: "));
    
}

document.write("<h1>Adding -- Multiplication -- and Dividing three elements</h1> <hr> ")
sumEx=arr.join("+")
multiplicationEx=arr.join("*")
divingEx=arr.join("/")
sum=0
multi=1

for (var i=0;i<3;i++){
    sum+=arr[i]
    multi*=arr[i]
}
div=arr[0]/arr[1]/arr[2]
document.write(`Sum of 3 values ${sumEx} = ${sum} <br>`)
document.write(`multiplication of 3 values ${multiplicationEx} = ${multi} <br>`)
document.write(`dividing of 3 values ${divingEx} = ${div} <br>`)
///////////////////////////////////////////////////////////////////
var arr1=Array(5);

for(var i=0 ;i<arr1.length;i++){
    arr1[i]=parseInt(prompt("Enter certain value: "));
    
}

arrElements=arr1.join()
///descending order

arr1.sort(function(a,b) {return a-b} )

arrElementsDes=arr1.join()

arr1.sort(function(a,b) {return b-a} )

arrElementsAss=arr1.join()

document.write(`u've entered the value ${arrElements}<br>`)
document.write(`u've values after being sorted descending ${arrElementsDes}<br>`)
document.write(`u've values after being sorted ascending ${arrElementsAss}<br>`)
////////////////////////////////////////////////////////////////////////////////////////
//Math objects: 
function SubmitArea(){
    radius=Number(document.getElementById("radius").value)
var area=radius*2*Math.PI
document.write(`Total area of the circle is ${area}<br>`)
document.write(`
    <input type="checkbox" id="onClicking">
    <label for ="onClicking" >prevent this page from creating additional dialogs</label>
    
    `)
}


function SubmitSquareRoot(){
    values=Number(document.getElementById("values").value)
var sq=Math.sqrt(values)
document.write(`square root is ${sq}<br>`)
document.write(`
    <input type="checkbox" id="onClicking">
    <label for ="onClicking" >prevent this page from creating additional dialogs</label>
    
    `)
}


function SubmitCos(){
    angle=Number(document.getElementById("angle").value)
var cosVal=Math.cos((angle*Math.PI)/180).toFixed(2)
document.write(`cos ${angle} is ${cosVal}<br>`)
document.write(`
    <input type="checkbox" id="onClicking">
    <label for ="onClicking" >prevent this page from creating additional dialogs</label>
    
    `)
}