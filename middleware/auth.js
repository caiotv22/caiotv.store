import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '@/global/providers';

export default function Auth({ children }) {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.isUserAuthenticated() ? router.push('/dashboard') : router.push('/dashboard/login');
  });

  return <>{children}</>;
}
