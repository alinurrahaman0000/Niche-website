import { useEffect, useState } from "react";
import initializeFirebase from "../Page/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,updateProfile  } from "firebase/auth";


initializeFirebase()
const useFirebase = () =>{
    const [user ,setUser] = useState({});
    const [authError,setAuthError]=useState('');
    const [admin ,setAdmin]=useState(false);
    const [isLoading, setIsLoading]=useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

const registerUser = (email, password,name ,history) =>{
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        setAuthError('');
        const newUser ={email,displayName:name};
        setUser(newUser);
        //save user to database
        saveUser(email,name, 'POST');

        //firebase after creation
        updateProfile(auth.currentUser, {
            displayName: name,
          }).then(() => {
           
          }).catch((error) => {
            
          });
          

       history.replace('/');
      })
      .catch((error) => {
      setAuthError(error.message);
       
      })
      .finally(() => setIsLoading(false));
}

const loginUser =(email,password,location,history) =>{
    signInWithEmailAndPassword(auth, email,password)
    .then((userCredential) => {
        const destination = location.state?.from || '/';
        history.replace(destination);
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);

      })
      .finally(() => setIsLoading(false));
}


const signInWithGoogle= (location,history)=>{
    setIsLoading(true);
    signInWithPopup(auth,googleProvider)
  .then((result) => {
    
    const user = result.user;
    saveUser(user.email, user.displayName, 'PUT');
    setAuthError('');
    const destination = location.state?.from || '/';
    history.replace(destination);
  }).catch((error) => {
        setAuthError(error.message)
        .finally(() => setIsLoading(false));
  });

}




//observer user state
    useEffect(() =>{
    const unsubseribe= onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user);
            } else {
             setUser({})
            }
            setIsLoading(false)
          });
          return ()=> unsubseribe;
    },[auth])

    useEffect(() =>{
      fetch(`https://whispering-cliffs-17887.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
    },[user.email])

    const logout =() =>{
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setIsLoading(false));

    }

    const saveUser =(email,displayName,method)=>{
        const user ={email,displayName};
        fetch('https://whispering-cliffs-17887.herokuapp.com/users',{
            method:method,
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }
    


    return{
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        signInWithGoogle,
        loginUser,
        logout,
    }
}
export default useFirebase














//...................................
// const saveUser =(email,displayName)=>{
//     const user ={email,displayName};
//     fetch('https://whispering-cliffs-17887.herokuapp.com/users',{
//         method:'POST',
//         headers:{
//             'content-type':'application/json'
//         },
//         body: JSON.stringify(user)
//     })
//     .then()
// }


//...................................


