//q.1

// // let arr = [0,10,20,30,]


// // let max=arr[0]
// // let min=arr[0]


// // for(let i=1; i<=arr.length; i++){
// //     if (max<arr[i]) {
// //         max=arr[i]
        
// //     }
// //     if(min>arr[i]){
// //         min=arr[i]
// //     }
// // }


// // let ayera=[-2,-1,0,1,2]


// let arr1=1234567890
// let ans=0
// let pow=1




// while (arr1>0) {
//     let arrld=arr1%10
   
//     arrld=pow*arrld
//     ans=ans+arrld

//     pow=pow*10
//     arr1=

// }
// console.log(ans);



// let str="arslan is the best boy in ";
// let arr =str.split(" ")

// let maxlen=0
// let ans=""

// for(let i=0; i<arr.length; i++){
//     if (arr[i].length>maxlen) {
//         maxlen=arr[i].length
//         ans=arr[i]
        
        
//     }
    
// // }
// console.log(ans)

// console.log(maxlen);





// function checklongstring(str) {

//     let arr =str.split(" ")


    
// let maxlen=0
// let ans=""

// for(let i=0; i<arr.length; i++){
//     if (arr[i].length>maxlen) {
//         maxlen=arr[i].length
//         ans=arr[i]
        
        
//     }
    
// }
// return ans;

// }

// let rv =checklongstring("arslan is the best boy in")

// console.log(rv);



 

let str="name is arslan name is arslan arslan arslan arslan"

let word=str.split(" ")

let frequency="arslan"
let c=0
let ans= 0;


for (let maal of word) {

    if (maal==frequency) { 
        c++
    }
    
}

console.log(c);


for(let i=0; i<word.length; i++){
    
    if (word[i]==frequency) { 
        ans=i
        break;
    }
    
}
console.log(ans);


