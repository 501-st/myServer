const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: "gmail",
    auth: {
        user: "ratahindipst@gmail.com",
        pass: "yhqemwmqpykrqalm"
    }
})

const mailer = (message) => {
    transporter.sendMail(message, (err, info) => {
        if (err) return console.log(err);
        console.log('Email sent: ', info)
    })
}

module.exports = mailer;
