const input=document.getElementById("number-input");
const result=document.getElementById("result");
function handleClick(elem){
    const exp=`${input.value}${elem.innerText}`;
    input.value=exp;
    if(['+','-','*','/'].includes(elem.innerText)) return;
    result.value=eval(exp);
}
function reset(){
    input.value="";
    result.value="";
}