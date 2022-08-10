import type { NextPage } from 'next'

import { SignInButton } from '@components/index'

import styles from './styles.module.scss'

const Header: NextPage = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />

        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
};

export default Header;
