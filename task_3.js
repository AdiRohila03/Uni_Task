import mongoose from 'mongoose';
import express from 'express';
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/Uni-Task");         // Connects Database
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

const Post = mongoose.model('web_series', postSchema);

app.use(express.json());                    // Converts the received data into json format
app.post('/create', async (req, res) => {   //Allows to add the data to DB
    let data = new Post(req.body);
    let result = await data.save();
    res.send(result);

});

app.get('/detail', async (req, res) => {      //Displays the updated data from DB
    let data = await Post.find(); 
    res.send(data);

});
app.listen(5000);
