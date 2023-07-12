function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (values.email === "") {
        error.email = "This field is required"
    } else if (!email_pattern.test(values.email)) {
        error.email = "Invalid email"
    } else {
        error.email = ""
    }

    if (values.password === "") {
        error.password = "Password is required"
    } else {
        error.password = ""
    }

    return error;  
}

export default Validation;