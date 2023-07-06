import { readFileSync } from 'fs';
import path from 'path';

export function generateAccountNumber ()
{
    // generate a 10 digit random number
    let number = Math.floor(Math.random() * 99999999);

    return `00${number}`;
}

export function templateHandler ( template )
{
    return readFileSync( path.join( __dirname, `templates/${template}`, 'utf8' ) );
}