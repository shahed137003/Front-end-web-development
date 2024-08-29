

function EnterNumber(num){
document.getElementById("Answer").value+=`${num}`

}
function EnterClear(){
    document.getElementById("Answer").value=""
    
}

function EnterOperator(op){

    document.getElementById("Answer").value+=`${op}`



}
function EnterEqual(){
    let display = document.getElementById("Answer");
            display.value = eval(display.value); // Evaluate the expression


}