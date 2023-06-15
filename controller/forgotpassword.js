const nodeMailer=require('nodemailer');
const { error } = require('console');
const User = require('../model/user');


module.exports.renderForgotPassword=(req,res)=>{
    res.render('./user/forgotpassword.ejs');
}
module.exports.PostForgotpassword=async(req,res)=>{
    console.log(req.body);
    const user=await User.findOne({username:req.body.username})
    const output=`<h1>Mail Regarding Job Application<h1><ul>
    <li>Name: ${user.username}</li>
    <li>Email: ${user.email}</li>
    <li>Phone :***********12</li>
    <li>Company: Chandra and Prakash </li>
    </ul>
    <h3>Message</h3>
    <p>password = ${user.password}</p>`

    //creating reusable transporter using default smtp transport
    let transporter=nodeMailer.createTransport({
        host:'smtp.gmail.com',
        hostname: "smtp.gmail.com",
        port:465,
        secure:true,
        auth:{
            user: 'cp8913063@gmail.com',
            pass: 'yoogkhjdngurgjxs'
        },
        tls:{
            rejectUnauthorized:false
        }
    });
    let mailerOption={
        from:'cp8913063@gmail.com',
        to:user.email,
        subject:'TEXT',
        text:output,
        html:output// HTML TEXT
    };
    transporter.sendMail(mailerOption,(error,info)=>{
        if(error){
            console.log(error);
            return res.send(error);
        }
        console.log(`MESSAGE SENT ${info.messageId}`);
        // console.log('Preview URL: %s', nodeMailer.getTestMessageUrl(info)); // ONLY IF WE SEND MAIL THROUGH ETHERAL

        
    })
    res.redirect('/login');
    // res.send('index');
}