"use client"
import React from "react"
import { signIn, signOut, useSession } from "next-auth/react"
import clsx from "clsx";

function LoginButton() {
    return (
        <button
            className="rounded px-8 py-2 text-white bg-green-900 hover:bg-green-700 active:bg-green-800"
            onClick={() => signIn()}
        >
            Log in
        </button>
    )
}

function LogoutButton() {
    return (
        <button
            className="rounded px-8 py-2 text-white bg-red-900 hover:bg-red-700 active:bg-red-800"
            onClick={() => signOut()}
        >
            Log out
        </button>
    )
}

export default function AuthButton() {

    const { data: session } = useSession()

    let name = "USER N/A"

    if (session?.user?.name) {
        name = session?.user?.name
    }

    return (
        <div className="flex gap-3">
            {session?.user ? (
                <div className="flex items-center space-x-3">
                    <span>Hi, {name} </span>
                    <LogoutButton />
                </div>
            ) : (
                <LoginButton />
            )}
        </div>
    )
}