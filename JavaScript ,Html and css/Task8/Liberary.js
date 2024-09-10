//for generic code 
function getCookie(cookieName)
{
    var value;
    const cookies = document.cookie.split('; ');
for(var i=0;i<cookies.length;i++){
key=cookies[i].split("=")[0]
if(key==cookieName)
    value=cookies[i].split("=")[1]

}
return value
}


function setCookie(key,value,expire_date){
if(expire_date){// this will create persistant cookie
var today=new Date()
today.setMonth(today.getMonth()+expire_date)
document.cookie=key+"="+value+";expires="+today

}
else{// this will create session cookie
document.cookie=key+"="+value
}

}

function allCookieList(){
assArr=[]
arr=document.cookie.split("; ")
for(var i=0;i<arr.length;i++){
    key=arr[i].split("=")[0]
    value=arr[i].split("=")[1]
    assArr[key]=value
}
return assArr
}


function deleteCookie(cookieName){
var today=new Date()
today.setMonth(today.getMonth()-10)
document.cookie=key+"=;expires="+today


}


function hasCookie(cookieName){
    const cookies = document.cookie.split('; ');
    for (var i=0;i<arr.length;i++) {
        key=arr[i].split("=")[0]
        if (key === cookieName) {
            return true;
        }
    }
    return false; // Return false if the cookie is not found

}