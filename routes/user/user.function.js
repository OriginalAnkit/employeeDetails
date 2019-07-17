const utility = require('../../utilities/utility');
const {
    User
} = require('../../db/model.factory');

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
        res.json({
            error: true,
            msg
        });
        return
    }

    //STUB check email id and phone already exist or not
    var verifyData = await User.findOne({
        $or: [{
            email: user.email
        }, {
            'phone': {
                $elemMatch: {
                    'contact': user.phone.map(p => p.contact)
                }
            }
        }]
    });
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
        res.json({
            error: true,
            msg: 'Something went wrong'
        });
    }

}

//SECTION login route
async function loginUser(req, res) {
    // STUB  Getting required fields
    var valid = utility.checkFields(req.body, ['password', 'email'])
    if (valid.e) {
        res.json({
            error: true,
            msg: `${valid.mf} is missing`
        })
        return;
    }
    body=valid
    //STUB finding user by email
    var user = await User.findOne({email:body.email});
    if(!user){
        res.json({
            error:true,
            msg:"User not found "
        })
        return
    }

    //STUB comparing password
    var validPass=utility.comparePass(body.password,user.password);
    if(!validPass){
        res.json({
            error:true,
            msg:`Invalid email or password`
        })
        return 
    }

    newUser=user.toObject()
    delete newUser.password;
    delete newUser.__v;
    newUser.token=utility.generateToken({id:newUser._id})
    res.json({
        error:true,
        msg:'Login Successfull',
        data:newUser
    })
}

//SECTION list employees
async function listEmployees(req,res){
 try{
     let users=await User.find({},{__v:0,password:0});
     res.json({
         error:false,
         msg:'list of users',
         data:users
     })
 }catch(e){
     res.json({
         error:true,
         msg:`Something went wrong`
     })
 }

}

//STUB Get employee details by id
async function getOneEployee(req,res){
    try{
        let user=await User.findById(req.params.id,{password:0,_v:0})
        res.json(user);
    }catch(e){
        res.json({
            error:true,
            msg:`Something went wrong`
        }) 
    }
}
module.exports = {
    registerUser,
    loginUser,
    listEmployees,
    getOneEployee
}