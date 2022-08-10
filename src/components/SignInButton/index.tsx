import type { NextPage } from 'next'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

const SignInButton: NextPage = () => {
  const isUserLoggedIn = true;

  return (
    <button type='button' className={styles.signInButton}>
      <FaGithub 
        color={isUserLoggedIn ? '#04D361' : '#EBA417'} 
      />
      {isUserLoggedIn ? 'Ives Moreira' : 'Sign in with GitHub'}
      {isUserLoggedIn && <FiX color='#737380' className={styles.closeIcon} />}
    </button>
  );
};

export default SignInButton;
