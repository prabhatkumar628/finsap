import nodemailer from "nodemailer";

const sendMail = async ({ name, subject, email, message }) => {
  console.log("MAIL_USER:", process.env.MAIL_USER);
  console.log("MAIL_PASS:", process.env.MAIL_PASS);

  try {
    // const transporter = nodemailer.createTransport({
    //     host: "smtp.gmail.com",
    //     port: 587,
    //     secure: false,
    //     auth: {
    //         user: process.env.MAIL_USER,
    //         pass: process.env.MAIL_PASS
    //     }
    // });
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465, // ✅ Secure port
      secure: true, // ✅ Force SSL/TLS
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    // 1st Email: Finnsap Team ko user ka message
    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER, // Finnsap Team
      subject: subject,
      html: `
            <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; border-radius: 8px;">
              <div style="max-width: 600px; margin: auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <header style="background-color: #043e96; color: white; padding: 20px; display: flex; justify-content: space-between; align-items: center; width: 100%; height: 100%;">
                  <div style="width: 40px; min-width: 40px; height: 40px; background: white; border-radius: 10px; display: flex; justify-content: center; align-items: center;">
                    <img src="${process.env.BASE_URL}/fabicon.png" alt="Finnsap Logo" style="width: 100%; height: 100%; border-radius: 8px;">
                  </div>
                  <div style="width: 100%; "background-color: #000; height: 40px; background: white; border-radius: 10px; display: flex; justify-content: center; align-items: center;  text-align: end; vertical-align: middle;">
                    <h1 style=""background-color: red;  text-align: end; vertical-align: middle;">Finnsap</h1>
                  </div>
                </header>
                <div style="padding: 20px;">
                  <p style="font-size: 16px; color: #333;">Dear <strong>Finnsap Team</strong>,</p>
                  <p style="font-size: 16px; color: #333;">${message}</p>
                  <div style="margin-top: 30px; padding: 15px; background: #f9f9f9; border-left: 4px solid #0dd4ff;">
                    <p style="margin: 5px 0; font-size: 14px; color: #333;">
                      <strong>Sender Name:</strong> ${name}
                    </p>
                    <p style="margin: 5px 0; font-size: 14px; color: #333;">
                      <strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #043e96; text-decoration: none;">${email}</a>
                    </p>
                  </div>
                </div>
                <footer style="background-color: #f9f9f9; text-align: center; padding: 15px; font-size: 12px; color: #777;">
                  This is an automated email. Please do not reply.
                </footer>
              </div>
            </div>
            `
    };


    // 2nd Email: User ko confirmation mail
    const mailOptions2 = {
      from: process.env.MAIL_USER,
      to: email, // User
      subject: "Finnsap - Your Message Has Been Received",
      html: `
            <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; border-radius: 8px;">
              <div style="max-width: 600px; margin: auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <header style="background-color: #043e96; color: white; padding: 20px; display: flex; justify-content: space-between; align-items: center; width: 100%; height: 100%;">
                  <div style="width: 40px; min-width: 40px; height: 40px; background: white; border-radius: 10px; display: flex; justify-content: center; align-items: center;">
                    <img src="${process.env.BASE_URL}/fabicon.png" alt="Finnsap Logo" style="width: 100%; height: 100%; border-radius: 8px;">
                  </div>
                  <div style="width: 100%; "background-color: #000; height: 40px; background: white; border-radius: 10px; display: flex; justify-content: center; align-items: center;  text-align: end; vertical-align: middle;">
                    <h1 style=""background-color: red;  text-align: end; vertical-align: middle;">Finnsap</h1>
                  </div>
                </header>

                <div style="padding: 20px;">
                  <p style="font-size: 16px; color: #333;">Hello <strong>${name}</strong>,</p>
                  <p style="font-size: 16px; color: #333;">
                    Thank you for reaching out to Finnsap. We have received your message and will get back to you as soon as possible.
                  </p>
                  <p style="font-size: 14px; color: #555;">
                    Meanwhile, feel free to explore our services on <a href="https://www.finnsap.com" style="color: #043e96; text-decoration: none;">www.finnsap.com</a>.
                  </p>
                </div>
                <footer style="background-color: #f9f9f9; text-align: center; padding: 15px; font-size: 12px; color: #777;">
                  This is an automated email. Please do not reply.
                </footer>
              </div>
            </div>
            `
    };

    // Emails send karna
    await transporter.sendMail(mailOptions);  // Finnsap ko mail
    await transporter.sendMail(mailOptions2); // User ko confirmation mail

    return { success: true, message: "Emails Sent Successfully!" };

  } catch (error) {
    console.error(`Email Send ERROR:`, error);
    return { success: false, message: "Email Sending Failed!" };
  }
};

export default sendMail;
