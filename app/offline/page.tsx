import Link from "next/link";
import { WifiOff } from "lucide-react";

const OfflinePage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-5 bg-black px-6 text-center text-white">
      <WifiOff size={64} className="text-red-600" />

      <h1 className="text-3xl font-bold">You're Offline!</h1>

      <p className="max-w-md text-gray-400">
        It looks like you've lost your internet connection. Please check your
        connection and try again.
      </p>

      <Link
        href="/"
        className="rounded-lg bg-red-800 px-6 py-3 font-medium transition hover:bg-red-700"
      >
        Back to Home
      </Link>
    </main>
  );
};

export default OfflinePage;
