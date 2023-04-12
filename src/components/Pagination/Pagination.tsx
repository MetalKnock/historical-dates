import useDatesContext from '../../hooks/useDatesContext';
import styles from './Pagination.module.scss';

interface PaginationProps {
  className?: string;
}

export default function Pagination({ className }: PaginationProps) {
  const { dates, currentPeriod, swiper } = useDatesContext();

  return (
    <ul className={`${styles.pagination__list} ${className}`}>
      {dates?.map((date, i) => (
        <li className={`${styles.pagination__item} `} key={date.id}>
          <button
            className={`${styles.pagination__button} ${
              currentPeriod === i ? styles.pagination__button_active : ''
            }`}
            type='button'
            onClick={() => swiper?.slideTo(i)}
          >
            {}
          </button>
        </li>
      ))}
    </ul>
  );
}

Pagination.defaultProps = {
  className: '',
};
