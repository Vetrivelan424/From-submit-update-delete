
var firstname=document.getElementById("firstname");
var lastname= document.getElementById("lastname");
var form  =   document.getElementById("form1");
var email =   document.getElementById("email");
var phno  =   document.getElementById("phno");

form.addEventListener('submit', e =>{
  e.preventDefault();
  checkInput();
  output();
});
function checkInput(){
      var lastnameValue   =lastname.value.trim();
      var firstnameValue =firstname.value.trim();
      var emailValue=email.value.trim();
      var phnoValue=phno.value.trim();

      var dp1 =document.getElementById("dp1").innerHTML;
      var dp2 =document.getElementById("dp2").innerHTML;
      var dp3 =document.getElementById("dp3").innerHTML;

     if(dp1===''){
      document.getElementById("dp1").innerHTML = firstnameValue+lastnameValue;
     }
    else if(dp2===''){
      document.getElementById("dp2").innerHTML = firstnameValue+lastnameValue;
}
else{
     document.getElementById("dp3").innerHTML  = firstnameValue+lastnameValue;
}
  if(firstnameValue===''){
    setError(firstname,'FirstName is required');
  }
  else{
    setSuccess(firstname);
  }
  if(lastnameValue===''){
    setError(lastname,"LastName is required");
  }
  else{
    setSuccess(lastname);
  }
  if(phnoValue===''){
    setError(phno,"ph-number is required");
  }
  else{
    setSuccess(phno);
  }
  if(emailValue===''){
    setError(email,"Email is reqired");
  }
  else{
    setSuccess(email);
  }
if(firstnameValue!=='' && phnoValue!=='' && lastnameValue!=='' && emailValue!==''){
     // -------The from was succees create div for Vlaue-----------
  const BtnAdd = document.querySelector(".btn");
  const DivContainer = document.getElementById("div-container");

  const DivContainer1 = document.getElementById("div-container1");
  
  const DivContainer2 = document.getElementById("div-container2");

  var divValue = DivContainer.innerHTML;

  var divValue1=DivContainer1.innerHTML;

  var divValue2 =DivContainer2.innerHTML;

  if(divValue===''){
  AddNew();
    function AddNew() {
    const newDiv = document.createElement("div");
    newDiv.id='data';
    newDiv.isContentEditable="true";
    console.log("add");
    newDiv.innerHTML="<b id='div'>Name :</b><span id='fn'>"+ firstnameValue +"</span><span id='ln'>" + lastnameValue + "</span> <br>"+"<br><b> Ph-No :</b><span id='ph'>"+ phnoValue +"</span><br><b><br>E-mail :</b><span id='em'>"+ emailValue + "</span><button id='edit' onclick='edit(this)'>Edit</button> "+"<button id='del' onclick='del()'>delete</button>";
    newDiv.classList.add("div-shadow");
    DivContainer.appendChild(newDiv);
  }
}  

else if(divValue1===''){
  AddNew1();
    function AddNew1() {
    const newDiv = document.createElement("div");
    newDiv.id='data';
    newDiv.isContentEditable="true";
    console.log("add");
    newDiv.innerHTML="<b id='div'>Name :</b><span id='fn1'>"+ firstnameValue +"</span><span id='ln1'>" + lastnameValue + "</span> <br>"+"<br><b> Ph-No :</b><span id='ph1'>"+ phnoValue +"</span><br><b><br>E-mail :</b><span id='em1'>"+ emailValue + "</span><button id='edit' onclick='edit1(this)'>Edit</button> "+"<button id='del1' onclick='del1()'>delete</button>";
    newDiv.classList.add("div-shadow");
    DivContainer1.appendChild(newDiv);
  }
}
else{
    AddNew2();
      function AddNew2() {
      const newDiv = document.createElement("div");
      newDiv.id='data';
      newDiv.isContentEditable="true";
      console.log("add");
      newDiv.innerHTML="<b id='div'>Name :</b><span id='fn2'>"+ firstnameValue +"</span><span id='ln2'>" + lastnameValue + "</span> <br>"+"<br><b> Ph-No :</b><span id='ph2'>"+ phnoValue +"</span><br><b><br>E-mail :</b><span id='em2'>"+ emailValue + "</span><button id='edit' onclick='edit2(this)'>Edit</button> "+"<button id='del2' onclick='del2()'>delete</button>";
      newDiv.classList.add("div-shadow");
      DivContainer2.appendChild(newDiv);
    
  }
}
 AddHidden();
  function AddHidden(){
    const hid=document.createElement("div");
    hid.id="hiddenlow";
    var firstHidden = document.getElementById("firstHidden").value=firstnameValue;
    var lastHidden = document.getElementById("lastHidden").value=lastnameValue;
    var phHidden = document.getElementById("phHidden").value=phnoValue;
    var emailHidden = document.getElementById("emailHidden").value=emailValue;
    hiddenup.appendChild(hid);
  }
  const inputs = document.querySelectorAll('#firstname, #lastname,#email,#phno');
  inputs.forEach(input => {
    input.value = '';
  });
}
}
function setError(input,message){
const formContro=input.parentElement;
const small=formContro.querySelector('small');
formContro.className='form-contro error';
small.innerText= message;
}
function setSuccess(input){
  const formContro=input.parentElement;
  formContro.className='form-contro success';
}



