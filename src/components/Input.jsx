import React, { useId } from 'react';

const Input = React.forwardRef(function Input({
  label,
  type = 'text',
  className = '',
  ...props
}, ref) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="inline-block mb-1 pl-1 text-sm text-gray-300"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        ref={ref}
        className={`w-full px-4 py-2 bg-[#16181c] text-white placeholder-gray-500 border border-gray-700 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500 transition ${className}`}
        {...props}
      />
    </div>
  );
});

export default Input;
