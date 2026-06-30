import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URL);
const db = client.db(process.env.DATABASE_NAME);

export const auth = betterAuth({
     emailAndPassword: { 
    enabled: true, 
  }, 
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
  user: {
  additionalFields: {
    role: {
      type: "string",
      required: true,
      defaultValue: "user",
    },
  },
},
 session:{
    cookieCache:{
      enabled: true,
      strategy:"jwt",
      maxAge: 7 * 24 * 60
    },
},
   plugins: [
        jwt(), 
    ]
});