const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    joinDate: {
        type: Date,
        default: Date.now
    },
    favorites: {
        type: [Schema.Types.ObjectId],
        ref: "Recipe"
    }
});

/*
bcrypt.genSalt(rounds, cb)

rounds - [OPTIONAL] - 
the cost of processing the data. (default - 10)

cb - [REQUIRED] - 
a callback to be fired once the salt has been generated. 
uses eio making it asynchronous. 
err - First parameter to the callback detailing any errors. 
salt - Second parameter to the callback providing the generated salt
*/
/* 
Middleware 
(also called pre and post hooks) are functions which are passed 
control during execution of asynchronous functions. 
Middleware is specified on the schema level and is useful for writing plugins.
*/
UserSchema.pre('save',function(next){
    console.log(this);
    if(!this.isModified('password')){
        return next();
    }

    bcrypt.genSalt(10, (err,salt) =>{
        if (err) return next(err);
        
        bcrypt.hash(this.password,salt,(err, hash)=>{
            if (err) return next(err);
            this.password = hash;
            next();
        })
    });
});
module.exports = mongoose.model('User',UserSchema);