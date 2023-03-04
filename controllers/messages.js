const success = {
    status: 200,
    message: "success"
}
const fail = {
    status: 404,
    message: "not found"
}
const wrongPassword = {
    status: 400,
    message: "wrong password"
}
const verificationFail = {
    status: 400,
    message: "verification failed",
    route: "/signup"
}
const verificationSuccess = {
    status: 200,
    message: "verification success",
    route: "/login"
}

const noUser = {
    status: 400,
    message: "no user found"
}
const noEmail = {
    status: 400,
    message: "no email found"
}
const improperInput = {
    status: 400,
    message:"improper email or password",
    route: "/signin"
}
const passwordMatch = {
    status: 200,
    message: "password match"
}
const mailExists = {
    status: 400,
    message: "That Email is already in use",
    route: "/signup"
}
const signupSuccess= {
    status:200,
    message: "signup ok!",
    route: "/login"
}
const signupFail = {
    status: 404,
    message: "sign up failed",
}
const netError = {
    status: 500,
    message: "network error",
}
const wrongCode = {
    status: 400,
    message: "wrong code",
    route: "/signup"
}

const loginwrongPassword ={
    status: 400,
    message: "wrong password",
    route: "/login"
}
const loginpasswordMatch ={
    status: 200,
    message: "password match",
    route: "/success"
}
const loginnoUser={
    status: 400,
    message: "no user found",
    route: "/login"
}
const noinput = {
    status: 400,
    message: "No email or Password",
    route: "/login"
}
const errorRoute = {
    status:404,
    message: "route exists but will not operate. Are you authorized?",
    route: "/error"
}
const loggedin= {
    status: 200,
    message: "logged in",
    route: "/success"
}
const loggedout= {
    status: 200,
    message: "logged out",
    route: "/login"
}
const noSession = {
    status: 400,
    message: "no session",
    route: "/login"
}
const noToken = {
    status: 400,
    message: "no token",
    route: "/login"
}
const wrongToken = {
    status: 400,
    message: "wrong token",
    route: "/login"
}
const tokenSuccess = {
    status: 200,
    message: "success",
    route: "/success"
}
const tokenFail = {
    status: 400,
    message: "token fail",
    route: "/login"
}
const noEmailToken = {
    status: 400,
    message: "no email token",
    route: "/login"
}
const wrongEmailToken = {
    status: 400,
    message: "wrong email token",
    route: "/login"
}
module.exports = {
        success, fail, wrongPassword, noinput, errorRoute, tokenFail, tokenSuccess, verificationSuccess,
        noUser, noEmail, passwordMatch, improperInput,noEmailToken, noSession, loggedout, wrongCode,
        mailExists, signupSuccess, signupFail, loggedin,wrongEmailToken, noToken, noUser,
        netError, loginwrongPassword, loginpasswordMatch, loginnoUser, wrongToken, verificationFail
    };
