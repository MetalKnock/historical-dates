import { formatIntoTwoDigitsString } from '../../shared/utils/common';
import { Button } from '../UI/Button';
import { ReactComponent as ArrowIcon } from './assets/arrow.svg';
import useDatesContext from '../../hooks/useDatesContext';
import styles from './Navigation.module.scss';

export default function Navigation() {
  const { currentPeriod, dates, swiper } = useDatesContext();

  return (
    <div className={styles.navigation}>
      {dates && (
        <span className={styles.navigation__span}>{`${formatIntoTwoDigitsString(
          currentPeriod + 1
        )}/${formatIntoTwoDigitsString(dates.length)}`}</span>
      )}

      <nav className={styles.navigation__buttons}>
        <Button
          className={styles.navigation__button}
          disabled={!dates || currentPeriod === 0}
          onClick={() => swiper?.slidePrev()}
        >
          <ArrowIcon className={styles.button__icon} />
        </Button>
        <Button
          className={`${styles.navigation__button} ${styles.navigation__button_right}`}
          disabled={!dates || currentPeriod === dates.length - 1}
          onClick={() => swiper?.slideNext()}
        >
          <ArrowIcon className={styles.button__icon} />
        </Button>
      </nav>
    </div>
  );
}
