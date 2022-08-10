import type { NextPage } from 'next'

import styles from './styles.module.scss'

const SubscribeButton: NextPage = () => {
  return (
    <button
      type='button'
      className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  );
};

export default SubscribeButton;
