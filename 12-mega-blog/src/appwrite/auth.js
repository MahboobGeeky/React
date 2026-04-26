import conf from '../conf/conf.js'
import { Client, Account, ID } from "appwrite";

import { Client, Account } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint((conf.appwriteUrl))
            .setProject((conf.appwriteDatabaseId));
        
    }

    // create account SignUp
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                // call another method
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    // Login
    async login({email, password}){
        try {
            const userAccount = await this.account.createEmailPasswordSession({
                email, password
            });
        } catch (error) {
            
        }
       
    }


}

const AuthService = new AuthService();

export default AuthService

