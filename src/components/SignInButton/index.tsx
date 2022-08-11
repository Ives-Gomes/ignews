import type { NextPage } from 'next'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/react'

import styles from './styles.module.scss'

const SignInButton: NextPage = () => {
  const session = useSession();

  return (
    <button 
      type='button' 
      className={styles.signInButton}
      onClick={session.data ? () => signOut() : () => signIn('github') }
    >
      <FaGithub 
        color={session.data ? '#04D361' : '#EBA417'} 
      />
      {session.data ? session.data.user?.name : 'Sign in with GitHub'}
      {session.data && <FiX color='#737380' className={styles.closeIcon} />}
    </button>
  );
};

export default SignInButton;
