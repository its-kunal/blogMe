import React, { useContext, createContext, useState, Children } from 'react'
import { onAuthStateChanged, browserLocalPersistence, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"
import { auth } from "./firebase.config"


export const AuthContext = createContext(null)

export function useAuth() {
    return useContext(AuthContext)
}

export default function authContext({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [flash, setFlash] = useState({ message: "", type: "primary" })
    const [error, setError] = useState("")

    onAuthStateChanged(auth, (u) => {
        if (u) {
            setUser(u)
        }
        setLoading(false)
    })

    async function signIn() {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider)
            .then((res) => {
                setFlash({ message: "Signed In Successfully", type: "success" })
            })
            .catch((err) => {
                setError(err.message)
                setFlash({ message: "Sign In Failed", type: "danger" })
            })
    }

    async function logOut() {
        await signOut(auth)
            .then(() => {
                setUser(null)
                setFlash({ message: "Logged Out Successfully", type: "success" })
            })
            .catch(err => {
                setError(err.message)
                setFlash({ message: "Logout Failed", type: "danger" })
            })
    }

    const value = {
        user, loading, signIn, logOut, flash, error, setFlash
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
