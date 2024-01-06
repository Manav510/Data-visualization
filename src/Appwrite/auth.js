import conf from ".././conf/conf";
import { Client, Account, ID } from "appwrite";
import Cookies from 'js-cookie';

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite serive :: getCurrentUser :: error", error);
    }

    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
      Cookies.remove('user_id');
      Cookies.remove('user_filter'); 
    } catch (error) {
      console.log("Appwrite serive :: logout :: error", error);
    }
  }

  async getCurrentUserId() {
    try {
      const user = await this.account.get();
      return user ? user.$id : null;
    } catch (error) {
      console.log("Appwrite service :: getCurrentUserId :: error", error);
      return null;
    }
  }
}

const authService = new AuthService();

export default authService;
