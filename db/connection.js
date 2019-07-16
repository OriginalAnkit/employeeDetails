const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://${global.proKeys.db.user}:${global.proKeys.db.pass}@cluster0-qicyz.mongodb.net/employeeDb?retryWrites=true&w=majority`, {
    useNewUrlParser: true
});
mongoose.connection
    .once('open', () => {
        console.log('++++++++++++++++++Connected to DB++++++++++++++++++++++')
    })
    .on('error', () => {
        console.log('++++++++++++++Unable to connect to DB+++++++++++++++++');
        process.exit();
    })

module.exports = {
    mongoose
}