import Image from "next/image";
import Link from "next/link";
import { ShoppingBagIcon, HeartIcon } from "@heroicons/react/24/outline";

const featuredProducts = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 29.99,
    image: "/images/tshirt.jpg",
    category: "Tops"
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 79.99,
    image: "/images/jeans.jpg",
    category: "Bottoms"
  },
  {
    id: 3,
    name: "Summer Dress",
    price: 59.99,
    image: "/images/dress.jpg",
    category: "Dresses"
  },
  {
    id: 4,
    name: "Casual Jacket",
    price: 129.99,
    image: "/images/jacket.jpg",
    category: "Outerwear"
  }
];

export default function Home() {
  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative',
        height: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(17 24 39)',
        color: 'white'
      }}>
        <div style={{ 
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 10
        }} />
        <div style={{ 
          position: 'relative',
          zIndex: 20,
          textAlign: 'center',
          padding: '0 1rem'
        }}>
          <h1 style={{ 
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            Summer Collection 2024
          </h1>
          <p style={{ 
            fontSize: '1.25rem',
            marginBottom: '2rem'
          }}>
            Discover the latest trends in fashion
          </p>
          <Link href="/shop" className="btn-primary" style={{ fontSize: '1.125rem', padding: '0.75rem 2rem' }}>
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ 
        padding: '4rem 1rem',
        maxWidth: '80rem',
        margin: '0 auto'
      }}>
        <h2 style={{ 
          fontSize: '1.875rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          Featured Products
        </h2>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: '2rem'
        }}>
          {featuredProducts.map((product) => (
            <div key={product.id} style={{ position: 'relative' }}>
              <div style={{ 
                position: 'relative',
                aspectRatio: '1',
                overflow: 'hidden',
                borderRadius: '0.5rem',
                backgroundColor: 'rgb(243 244 246)',
                marginBottom: '1rem'
              }}>
                <div style={{ 
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.05)'
                }} />
                <button style={{ 
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  padding: '0.5rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)'
                }}>
                  <HeartIcon style={{ width: '1.25rem', height: '1.25rem' }} />
                </button>
                <button style={{ 
                  position: 'absolute',
                  bottom: '1rem',
                  right: '1rem',
                  padding: '0.5rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)'
                }}>
                  <ShoppingBagIcon style={{ width: '1.25rem', height: '1.25rem' }} />
                </button>
              </div>
              <h3 style={{ 
                fontSize: '1.125rem',
                fontWeight: '600'
              }}>
                {product.name}
              </h3>
              <p style={{ color: 'rgb(75 85 99)' }}>
                {product.category}
              </p>
              <p style={{ 
                fontSize: '1.125rem',
                fontWeight: 'bold',
                marginTop: '0.5rem'
              }}>
                ${product.price}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section style={{ 
        padding: '4rem 1rem',
        backgroundColor: 'rgb(249 250 251)'
      }}>
        <div style={{ 
          maxWidth: '80rem',
          margin: '0 auto'
        }}>
          <h2 style={{ 
            fontSize: '1.875rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            Shop by Category
          </h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '2rem'
          }}>
            {['Tops', 'Bottoms', 'Dresses'].map((category) => (
              <Link
                key={category}
                href={`/category/${category.toLowerCase()}`}
                style={{ 
                  position: 'relative',
                  height: '16rem',
                  borderRadius: '0.5rem',
                  overflow: 'hidden'
                }}
              >
                <div style={{ 
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.3)'
                }} />
                <div style={{ 
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <h3 style={{ 
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'white'
                  }}>
                    {category}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
