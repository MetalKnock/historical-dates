import { AnimatedNumber } from '../AnimatedNumber';
import { CircularSlider } from './CircularSlider';
import { LeftColumn } from './LeftColumn';
import styles from './TimePeriod.module.scss';
import { HISTORICAL_DATES } from '../../data/mock-data';
import useDatesContext from '../../hooks/useDatesContext';

export default function TimePeriod() {
  const { currentPeriod } = useDatesContext();

  return (
    <div className={styles.timePeriod}>
      <LeftColumn />
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
      <CircularSlider />
    </div>
  );
}
