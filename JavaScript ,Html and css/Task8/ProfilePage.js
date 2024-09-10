
visitCount=getCookie("Visited")
visitCount++
document.getElementById("display").innerHTML=`<img src=${getCookie("Gender")}>`
document.getElementById("info").innerHTML=` 
Welcome <span style="color:${getCookie("Color")};">${getCookie("UserName")}
</span>
you have visited the site
<span style="color:${getCookie("Color")};">
${visitCount}
</span>
times
`
setCookie("Visited",visitCount,4)