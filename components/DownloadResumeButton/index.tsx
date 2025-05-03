'use client';

import { useState, useEffect } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from '@/components/ResumePDF';
import { TbDownload } from 'react-icons/tb';
import { isSmallLaptop } from '@/utilities/responsive';


import styles from './index.module.scss';

export default function DownloadResumeButton() {
    const [_isSmallLaptop, _setIsSmallLaptop] = useState<boolean | null>(null);

    useEffect(() => {
        const handleResize = () => {
            _setIsSmallLaptop(isSmallLaptop());
        }
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [_isSmallLaptop]);

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

    return (
        <PDFDownloadLink document={<ResumePDF />} fileName="Yigit-Dogan-CV.pdf" className={styles.downloadButton}>
            {({ loading }) =>
                <button>
                    <TbDownload className={styles.downloadIcon} />
                    <ButtonText loading={loading} />
                </button>
            }
        </PDFDownloadLink>
    );
}
