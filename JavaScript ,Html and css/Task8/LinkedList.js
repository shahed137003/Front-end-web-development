var ln={
data:[],
pushVal:function(val){
    
    prev=this.data[this.data.length-1]
    if(prev){
        if(val>prev.value)
            this.data.push({value:val})
        else{
            window.alert("this value can not be added")
        }
    }else{
        this.data.push({value:val})
    }
    
},
popVal:function(){
    this.data.pop()
},
unShiftVla:function(val){
    after=this.data[0]
    if(after){
        if(val<after.value)
            this.data.unshift({value:val})
        else{
            window.alert("this value can not be added")
        }
    }
    else{
        this.data.unshift({value:val})
    }
    
},
ShiftVal:function()
{
    this.data.shift()
},
addByVal:
function(val){
    flag=0
    for(var i=0;i<this.data.length;i++){
      if(this.data[i-1]&&this.data[i])
       
            if(this.data[i-1].value<val&&this.data[i].value>val){
                this.data.splice(i, 0, {value:val});
                flag=1
                break
            
        }

    }
    if(flag==0){
        
        window.alert("this value can not be added")
    }



}
,
removeByVal:
function(val){
for(var i=0;i<this.data.length;i++){
if(this.data[i]==val)
    this.data.splice(i, 1);
}
}
}



