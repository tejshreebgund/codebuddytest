// level 2
// print the sum of the first n fibonacci numbers.
var n=6;
console.log(fibonacci(n))
function fibonacci(n){
    let res=[]
    if(n<=0){
        return 0;
    }
    res[0]=0;
    res[1]=1;
    let ans=res[1]; //
    for(let i=2;i<=n;i++){
        res[i]=res[i-1]+res[i-2]
        ans=ans+res[i]
    }
    return ans;
}
