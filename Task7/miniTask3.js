
currentId=1
function move(){
    if(currentId<5)
        currentId+=1
        else{
            document.getElementById(`${5}`).src="Resources-20240826T214108Z-001/Resources/marbels/marble1.jpg"
            // document.getElementById(`${5}`).src="Resources-20240826T214108Z-001/Resources/marbels/marble1.jpg"
            currentId=1
        }   

document.getElementById(`${currentId}`).src="Resources-20240826T214108Z-001/Resources/marbels/marble3.jpg"
if(currentId>1)
document.getElementById(`${currentId-1}`).src="Resources-20240826T214108Z-001/Resources/marbels/marble1.jpg"


}

myIntev=setInterval(move,3000)
// Function to stop the interval
function stopInterval() {
    clearInterval(myIntev);
}

// Attach an event listener to all images to stop the interval when clicked
function addClickListeners() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`${i}`).addEventListener('click', stopInterval);
    }
}




// Add click event listeners to all the images to stop the slideshow when clicked
addClickListeners();