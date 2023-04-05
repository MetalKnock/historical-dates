import { Outlet } from 'react-router-dom';
import styles from './Root.module.scss';

export default function Root() {
  return (
    <div className='container'>
      <main className={styles.root}>
        <Outlet />
      </main>
    </div>
  );
}
