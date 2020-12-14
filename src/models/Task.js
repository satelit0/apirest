import { Schema, model }  from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: false, 
        trim: true,
        default: "no definido"
    },
    done: {
        type: String, 
        required: false,
        trim: true,
        default: false
    }
}, {
    versionKey: false, //evitar este valor: __V
    timestamps: true //createdAt, updatedAt 
});
TaskSchema.plugin(mongoosePaginate);
export default model('Task', TaskSchema);