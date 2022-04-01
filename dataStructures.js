// level 2
//first program remove even nos
var a=[1, 3, 4, 6, 7, 8];
removeeven(a)
function removeeven(a){
let ans=[];
for(let i=0;i<a.length;i++){
    if(a[i]%2!==0){
        ans.push(a[i])
    }
}
console.log(ans)
}
//2nd replace vowels into upper case
var s="Elie";
replacevowels(s)
function replacevowels(s){
    ans2=""
for(let i=0;i<s.length;i++){
    if(s[i]==="a" || s[i]==="e"||s[i]==="i"||s[i]==="o"||s[i]=="u"){
      ans2=ans2+s[i].toUpperCase()
      //console.log(ans)
    }
    else{
        ans2=ans2+s[i]
    }
 
}
console.log(ans2)
}
// 3rd program find the maximum nos
var arr=[1, 3, 4, 6, 7, 8, 2, 5]
maximumnos(arr)
function maximumnos(arr){
    let maxno=0;
for(let i=0; i<arr.length; i++){
    if(maxno<arr[i]){
        maxno=arr[i]
    }
}
console.log(maxno)
}