import React from "react";

const Button = ({ className, variant, children, ...props }) => {
	return variant == "secondary" ? (
		<button
			className={`border px-12 py-3 border-2 border-orange-900 hover:border-orange-800 rounded-full flex justify-center items-center gap-2 ${className}`}
			{...props}>
			{children}
		</button>
	) : (
		<button
			className={`border px-12 py-3 bg-orange-900 hover:bg-orange-800 rounded-full text-white flex justify-center items-center gap-2 ${className}`}
			{...props}>
			{children}
		</button>
	);
};

export default Button;
