import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ukulima',
  description: 'Accounting for your farming expenses has never been this easy',
  icons: {
    icon: '/farmer.png'
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
