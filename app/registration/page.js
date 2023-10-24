// Страница по дефолту, роут создается автоматически в папке app
//если файл называется page.js
import FormRegistration from './_section/form-registration/FormRegistration';

export default function Home() {
	return (
		<main className=''>
			<FormRegistration />
		</main>
	);
}
