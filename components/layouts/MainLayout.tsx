import { FC } from 'react';
import Head from 'next/head'
import Navbar from '../Navbar'
import styles from './MainLayout.module.css'

type BoxProps = {
    children: React.ReactNode; // 👈️ define children prop
};

const MainLayout = (props: BoxProps) => {
    return (
        <div className={styles.container}>
          
            <Head>
                <title>Home - Miguel</title>
                <meta name="description" content="Home Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
            <Navbar/>
        
            <main className={styles.main}>

                { props.children }
            
            </main>
    
        </div>
    )
}

export default MainLayout