const express = require("express");
const mongodb = require("mongodb");
const skill = mongodb.MongoClient;

const find = express.Router()
find.get("/", (req, res) => {
    skill.connect(process.env.CONNECTION_URL, (err, connection) => {
        console.log(process.env.CONNECTION_URL);
        if (err) throw err;
        else {
            const db = connection.db(process.env.DATABASE_NAME, {
                useNewurlPareser: true,
                useUnifiedTopology: true
            })
            console.log(req.query)
            db.collection(process.env.COLLECTION_NAME).find().toArray((err, array) => {
            // db.collection(process.env.COLLECTION_NAME).find({p_name:req.query.p_name}).toArray((err, array) => {
                if (err) throw err;
                else {
                    res.send(array);
                }
            })
            // await db.collection(process.env.COLLECTION_NAME).find().then(data=>res.json(data))
        }
    })
})
module.exports = find