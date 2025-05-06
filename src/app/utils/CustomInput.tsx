import React from "react";

interface ICustomInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	full: boolean;
	error: boolean;
}

const CustomInput: React.FunctionComponent<ICustomInputProps> = ({
	full,
	error,
	...props
}) => {
	return (
		<input
			className={`${
				full ? "w-full" : ""
			} rounded-full placeholder:text-placeholder border ${
				error ? "border-error-800" : "border-neutral-300"
			} px-4 py-3 right-0 focus:right-0 focus:outline-none focus:border-primary-800 caret-[#2364AA] overflow-ellipsis`}
			{...props}
		/>
	);
};

export default CustomInput;
