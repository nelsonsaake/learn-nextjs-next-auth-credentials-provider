"use client"
import { signIn } from "next-auth/react"

export default function login() {
    signIn("credentials", {
        username: "",
        password: "",
        redirect: true,
        callbackUrl: "/",
    });
}