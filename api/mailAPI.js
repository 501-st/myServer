const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: "ratahindipst@gmail.com",
        pass: "IPSTOneLove"
    }
})

const mailer = (message) => {
    transporter.sendMail(message, (err, info) => {
        if (err) return console.log(err);
        console.log('Email sent: ', info)
    })
}

module.exports = mailer;
