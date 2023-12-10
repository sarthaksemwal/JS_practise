//declaring the array 
const number=[0,2,92,23,45,67]
let i;

//prints the even number
for(i=0;i<number.length;i++){
    if(number[i]%2==0){
        console.log(number[i])
    }
}


console.log("-----------------------")

//prints the biggest element in the array
let max=number[0]; 
for(i=0;i<number.length;i++){
    if(number[i]>max){
        max=number[i];
    }

}
console.log(max)

console.log("---------------------------")

//reverse the array 
for(i=number.length-1;i<=0;i-- ){
    console.log(number[i])
}