"use client";

import { Button } from "@micro-store/ui/components/button";
import { clearTokens } from "@micro-store/utils/cookies";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const logout = () => {
    clearTokens();
    router.push("/login");
  };
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Storefront</h1>
        <Button size="sm" onClick={logout}>
          Logout
        </Button>
      </div>
    </div>
  );
}
