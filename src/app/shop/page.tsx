import { ShoppingBagIcon, HeartIcon } from '@heroicons/react/24/outline'

const products = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 29.99,
    image: '/images/tshirt.jpg',
    category: 'Tops'
  },
  {
    id: 2,
    name: 'Slim Fit Jeans',
    price: 79.99,
    image: '/images/jeans.jpg',
    category: 'Bottoms'
  },
  {
    id: 3,
    name: 'Summer Dress',
    price: 59.99,
    image: '/images/dress.jpg',
    category: 'Dresses'
  },
  {
    id: 4,
    name: 'Casual Jacket',
    price: 129.99,
    image: '/images/jacket.jpg',
    category: 'Outerwear'
  },
  {
    id: 5,
    name: 'Striped Sweater',
    price: 49.99,
    image: '/images/sweater.jpg',
    category: 'Tops'
  },
  {
    id: 6,
    name: 'Leather Boots',
    price: 149.99,
    image: '/images/boots.jpg',
    category: 'Footwear'
  },
  {
    id: 7,
    name: 'Denim Shorts',
    price: 39.99,
    image: '/images/shorts.jpg',
    category: 'Bottoms'
  },
  {
    id: 8,
    name: 'Floral Blouse',
    price: 45.99,
    image: '/images/blouse.jpg',
    category: 'Tops'
  }
]

const categories = ['All', 'Tops', 'Bottoms', 'Dresses', 'Outerwear', 'Footwear']
const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest']

export default function ShopPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters */}
        <div className="w-full md:w-64 space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Categories</h3>
            <div className="mt-4 space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="block w-full text-left px-2 py-1 text-sm text-gray-600 hover:text-primary-600"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Price Range</h3>
            <div className="mt-4 space-y-2">
              <input
                type="range"
                min="0"
                max="200"
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>$0</span>
                <span>$200</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">All Products</h2>
            <select className="input-field w-48">
              {sortOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
                  <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                    <HeartIcon className="w-5 h-5" />
                  </button>
                  <button className="absolute bottom-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                    <ShoppingBagIcon className="w-5 h-5" />
                  </button>
                </div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.category}</p>
                <p className="text-lg font-bold mt-2">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 