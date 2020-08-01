import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({ tag: Tag, name, label, maxLength, ...props }) => (
  <>
    <div className={styles.formItem}>
      <Tag
        className={Tag === 'textarea' ? styles.textarea : styles.input}
        placeholder=""
        name={name}
        id={name}
        maxLength={maxLength}
        {...props}
      />

      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div className={styles.formItemBar} />
    </div>
  </>
);

Input.propType = {
  tag: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
};

Input.defaultProps = {
  tag: 'input',
  maxLength: 200,
};

export default Input;