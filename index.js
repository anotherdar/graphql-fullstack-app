const {app} = require('./server/server')


const PORT = 4000

app.listen(PORT, () => {
    console.log('App running on port: ', PORT)
})
