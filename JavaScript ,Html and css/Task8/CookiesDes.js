
function submit(){
Name=document.getElementById("name").value
setCookie("UserName",Name,4)
Age=document.getElementById("age").value
setCookie("UserAge",Age,4)
const selectElement = document.getElementById("color");
     // Get the selected value
     const selectedValue = selectElement.value;
     // Get the selected option's text
     const selectedText = selectElement.options[selectElement.selectedIndex].text;
Color=document.getElementById("color").value
setCookie("Color",selectedText,4)
//radioButton
// Select the radio button that is checked
const selectedRadio = document.querySelector('input[name="gender"]:checked');
if (selectedRadio) {
    // Get the selected value
    const selectedValue = selectedRadio.value;
    setCookie("Gender",selectedValue,4)
}

times=0
setCookie("Visited",times,4)

}
function GotProfile(){
    submit()
}

