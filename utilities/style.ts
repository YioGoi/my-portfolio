

// To toggle the overflow style of the body element
export function toggleBodyOverflow(hidden: boolean) {
  if (typeof document === 'undefined') return;

  if (hidden) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}
