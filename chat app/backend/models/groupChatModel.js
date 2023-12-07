import mongoose from "mongoose";

const groupChatSchema = mongoose.Schema({
    name : { type : String, required : true},
    users : [{
        type : mongoose.Types.ObjectId, ref:"user", required: true
    }],
    lastMessage: { type: String, required: true },
    lastTime: { type: Number}
})

const groupChatModel = new mongoose.model( "groupChat", groupChatSchema );

export default groupChatModel;