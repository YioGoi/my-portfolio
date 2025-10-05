'use client';

import { useState, useEffect, useMemo } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from '@/components/ResumePDF';
import { TbDownload } from 'react-icons/tb';
import { isSmallLaptop } from '@/utilities/responsive';


import styles from './index.module.scss';

export default function DownloadResumeButton() {
    const [_isSmallLaptop, _setIsSmallLaptop] = useState<boolean | null>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        let debounceTimer: NodeJS.Timeout;

        const handleResize = () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                _setIsSmallLaptop(isSmallLaptop());
            }, 100);
        }

        const initialIsSmallLaptop = isSmallLaptop();
        _setIsSmallLaptop(initialIsSmallLaptop);
        
        window.addEventListener('resize', handleResize);
        return () => {
            clearTimeout(debounceTimer);
            window.removeEventListener('resize', handleResize);
        }
    }, []); // Fixed: removed dependency

    const ButtonText = ({ loading }: { loading: boolean }) => {
        if (!_isSmallLaptop) {
            return (
                <>
                    {loading ? 'Preparing...' : 'Download CV'}
                </>
            )
        }
        return 'CV';
    }

    // Memoize the PDF document to prevent recreation on every render
    const resumeDocument = useMemo(() => <ResumePDF />, []);

    // Don't render until client-side is ready
    if (!isClient || _isSmallLaptop === null) {
        return null;
    }

    return (
        <PDFDownloadLink document={resumeDocument} fileName="Yigit-Dogan-CV.pdf" className={styles.downloadButton}>
            {({ loading }) =>
                <button>
                    <TbDownload className={styles.downloadIcon} />
                    <ButtonText loading={loading} />
                </button>
            }
        </PDFDownloadLink>
    );
}
