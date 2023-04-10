import styles from './Category.module.scss';

interface CategoryProps {
  category: string;
  className?: string;
}

export default function Category({ category, className }: CategoryProps) {
  return <span className={`${styles.category} ${className}`}>{category}</span>;
}

Category.defaultProps = { className: '' };
