const express = require('express')
const mongoose = require ('mongoose');
const User = require ('./models/user.model.js');
const app = express()

app.use(express.json());

app.get('/', (req,res) =>{
    res.send("Bienvenue sur L'A.P.I Node.js")
});

app.get('/api/users', async (req,res) => {
    try{
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message });
    }
});

app.get('/api/users/:id', async (req,res) => {
    try{
    
    } catch (error) {
        res.status(500).json({message: error.message });
    }
});

app.post('/api/users', async (req,res) => {
    try{
        const users = await User.create(req.body);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message });
    }
});

mongoose.connect('mongodb+srv://User001:27F5JXK3uSCpUUjF@backenddb.jn11o.mongodb.net/JO_2024?retryWrites=true&w=majority&appName=BackendDB') 
    .then(() => {
        console.log('Connected to database!');
        app.listen(3000,() => {
            console.log('Server is running on port 3000');
        });
        
})
.catch(() =>{
    console.log('Connection failed!');
});




