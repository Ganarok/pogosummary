import Head from "next/head"
import React, { FC, useEffect, useState } from "react"

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
                <title>PoGo Summary</title>
                <meta name="description" content="PoGo Summary" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main id="main" className={`${className} flex min-h-screen`}>{children}</main>
        </>
    )
}

export default Layout