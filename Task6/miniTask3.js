
var childWindowTask3
function openChildTask3(){
    childWindowTask3=open("childWindTask3.htm","","width=300,height=300")
    setInterval(ScrollChildTask3,3000)
    }
    

function closeChildTask3(){
    if(childWindowTask3)
        childWindowTask3.close()
    
        

}

function ScrollChildTask3(){
    if(childWindowTask3 && !childWindowTask3.closed){
        childWindowTask3.scrollBy(10,10,'auto')
        
        checkScroll()
    }


}


 // Function to check if the user has scrolled to the bottom of the page
    function checkScroll() {
    
    const scrollY = childWindowTask3.scrollY;
    // const scrollX = childWindowTask3.scrollX;
// Page scroll boundaries
const doc = childWindowTask3.document.documentElement;
const pageScrollTopMax = doc.scrollHeight - childWindowTask3.innerHeight;
// const pageScrollLeftMax = doc.scrollWidth-childWindowTask3.innerWidth;

  // Do something with the scroll position
// console.log('Scrolled to: (' + scrollY+ ', ' + scrollX + ')');

//     console.log('Scrolled to: (' + pageScrollTopMax+ ', ' + pageScrollLeftMax + ')');

    // const scrollHeight = doc.scrollHeight;
    // const clientHeight = doc.clientHeight;
    
    // if (scrollTop + clientHeight >= scrollHeight) {
    //     // Close the child window when the user reaches the bottom
    //     closeChildTask3()
    // }

    diff=pageScrollTopMax-scrollY
    // console.log(diff)
    if(diff<=0){
        closeChildTask3()
    }
}

// // Add an event listener for the scroll event
// window.addEventListener('scroll', checkScroll);