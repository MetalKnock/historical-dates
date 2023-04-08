import { useEffect } from 'react';
import { HistoricalEventList } from '../../components/HistoricalEventList';
import { TimePeriod } from '../../components/TimePeriod';
import styles from './Main.module.scss';
import useDatesContext from '../../hooks/useDatesContext';
import { HISTORICAL_DATES, INIT_PERIOD } from '../../data/mock-data';

export default function Main() {
  const { setDates, setCurrentPeriod } = useDatesContext();

  useEffect(() => {
    setDates(HISTORICAL_DATES);
    setCurrentPeriod(INIT_PERIOD);
  }, [setDates, setCurrentPeriod]);

  return (
    <div className={styles.main}>
      <TimePeriod />
      <HistoricalEventList />
    </div>
  );
}
