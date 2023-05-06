import Head from "next/head"
import React, { FC } from "react"

import Header from "components/common/Header"
import Footer from "components/common/Footer"

interface LayoutProps {
    children: React.ReactNode,
    className?: string
}

const Layout: FC<LayoutProps> = ({ children, className = '' }) => {
    return (
        <>
            <Head>
                <title>Pogo Summary</title>
                <meta name="description" content="PoGo Summary" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className={`${className} flex min-h-screen`}>{children}</main>

            <Footer />
        </>
    )
}

export default Layout