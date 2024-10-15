"use client";

import { useEffect, useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/db/firebase";
import { useAuth } from "@/hooks/useAuth";

export default function LoginPage() {
    const [error, setError] = useState(null);
    const router = useRouter();
    const { user, loading } = useAuth();

    // useEffect(() => {
    //     if (!loading && user) {
    //         router.push("/"); // Redirect to home or any other page
    //     }
    // }, [user, loading, router]);

    // if (loading) {
    //     return <p>Loading...</p>; // Add a loading state while checking auth
    // }

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();

        try {
            await signInWithPopup(auth, provider);
            router.push("/");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="p-8 bg-white rounded shadow-md">
                <h1 className="mb-4 text-2xl font-bold">Login</h1>
                <button
                    onClick={handleGoogleLogin}
                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                    Sign in with Google
                </button>
                {error && <p className="mt-4 text-red-500">{error}</p>}
            </div>
        </div>
    );
}
