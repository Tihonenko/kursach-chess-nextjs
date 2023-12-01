// Страница по дефолту, роут создается автоматически в папке app
//если файл называется page.js
import BodyTeams from './_section/body-teams/BodyTeams';
import FooterTeams from './_section/footer-teams/FooterTeams';
import HeaderTeams from './_section/header-teams/HeaderTeams';

export default function Home() {
	return (
		<main className='pt-32'>
			<HeaderTeams />
			<BodyTeams />
			<FooterTeams />
		</main>
	);
}
