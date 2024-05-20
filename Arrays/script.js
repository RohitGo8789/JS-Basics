// let marks=[85,97,44,37,76,60];
// let sum = 0;

// for(let i of marks){
//     sum+=i;   
// }
// let avg = sum/marks.length;
// console.log(avg);


let prices=[250,645,300,900,50];
for(let i =0; i < prices.length; i++){
    prices[i]-=0.1*prices[i];
}
console.log(prices);

//array methods
//push() -> add to end
//pop() -> delete from end nd return
//toString() -> convert arrays to string
//(arr1).concat(arr2)
//unshift() -> add to start
//shift() -> delete from start nd return
//slice() -> returns a piece of array
//splice() -> change original array (add,remove,replace)

