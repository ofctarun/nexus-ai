 export const validate = (isSignUp,name,gmail,password) => {
    const isValidName = /^[a-zA-Z0-9_-]{3,20}$/.test(name);
    const isValidGmail = /^[a-zA-Z0-9._+-]+@gmail\.com$/.test(gmail);
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}$/.test(password);

    if (isSignUp && (!name || !isValidName)) return "Please enter a valid User Name";
    if (!gmail || !isValidGmail) return "Please enter a valid Gmail address";
    if (!password || !isValidPassword) return "Please enter a valid Password";

    return null;
 }

 