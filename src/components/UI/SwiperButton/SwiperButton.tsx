import styles from './SwiperButton.module.scss';
import arrowIcon from './assets/arrow.svg';

interface SwiperButtonProps {
  typeButton: 'left' | 'right';
  isHidden: boolean;
  onClick: () => void;
}

export default function SwiperButton({ typeButton, isHidden, onClick }: SwiperButtonProps) {
  return (
    <button
      className={`${styles.swiperButton} ${isHidden && styles.swiperButton_hidden}`}
      type='button'
      onClick={onClick}
    >
      <img
        className={`${styles.swiperButton__icon} ${
          typeButton === 'left' && styles.swiperButton__icon_left
        }`}
        src={arrowIcon}
        alt='arrow'
      />
    </button>
  );
}
