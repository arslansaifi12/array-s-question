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


let arslan=[10,20,]

for (let maal of arslan) {
    console.log(maal);
}






//  // repeating element in array
// // question 30,40 kaise nikale 
// let repeatingelement=(arr)=>{

//     let notunique=[]

    
// for(let i=0; i<arr.length; i++){
//     let isunique=true;

//     for(let j=i+1; j<arr.length; j++){
//         if (!(arr[i]==arr[j])) {

//             isunique=false       
//         }
//         if (isunique) {

//             notunique[notunique.length]=arr[i]

//             break;

//         }

//       }

//     }
//     return notunique;
// }
// let rv =repeatingelement([10,10,20,20,30,40, 50,50,60,60])
// console.log(rv);





//remove duplicate element in array dry run 

// let arr=[10,10,20,20,30,40, 50,50,60,60]

// let notunique=[];

// for(let i=0; i<arr.length; i++){
//     let isunique=true;
//     for(let j=i+1; j<arr.length; j++){
//         if ((arr[i]==arr[j])) {
//            isunique=false
            
           
//         }
//        if (isunique) {
//         notunique[notunique.length]=arr[i]
//         break;
//        }

//       }

//       }

//       console.log(notunique);
      
      
// // questio return kaise kare dono ko
// let symmetricpairq=(arr)=>{

// let symmetricpair=[];
// let symmetricpair1=[];

// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if (arr[i][0]==arr[j][1] && arr[i][1]==arr[j][0]) {
//             symmetricpair=(arr[i])
//             symmetricpair1=(arr[j])
            
//            console.log(symmetricpair,symmetricpair1);
           
//         }
//     }
// }


// }
// symmetricpairq([[10,20],[20,10],[30,40],[40,30],[50,60],[10,20]])




// let sortedarr=(arr)=>{
    
// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if (arr[i]>arr[j]) {
//             let temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
          
//         }
//     }
// }
// return arr

// }

//  let rv=sortedarr([40,10,30,20])

// console.log(rv);




i=10,20,41
j=5
let temp=j

i=""+j+i
console.log(i);



