document.getElementById("button").addEventListener("click", function(){

let name=document.getElementById("Name");
let email=document.getElementById("Email")

let patName=/^([a-zA-Z]{2,15}\s[a-zA-Z]{1,15}'?-?[a-zA-Z]{2,15}\s?([a-zA-Z]{1,15})?)/
let patEmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

let tName=patName.test(name.value);
let tEmail=patEmail.test(email.value);

if(!tName){
    alert("Enter name correctly")
    return;
}

if(!tEmail){
    alert("Email is in the wrong format")
    return;
}
else{
    confirm("Confirm sending message");
}
});


