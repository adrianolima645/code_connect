import { Prompt } from 'next/font/google';
import { Aside } from '@/components/Aside';
import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Loteca App",
  description: "App for Loteca bets.",
};

const prompt = Prompt({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br' className={prompt.className}>
      <body>
        <div className='app-container'>
          <div>
            <Aside />
          </div>
          <div className='main-content'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
