import { ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ActiveDevicesList } from '@/components/ActiveDevices';
import { useDevices } from '@/hooks/useDevices';
import { useAuth } from '@/hooks/useAuth';

/** Shown instead of the app when a third device signs in: choose which of the two active devices to sign out. */
export default function DeviceLimit() {
  const { max } = useDevices();
  const { signOut } = useAuth();
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md glass-card p-6 sm:p-8 animate-fade-in">
        <div className="text-center mb-5">
          <span className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-2xl bg-destructive/10 text-destructive"><ShieldAlert className="h-7 w-7" /></span>
          <h1 className="text-xl font-bold">Faol qurilmalar</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Akkauntga bir vaqtda faqat <b>{max} ta</b> qurilmadan kirish mumkin. Davom etish uchun quyidagilardan birini chiqarib yuboring — shundan so'ng bu qurilma darhol kiradi.
          </p>
        </div>
        <ActiveDevicesList />
        <p className="mt-4 text-xs text-muted-foreground text-center">Bu qurilmalar sizniki emasmi? Ularni chiqarib yuboring — akkauntingiz xavfsiz bo'ladi.</p>
        <Button variant="ghost" className="mt-3 w-full" onClick={() => void signOut()}>Bu qurilmadan chiqish</Button>
      </div>
    </div>
  );
}
