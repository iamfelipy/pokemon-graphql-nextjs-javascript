import { createContext, useState, useContext } from 'react';
import AuthService from '~/service/AuthService';

const authContext = createContext();

export default function useAuth() {
    return useContext(authContext);
}

export function AuthProvider(props) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    const loginWithEmailPassword = async (email, password) => {
        const { error, user} = await AuthService.loginWithEmailPassword(email, password);
        setUser(user ?? null);
        setError(error ?? "");
    };

    const signUpEmailPassowrd = async (email, password) => {
        const { error, user} = await AuthService.signUpWithEmailPassword(email, password)
        setUser(user ?? null);
        setError(error ?? "");
    };

    const logout = async (auth) => {
        await AuthService.logout(auth);
        setUser(null);
    };

    const value = {user, error, loginWithEmailPassword, signUpEmailPassowrd, logout, setUser};

    return <authContext.Provider value={value} {...props} />;
}