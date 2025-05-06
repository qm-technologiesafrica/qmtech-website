import * as React from "react";

interface ICustomButtonProps {
	children: React.ReactNode;
	full?: boolean;
}

const CustomButton: React.FunctionComponent<ICustomButtonProps> = ({
	children,
	full,
	...props
}) => {
	return (
		<button
			className={`${
				full ? "w-full" : ""
			} bg-primary-900 text-white space px-6 py-3 lg:py-4 rounded-full  font-medium flex items-center justify-center gap-x-1`}
			{...props}>
			{children}
		</button>
	);
};

export default CustomButton;
