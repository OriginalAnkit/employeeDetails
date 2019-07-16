const utility = require('../../utilities/utility');
const { User } = require('../../db/model.factory');

async function registerUser(req, res, next) {
    var user = new User(req.body);
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
    var savedUser = await user.save()
    res.json(savedUser)

}

module.exports = { registerUser }

