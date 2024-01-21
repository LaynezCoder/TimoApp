const mongoose = require('mongoose');

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_ATLAS, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4,
        })

        console.log('Database online');
    } catch (error) {
        throw new Error('Error in the database');
    }
}

module.exports = {
    connection
}