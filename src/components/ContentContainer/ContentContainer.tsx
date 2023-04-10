import { useEffect } from 'react';
import { TimePeriod } from '../TimePeriod';
import { HistoricalEventSlider } from '../HistoricalEventSlider';
import { HISTORICAL_DATES, INIT_PERIOD } from '../../data/mock-data';
import useDatesContext from '../../hooks/useDatesContext';
import styles from './ContentContainer.module.scss';
import useIsMobile from '../../hooks/useIsMobile';

export default function ContentContainer() {
  const { setDates, setCurrentPeriod } = useDatesContext();
  const { isMobile } = useIsMobile();

  useEffect(() => {
    setDates(HISTORICAL_DATES);
    setCurrentPeriod(INIT_PERIOD);
  }, [setDates, setCurrentPeriod]);

  return (
    <div className={styles.contentContainer}>
      <TimePeriod />
      {!isMobile && <HistoricalEventSlider />}
    </div>
  );
}
