// Страница по дефолту, роут создается автоматически в папке app
//если файл называется page.js
import BodyEduc from './_section/body-educ/BodyEduc';
import HeaderEduc from './_section/header-educ/HeaderEduc';

export default function Home() {
	return (
		<main className='pt-32'>
			<HeaderEduc />
			<BodyEduc />
		</main>
	);
}
