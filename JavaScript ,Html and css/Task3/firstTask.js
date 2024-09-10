text=prompt("Enter certain text  ")

for(i=1;i<=6;i++){

    document.write("<h"+i+">"+text+"<h"+i+"/>");  
}
//the second question
sum=0
do{
    
sum=Number(prompt("Enter certain number "))
if (sum!=0){
    sum+=sum
}

}while(sum<100 && sum!=0);