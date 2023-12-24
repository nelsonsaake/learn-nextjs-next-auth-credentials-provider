"use client"
import React, { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation';

export default function AuthRequired({ children }: { children: ReactNode }) {

    const session = useSession();

    const pathname = usePathname();

    const loginUrl = "/auth/login"

    if (session.status === "unauthenticated" && pathname != loginUrl) {
        redirect(loginUrl)
    }

    return (
        <> {children} </>
    )
}