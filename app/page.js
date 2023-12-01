// Страница по дефолту, роут создается автоматически в папке app
//если файл называется page.js
import FAQ from './_components/Section/faq/FAQ';
import Gallery from './_components/Section/gallery/Gallery';
import Hero from './_components/Section/hero/Hero';
import Prices from './_components/Section/prices/Prices';
import Tournaments from './_components/Section/tournaments/Tournaments';
import Welcome from './_components/Section/welcome/Welcome';

export default function Home() {
	return (
		<main>
			<Hero />
			<Welcome />
			<Gallery />
			<Tournaments />
			<FAQ />
			<Prices />
		</main>
	);
}
