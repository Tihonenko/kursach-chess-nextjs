import { DM_Sans, Silkscreen } from 'next/font/google';

import Providers from '@/components/Provider/Providers';

import Footer from './_footer/Footer';
import Header from './_header/Header';
import './globals.scss';

const silkscreen = Silkscreen({
	subsets: ['latin'],
	variable: '--main-font',
	weight: '400',
});

const dm_sans = DM_Sans({
	subsets: ['latin'],
	variable: '--text-font',
});

export const metadata = {
	title: 'CHECKMATE',
	description: 'Chess club',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`${silkscreen.className} ${silkscreen.variable} ${dm_sans.className} ${dm_sans.variable} bg-lightBlack`}
			>
				<Providers>
					<Header />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
