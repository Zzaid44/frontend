var form=document.getElementById('form')
var nname=document.getElementById('form3Example1c')
var email=document.getElementById('form3Example3c')
var password=document.getElementById('form3Example4c')
var Repeat=document.getElementById('form3Example4cd')
var alluser=JSON.parse(localStorage.getItem('user')) || []
form.addEventListener('submit',function(event){
    event.preventDefault()
    
    var user={
        usr:nname.value,
        ema:email.value,
        pass:password.value,
        Repea:Repeat.value

    }
    alluser.push(user)
    localStorage.setItem('user',JSON.stringify(alluser))
})


