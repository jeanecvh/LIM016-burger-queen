import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth) { }

  async register (email:string, password:string){
    try {
      return await this.afauth.createUserWithEmailAndPassword(email,password )
    } catch (error) {
      console.log('error en login: ', error)
      return null;
    }
  }

  async login(email:string, password:string){
    try {
      return await this.afauth.signInWithEmailAndPassword(email, password)
    } catch (error) {
      console.log('error en login: ', error)
      return null;
    }
  }

  async loginWithGoogle(email:string, password:string){
    try {
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    } catch (error) {
      console.log('error en login con Google: ', error)
      return null;
    }
  }

  getUserLogged(){
    return this.afauth.authState
  }
  async logout(){
    try {
      await this.afauth.signOut()
    }catch(err){
      console.log(err);
    };
  };

  async findUser(user:any){
    try {
      await this.afauth.onAuthStateChanged(user);
    }catch(err){
    console.log(err);
    }
  };
};
