import { AnimatedNumber } from '../AnimatedNumber';
import { CircularSlider } from './CircularSlider';
import { HISTORICAL_DATES } from '../../data/mock-data';
import { Title } from '../UI/Title';
import { Navigation } from '../Navigation';
import useDatesContext from '../../hooks/useDatesContext';
import styles from './TimePeriod.module.scss';
import { HistoricalEventSlider } from '../HistoricalEventSlider';
import useIsMobile from '../../hooks/useIsMobile';
import { Pagination } from '../Pagination';

export default function TimePeriod() {
  const { currentPeriod } = useDatesContext();

  const { isMobile } = useIsMobile();

  return (
    <div className={styles.timePeriod}>
      <Title>Исторические даты</Title>
      <div className={styles.timePeriod__numbers}>
        <AnimatedNumber
          number={HISTORICAL_DATES[currentPeriod].years[0]}
          className={styles.timePeriod__number_iris}
        />
        <AnimatedNumber
          number={HISTORICAL_DATES[currentPeriod].years[1]}
          className={styles.timePeriod__number_fuchsia}
        />
      </div>
      {!isMobile && <CircularSlider />}
      {isMobile && <HistoricalEventSlider className={styles.timePeriod__historicalSlider} />}
      <nav className={styles.timePeriod__controls}>
        <Navigation />
        {isMobile && <Pagination className={styles.timePeriod__pagination} />}
      </nav>
    </div>
  );
}
