const nodemailer = require("nodemailer");

const envFile = require("dotenv");
envFile.config();
const email = process.env.SERVER_EMAIL;
const passwd = process.env.SERVER_PASSWD;



// nodemailer transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass: passwd
    }
});

module.exports = {
    email: email,
    transporter: transporter
}