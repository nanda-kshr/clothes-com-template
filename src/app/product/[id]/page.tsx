import { ShoppingBagIcon, HeartIcon } from '@heroicons/react/24/outline'
import React from 'react'

const sizes = ['XS', 'S', 'M', 'L', 'XL']

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  // Dummy product data
  const product = {
    id:  React.use(params),
    name: 'Classic White T-Shirt',
    price: 29.99,
    description: 'A timeless white t-shirt made from 100% organic cotton. Perfect for everyday wear, this essential piece features a comfortable fit and excellent durability.',
    images: [
      '/images/tshirt-1.jpg',
      '/images/tshirt-2.jpg',
      '/images/tshirt-3.jpg',
    ],
    sizes: sizes,
    colors: ['White', 'Black', 'Gray'],
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square rounded-lg bg-gray-100 overflow-hidden">
            <div className="absolute inset-0 bg-black/5" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((image, index) => (
              <div key={index} className="aspect-square rounded-lg bg-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-black/5" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-bold">${product.price}</p>
          <p className="text-gray-600">{product.description}</p>

          {/* Color Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">Color</h3>
            <div className="mt-2 flex space-x-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className="px-4 py-2 border rounded-md hover:border-primary-600 hover:text-primary-600"
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">Size</h3>
            <div className="mt-2 grid grid-cols-5 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border rounded-md hover:border-primary-600 hover:text-primary-600"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex space-x-4">
            <button className="btn-primary flex-1 flex items-center justify-center">
              <ShoppingBagIcon className="w-5 h-5 mr-2" />
              Add to Cart
            </button>
            <button className="btn-secondary">
              <HeartIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </main>
  )
} 