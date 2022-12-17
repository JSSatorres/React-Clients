import mongoose from "mongoose";
const { Schema, model } = mongoose;

const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    // uid: {
    //     // Schema.Types.ObjectId => id created by moongose
    //     type: Schema.Types.ObjectId,
    //     ref: "User",
    //     required: true,
    // },
});

export const Todo = model("Todo", todoSchema);