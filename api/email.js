const { Router } = require("express")
const nodemailer = require("nodemailer")

const router = Router()

router.post("/send", (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "SendinBlue",
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    }
  })
  const mailOptions = {
    from: req.body.email,
    to: "sebastian.castaneda.dev@gmail.com",
    subject: req.body.subject,
    text: req.body.message
  }
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.statusCode(503)
      res.send(err)
    } else {
      res.status(200)
    }
    res.send()
  })
})

module.exports = router
