import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";
import { FaStar, FaTrash, FaMinus, FaPlus } from 'react-icons/fa';

const Cart = () => {
  // Initial cart state with sample products

  const { cartItems, getTotalPrice, clearCart, removeFromCart } = useCart();
  const totalPrice = getTotalPrice();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-gray-600">Start adding items to your cart!</p>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {cartItems.map((product) => (
                <CartItem key={product.id} product={product} removeFromCart={removeFromCart}/>
              ))}
            </div>

            {/* Clear Cart Button */}
            <div className="mt-4 text-right">
              <button
                onClick={clearCart}
                className="text-red-600 hover:text-red-800 font-medium flex items-center justify-end w-full"
              >
                <FaTrash className="mr-2" />
                Clear Entire Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 h-fit sticky top-4">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>
                    Items (
                    {cartItems.reduce(
                      (count, item) => count + item.quantity,
                      0
                    )}
                    )
                  </span>
                  <span>${totalPrice}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <div className="border-t pt-4 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${totalPrice}</span>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg mt-8 transition duration-200">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
