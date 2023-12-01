// Страница по дефолту, роут создается автоматически в папке app
//если файл называется page.js
import AsideLogo from './_section/aside-logo/AsideLogo';
import BodyAbout from './_section/body-about/BodyAbout';
import styles from './about.module.scss';

export default function Home() {
	return (
		<main>
			<div className={styles.wrapper}>
				<BodyAbout />
				<AsideLogo />
			</div>
		</main>
	);
}
