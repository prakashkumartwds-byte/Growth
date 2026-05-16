const nodemailer = require("nodemailer");

const sendContactMail = async (req, res) => {

  try {

    const {
      name,
      email,
      phone,
      service,
    } = req.body;

    const transporter = nodemailer.createTransport({

      service: "gmail",

      auth: {

        user: process.env.EMAIL_USER,

        pass: process.env.EMAIL_PASS,

      },

    });

    /* ==============================
       MAIL TO YOU
    ============================== */

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject: "🚀 New Lead From Website",

      html: `

      <h2>New Lead Received</h2>

      <p><b>Name:</b> ${name}</p>

      <p><b>Email:</b> ${email}</p>

      <p><b>Phone:</b> ${phone}</p>

      <p><b>Service:</b> ${service}</p>

      `,

    });

    /* ==============================
       AUTO REPLY TO USER
    ============================== */

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: email,

      subject: "Thank You For Contacting GrowthGarage 🚀",

      html: `

      <div style="
        font-family:Arial;
        background:#F8FAFC;
        padding:40px;
      ">

        <div style="
          max-width:600px;
          margin:auto;
          background:white;
          border-radius:20px;
          overflow:hidden;
        ">

          <div style="
            background:#00C2A8;
            padding:40px;
            text-align:center;
            color:white;
          ">

            <h1>GrowthGarage</h1>

            <p>Premium Digital Solutions</p>

          </div>

          <div style="padding:40px">

            <h2>Hi ${name} 👋</h2>

            <p>
              Thank you for contacting us.
              Our team will connect with you shortly.
            </p>

            <p>
              Requested Service:
              <b>${service}</b>
            </p>

          </div>

        </div>

      </div>

      `,

    });

    res.status(200).json({

      success: true,

      message: "Mail Sent Successfully",

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: "Server Error",

    });

  }

};

module.exports = {
  sendContactMail,
};