var form=document.getElementById('form')
var useremail=document.getElementById('form2Example11')
var password=document.getElementById('form2Example22')

var alluser=JSON.parse(localStorage.getItem('user')) || []

form.addEventListener('submit',function(event){
  event.preventDefault()
  if(alluser.length == 0){
       Swal.fire({
  icon: "error",
  title: "error...",
  text: "no user found",
});
    return;
  }
  else{
  var isExisted=false
for(var i =0 ;i<alluser.length;i++){
     if(alluser[i].email == useremail.value && alluser[i].password == password.value){
        console.log(alluser[i].name)
        isExisted=true
     }
     else{
        console.log('no')
     }

}
if(isExisted == true){
    window.location.href='/midproject/book.html'
}
else{
   Swal.fire({
  icon: "error",
  title: "error...",
  text: "user not allowed",
});
}

  }
  
})