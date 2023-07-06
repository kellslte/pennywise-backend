import { Schema, model, ObjectId } from 'mongoose';
import { generateAccountNumber } from '../helpers/methods.helpers.js';


const WalletSchema = new Schema(
  {
    balance: {
      required: true,
      type: "number",
      default: 0,
    },

    user: {
      ref: "Child",
      type: ObjectId,
    },

    transactions: {},

    accounts: {},

    cards: {},

    account_number: {
      type: "string",
      default: generateAccountNumber(),
    },
  },
  { timestamps: true }
);

const Wallet = model( "Wallet", WalletSchema );

export default Wallet;