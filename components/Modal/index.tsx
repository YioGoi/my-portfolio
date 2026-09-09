'use client';

import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from './index.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <div className={styles.modal} onClick={onClose} data-object-interaction-blocked>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Close image preview">
          ×
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}
