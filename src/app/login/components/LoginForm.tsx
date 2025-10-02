"use client";

import { useAuth } from "@/app/context/AuthContext";
import { manrope } from "../../layout";

export default function LoginForm() {
    const { login } = useAuth();


    return (
    <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-lg py-4 rounded-lg shadow-md">            
        <form className="space-y-6">
                <div>
                    <label htmlFor="password" className={`block text-sm font-medium text-white ${manrope.className}`}>
                        Username
                    </label>
                    <input
                        type="username"
                        id="username"
                        placeholder="Username"
                        className="mt-1 block w-full px-3 py-2 border bg-[#1F241F] border-[#424F40] rounded-md shadow-sm focus:outline-none transition-colors duration-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className={`block text-sm font-medium text-white ${manrope.className}`}>
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="mt-1 block w-full px-3 py-2 border bg-[#1F241F] border-[#424F40] rounded-md shadow-sm focus:outline-none transition-colors duration-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <button
                        onClick={() => login(
                            { 
                                username: "John Doe", 
                                profile_url: "/default-profile.jpg", 
                                notifications: [
                                { id: "1", message: "Your compost bin has been picked up!", timestamp: new Date(), icon:"info" },
                                { id: "2", message: "New composting tips available.", timestamp: new Date(), icon:"info" },
                            ] 
                        }, "example"
                        )}
                        className={`w-full flex justify-center hover:cursor-pointer py-2 px-4 border border-transparent rounded-3xl shadow-sm text-md font-medium text-black bg-[#8CD178] hover:bg-[#71ac61] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${manrope.className} font-bold transition-colors duration-300`}
                    >
                        Log In
                    </button>
                </div>
            </form>
        </div>
    );
}