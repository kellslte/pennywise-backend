// import dependencies
import { Schema, model, ObjectId } from 'mongoose';

// define our handler
const UserSchema = new Schema( {
    name: {
        required: true,
        type: String,
    },

    email: {
        required: true,
        type: String,
        unique: true,
    },

    password: {
        required: true,
        type: String,
    },

    profile_image: {
        required: true,
        type: String,
    },

    date_of_birth: {
        required: true,
        type: Date,
    },

    wallet: {
        ref: 'Child',
        type: ObjectId
    },

    notifications: {
        required: true,
        type: Array,
    }
}, { timestamps: true } );

const User = model( "User", UserSchema );

export default User;