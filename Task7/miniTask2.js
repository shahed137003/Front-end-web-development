
let fileName = document.getElementById("img1").src.split('/').pop(); // Extracts "1.jpg"
currentPhoto =parseInt(fileName[0]) 


function nextMove(){
if (currentPhoto<6)
    currentPhoto+=1
document.getElementById("img1").src=`Resources-20240826T214108Z-001/Resources/SlideShow/${currentPhoto}.jpg`

}
function sliding(){
    if (currentPhoto<6)
        currentPhoto+=1
    else
    currentPhoto=1
    document.getElementById("img1").src=`Resources-20240826T214108Z-001/Resources/SlideShow/${currentPhoto}.jpg`
    
    }
    var myInterval
function slidShow(){

    myInterval=setInterval(sliding,3000)


}


function stop(){
clearInterval(myInterval)

}


function previous(){

if (currentPhoto>1)
    currentPhoto-=1
document.getElementById("img1").src=`Resources-20240826T214108Z-001/Resources/SlideShow/${currentPhoto}.jpg`


}