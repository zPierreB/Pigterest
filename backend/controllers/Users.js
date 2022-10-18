import Users from "../models/User.js";
import session from "express-session";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes:['id','username','email']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
} 

export const Login = async(req, res) => {
    const email = req.body.email; // Get the email from the form
    const pswd = req.body.pswd; // Get the password from the form

    try {
        var sql_result = await Users.findOne({
            where: {
                email: email
            }
        })
    } catch (error) {
        return res.status(404).json({msg: "Email not found"});
    }

    console.log(sql_result);

    if(sql_result.length == 0) {
        return res.status(403).json({msg: "Wrong credentials"});
    }

    if (!bcrypt.compareSync(pswd, sql_result[0].pswd)) {
        return res.status(403).json({msg: "Wrong Password"});
    }

    session = req.session;
    session.isLogged = true;
    return res.redirect('/admin');
    
    
    // try {
    //     const user = await User.findAll({
    //         where: {
    //             email: req.body.email
    //         }
    //     });
    //     const matchPswd = await bcrypt.compare(req.body.password, user[0].password);
    //     if(!matchPswd) {
    //         return res.status(400).json({msg: "Wrong Password"});
    //     }
    //     // const userId = user[0].id;
    //     const username = user[0].username;
    //     const email = user[0].email;
    // }
}