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
    autoShow?: boolean;
    id?: string; // required if oneTime is true
    resumeTooltip?: boolean;
    objectsTooltip?: boolean;
}

export default function Tooltip({
    content,
    children,
    position = 'top',
    oneTime = false,
    autoShow = false,
    id,
    resumeTooltip = false,
    objectsTooltip = false,
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

        
        if (autoShow) {
            // Auto show immediately
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
                setDismissed(true);
                localStorage.setItem(`tooltip_seen_${id}`, 'true');
            }, 5000); // 5s duration

            return () => clearTimeout(timer);
        }
    }, [oneTime, id, autoShow]);

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
            <span className={styles.trigger}>{children}</span>
            {visible && !dismissed && (
                <div 
                className={`
                    ${styles.tooltip}
                    ${oneTime ? styles.oneTime : ''}
                    ${autoShow ? styles.autoShowBounce : ''}
                    ${resumeTooltip ? styles.resumeTooltip : ''}
                    ${objectsTooltip ? styles.objectsTooltip : ''}
                  `}
                >
                    {oneTime && !resumeTooltip && (
                        <button className={styles.closeBtn} onClick={handleClose} aria-label="Dismiss tooltip">
                            <FiX />
                            <div className={styles.handHint}>
                                <FaHandPointLeft />
                            </div>
                        </button>
                    )}
                    <article>
                        {content}
                    </article>
                </div>
            )}
        </div>
    );
}
