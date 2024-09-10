var childWindow
function openChild(){
    childWindow=open("childWind.htm","","width=300,height=300")
    setInterval(moveChild,3000)
    }
    

function closeChild(){
    if(childWindow)
        childWindow.close()
    
        

}


function moveChild(){
    if(childWindow && !childWindow.closed){
        childWindow.moveBy(45,45)
        childWindow.focus()
        compare() 
    }


}

// openChild()
function compare(){
    xPosition=childWindow.screenX;
    yPosition=childWindow.screenY;
    const screenWidth = window.innerWidth-300;  // Maximum X position
const screenHeight = window.innerHeight-300;  // Maximum Y position
    childWindow.document.write(`the x position of it ${xPosition} and y position is ${yPosition}  <br>`)
    diffX=screenWidth-xPosition
    diffY=screenHeight-yPosition
    if(diffX<=0&&diffY<=0){
        childWindow.document.write('finished')
        closeChild()
    }
}

