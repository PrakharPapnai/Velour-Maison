import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { getTotal } = useCart();

  const handlePayment = () => {
    setTimeout(() => {
      navigate("/success");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#EDE8DF] flex justify-center">
      <div className="w-full max-w-md bg-cream min-h-screen px-6 py-8 shadow-xl">

        <h1 className="text-2xl font-serif mb-6">
          Secure Payment
        </h1>

        <div className="bg-white p-5 rounded-2xl shadow-sm">
          <p className="text-sm text-gray-500 mb-2">
            Order Total
          </p>
          <p className="text-xl font-medium">
            ${getTotal().toFixed(2)}
          </p>
        </div>

        <button
          onClick={handlePayment}
          className="mt-8 w-full bg-dark text-white py-3 rounded-2xl"
        >
          Pay Securely
        </button>

        <p className="text-xs text-gray-400 mt-4 text-center">
          (Prototype Payment Gateway)
        </p>

      </div>
    </div>
  );
}
