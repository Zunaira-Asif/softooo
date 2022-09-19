console.log("welcome here");
var vr1,vr2;
vr1=6;
vr2=4;
function myFunction(vr1, vr2) {
var sum= vr1+ vr2;
var sub= vr1 - vr2;
var product= vr1 * vr2;
var div= vr1/ vr2;
console.log("sum of variables",sum);
console.log("subtract of variables",sub);
console.log("Product of variables",product);
console.log("division of variables",div);
  }
 myFunction(vr1,vr2);

 function newfunction( vr1,vr2){
    if(vr1==vr2)
    {
        console.log("values are same ");

    }
    else
   
    {
        console.log("values are not same");
    }
 }
 newfunction(vr1,vr2);
 function equalfucntion( vr1,vr2){
    if(vr1===vr2)
    {
        console.log("values are equal and have same type ");

    }
    else
   
    {
        console.log("values are not equal and not have same type");
    }
 }
equalfucntion( vr1,vr2)
let person={
    name:"Ali",
    age:17,
};
console.log({person});
person.age=21;
let person2=person;
person.age=70;
console.log(person2);
let arr=[4,7,9,3,5,1,0,8];
console.log(arr);
console.log("arr",arr.join("--"));
console.log("arr",arr.reverse());
console.log("arr", arr.sort((a,b)=> a-b))
function arrayfunction(arr)
{
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
          }
        }
      }
      console.log("Sorted array=>", arr);
    
}

arrayfunction(arr);