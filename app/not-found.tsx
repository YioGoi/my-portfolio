'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './not-found.module.scss';

export default function NotFound() {
    return (
        <motion.div
            className={styles.container}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Image src="/images/404-robot.png" alt="Logo" width={300} height={300} className={styles.logo} />
            <h1>404 – Page Not Found</h1>
            <p>The page you’re looking for doesn’t exist or has been moved.</p>
            <Link href="/" className={styles.link}>
                Go Home
            </Link>
        </motion.div>
    );
}
