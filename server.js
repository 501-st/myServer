import express, {json} from "express"
import nodemailer from "nodemailer"

const app = express();


app.use(express.json())
app.get("/", (request, response)=>{
    console.log(request.query)
    response.send("GG WP")
})
app.post("https://my-server-ipst.herokuapp.com/api/sendForm" , (request, response)=>{
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
    response.status(200).json("Сервер работает")
    console.log("Request:", request.body);
    transporter.sendMail(mailOptions)
})

app.listen(3000);
