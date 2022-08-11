import { useSession, signIn } from 'next-auth/react'

import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string;
}

const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  const session = useSession()

  function handleSubscribe() {
    if (!session) {
      signIn('github')

      return
    }

    
  }

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
