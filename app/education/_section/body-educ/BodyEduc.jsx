import React from 'react';

import Coaches from './Coaches/Coaches';
import Greating from './Greeting/Greating';
import Info from './Info/Info';

const BodyEduc = () => {
	return (
		<section className='mt-20'>
			<Greating />
			<Info />
			<Coaches />
		</section>
	);
};

export default BodyEduc;
