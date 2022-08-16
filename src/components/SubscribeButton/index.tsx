import { useSession, signIn } from 'next-auth/react'

import { api } from '@service/api';
import { getStripeJs } from '@service/stripe-js';

import styles from './styles.module.scss'
import { useRouter } from 'next/router';

interface SubscribeButtonProps {
  priceId: string;
}

const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  const session = useSession()
  const router = useRouter()

  async function handleSubscribe() {
    if (!session) {
      signIn('github')

      return
    }

    if (session.data?.activeSubscription) {
      router.push('/posts')

      return;
    }

    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data

      const stripe  = await getStripeJs()

      await stripe?.redirectToCheckout({ sessionId })
    } catch (err: any) {
      alert(err.message)
    }
  }

  return (
    <button
      type='button'
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
};

export default SubscribeButton;
