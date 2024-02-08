import mongoose from 'mongoose';
import { UserModel } from '../Models/user.model.js';
import { FoodModel } from '../Models/food.model.js';
import { sample_foods } from '../Data.js';
import { sample_user } from '../Data.js';
import bcrypt from 'bcryptjs';
const PASSWORD_HASH_SALT_ROUNDS=10;
mongoose.set('strictQuery',true);

export const dbconnect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await seedUsers();
        await seedFoods();
        console.log('connection of database is successful');
    }catch(err){
        console.log(err);
    }
};


async function seedUsers(){
    const usersCount=await UserModel.countDocuments();
    if(usersCount>0){
        console.log('Users seed is a already done!');
        return ;
    }

    for(let user of sample_user){
        user.password=await bcrypt.hash(user.password,PASSWORD_HASH_SALT_ROUNDS);
        await UserModel.create(user);
    }
    console.log("Users seed is done !");
}

async function seedFoods(){
    const foods=await FoodModel.countDocuments();
    if(foods>0){
        console.log('Foods seed is a already done!');
        return ;
    }

    for(const food of sample_foods){
        food.imageUrl=`/foods/${food.imageUrl}`;
        await FoodModel.create(food);
    }
    console.log("Food seed is done !");
}