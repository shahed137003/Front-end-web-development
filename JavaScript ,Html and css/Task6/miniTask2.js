var childWindowTask2;
var message
var i
function openChildTask2(){
    childWindowTask2=open("childWindTask2.htm","","width=300,height=300")
    // Create a container in the child window to show the message
// console.log("creating page")
// childWindowTask2.document.write("Hello")
i=0
childWindowTask2.onload = function() {
    // Ensure the child window's document is ready
    message = childWindowTask2.document.getElementById('typingMessage').textContent;
    // console.log(message.length);
    TypingMessage();
};
}

function closeChildTask2(){
    if(childWindowTask2)
        childWindowTask2.close()
    
        

}



function TypingMessage(){
    
        if (i < message.length) {
            childWindowTask2.document.write(`The ${i + 1}th character of "${message}" is "${message[i]}"<br>`);
            i++; // Increment i here to update the character index
            childWindowTask2.setTimeout(TypingMessage, 3000);
        }
        else{
            parent.setTimeout(closeChildTask2,3000)
    
        }

    
    


}





