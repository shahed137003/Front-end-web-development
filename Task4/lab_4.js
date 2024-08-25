
function countChar(string_input,char_input,case_sen){
    var counter=0
    if (case_sen)
    {
        string_input = string_input.toLowerCase();
        char_input= char_input.toLowerCase();  
        for (var i=0;i<string_input.length;i++){
    if (char_input==string_input[i])
        counter++;
    
        }
    }
    else{
        for (var i=0;i<string_input.length;i++){
            if (char_input==string_input[i])
                counter++;
                }
    }
    return counter
    
}

console.log("Hello user have a nice day: ")

user_ans=prompt("do you want to ignore the cases in the string: (y/n)")

user_input_string=prompt("Enter certain string: ")

char_user_input=prompt("Enter a certain char: ")
const caseSens = user_ans === 'y';

var num;
num=countChar(user_input_string,char_user_input,caseSens)
console.log(`the number of chars of ${char_user_input} in the string ${user_input_string} is : ${num} `)
///////////////////////////////////////////////////////////////////////////////////////////////
//lab_2


function isPalindrome(input_string, caseSens ){
var result=true;
size=input_string.length
if (caseSens)
    
    input_string = input_string.toLowerCase();

for (var i=0;i<size;i++)
{   if (i==parseInt(size/2))
        i=size
    if (input_string[i]!=input_string[input_string.length-i-1])
        result=false;

}

return result
}

user_ans=prompt("do you want to ignore the cases in the string: (y/n)")

user_input_string=prompt("Enter certain string: ")
const caseSensitive = user_ans === 'y';
var result=isPalindrome(user_input_string,caseSensitive )
console.log(`the string entered is palindrome? ${result}`)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//lab_4:
var RedEp_for_name= /^[a-zA-Z]+$/

do{
    Name=prompt("Enter your name: ")
    
}while(!RedEp_for_name.test(Name));


var RedEp_for_num= /^[0-9]{8}$/

do{
    number=prompt("Enter your number: ")
    
}while(!RedEp_for_num.test(number));

var RedEp_for_phoneNum= /^(010|011|012){1}[0-9]{8}$/

do{
    phoneNumber=prompt("Enter your phone number: ")

}while(!RedEp_for_phoneNum.test(phoneNumber));

var RedEp_for_email= /^[a-zA-Z0-9]+\@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/

do{
        email=prompt("Enter your email: ")
    
    }while(!RedEp_for_email.test(email));

color=prompt("choose the color format: ")

document.write( "<h1 >entering user info</h1><hr>")

document.write(`<span style="color: ${color};"> Welcome dear guest:  </span>`+`${Name} <br>`)

document.write(`<span style="color: ${color};">your telephone number is :</span>`+ `${number}<br>`)

document.write(`<span style="color: ${color};"> your mobile number is :</span>` + `${phoneNumber}<br>`)

document.write(`<span style="color: ${color};"> the email address is :</span>` + `${email}<br>`)
