import styles from './logo.module.css';

export default function Logo() {
  return (
    <div className="flex items-center text-3xl font-bold ">
      <div className={styles.logo + ' ' + styles.rotate}>
        <div className={styles.noRotate}>B</div>
      </div>
      <div>BLOG</div>
    </div>
  );
}

export const LogoIcon = () => (
  <div className="flex items-center text-3xl font-bold ">
    <div className={styles.logo + ' ' + styles.rotate}>
      <div className={styles.noRotate}>B</div>
    </div>
  </div>
);
