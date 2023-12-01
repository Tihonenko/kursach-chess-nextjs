import styles from './inputform.module.scss';

const InputForm = ({ htmlFor, id, label, type, ...props }) => {
	return (
		<div className={styles.input_wrapper}>
			<label htmlFor={htmlFor} className={styles.label}>
				{label}
			</label>
			<input {...props} className={styles.input} id={id} type={type} />
		</div>
	);
};

export default InputForm;
