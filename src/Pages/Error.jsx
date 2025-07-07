import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="motion-preset-blur-down-md min-h-screen flex items-center pt-50 flex-col gap-4">
      <h1 className="text-9xl font-extrabold text-gradient-2">404</h1>
      <h2 className="text-3xl font-semibold text-white">Page Not Found</h2>
      <p className="text-xl text-gray-400 mt-2 text-center max-w-md">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <button className="mt-10 bg-gradient btn-anim py-2 px-4 font-semibold rounded-lg flex-center gap-4">
          <ArrowLeft size={20} strokeWidth={2} />
          Back to Home
        </button>
      </Link>
    </div>
  );
}
