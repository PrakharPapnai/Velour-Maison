import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { id: 1, name: "Velvet Cappuccino",description: "Single origin espresso with steamed oat milk", price: 65 },
  { id: 2, name: "Golden Saffron Latte",description: "Infused with Persian saffron & organic honey", price: 78 },
  { id: 3, name: "Maison Croissant",description: "Buttery French-style croissant", price: 52 },
  { id: 4, name: "Midnight Mocha",description: "Dark chocolate & premium Colombian roast", price: 72 },
];

export default function Menu() {
  const { addToCart, cart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#EDE8DF] flex justify-center">
      <div className="w-full max-w-md bg-cream min-h-screen px-5 py-6 shadow-xl">

        <h1 className="text-3xl font-serif text-center mb-4">
          Velouré Maison
        </h1>
        <p className="text-center text-sm text-gray-500 mb-8">
         A refined coffee experience
       </p>

        <div className="space-y-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 shadow-sm"
            >
              <div className="flex justify-between">
                <div>
                 <h2 className="font-serif text-lg text-dark">
                   {item.name}
                 </h2>
                 <p className="text-sm text-gray-500 mt-1">
                   {item.description}
                 </p>
              </div>
                <span className="text-gold">₹{item.price}</span>
              </div>
              

              <button
                onClick={() => addToCart(item)}
                className="mt-4 w-full bg-dark text-white py-2 rounded-xl"
              >
                Add to Order
              </button>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="fixed bottom-5 left-0 right-0 px-5 max-w-md mx-auto">
            <button
              onClick={() => navigate("/cart")}
              className="w-full bg-dark text-white py-3 rounded-2xl shadow-lg"
            >
              View Order ({cart.length})
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
