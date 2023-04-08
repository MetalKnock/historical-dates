import useDatesContext from '../../../../hooks/useDatesContext';
import { formatIntoTwoDigitsString } from '../../../../shared/utils/common';
import { Button } from '../../../UI/Button';
import { ReactComponent as ArrowIcon } from './assets/arrow.svg';
import styles from './Pagination.module.scss';

export default function Pagination() {
  const { currentPeriod, dates, increasePeriod, decreasePeriod } = useDatesContext();

  return (
    <div className={styles.pagination}>
      {dates && (
        <span className={styles.pagination__span}>{`${formatIntoTwoDigitsString(
          currentPeriod + 1
        )}/${formatIntoTwoDigitsString(dates.length)}`}</span>
      )}

      <nav className={styles.pagination__buttons}>
        <Button
          className={styles.pagination__button}
          disabled={!dates || currentPeriod === 0}
          onClick={increasePeriod}
        >
          <ArrowIcon />
        </Button>
        <Button
          className={`${styles.pagination__button} ${styles.pagination__button_right}`}
          disabled={!dates || currentPeriod === dates.length - 1}
          onClick={decreasePeriod}
        >
          <ArrowIcon />
        </Button>
      </nav>
    </div>
  );
}
