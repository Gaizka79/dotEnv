var emailRegex = /\w+@\w+\.\w+/gm;

function isValidEmail(input) {
    return emailRegex.test(input);
};