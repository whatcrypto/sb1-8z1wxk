import { MemberstackProvider } from '@memberstack/react';
import { ReactNode } from 'react';

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <MemberstackProvider config={{ publicKey: 'app_cm0blq3ox00bu0sv8fvk20apa' }}>
      {children}
    </MemberstackProvider>
  );
}