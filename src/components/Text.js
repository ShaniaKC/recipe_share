import React from "react";

const Text = ({ variant, className, children, ...props }) => {
	if (variant == "h1")
		return (
			<h1 className={`text-4xl font-semibold min-[1440px]:text-5xl  ${className}`} {...props}>
				{children}
			</h1>
		);
	if (variant == "h2")
		return (
			<h2 className={`text-3xl font-semibold   ${className}`} {...props}>
				{children}
			</h2>
		);
	if (variant == "h3")
		return (
			<h3 className={`text-2xl font-semibold  ${className}`} {...props}>
				{children}
			</h3>
		);
	if (variant == "h4")
		return (
			<h4 className={`text-xl font-semibold  ${className}`} {...props}>
				{children}
			</h4>
		);
	if (variant == "h5")
		return (
			<h5 className={`text-lg font-semibold  ${className}`} {...props}>
				{children}
			</h5>
		);
	if (variant == "h6")
		return (
			<h6 className={`font-semibold  ${className}`} {...props}>
				{children}
			</h6>
		);

	return (
		<p className={className} {...props}>
			{children}
		</p>
	);
};

export default Text;
