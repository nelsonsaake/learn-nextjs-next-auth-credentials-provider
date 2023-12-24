import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentails",

            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentails: any, req: any) {

                return {
                    id: "nx",
                    image: "",
                    name: (credentails?.username) ?? "",
                    email: "nelsonsaakekofi@gmail.com",
                }

                // here we check against our db to see if we have user

                const res = await fetch("http://localhost:3000/auth/login", {
                    method: "POST",
                    headers: {
                        "Context-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: credentails?.username,
                        passowrd: credentails?.password,
                    }),
                })

                const user = await res.json()

                return user ?? null
            },            
        }),
    ],

    callbacks: {
    },

    // custom login page 
    pages: {
        signIn: "/auth/login"
    }
})

export {handler as GET, handler as POST}