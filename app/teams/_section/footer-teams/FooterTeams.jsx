import styles from './footer.module.scss';
import LinkTo from '@/app/_components/UI/LinkTo/LinkTo';

const FooterTeams = () => {
	return (
		<section className='container w-1/2 md:w-1/2'>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<h3 className='heading-animate'>Join Us!</h3>
					<p>
						We invite all chess enthusiasts to join our club and become a
						part of our inspiring community. Regardless of your skill
						level or experience, here you will find support, learning
						opportunities, and the chance to grow alongside us.
					</p>
					<p>
						Join "Checkmate" today to immerse yourself in the thrilling
						world of chess, where you can not only improve your skills but
						also make new friends and indulge in the passion for the game.
					</p>
					<div className={styles.link_to}>
						<LinkTo href='/registration'>Join</LinkTo>
					</div>
				</div>
				<div className={styles.content}>
					<h3 className='heading-animate'>Get in Touch</h3>
					<p>
						If you have any questions, suggestions, or would like to learn
						more about our events and opportunities, please feel free to
						contact us. We are always open for communication and ready to
						assist you.{' '}
						<span className='underline'>checkmate.info@gmail.com</span>
					</p>
					<p>
						Thank you for your interest in "Checkmate." We look forward to
						welcoming you to our club and hope you'll find inspiration and
						fulfillment in playing chess with us!
					</p>
				</div>
			</div>
		</section>
	);
};

export default FooterTeams;
