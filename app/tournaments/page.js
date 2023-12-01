// Страница по дефолту, роут создается автоматически в папке app
//если файл называется page.js
import BodyTournaments from './_section/body-tournaments/BodyTournaments';
import HeaderTournaments from './_section/header-tournaments/HeaderTournaments';

export default function Home() {
	return (
		<main className='pt-32'>
			<HeaderTournaments />
			<BodyTournaments />
		</main>
	);
}
