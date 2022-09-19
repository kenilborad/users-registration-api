const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/users-registration-api", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
}).then(() => console.log('Now connected to MongoDB!'))
.catch(err => console.error('Something went wrong', err));


