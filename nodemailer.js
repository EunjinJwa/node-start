const nodemailer = require('nodemailer'); // package nodemailer download 

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ejj@gmail.com',
        pass: '#####'
    }
});

const mailOptions = {
    from: 'ejjwa0563@gmail.com',
    to: 'eunjin6132@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy !! '
};

transporter.sendMail(mailOptions, function(error, info) {
    if(error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response)
    }
});

// google 계정 보안문제로 실제 메일 전송은 실패함. 
// 실제로 사용시 보안 관련 작업을 더 해줘야할 것으로 보임 
