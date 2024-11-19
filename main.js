    function verifyPassword () {
        if(document.getElementById("password").value !== document.getElementById("con_pass").value){
            document.getElementById("password").style.borderColor = "red";
            document.getElementById("con_pass").style.borderColor = "red";
            document.getElementById("pwordMatch").style.opacity = 1;
            return false
        }
    }

    