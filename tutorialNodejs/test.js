const nodemailer = require("nodemailer");
const email = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e1614ab2d47b2a",
    pass: "dea3d1c8194b7e",
  }
};
const send = async (option) => {
  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if(error) {
        console.log(error);
    } else {
        console.log(info);
        return info.response;
    }
  });
};

let email_data = {
    from: "201611804@kyonggi.ac.kr",
    to: "201611804@kyonggi.ac.kr",
    subject : "테스트 메일",
    text : "nodejs 테스트 메일"
}

send(email_data);
