import conf from '../conf/conf.js'
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint((conf.appwriteUrl))
            .setProject((conf.appwriteDatabaseId));
        this.account = new Account(this.client);
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
            const user = await this.account.get();
            console.log(user);
            return user;
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            return null;
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

const authService = new AuthService();

export default authService;

