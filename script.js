console.log("hello");

let Fname = document.getElementById("Fname");
let Lname = document.getElementById("Lname");
let phone = document.getElementById("phone");
let Class = document.getElementById("Class");
let subject = document.getElementById("subjects");
let email = document.getElementById("email");
let Comment = document.getElementById("Comment");


// for First Name validation
Fname.addEventListener('blur', ()=>{

    let regex = /^([a-zA-Z]){2}/
    let str = Fname.value;
    if (regex.test(str)){
        
        Fname.classList.add('is-valid')
        Fname.classList.remove('is-invalid')
    }
    else {
        
        Fname.classList.add('is-invalid')
        Fname.classList.remove('is-valid')
    }
})

// for Last Name validation
Lname.addEventListener('blur', ()=>{
    
    let regex = /^([a-zA-Z]){2}/
    let str = Lname.value;
    if (regex.test(str)){
        
        Lname.classList.add('is-valid')
        Lname.classList.remove('is-invalid')
    }
    else {
        
        Lname.classList.add('is-invalid')
        Lname.classList.remove('is-valid')
    }
})

// for phone validation
phone.addEventListener('blur', ()=>{
    
    let regex = /^([0-9]){10}$/
    let str = phone.value;
    if (regex.test(str)){
        
        phone.classList.add('is-valid')
        phone.classList.remove('is-invalid')
    }
    else {
        
        phone.classList.add('is-invalid')
        phone.classList.remove('is-valid')
    }
})

// for Class validation
Class.addEventListener('blur', ()=>{
    
    let regex = /^([\w_.-\s])*$/
    let str = Class.value;
    if (regex.test(str)){
        
        Class.classList.add('is-valid')
        Class.classList.remove('is-invalid')
    }
    else {
        
        Class.classList.add('is-invalid')
        Class.classList.remove('is-valid')
    }
})

// for subject validation
subject.addEventListener('blur', ()=>{
    
    let regex = /^([\w_.-\s])*$/
    let str = subject.value;
    if (regex.test(str)){
        
        subject.classList.add('is-valid')
        subject.classList.remove('is-invalid')
    }
    else {
        
        subject.classList.add('is-invalid')
        subject.classList.remove('is-valid')
    }
})

// for email validation
email.addEventListener('blur', ()=>{
    
    let regex = /([a-zA-Z0-9+_\.\-]+)@([a-zA-Z0-9+_\.\-]+)\.([a-z]){2,7}/
    let str = email.value;
    if (regex.test(str)){
        
        email.classList.add('is-valid')
        email.classList.remove('is-invalid')
    }
    else {
        
        email.classList.add('is-invalid')
        email.classList.remove('is-valid')
    }
})

// for Comment validation
Comment.addEventListener('blur', ()=>{
    
    let regex = /^([\w_.-\s])*$/
    let str = Comment.value;
    if (regex.test(str)){
        
        Comment.classList.add('is-valid')
        Comment.classList.remove('is-invalid')
    }
    else {
        
        Comment.classList.add('is-invalid')
        Comment.classList.remove('is-valid')
    }
})