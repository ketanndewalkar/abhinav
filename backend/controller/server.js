require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose_connect = require("../mongodb/db");
const cookieparser = require("cookie-parser");
const router = require("../routes/router");
const nodemailer = require("nodemailer");

mongoose_connect();
app.use(cookieparser());
app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL, // Change to your frontend domain
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],  // Allowed methods
    credentials: true, // 🔥 Required to allow cookies
}));
app.use(express.urlencoded({extended:true}));

app.use("/",router);

app.get("/",(req,res)=>{
    res.json({
        message:"hello"
    });
})

app.post("/get-form-data", (req, res) => {
  console.log(req.body);
  try {
    const {
      first,
      middle,
      last,
      email,
      phone,
      city,
      country,
      address,
      message,
    } = req.body;

    // Basic validation
    if (!first || !last || !email || !phone || !city || !country || !address || !message) {
      return res.status(400).json({ msg: "All fields are required." });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.TO,
      subject: "Order Received",
      html: `
        <div style="max-width: 600px; margin: auto; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9f9f9; border: 1px solid #ddd; padding: 30px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
          <h2 style="color: #2c3e50; border-bottom: 2px solid #2c3e50; padding-bottom: 10px; margin-bottom: 20px;">📩 Order Request</h2>
          <p style="margin: 12px 0;"><strong>Name:</strong> ${first} ${middle} ${last}</p>
          <p style="margin: 12px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 12px 0;"><strong>Phone Number:</strong> ${phone}</p>
          <p style="margin: 12px 0;"><strong>City:</strong> ${city}</p>
          <p style="margin: 12px 0;"><strong>Country:</strong> ${country}</p>
          <p style="margin: 12px 0;"><strong>Address:</strong><br><span style="color: #333;">${address}</span></p>
          <p style="margin: 12px 0;"><strong>Message:</strong><br><span style="color: #333;">${message}</span></p>
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #ccc;">
        </div>
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).send({ msg: "Error sending email." });
      } else {
        console.log("Email sent:", info.response);
        return res.status(200).send({ msg: "Email sent successfully" });
      }
    });

  } catch (err) {
    console.log(err);
    return res.status(500).send({ msg: "Internal server error." });
  }
});

app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`);
})
