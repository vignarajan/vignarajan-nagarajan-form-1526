// event-target object
let btn = document.getElementById("submit-btn");
let email = document.getElementById("email");

// Clear the data from HTML form
let testForm = document.querySelector("form");

// event-handler
function validateForm() {
    
    console.clear();
    
    // save data and errors:
    let errors = [];
    let data = {};
    
    // validation code
    if (email.value === "") {
        errors.push("Please enter your email!");
    } else {
        data.emailProp = email.value;
    }
    
    // test printings
    //console.log("Errors", errors);
    //console.log("Data Object", data);
    
    // create the feedback
    if (errors.length === 0) {
        // clear your form here:
        testForm.reset();
        console.log(`Your email: ${data.emailProp}`);
    } else {
        console.log(`Errors: ${errors}`);
    } 
}

// registering event
btn.addEventListener("click", validateForm);