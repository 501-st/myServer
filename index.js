require('dotenv').config();
const express = require('express');
const corsMiddleware = require('./middleware')
const apiRouter = require('./routes')
const cors = require('cors')
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(corsMiddleware);
/*app.use(cors())*/
app.use(express.json());
app.use("/api", apiRouter);

app.post("/form", (req, res) => {
    const {name, organisation, position, email, number} = req.body
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "ratahindipst@gmail.com",
            pass: "IPSTOneLove"
        }
    })

    const messageTool = {
        from: "ratahindipst@gmail.com",
        to: "englishpatient.contact@gmail.com",
        subject: `Заявка c новостного блога English Patient`,
        html: `
                <h2>Заявка c новостного блога English Patient</h2>
                <table border="1" width="100%" cellpadding="5">
                    <tr>
                        <th>Имя:</th>
                        <td>
                        ${name}
                        </td>
                   </tr>
                   <tr>
                        <th>Организация:</th>
                        <td>
                        ${organisation}
                        </td>
                   </tr>
                    <tr>
                        <th>Должность:</th>
                        <td>
                        ${position}
                        </td>
                   </tr>
                    <tr>
                        <th>Email:</th>
                        <td>
                        ${email}
                        </td>
                   </tr>
                   <tr>
                        <th>Номер телефона:</th>
                        <td>
                        ${number}
                        </td>
                   </tr>
                </table>
    `
    };

    transporter.sendMail(messageTool, (err, info) => {
        if (err) return console.log(err);
        console.log('Email sent: ', info)
    })
})

app.use('*', (req, res) => {
    res.status(404).send("Not Found 4004");
})

app.listen(PORT, () => {
    console.log('Server started on port', PORT)
});