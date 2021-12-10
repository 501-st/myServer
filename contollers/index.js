const mailer = require("../api/mailAPI");

class apiController {
    async sendForm(req, res) {
        try {
            const {name, roleText,  email, number, info, levelOfEnglishText, file} = req.body
            console.log(req.body);
            const messageTool = {
                from: "englishpatient.contact@gmail.com",
                to: "englishpatient.contact@gmail.com",
                subject: `Заявка c сайта IPST`,
/*                attachments:[{
                    filename: "image2.jpg", path: "./image2.jpg"
                }],*/
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
                    <tr>
                        <th>Роль на которую претендует:</th>
                        <td>
                        ${roleText}
                        </td>
                   </tr>
                    <tr>
                        <th>Уровень английского языка:</th>
                        <td>
                        ${levelOfEnglishText}
                        </td>
                   </tr>
                    <tr>
                        <th>Дополнительная информация:</th>
                        <td>
                        ${info}
                        </td>
                   </tr>
                </table>
    `
            };

            await mailer(messageTool);
            return res.json({status: true, message: "Send successfully"});
        } catch (e) {
            res.status(400).json({status: false, message: e});
        }
    }
}
module.exports = new apiController()
