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
                return this.login({email,password});
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
            return await this.account.createEmailPasswordSession({
                email, password
            });
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {
        try {
            await this.deleteSession();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }


}

const AuthService = new AuthService();

export default AuthService

