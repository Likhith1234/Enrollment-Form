const { userModel } = require("../modals/modal");
const { email } = require("./nodemailer");
const { transporter } = require("./nodemailer");

const getPosts = (req, res) => {
    const user = req.body;
    console.log(user);
    const userObj = new userModel(user);
    const mailOptions = {
        "from": email,
        "to": req.body.email,
        "subject": "Enrollment Form...reg",
        "text": `Dear ${req.body.name},\nThis mail is sent to acknowledge 
        that you are successfully enrolled in Enrollment Form`
    }
    try {
        userObj.save()
        .then(() => {
            res.send(`User Saved: ${JSON.stringify(user)}}`);


            // undo below comments to send emails
            transporter.sendMail(mailOptions, (error, info) => {
                if (error)
                {
                    console.log(`Error message is: ${error.message}`);
                }
                else
                {
                    console.log(`Message: ${JSON.stringify(info.response)}`);
                }
            })
            // upto here


            

        })
        .catch((err) => {res.status(406).send(`${user.email} is already enrolled`)})
    } catch (error) {
        res.send(`Error msg: ${error.message}`);
    }
};

module.exports.getPosts = getPosts;