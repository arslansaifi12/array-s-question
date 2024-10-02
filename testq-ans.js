// //q.{1} Write a function to remove duplicates from an array of integers.


// let duplicateinteger=(arr)=>{
// let duplicate=[]

// for(let i=0;i<arr.length; i++){
//     let isunique=false;
//     for(let j=i+1; j<arr.length; j++){

//         if (arr[i]==arr[j]) {
//             isunique=true;
            
//         }

//         if (isunique) {
//             duplicate[duplicate.length]=arr[i]
//            break;
//         }

//     }
// }
// return duplicate;
// }

// console.log(duplicateinteger([5, 3, 6, 3, 2, 5, 8, 2]));





//Q{2} Write a function to find the second largest number in an array.

// let arr=[ 40,20,8,9,50,30,45,30];

// let max=arr[0]
// let secondmax=arr[0];

// for(let i=0; i<arr.length; i++){
//         if (max<arr[i]) {
//             secondmax=max
//             max=arr[i]
            
//         }

//         if (secondmax<arr[i] && arr[i] !== max) {
            
//             secondmax=arr[i]
            
            
            
//         }
     
        
//     }
// // console.log(max);

// console.log(secondmax);





// //Q.{3}-Write a function to merge two arrays and return a sorted array without duplicates.

// let arr1=[5,3,6,2]
// let arr2=[3,9,1,6]

// let onearr=arr1.concat(arr2)

//  for(let i=0; i<onearr.length; i++){
//     for (let j=i+1; j<onearr.length; j++){

//         if (onearr[i]>onearr[j]) {
//             let temp=onearr[i]
//             onearr[i]=onearr[j]
//             onearr[j]=temp
            
//         }

//     }
    
//  }

// let removeduplicate1=[]
//  for(let i=0; i<onearr.length; i++){
//     let isunique=true;
//     for(let j=i+1; j<onearr.length; j++){
//         if (onearr[i]==onearr[j]) {
//             isunique=false;
//             break;
            
//         }
//     }
//         if(isunique){
//             removeduplicate1[removeduplicate1.length]=onearr[i]
            
//         }
        
//  }
 
//  console.log(removeduplicate1);
 


// Q{4}.Write a function to rotate an array by k positions.
// let arr=[1,2,3,4,5]
// let end=arr.length-1
// let endvalue=[]

// for(let i=end; i>2; i--){

//   endvalue[endvalue.length]=arr[i]
 
    
// }

// console.log(endvalue);


// let exchange=endvalue.concat(arr)
// console.log(exchange);


//Q{5}.Write a function to reverse a string without using built-in functions.

// let str="my name is arslan"
// let arr=str.split(" ")
// console.log(arr);
// let end=arr.length-1

// for (let i=end; i>=0; i--){
//     console.log(arr[i]);
    
// }


//Q{6}.Write a function to count the occurrences of each character in a string.

// let str="my name is arslan"
// let arr=str.split("")
// let ans=""
// let end=arr.length-1

// for (let i=end; i>=0; i--){
//     ans=ans+arr[i]
   
    
// }
// console.log(ans);





let str="level"
let arr=str.split("")

console.log(arr);


for (let i=0; i<arr.length; i++){
   
   console.log(arr[i]);
   
    
}

