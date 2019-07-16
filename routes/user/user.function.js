const utility = require('../../utilities/utility');
const { User } = require('../../db/model.factory');

//SECTION REGISTERATION
async function registerUser(req, res, next) {
    var user = new User(req.body);
    //STUB  check data is valid or not
    var invalid = user.validateSync()
    if (invalid) {
        msg = null
        for (var err in invalid.errors) {
            //   console.log(err, invalid.errors[err].message)
            msg = invalid.errors[err].message;
            break;
        }
        res.json({ error: true, msg });
        return
    }

    //STUB check email id and phone already exist or not
    var verifyData = await User.findOne({ $or: [{ email: user.email }, {'phone':{$elemMatch:{'contact':user.phone.map(p=>p.contact)}}}] });
    console.log(verifyData)
    if (verifyData) {
        attr = null;
        if (verifyData.email == user.email) {
            attr = "email"
        } else {
            attr = "phone" 
        }
        res.json({
            error: true,
            msg: attr + ' already in use'
        })
        return;
    }
    //STUB Save and send response
    try {
        var savedUser = await user.save();
        res.json({
            error: false,
            msg: "User registered successfully"
        })
    } catch (e) {
        res.json({ error: true, msg: 'Something went wrong' });
    }

}


function loginUser(req,res) {
    console.log(req.body)
}
module.exports = { registerUser, loginUser}

