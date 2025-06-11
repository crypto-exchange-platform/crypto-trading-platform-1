import { FC } from "react";

interface SignupModalProps {
  onClose: () => void;
}

export const SignupModal: FC<SignupModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 overflow-auto">
      <div className="bg-gradient-to-b from-[#0a1f1c] via-[#082c2b] to-[#0a1f1c] text-white w-full max-w-xl p-6 rounded-md shadow-lg relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-xl">×</button>
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="First Name" className="border p-2 rounded" />
          <input type="text" placeholder="Last Name" className="border p-2 rounded" />
          <input type="text" placeholder="Username" className="border p-2 rounded" />
          <input type="email" placeholder="Email" className="border p-2 rounded" />
          <input type="tel" placeholder="Phone Number" className="border p-2 rounded" />
          <input type="date" placeholder="Birthdate" className="border p-2 rounded" />
          <input type="text" placeholder="Country" className="border p-2 rounded" />
          <input type="text" placeholder="Language" className="border p-2 rounded" />
          <input type="password" placeholder="Password" className="border p-2 rounded col-span-full" />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded col-span-full hover:bg-gray-900"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
 