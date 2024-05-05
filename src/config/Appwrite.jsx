import {Client, Account, Databases} from "appwrite";

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66366256001b7c62fa0c');

export const account = new Account(client);
export const database = new Databases(client, "6636717e0011c1043e5c");