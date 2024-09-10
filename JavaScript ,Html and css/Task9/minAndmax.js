function getMinMax(...arr){
let minV=arr[0]
let maxV=arr[0]
for(let i=0;i<arr.length;i++){
if(arr[i]<minV)
minV=arr[i]
if(arr[i]>maxV)
maxV=arr[i]
}
return [minV,maxV]
}

let arr=[100,90,80,30,70,20]
let minR;
let maxR;
[minR,maxR]=getMinMax(...arr)
console.log(`the min value in the arr ${minR} the max value in the arr ${maxR}`)