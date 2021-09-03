import express from "express"
import nodemailer from "nodemailer"

const app = express();
app.use(express.json())

app.get("/", (request, response) =>{
    response.send("<h1>Home page</h1>")
})

app.post("/sendEmail" , (request, response)=>{
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "ratahindipst@gmail.com",
            pass: "IPSTOneLove"
        }
    })

    const mailOptions = {
        from: "ratahindipst@gmail.com",
        to: "englishpatient.contact@gmail.com",
        subject: "Message from the blog!",
        text: `Имя: ${request.body.name} \nОрганизация: ${request.body.organisation} \nДолжность: ${request.body.position}
E-mail: ${request.body.email} \nТелефон: ${request.body.number}`
    }
    response.status(200).json("Письмо успешно отправлено")
    console.log("Request:", request.body);
    transporter.sendMail(mailOptions)
})

app.listen(3000);
