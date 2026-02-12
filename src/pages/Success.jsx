import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#EDE8DF] flex justify-center">
      <div className="w-full max-w-md bg-cream min-h-screen px-6 py-16 shadow-xl text-center">

        <h1 className="text-3xl font-serif text-dark mb-4">
          Order Confirmed
        </h1>

        <p className="text-gray-500 mb-10">
          Your coffee is being prepared.
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-dark text-white py-3 px-6 rounded-2xl"
        >
          Back to Menu
        </button>

      </div>
    </div>
  );
}
