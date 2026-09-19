export function LoadingScreen() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto">
          <div className="absolute inset-0 blur-xl bg-primary/20 rounded-full animate-pulse"></div>
          <img src="/logo.png" alt="" className="w-16 h-16 object-contain relative animate-pulse" />
        </div>
        <p className="mt-4 text-sm font-medium text-muted-foreground">Loading Scorify…</p>
      </div>
    </div>
  );
}
