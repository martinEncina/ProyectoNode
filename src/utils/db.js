const mongoose = require("mongoose");

const DB_URL = "mongodb+srv://root:root@cluster0.reac62r.mongodb.net/moviesDB?retryWrites=true&w=majority";

const connect = async () => {
    try {
        const db = await mongoose.connect(DB_URL);
        const {name,host} = db.connection;

        console.log(`Connected to ${name} DB in host: ${host}`);
    } catch (error) {
        console.log(`Error connecting to Database: ${error}`);
    }
}

module.exports = {connect}