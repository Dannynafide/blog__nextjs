import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';

import styles from './styles.module.css';
export default function FollowUs() {
  return (
    <section>
      <p className="mb-2 font-bold ">Follow us</p>
      <div className="flex text-teal-500 text-xl">
        <span className={styles.border + ' text-sky-600'}>
          <span className={styles.noRotate + ' text-teal-400'}>
            <FaFacebookF />
          </span>
        </span>
        <span className={styles.border + ' text-rose-500'}>
          <span className={styles.noRotate + ' text-teal-400'}>
            <FaInstagram />
          </span>
        </span>
        <span className={styles.border + ' text-cyan-500'}>
          <span className={styles.noRotate + ' text-teal-400'}>
            <FaTwitter />
          </span>
        </span>
      </div>
    </section>
  );
}
