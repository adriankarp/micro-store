import { Button } from "@micro-store/ui/components/button";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Storefront</h1>
        <a href="/">
          <Button size="sm">Go to shell</Button>
        </a>
      </div>
    </div>
  );
}
