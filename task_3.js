import mongoose from 'mongoose';
mongoose.connect("mongodb://127.0.0.1:27017/Task-2");
import express from 'express';
const app = express();

const postSchema = new mongoose.Schema({

    char_id: {
        type: Number
    },
    name: {
        type: String
    },
    birthday: {
        type: String
    },
    occupation: {
        type: Array
    },
    img: {
        type: String
    },
    status: {
        type: String
    },
    appearance: {
        type: Array
    },
    nickname: {
        type: String
    },
    portrayed: {
        type: String
    },
    category: {
        type: Array
    },
    better_call_saul_appearance: {
        type: Array
    },

})
const Post = mongoose.model('Web_Series', postSchema);

app.use(express.json());
app.post('/Display', async (req, res) => {
    let data = new Web_Series(req.body);
    let result = await data.save();
    res.send(result);

});
app.listen(5000);