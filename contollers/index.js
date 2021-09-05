const mailer = require("../api/mailAPI");

class apiController {
    async sendForm(req, res) {
        try {
            const {name, organisation, position,  email, number} = req.body
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

            await mailer(messageTool);
            return res.json({status: true, message: "Send successfully"});
        } catch (e) {
            res.status(400).json({status: false, message: e});
        }
    }

}

module.exports = new apiController()