function output(){
var Name=document.getElementById("firstname").value;
var Name1=document.getElementById("lastname").value;
  var ph=document.getElementById("phno").value;
var email=document.getElementById("email").value;

document.getElementById("Name").innerHTML=Name+Name1;
document.getElementById("phone").innerHTML=ph;
document.getElementById("email2").innerHTML=email;
}
function edit(input){
     let name1 = document.getElementById("fn").innerHTML
     let name2 = document.getElementById("ln").innerHTML
     let name3 = document.getElementById("ph").innerHTML
     let name4 = document.getElementById("em").innerHTML 
 var data = document.getElementById("div-container");
  firstname.value=name1;
  lastname.value=name2;
  phno.value=name3;
  email.value=name4;
  $("#btngo").show();

  $("#btngo1").hide();

  $("#btngo2").hide();
  

  $("#btngo").click(function(){
    firstgo();
     function firstgo(){
   f = firstname.value;
   l = lastname.value;
   p = phno.value;
   e = email.value;

    document.getElementById("fn").innerHTML = f ;
    document.getElementById("ln").innerHTML = l ;
    document.getElementById("ph").innerHTML = p;
    document.getElementById("em").innerHTML = e;          

     }

  })

}
function edit1(input){
  let name1 = document.getElementById("fn1").innerHTML
  let name2 = document.getElementById("ln1").innerHTML
  let name3 = document.getElementById("ph1").innerHTML
  let name4 = document.getElementById("em1").innerHTML 
var data = document.getElementById("div-container");
firstname.value=name1;
lastname.value=name2;
phno.value=name3;
email.value=name4;

$("#btngo").hide();


$("#btngo1").show();

$("#btngo2").hide();

$("#btngo1").click(function(){
  firstgo2();
   function firstgo2(){
 f = firstname.value;
 l = lastname.value;
 p = phno.value;
 e = email.value;

  document.getElementById("fn1").innerHTML = f ;
  document.getElementById("ln1").innerHTML = l ;
  document.getElementById("ph1").innerHTML = p;
  document.getElementById("em1").innerHTML = e;          
   }
})
}
function edit2(input){
  let name1 = document.getElementById("fn2").innerHTML
  let name2 = document.getElementById("ln2").innerHTML
  let name3 = document.getElementById("ph2").innerHTML
  let name4 = document.getElementById("em2").innerHTML 
var data = document.getElementById("div-container");
firstname.value=name1;
lastname.value=name2;
phno.value=name3;
email.value=name4;
$("#btngo").hide();

$("#btngo1").hide();

$("#btngo2").show();

$("#btngo2").click(function(){
  firstgo3();
   function firstgo3(){
 f = firstname.value;
 l = lastname.value;
 p = phno.value;
 e = email.value;
  document.getElementById("fn2").innerHTML = f ;
  document.getElementById("ln2").innerHTML = l ;
  document.getElementById("ph2").innerHTML = p;
  document.getElementById("em2").innerHTML = e;          
   }
})
}
// ///////////////////GO  ------------------
$(document).ready(function(){
$("#dp1").click(function(){
    $("#div-container1").hide(1000);
    $("#div-container2").hide(1000);
    $("#div-container").show(1000);
})
$("#dp2").click(function(){
  $("#div-container").hide(1000);
  $("#div-container2").hide(1000);
  $("#div-container1").show(1000);

})
$("#dp3").click(function(){
  $("#div-container1").hide(1000);
  $("#div-container").hide(1000);
  $("#div-container2").show(1000);

})

$("#dp").click(function(){
  $("#div-container").show(1000);
  $("#div-container1").show(2000);
  
  $("#div-container2").show(3000);
   
})

});

function del(){
document.getElementById("div-container").remove();
document.getElementById("dp1").remove();

}
function del1(){
  document.getElementById("div-container1").remove();
  document.getElementById("dp2").remove();
  }
  function del2(){
    document.getElementById("div-container2").remove();
    document.getElementById("dp3").remove();
    }

