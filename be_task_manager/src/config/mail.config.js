import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.ACCOUNT_MAIL,
        pass: process.env.PASSWORD_MAIL
    }
});

// async..await is not allowed in global scope, must use a wrapper
export async function sendMail({ email, url }) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Reset password 👻" <foo@example.com>', // sender address
        to: email, // list of receivers
        subject: "Task manager reset password", // Subject line
        html: `
        <html>
            <body>
                <h3>Reset Password</h3>
                <p>Hello,</p>
                <p>Please click the link below to reset your password:</p>
                <p><a href="${url}">Reset Password</a></p>
                <p>If you didn't request a password reset, you can safely ignore this email.</p>
                <p>Best regards,</p>
                <p>Task Manager Team</p>
            </body>
        </html>
    `, // html body
    });
    return info;
}