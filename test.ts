
// 1. Remove duplicate data from an array

const arr=[2,8,5,6,8,6,4,7,3]
const arrRemoveDuplicate=[... new Set(arr)]
console.log("after removing duplicate number: ",arrRemoveDuplicate)



// 2. FInd Common Elements

const arr1=[2,3,4,5,6]
const arr2=[1,4,6,9,10]
const CommonArray = arr1.filter(value => arr2.includes(value));
console.log("CommonArray is: ",CommonArray)



// 3. Find Union Element

const arr3=[2,3,4,5,6]
const arr4=[1,4,6,9,10]
const AddElements=[...arr3,...arr4]
const UnionElement=[... new Set(AddElements)].sort((a, b)=>{return a- b})
// console.table(UnionElement)
console.log("UnionElement is: ",UnionElement)


// 6. Move all zeros to the end

function Swap(arr){
    let i=0;
    let j=arr.length-1;
    while(j>i){
        if(arr[i]===0){
            let last=arr[j];
            arr[j]=arr[i];
            arr[i]=last;
            j--;

        }else{
            i++ ;
        }
    }
    return;
}

const arr10=[2,0,4,6,0,7]
Swap(arr10)
console.log("Swap array is: ",arr10.sort((a,b)=>{return a-b}))


// 7. Vowel check

const word= 'Anubhab Gupta'
const arrayConv=Array.from(word);
const countVowel=arrayConv.filter(item=>'aeiouAEIOU'.includes(item)).length
console.log("Number of vowels: ",countVowel)



// 8. Find Highest and Lowest number

const arr5=[7,3,1,4,9,10,6,5,2]
const sortArray=arr5.sort((a, b)=>{return a- b})
console.log(`Highest Number: ${sortArray[sortArray.length-1]} and Lowest number: ${sortArray[0]}`)



// 9. Sorting the array ascending and descending

const arr6=[7,3,1,4,9,10,6,5,2]
const ascendingArray=arr6.sort((a, b)=>{return a - b})
console.log("ascendingArray is: ",ascendingArray)

const descendingArray=arr6.sort((a, b)=>{return b - a})
console.log("descendingArray is: ",descendingArray)


// 10. Reverse the sentence

const sentense= 'My Name is Rahul' 
const reverseSentence=sentense.split(" ").reverse().join(" ")
console.log("reverseSentence is: ",reverseSentence)



// 11. FInd Prime number and factorial of any number

const num = [1,2,3,4,5,6,7];
const result=num.filter(item=>{ 

    if(item<2) return false;
    for(let i=2; i<item;i++){
        if(item%i==0){
            return false
        }
    }
return true
})
console.log("Prime NUmber: ",result);

function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num =num * i;
    }
    return num;
  }
 

  console.log( "Factorial is: ",factorialize(5))


  // 5.

  
  let num11=20568924
 let stringChange=num11.toString()
 let arrayChange=Array.from(stringChange)
let test=arrayChange.splice(1,0,'-')
let test2=test.splice(1,0,'-')
 console.log(arrayChange)