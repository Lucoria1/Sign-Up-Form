function verifyPassword {
    let pass1 = document.getElementById("#password");
    let pass2 = document.getElementById("#con_pass");
    let match;

    if(pass1 !== pass2){
        alert("Passwords Don't Match");
        match = false
        pass1.style.borderColor = "red";
        pass2.style.borderColor = "red";
    } else {
        match = true
    }
}