import styles from './inputform.module.scss';

const InputForm = ({ htmlFor, id, label, type }) => {
	return (
		<div className={styles.input_wrapper}>
			<label htmlFor={htmlFor} className={styles.label}>
				{label}
			</label>
			<input className={styles.input} id={id} type={type} />
		</div>
	);
};

export default InputForm;
