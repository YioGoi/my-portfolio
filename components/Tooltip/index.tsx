'use client';

import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { FiX } from 'react-icons/fi';
import { FaHandPointLeft } from 'react-icons/fa';

interface TooltipProps {
    content: React.ReactNode;
    children: React.ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
    oneTime?: boolean;
    id?: string; // required if oneTime is true
}

export default function Tooltip({
    content,
    children,
    position = 'top',
    oneTime = false,
    id,
}: TooltipProps) {
    const [visible, setVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        if (oneTime && id) {
            const seen = localStorage.getItem(`tooltip_seen_${id}`);
            if (seen) {
                setDismissed(true);
            }
        }
    }, [oneTime, id]);

    const handleMouseEnter = () => {
        if (oneTime && dismissed) return;
        setVisible(true);
    };

    const handleMouseLeave = () => {
        if (!oneTime) {
            setVisible(false);
        }
    };

    const handleClose = () => {
        if (oneTime && id) {
            localStorage.setItem(`tooltip_seen_${id}`, 'true');
        }
        setVisible(false);
        setDismissed(true);
    };

    return (
        <div
            className={`${styles.tooltipContainer} ${styles[position]}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            {visible && !dismissed && (
                <div className={`${styles.tooltip} ${oneTime ? styles.oneTime : ''}`}>
                    {oneTime && (
                        <button className={styles.closeBtn} onClick={handleClose} aria-label="Dismiss tooltip">
                            <FiX />
                            <div className={styles.handHint}>
                                <FaHandPointLeft />
                            </div>
                        </button>
                    )}
                    {content}
                </div>
            )}
        </div>
    );
}
