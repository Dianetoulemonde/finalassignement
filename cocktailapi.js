$(function () {
    $("#submit-button").click((event) => {
        event.preventDefault();
        let lastName = $("input[name=last_name]").val();
    
        if (validateLastName(lastName)) {
            // Add form-control-success to input
            $("input[name=last_name]").addClass("form-control-success").removeClass("form-control-danger");
            // Add has-success to our form-group
            $("input[name=last_name]").parent().parent().addClass("has-success").removeClass("has-danger");
        } else {
            $("input[name=last_name]").addClass("form-control-danger").removeClass("form-control-success");
            // Add has-success to our form-group
            $("input[name=last_name]").parent().parent().addClass("has-danger").removeClass("has-success");
        }
    });
    
    const validateLastName = (lastName) => {
        if (lastName.length > 0) {
            for (let i = 0; i < lastName.length; i++) {
                if ((lastName[i].toLowerCase() < 'a' || lastName[i].toLowerCase() > 'z') && lastName[i] !== "." && lastName[i] !== " ") {
                    return false;
                }
            }
            return true;
        } else {
            false;
        }
    }
    
});

