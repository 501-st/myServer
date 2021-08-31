const express = require("express");
const nodemailer = require("nodemailer")

const app = express();

/*app.post(["/startPage", "/adminPage"], (request, response)=>{
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
        \nE-mail: ${request.body.email} \nТелефон: ${request.body.number}`
    }

    transporter.sendMail(mailOptions)
})

app.listen(3000);*/


app.use(express.static("public"))
app.use(express.json())
app.get("/", function(request, response){
    response.sendFile(__dirname + "/public/index.html");
});

app.post("/", (request, response)=>{
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
        subject: "Message from thr blog!",
        text: `Hello ${request.body.number} \nwevwbenviwenv`
    }

    transporter.sendMail(mailOptions, (error)=>{
        if (error){
            console.log("error")
            response.send("error")
        }
        else {
            console.log("Email was successfully sent")
        }
    })
})

app.listen(3000);
