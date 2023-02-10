import styles from './SwapIcon.module.css';
import { GoSync } from 'react-icons/go';
import { useState, useEffect } from 'react';

interface SwapIconProps {
  disabled?: boolean;
}

function SwapIcon({ disabled = false }: SwapIconProps) {
  const [rotating, setRotating] = useState<boolean>(false);

  const startRotating = () => setRotating(true);
  const stopRotating = () => setRotating(false);

  useEffect(() => {
    const timeout = setTimeout(stopRotating, 500);
    return () => clearTimeout(timeout);
  }, [rotating]);

  return (
    <button
      type="button"
      className={`${styles.swapButton} ${rotating ? styles.rotate : ''}`}
      onClick={startRotating}
      disabled={disabled}
    >
      <GoSync size={25} />
    </button>
  );
}

export default SwapIcon;
