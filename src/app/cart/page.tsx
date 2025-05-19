import { TrashIcon } from '@heroicons/react/24/outline'

const cartItems = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 29.99,
    quantity: 2,
    size: 'M',
    color: 'White',
    image: '/images/tshirt.jpg'
  },
  {
    id: 2,
    name: 'Slim Fit Jeans',
    price: 79.99,
    quantity: 1,
    size: '32',
    color: 'Blue',
    image: '/images/jeans.jpg'
  }
]

export default function CartPage() {
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 5.99
  const total = subtotal + shipping

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
              <div className="w-24 h-24 bg-gray-100 rounded-lg" />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  {item.color} / {item.size}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button className="px-2 py-1 border rounded">-</button>
                    <span>{item.quantity}</span>
                    <button className="px-2 py-1 border rounded">+</button>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    <button className="text-gray-400 hover:text-red-500">
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg space-y-4">
            <h2 className="text-xl font-semibold">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button className="btn-primary w-full">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </main>
  )
} 