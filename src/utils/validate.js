export const checkCredentials = (email, password) => {

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
        email
    );
    const isPasswordValid =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isEmailValid) return "Email ID is not valid. Please enter a valid email id.";
    if (!isPasswordValid) return "Make sure your password contains [A-Z, a-z, 0-9, special characters]";

    return null;

}