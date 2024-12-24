import { createContext, useEffect } from "react";
import { useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const signWithGoogle = () => {
        const googleAuthProvider = new GoogleAuthProvider();
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);

    }
    const updateUserProfile = (profileData) => {
        return updateProfile(auth.currentUser, profileData);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const userInfo = { user, setUser, loading, createUser, signInUser, logOut, signWithGoogle, updateUserProfile };

    return (
        <div>
            <AuthContext.Provider value={userInfo} >
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;