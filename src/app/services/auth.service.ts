import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as firebase from 'firebase/app';

export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL?: string;
    firstName?: string;
    lastName?: string;
    acountType?: string;
  }


@Injectable({ providedIn: 'root' })
export class AuthService {

    user: Observable<User>;

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router
    ) {

        this.user = this.afAuth.authState.pipe(
            switchMap(user => {
                // Logged in
              if (user) {
                return this.afs.doc<User>(`user/${user.uid}`).valueChanges();
              } else {
                // Logged out
                return of(null);
              }
            })
          );

     }

     googleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        return this.oAuthLogin(provider);
    }

    private async oAuthLogin(provider) {
        const credential = await this.afAuth.auth.signInWithPopup(provider);
        this.updateUserData(credential.user);
    }

    async emailLogin(email: string, password: string, data: any) {
        const credential = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
        this.createUser(credential.user, data);
    }

    private createUser(user: firebase.User, data: any) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`user/${user.uid}`);
        return userRef.set(data, {merge: true});
    }

    loginMail(email: string, password: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    private updateUserData(user) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`user/${user.uid}`);
     // console.log(userRef);
        const data: any = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
        };

        return userRef.set(data, {merge: true});
    }

     addInfo(data: any) {
        const sub = this.user.subscribe((currUser) => {
            const userRef: AngularFirestoreDocument<any> = this.afs.doc(`user/${currUser.uid}`);

            return userRef.set(data, {merge: true});
        });

    }

    signOut() {
        this.afAuth.auth.signOut().then(() => {
            this.router.navigate(['/']);
        });
      }
}
