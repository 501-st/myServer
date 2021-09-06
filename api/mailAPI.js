const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "englishpatient.contact@gmail.com",
        pass: "aC5TBVj1"
    }
})

const mailer = (message) => {
    transporter.sendMail(message, (err, info) => {
        if (err) return console.log(err);
        console.log('Email sent: ', info)
    })
}

module.exports = mailer;
