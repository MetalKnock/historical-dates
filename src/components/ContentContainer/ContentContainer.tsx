import { useEffect } from 'react';
import { TimePeriodSlider } from '../TimePeriodSlider';
import { HISTORICAL_DATES, INIT_PERIOD } from '../../data/mock-data';
import { Title } from '../UI/Title';
import { AnimatedNumber } from '../AnimatedNumber';
import { Circle } from '../Circle';
import { Navigation } from '../Navigation';
import { Pagination } from '../Pagination';
import useIsMobile from '../../hooks/useIsMobile';
import useDatesContext from '../../hooks/useDatesContext';
import styles from './ContentContainer.module.scss';

export default function ContentContainer() {
  const { setDates, setCurrentPeriod, currentPeriod } = useDatesContext();

  const { isMobile } = useIsMobile();

  useEffect(() => {
    setDates(HISTORICAL_DATES);
    setCurrentPeriod(INIT_PERIOD);
  }, [setDates, setCurrentPeriod]);

  return (
    <div className={styles.contentContainer}>
      <div className={styles.contentContainer__wrap}>
        <Title>Исторические даты</Title>
        <div className={styles.contentContainer__numbers}>
          <AnimatedNumber
            number={HISTORICAL_DATES[currentPeriod].years[0]}
            className={styles.contentContainer__number_iris}
          />
          <AnimatedNumber
            number={HISTORICAL_DATES[currentPeriod].years[1]}
            className={styles.contentContainer__number_fuchsia}
          />
        </div>
        {!isMobile && (
          <>
            <Circle />
            <nav className={styles.contentContainer__controls}>
              <Navigation />
            </nav>
          </>
        )}
      </div>
      <TimePeriodSlider />
      {isMobile && (
        <nav className={styles.contentContainer__controls}>
          <Navigation />
          <Pagination className={styles.contentContainer__pagination} />
        </nav>
      )}
    </div>
  );
}
