import order from '../Modals/modal.js'
import nodemailer from 'nodemailer'
import * as dotenv from 'dotenv'
dotenv.config()
export const newOrder = async (req, res) => {
    const data = req.body
    try {
        const newOrder = new order(data)
        await newOrder.save()
        // Gửi email thông báo về đơn hàng mới
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        auth: {
        user: process.env['EMAIL_USER_NAME'],
        pass: process.env['EMAIL_PASSWORD']
        }
    });
    const mailOptions = {
        from: process.env['EMAIL_USER_NAME'],
        to: process.env['EMAIL_USER'],
        subject: 'Thông báo đơn hàng mới',
        text: `Bạn vừa nhận được một đơn hàng mới từ ${data.name} với địa chỉ ${data.address}. Sản phẩm được đặt hàng là ${data.productName}.`
      };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log(`Email sent: ${info.response}`);
        }
      }); 

        return res.status(200).json("Đặt hàng thành công")
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const getList = async (req, res) => {
    try {
        const listOrdered = await order.find()
        return res.status(200).json(listOrdered)
    } catch (error) {
        return res.status(500).json(error)
    }
}