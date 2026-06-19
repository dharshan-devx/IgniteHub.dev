/**
 * Root loading UI for the Next.js App Router.
 *
 * This file is automatically picked up by Next.js and displayed as a
 * Suspense fallback while page segments are streaming in from the server.
 * It prevents blank-screen flashes during navigation.
 */
export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600" />
        <p className="text-sm text-muted-foreground animate-pulse">Loading…</p>
      </div>
    </div>
  );
}
