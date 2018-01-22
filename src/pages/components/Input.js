import React from 'react';
const Input = ({ id, label, long, type, ...props }) => {
  if (!label && id) {
    label = id[0].toUpperCase() + id.substring(1, id.length);
  }

  return (
    <div className="input__container input__container--half last">
      <label htmlFor={id}>{label}</label>
      {long ? 
        <textarea
          name={id}
          id={id}
          required
          {...props}
        />
        : <input
          id={id}
          name={id}
          type={type || "text"}
          required
          {...props}
        />
      }
    </div>
  );
}

export default Input;
