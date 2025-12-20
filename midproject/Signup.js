var form=document.getElementById('form')
var username=document.getElementById('form3Example1c')
var useremail=document.getElementById('form3Example3c')
var password=document.getElementById('form3Example4c')
var repeat=document.getElementById('form3Example4cd')
var alluser=JSON.parse(localStorage.getItem('user')) || []
form.addEventListener('submit',function(event){
    event.preventDefault()
    
    var user={
        name:username.value,
        email:useremail.value,
        password:password.value,
        repeat:repeat.value

    }
    alluser.push(user)

    // if(password.value.length < 8)
    // {
    //     alert('password 8 at least')
    // return
    // }
    // if(password.value !== repeat.value){
    // alert('passwored not match')
    // return
    // }

    localStorage.setItem('user',JSON.stringify(alluser))
     window.location.href='/midproject/book.html'

})