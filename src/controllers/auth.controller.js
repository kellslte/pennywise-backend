// import dependencies
import User from "../models/user.model.js";
import Wallet from "../models/wallet.model.js";
import sendMail from '../services/mail.service.js'

// define handlers
export const register = async function ( req, res, next )
{
    try {
        // what are we expecting from the input fields
        const { name, email, password, profile_image, date_of_birth } = req.body;

        // ensure that user account does not already exist
        const existingUser = await User.findOne( {
            where: {
                email
            }
        } );

        if( existingUser) throw new Error( 'This email has already been taken' );
        
        // create a new user record
        const user = await User.create( {
            name, email, password, profile_image, date_of_birth
        } );
        
        await user.save()

        // create user wallet
        const wallet = await Wallet.create( {
            user
        } );
        
        await wallet.save();

        // send notification email to user
        await sendMail( "Pennywise, <swift@pennywise.co>", `${user.name}, <${user.email}>`, "Congratulations on creating a Pennywise account", "welcome" );

        // return response
        return res.status( 201 ).json( {
            success: true,
            message: "User account created successfully"
        });
    } catch (e) {
        return res.status( 422 ).json( {
            success: false,
            message: "Something went wrong",
            errors: {
                message: e.message,
                code: e.code,
            }
        })
    }
 }

export const login = async function ( req, res, next ) { }

export const logout = async function ( req, res, next ) { }

export const user = async function ( req, res, next ) { }