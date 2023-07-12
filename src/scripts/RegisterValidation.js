function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (values.name === "") {
        error.name = "This field is required"
    } else {
        error.name = ""
    }

    if (values.email === "") {
        error.email = "This field is required"
    } else if (!email_pattern.test(values.email)) {
        error.email = "Invalid email"
    } else {
        error.email = ""
    }

    if (values.password === "") {
        error.password = "Password is required"
    } else if (!password_pattern.test(values.password)) {
        error.password = "Pasword must contain atleast 8 characters (with atleast 1 uppercase character and 1 digit)"
    } else {
        error.password = ""
    }

    return error;  
}

export default Validation;
