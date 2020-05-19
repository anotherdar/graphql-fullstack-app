const mongoose = require('mongoose')

const MONGO_URI = 'mongodb://127.0.0.1:27017/lyrics-api'

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,                     
    useCreateIndex: true,                      
    useUnifiedTopology: true,                  
    useFindAndModify: false  
}).then(() => console.log('Database connected')).catch(err => console.log(err))

