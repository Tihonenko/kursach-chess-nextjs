import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Slide from './Slide/Slide';
import styles from './slider.module.scss';

const Carusel = ({ data }) => {
	return (
		<div className={styles.wrapper}>
			<Swiper
				style={{ '--swiper-pagination-color': '#E07A5F' }}
				loop={true}
				effect={'fade'}
				// grabCursor={true}
				modules={[FreeMode, Autoplay, EffectFade, Pagination]}
				key={'swiper-1'}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				slidesPerView='1'
				direction='horizontal'
				spaceBetween={30}
				speed={700}
				breakpoints={{
					320: { slidesPerView: 1 },
				}}
			>
				{data.map((item, idx) => (
					<SwiperSlide key={idx}>
						<Slide item={item} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Carusel;
