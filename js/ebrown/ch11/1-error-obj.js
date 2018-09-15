const err = new Error('invalid email');
function validateEmail(email) {
    return email.match(/@/)? email:new Error (`invalid email: ${email}`);
}

const email = 'darina.saruabc.com';
const validatedEmail = validateEmail(email);
if (validatedEmail instanceof Error) {
    console.log (`Error: ${validatedEmail.message}`);
}
else {
    console.log (`Valid email: ${validatedEmail}`);
}
