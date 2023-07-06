// import our dependencies
import * as mailer from 'nodemailer';
import config from '../config/main.config.js';
import hbs from 'nodemailer-express-handlebars';
import { templateHandler } from '../helpers/methods.helpers.js';

// configure transport
const transport = mailer.createTransport( config.services.mail );
transport.use( 'compile', hbs() );

// define handlers
const sendMail =  async function (from, to, subject, template)
{
    const html = hbs.compile( templateHandler( template ) );

    try {
        const res = await transport.sendMail( {
            from,
            to,
            subject,
            html
        } );

        return res.messageId;
    } catch (e) {
        return e;
    }
}

export default sendMail;