// Страница по дефолту, роут создается автоматически в папке app
//если файл называется page.js
import BodyGallery from './_section/body-gallery/BodyGallery';
import HeaderGallery from './_section/header-gallery/HeaderGallery';

export default function Home() {
	return (
		<main className='pt-32'>
			<HeaderGallery />
			<BodyGallery />
		</main>
	);
}
