import { Pagination } from './Pagination';

import styles from './LeftColumn.module.scss';

export default function LeftColumn() {
  return (
    <div className={styles.leftColumn}>
      <h1 className={styles.leftColumn__title}>Исторические даты</h1>
      <Pagination />
    </div>
  );
}
