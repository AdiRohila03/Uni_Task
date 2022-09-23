import fetch from 'node-fetch';
import express from 'express';
const app = express();
import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';
const url = 'mongodb://localhost:27017';      
const dbName = 'Uni-Task';
const client = new MongoClient(url);

async function dbConnect() {                       
    let result = await client.connect();       // Connects MongoDb 
    let db = result.db(dbName);                // Creates Database in MongoDB Compass
    return db.collection('web_series');        // Creates Collection file in above Database 
}

mongoose.connect("mongodb://127.0.0.1:27017/Uni-Task");   // Connects Database
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

async function getData() {
    const myData = await fetch("https://www.breakingbadapi.com/api/characters");   //Collects data from the given API
    const response = await myData.json();
    for (let i = 0; i < response.length; i++) {
        const post = new Post({
            char_id: response[i]['char_id'],
            name: response[i]['name'],
            birthday: response[i]['birthday'],
            occupation: response[i]['occupation'],
            img: response[i]['img'],
            status: response[i]['status'],
            appearance: response[i]['appearance'],
            nickname: response[i]['nickname'],
            portrayed: response[i]['portrayed'],
            category: response[i]['category'],
            better_call_saul_appearance: response[i]['better_call_saul_appearance'],
        });
        await post.save();  //Saves the collected data into the collection in db
    }

}
getData();


app.get('/detail', async (req, res) => {      //Displays the data from DB
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data);

});

app.get('/bcsa', async (req, res) => {        //Displays only Character's details from Better Call Saul Series
    let data = await dbConnect();               
    data = await data.find({category:'Better Call Saul'}).toArray();
    res.send(data);
    /*let role = await dbConnect();
    role = await data.find({category:'Breaking Bad, Better Call Saul'}).toArray();
    res.send(role);*/

});
app.listen(5000);