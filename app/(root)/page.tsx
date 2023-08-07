//app/page.tsx
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton showName afterSignOutUrl="/" />
    </div>
  );
}
