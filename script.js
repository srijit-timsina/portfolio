function validation(){
let name=document.querySelector(".c1").value;
let phone=document.querySelector(".c2").value;
let email=document.querySelector(".c3").value;
let message=document.querySelector(".c4").value;
console.log(name);
if (name=="" || phone=="" || email=="" ||message==""){
  alert('You Must fill all the fields.');
  return false;
}else if(phone.length>10 || phone.length<10){
   alert('Enter correct phone number');
   return false;
}
else{
    return true;
}

}