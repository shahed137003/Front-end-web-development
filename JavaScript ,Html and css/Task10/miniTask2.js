var xhr=new XMLHttpRequest()
var data

xhr.open("GET","rockbands.json")


xhr.onreadystatechange=function(){
if(xhr.readyState==4)
{ if(xhr.status==200)
{   data=JSON.parse(xhr.responseText)
    console.log(data)

        const bandSelect = document.getElementById("bands");
        bandSelect.addEventListener("change", function() {
            const selectedValue = bandSelect.value; // Get the selected value
            // Perform a different action depending on the selected option
            if (selectedValue === "beatles") {
                document.getElementById("Artist").innerHTML=``
                document.getElementById("Artist").name="beatles"
                for(var i=0;i<data["beatles"].length;i++){
                    document.getElementById("Artist").innerHTML+=`<option value=${i+1}>${data["beatles"][i].name}</option>`
                }
                
            } else if (selectedValue === "stones") {
            document.getElementById("Artist").innerHTML=``
            document.getElementById("Artist").name="stones"
                for(var i=0;i<data["stones"].length;i++){
                    document.getElementById("Artist").innerHTML+=`<option value=${i+1}>${data["beatles"][i].name}</option>`
                }
                
            } else if (selectedValue === "genesis") {
                document.getElementById("Artist").innerHTML=``
                document.getElementById("Artist").name="genesis"
            for(var i=0;i<data["genesis"].length;i++){
                    document.getElementById("Artist").innerHTML+=`<option value=${i+1}>${data["beatles"][i].name}</option>`
                }
                
            } else if (selectedValue === "eagles" ) {
            document.getElementById("Artist").innerHTML=``
            document.getElementById("Artist").name="genesis"
                for(var i=0;i<data["eagles"].length;i++){
                    document.getElementById("Artist").innerHTML+=`<option value=${i+1}>${data["beatles"][i].name}</option>`
                }
                const artistSelect = document.getElementById("Artist");
                const selectedValue = artistSelect.value; // Get the selected value
            }
        });
}
}
}



function changeWebsite(bandName,Index){
    //console.log( data[bandName][Index-1].value)
    window.open( data[bandName][Index-1].value,'_blank');


}



    xhr.send()
