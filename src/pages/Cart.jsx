import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, updateQuantity, getTotal } = useCart();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#EDE8DF] flex justify-center">
      <div className="w-full max-w-md bg-cream min-h-screen px-5 py-6 shadow-xl">
        <h1 className="text-2xl font-serif mb-6">Your Order</h1>

        {cart.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-xl mb-4">
            <div className="flex justify-between">
              <h2>{item.name}</h2>
              <span>₹{item.price * item.quantity}</span>
            </div>

            <div className="flex items-center mt-3 space-x-4">
              <button
                onClick={() => updateQuantity(item.id, -1)}
                className="px-3 py-1 bg-softgray rounded"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => updateQuantity(item.id, 1)}
                className="px-3 py-1 bg-softgray rounded"
              >
                +
              </button>
            </div>
          </div>
        ))}

        <div className="mt-8 border-t pt-4">
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>₹{getTotal().toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={() => navigate("/checkout")}
          className="mt-6 w-full bg-dark text-white py-3 rounded-2xl"
        >
          Proceed to Payment
        </button>

        <button
          onClick={() => navigate("/")}
          className="mt-3 w-full text-sm text-gray-500"
        >
          Back to Menu
        </button>
      </div>
    </div>
  );
}
