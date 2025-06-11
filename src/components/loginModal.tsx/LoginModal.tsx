import { FC } from "react";

interface LoginModalProps {
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-gradient-to-b from-[#0a1f1c] via-[#082c2b] to-[#0a1f1c]text-black w-full max-w-md p-6 rounded-md shadow-lg relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-xl">×</button>
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
          />
          <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-900">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
