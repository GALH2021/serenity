import React, { useContext, useEffect, useState } from 'react';
import { firebaseAuth } from '../firebase';


const AuthContext = React.createContext();

function useAuth() {
    return useContext(AuthContext);
}

function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        return firebaseAuth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password) {
        return firebaseAuth.signInWithEmailAndPassword(email, password);
    }

    function logout() {
        return firebaseAuth.signOut();
    }

    useEffect(() => {
        const unsubscribe = firebaseAuth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        signup,
        login,
        logout,
    }

    return (
        <div className="AuthProvider">
            <AuthContext.Provider value={value}>
                {!loading && children}
            </AuthContext.Provider>
        </div>
    );
}

export {
    AuthProvider,
    useAuth,
} ;