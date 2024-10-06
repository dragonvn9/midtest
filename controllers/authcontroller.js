import userModel from '../model/users.js'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

const register = async (req, res) => {
    try {
        //lấy dữ liệu từ req.body
        let {username, password} = req.body
        // validate dữ liệu
        
        if(!username){
            return res.status(400).send({
                message: "username is required"
            })
        } else {
            username = username.trim()
        }
        if(!password){
            return res.status(400).send({
                message: "password is required"
            })
        } else {
            password = password
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const isExistUser = await userModel.findOne({username: username}).exec()
        if(isExistUser) {
            return res.status(400).send({
                message: "username already exist"
            })
        }
        const newUser = new userModel({
            username,
            password : hashedPassword 
        })
        await newUser.save()

        res.status(200).send("ok")

    } catch(err) { 
        res.status(400).send(err.message)
        
    }

}

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate dữ liệu
        if (!username || !password) {
            return res.status(400).send({
                message: "username and password are required"
            });
        }

        // Tìm người dùng trong cơ sở dữ liệu
        const user = await userModel.findOne({ username }).exec();
        if (!user) {
            return res.status(401).send({
                message: "Invalid username or password"
            });
        }

        // Kiểm tra mật khẩu
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send({
                message: "Invalid username or password"
            });
        }

        // tạo toke jwt 
        const token= jwt.sign({userId: user._id }, process.env.JWT_SECRET, {expiresIn: "9h"})
        res.status(200).send({
            message: "Login successful",
            token
        });

    } catch (err) {
        res.status(500).send(err.message);
    }
}

const logout = (req, res) => {
    res.status(200).send({
        message: "Logout successful"
    });
}

export {
    register,
    login,
    logout
}