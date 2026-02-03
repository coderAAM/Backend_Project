const express = require('express')
const multer = require('multer')
const uploadFile = require('./services/stroage.service')
const PostModel = require('./models/post.model')
const cors = require('cors')

const app = express()

app.use(cors()) 

app.use(express.json())

const upload = multer({storage: multer.memoryStorage()})


app.post('/posts-create', upload.single("image"), async (req, res) => {
    
    
    const result = await uploadFile(req.file.buffer)

    const post = await PostModel.create({
        image: result.url,
        caption: req.body.caption
    })
    

    res.status(201).json({
        message: "post created",
        post
    })
    
})

app.get('/post', async (req, res) => {

    const posts = await PostModel.find()

    res.status(200).json({
        message: "all posts",
        posts
    })
})

module.exports = app;