import styles from './SwiperButton.module.scss';
import { ReactComponent as ArrowIcon } from './assets/arrow.svg';

interface SwiperButtonProps {
  isLeft?: boolean;
  isHidden?: boolean;
  onClick?: () => void;
}

export default function SwiperButton({ isLeft, isHidden, onClick }: SwiperButtonProps) {
  return (
    <button
      className={`${styles.swiperButton} ${isHidden && styles.swiperButton_hidden} ${
        isLeft ? styles.swiperButton_left : ''
      }`}
      type='button'
      onClick={onClick}
    >
      <ArrowIcon />
    </button>
  );
}

SwiperButton.defaultProps = {
  isLeft: false,
  isHidden: false,
  onClick: () => {},
};
