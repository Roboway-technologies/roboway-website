export const contactValidator = (values)=>{
    let errors = {};
    console.log("Recieved by validator")
    console.log(values);
    if(!values.name || values.name === ""){
        errors.name = "Name is required";
    }
    if(!values.email || values.email === ""){
        errors.email = "Email is required";
    }
    if (!values.subject || values.subject === "") {
        errors.subject = "Subject is required";
    }
    if(!values.description || values.description === ""){
        errors.description = "Description is required";
    }
    if(!values.pricingOptions || values.pricingOptions === ""){
        errors.pricingOptions = "Required!";
    }
    return errors;
}