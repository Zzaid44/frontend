// function checkis4(){
// var input=document.getElementById('checkvlue').value
// if(parseInt(input)===4){
//     alert("number is equal 4")
// }
// else{
//     alert("number is not equal 4")
// }
// }

// //cal

// function calc(){
//     var number1=parseInt(document.getElementById("num1").value)
//         var number2=parseInt(document.getElementById("num2").value)
//             var opr=document.getElementById("op").value
//                 var result;

// if(opr == '+'){
//     result=number1+number2;
// }
// else if(opr == '-'){
//     result=number1-number2;
// }
// else{
//     result='undefinde'
// }
// document.getElementById('result').innerHTML='result is ='+result;
//             }
var body=document.getElementById('tbady')
var button=document.getElementById('but1')
var heder=document.getElementById('hed1')
function chang(){
    if(body.style.backgroundColor=='white'){
        body.style.backgroundColor='black'
        button.innerHTML='change to white'
        hed1.style.color='white'
        button.style.backgroundColor='white'
        button.style.color='black'
}
else{
   body.style.backgroundColor='white'
    button.innerHTML='change to black'
     hed1.style.color='black'
     button.style.backgroundColor='black'
      button.style.color='white'
}

}
var data={
    name:'ali',
    age:20
}
console.log(data['name'])
console.log(data['age'])
localStorage.setItem('name','zaid')
localStorage.setItem('major','se')