    "use client"
    import { createContext, useContext, useState } from "react";

    interface AuthContextType {
        userAccount: UserAccount | null;
        login: (account: UserAccount, token: string) => void;
        logout: () => void;
    }

    const AuthContext = createContext<AuthContextType | null>(null);

    function AuthProvider({ children }: { children: React.ReactNode }) {
        const [userAccount, setUserAccount] = useState<UserAccount | null>(null);
        
        const login = (account:UserAccount, token:string) => {
            setUserAccount(account);
            localStorage.setItem("authToken", token);
        };
        
        const logout = () => {
            setUserAccount(null);
            localStorage.removeItem("authToken");
        };
        
        return (
            <AuthContext.Provider value={{ userAccount, login, logout }}>
                {children}
            </AuthContext.Provider>
        );
    }

    export function useAuth() {
        const context = useContext(AuthContext);
        if (!context) {
            throw new Error("useAuth must be used within an AuthProvider");
        }
        return context;
    }

    export default AuthProvider;