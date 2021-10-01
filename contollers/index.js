const mailer = require("../api/mailAPI");

class apiController {
    async sendForm(req, res) {
        try {
            const {name, roleText,  email, number, info, levelOfEnglishText, file} = req.body
            const messageTool = {
                from: "ipst.contact@gmail.com",
                to: "ipst.contact@gmail.com",
                subject: `Заявка c сайта IPST`,
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
                   <tr>
                        <th>Файлы:</th>
                        <td>
                        ${file}
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
