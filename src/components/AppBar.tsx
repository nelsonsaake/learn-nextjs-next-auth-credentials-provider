import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import AuthButton from './AuthButton'

export default function AppBar() {
    return (
        <div className="flex items-center px-3 py-5 text-white bg-neutral-900 text-xs bg-dropdown-shadown fixed w-full">
            <Image
                src="/logo.webp"
                alt="semper logo"
                className="rounded-lg mr-2"
                width={30}
                height={30}
            />
            <Link href={"/"}>
                Semper
            </Link>
            <div className="flex-1"></div>
            <AuthButton />
        </div>
    )
}