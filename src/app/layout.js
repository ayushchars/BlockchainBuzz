import "./globals.css";
import Header from './components/Header';

export const metadata = {
  title: 'Blockchain Buzz Podcast | Crypto & NFT Insights',
  description: 'Stay ahead in the world of crypto and NFTs with Blockchain Buzz Podcast. Expert interviews, latest trends, and deep insights into blockchain technology.',
  keywords: 'Blockchain Buzz, Crypto Podcast, NFT Podcast, Cryptocurrency Insights, Blockchain Trends, Web3, DeFi, Bitcoin, Ethereum, NFT News, Crypto Investing',
  author: 'Blockchain Buzz Team',
  robots: 'index, follow',
  og: {
    title: 'Blockchain Buzz Podcast | Crypto & NFT Insights',
    description: 'Join the Blockchain Buzz Podcast for expert insights, discussions on cryptocurrency, NFTs, DeFi, and the latest Web3 trends.',
    type: 'website',
    url: 'https://BlockchainBuzz.com',
    image: 'https://BlockchainBuzz/logo.jpg',
  },
  twitter: {
    card: 'Blockchain_Buzz',
    site: '@Blockchain_Buzz',
    title: 'Blockchain Buzz Podcast | Crypto & NFT Insights',
    description: 'Discover the latest trends in crypto, NFTs, and blockchain with the Blockchain Buzz Podcast.',
    image: 'https://BlockchainBuzz/twitter-image.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
            <Header />
        {children}
      </body>
    </html>
  );
}
