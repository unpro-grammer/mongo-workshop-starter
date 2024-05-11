import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: String,
    phoneNumber: String,
    photoUrl: String,
    funFact: String
})