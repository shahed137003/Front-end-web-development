queryString=location.search.replace("?","")
// console.log(queryString)
arrString=queryString.split("&")
// console.log(arrString)

var assArr=[]
for(var i=0;i<arrString.length;i++){
key=arrString[i].split("=")[0]
value=arrString[i].split("=")[1]
assArr[key]=value
}
// console.log(assArr)

document.getElementById("myH").innerText=`Welcome ${assArr["name"]}\n`
document.getElementById("myP").innerText=
`
the user gmail: ${assArr["email"]}\n
the user gender :${assArr["gender"]}\n
the user mobile :${assArr["mobile"]}\n
the user address:${assArr["address"]}\n

`

