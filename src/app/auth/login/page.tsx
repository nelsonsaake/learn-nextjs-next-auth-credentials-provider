"use client"

import React, { useState } from "react"
import { signIn } from "next-auth/react"

export default function SignInPage() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function submit() {
        signIn("credentials", {
            username: username,
            password: password,
            redirect: true,
            callbackUrl: "/",
        });
    }
    
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-screen max-w-lg flex flex-col space-y-3 text-center">
                <div className="text-2xl text-bold">
                    Login
                </div>
                <div className="text-sm text-stone-600">
                    Welcome to Semper!
                </div>
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="rounded-lg border border-2 broder-stone-400 active:border-stone-800 py-3 px-3 w-full"
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="rounded-lg border border-2 broder-stone-400 active:border-stone-800 py-3 px-3 w-full"
                />
                <button
                    onClick={submit}
                    className="bg-green-900 hover:bg-green-700 active:bg-green-800 rounded-lg border border-2 broder-stone-400 text-white p-3"
                >
                    Login
                </button>
            </div>
        </div>
    )
}