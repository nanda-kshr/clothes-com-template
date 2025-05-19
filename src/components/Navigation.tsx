import Link from 'next/link'
import { ShoppingBagIcon, UserIcon, HeartIcon } from '@heroicons/react/24/outline'

export default function Navigation() {
  return (
    <nav style={{ backgroundColor: 'white', boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'rgb(124 58 237)' }}>
              Kaana
            </Link>
            <div style={{ display: 'none', marginLeft: '1.5rem', gap: '2rem' }}>
              <Link href="/shop" style={{ color: 'rgb(17 24 39)', padding: '0.5rem 0.75rem', fontSize: '0.875rem', fontWeight: '500' }}>
                Shop
              </Link>
              <Link href="/new-arrivals" style={{ color: 'rgb(17 24 39)', padding: '0.5rem 0.75rem', fontSize: '0.875rem', fontWeight: '500' }}>
                New Arrivals
              </Link>
              <Link href="/sale" style={{ color: 'rgb(17 24 39)', padding: '0.5rem 0.75rem', fontSize: '0.875rem', fontWeight: '500' }}>
                Sale
              </Link>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button style={{ color: 'rgb(17 24 39)' }}>
              <HeartIcon style={{ width: '1.5rem', height: '1.5rem' }} />
            </button>
            <button style={{ color: 'rgb(17 24 39)' }}>
              <ShoppingBagIcon style={{ width: '1.5rem', height: '1.5rem' }} />
            </button>
            <button style={{ color: 'rgb(17 24 39)' }}>
              <UserIcon style={{ width: '1.5rem', height: '1.5rem' }} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 