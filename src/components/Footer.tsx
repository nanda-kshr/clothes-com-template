import Link from 'next/link'

const navigation = {
  shop: [
    { name: 'New Arrivals', href: '/new-arrivals' },
    { name: 'Best Sellers', href: '/best-sellers' },
    { name: 'Sale', href: '/sale' },
    { name: 'Collections', href: '/collections' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Store Locator', href: '/stores' },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Shipping', href: '/shipping' },
    { name: 'Returns', href: '/returns' },
    { name: 'Size Guide', href: '/size-guide' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'rgb(17 24 39)', color: 'white' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '3rem 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
          <div>
            <h3 style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Shop</h3>
            <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navigation.shop.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} style={{ color: 'rgb(156 163 175)', fontSize: '0.875rem' }}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Company</h3>
            <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} style={{ color: 'rgb(156 163 175)', fontSize: '0.875rem' }}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Support</h3>
            <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} style={{ color: 'rgb(156 163 175)', fontSize: '0.875rem' }}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Legal</h3>
            <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} style={{ color: 'rgb(156 163 175)', fontSize: '0.875rem' }}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ marginTop: '3rem', borderTop: '1px solid rgb(31 41 55)', paddingTop: '2rem' }}>
          <p style={{ color: 'rgb(156 163 175)', fontSize: '0.875rem', textAlign: 'center' }}>
            © {new Date().getFullYear()} Kaana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 