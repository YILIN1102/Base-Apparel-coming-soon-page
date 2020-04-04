let errorIcon = $("#error");


function validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate() {
    let result = $("#result");
    let email = $("#email").val();
    result.text("");

    if (validateEmail(email)) {
        result.text(" See you soon ~");
        result.css("color", "green");
    } else {
        result.text(" Please provide a valid email ");
        result.css("color", "red");
        errorIcon.css("visibility", "visible")
    }
    return false;
}

$("#validate").on("click", validate);