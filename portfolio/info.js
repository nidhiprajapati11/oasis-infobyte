 window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
     })

/*
 function sendEmail(){
        Email.send({
    Host : "smtp.gmail.com",
    Username : "nidhiprajapati1111@gmail.com",
    Password : "123456789",
    To : 'nidhiprajapati1111@gmail.com',
    From : document.getElementById("email").value,
    Subject : "new contact form",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
     }

*/