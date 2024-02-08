import jwt from 'jsonwebtoken'
import { UNAUTHORIZED } from '../constants/httpsStatus.js';
const {verify}=jwt;
export default (req,res,next)=>{
    const token=req.headers.access_token;
    if(!token) {
        return res.status(UNAUTHORIZED).send('Token Missing');
    }

    try{
        const decoded=verify(token,process.env.JWT_SECRET);
        req.user=decoded;
    }catch(error){
        return res.status(UNAUTHORIZED).send('Token Verification Error');
    }
    return next();
};