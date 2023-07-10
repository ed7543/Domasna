function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;
    var error = "";



    if (message == "") {
        error += "Ве молам внесете порака!\n";
    }

    if (error != "") {
        alert(error);
        return false;
    }

    if (name == "") {
        error += "Ве молам внесете го вашето име!\n";
    }

    if (email == "") {
        error += "Ве молам внесете ја вашата мејл адреса.\n";
    } else if (!validateEmail(email)) {
        error += "Ве молам внесете валидна мејл адреса\n";
    }

    
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}