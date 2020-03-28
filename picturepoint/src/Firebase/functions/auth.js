import { auth } from "./firebase";
import { db } from "./firebase";

// Sign Up
/*
export const doCreateUserWithEmailAndPassword = (email, passwordone, n, u) =>
  auth.createUserWithEmailAndPassword(email, passwordone).then(resp => {
    return db
      .collection("users")
      .doc(u)
      .set({
        name: n,
        username: u,
        email: email,
        creationDate:new Date().toISOString(),
        userID:resp.user.uid,
      });
  });
*/

export const doCreateUserWithEmailAndPassword = (email, passwordone, n, u, callback) => {
  db.doc(`/users/${u}`).get()
  .then(doc => {
       if(doc.exists){
          alert("user name already taken :(")
          console.log('here')
          callback(null)
      } else {
        auth.createUserWithEmailAndPassword(email, passwordone).then(resp => {
          callback(db
          .collection("users")
          .doc(u)
          .set({
            username: u,
            name: n,
            email: email,
            creationDate:new Date().toISOString(),
            bio: "This is a bio",
            userID:resp.user.uid,
          })
          )
        });
      }
   })
  .catch(function(error) {
    console.log("Error: ", error);
  });
};
// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign Out
export const doSignOut = () => auth.signOut().then(() => localStorage.removeItem("username"));

// Password Reset
export const doPasswordReset = email =>
  auth
    .sendPasswordResetEmail(email)
    .then(function() {
      // Password reset email sent.
    })
    .catch(function(error) {
      // Error occurred. Inspect error.code.
    });

// Password Change
export const doPasswordUpdate = password =>
  auth.currentUser.updatePassword(password);

  //Email Update
  export const doEmailUpdate = email =>
    auth.currentUser.updateEmail(email).then(
      db
        .collection("users")
        .doc(localStorage.getItem("username")) //retrieve user name from fb
        .update({
          email: email
        })
    );

  //Update nick name
  export const doNickNameUpdate = nickname =>
    db
      .collection("users")
      .doc(localStorage.getItem("username"))
      .update({
        name: nickname
      });

//Update bio
export const doBioUpdate = newBio =>
  db
  .collection("users")
  .doc(localStorage.getItem("username"))
  .update({
    bio: newBio
  });
