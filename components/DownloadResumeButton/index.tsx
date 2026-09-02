'use client';

import { useState } from 'react';
import { TbDownload } from 'react-icons/tb';

import styles from './index.module.scss';

export default function DownloadResumeButton() {
  const [isPreparing, setIsPreparing] = useState(false);

  const downloadResume = async () => {
    if (isPreparing) return;

    setIsPreparing(true);

    try {
      const [{ pdf }, { default: ResumePDF }] = await Promise.all([
        import('@react-pdf/renderer'),
        import('@/components/ResumePDF'),
      ]);
      const blob = await pdf(<ResumePDF />).toBlob();
      const downloadUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');

      link.href = downloadUrl;
      link.download = 'Yigit-Dogan-Resume.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(downloadUrl);
    } finally {
      setIsPreparing(false);
    }
  };

  return (
    <button
      type="button"
      className={styles.downloadButton}
      onClick={downloadResume}
      disabled={isPreparing}
    >
      <TbDownload className={styles.downloadIcon} aria-hidden="true" />
      <span className={styles.longLabel}>{isPreparing ? 'Preparing…' : 'Download CV'}</span>
      <span className={styles.shortLabel}>{isPreparing ? '…' : 'CV'}</span>
    </button>
  );
}
