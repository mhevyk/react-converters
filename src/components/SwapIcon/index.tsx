import './SwapIcon.css';
import { GoSync } from 'react-icons/go';
import { useState } from 'react';
import useConditionalTimeout from '../../hooks/useConditionalTimeout';

interface SwapIconProps {
  onClick: () => void;
  disabled?: boolean;
}

function SwapIcon({ disabled = false, onClick }: SwapIconProps) {
  const [rotating, setRotating] = useState<boolean>(false);

  const startRotating = () => setRotating(true);
  const stopRotating = () => setRotating(false);

  const ICON_ROTATING_DURATION_MS: number = 500;
  const MEASUREMENT_UNITS_SWAP_TIME_MS: number =
    ICON_ROTATING_DURATION_MS * (2 / 3);

  useConditionalTimeout(stopRotating, ICON_ROTATING_DURATION_MS, rotating);
  useConditionalTimeout(onClick, MEASUREMENT_UNITS_SWAP_TIME_MS, rotating);

  return (
    <button
      type="button"
      className={`swap-button ${rotating ? 'rotate' : ''}`}
      onClick={startRotating}
      disabled={disabled}
    >
      <GoSync size={25} />
    </button>
  );
}

export default SwapIcon;
