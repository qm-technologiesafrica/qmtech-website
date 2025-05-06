"use client";
import Image from "next/image";
import * as React from "react";
import { Logo } from "../../../../public/page";
import CustomButton from "@/app/utils/CustomBtn";
import CustomInput from "@/app/utils/CustomInput";

interface IComingSoonProps {}

const ComingSoon: React.FunctionComponent<IComingSoonProps> = (props) => {
	const [emailAddress, setEmailAddress] = React.useState("");
	const [loading, setLoading] = React.useState(false);

	const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		alert("Subscribed Successfully");
		setEmailAddress("");
		setLoading(false);
	};
	return (
		<>
			<main className="relative w-full h-[100dvh] bg-primary-50">
				<div className="container mx-auto px-4 md:max-w-xl">
					<header className="py-4">
						<Image
							src={Logo}
							alt="QM Technologies"
							width={100}
							height={100}
							quality={100}
							className="w-[18%]"
						/>
					</header>

					<div className="py-10 space-y-10">
						<div className="text-center space-y-4">
							<div className="w-[75%] mx-auto rounded-full bg-white py-2 px-2 text-center text-primary-900 space text-sm">
								<p>Hello There, we are QM Technologies 👋</p>
							</div>
							<h1 className="text-3xl lg:text-5xl font-bold text-neutral-900 leading-tight">
								We Build{" "}
								<span className="italic text-primary-800">Technologically</span>{" "}
								driven solutions.
							</h1>
							<p className="">
								Empowering Africa&apos;s ecosystem by providing technologically
								driven solution to businesses.
							</p>
						</div>

						<div className="space-y-2">
							<p className="text-center text-primary-900">
								Get notified when we launch
							</p>
							<form onSubmit={handleForm} className="space-y-4">
								<CustomInput
									type="email"
									full
									error={false}
									placeholder="Email"
									value={emailAddress}
									onChange={(e) => setEmailAddress(e.target.value)}
									required
								/>
								{loading ? (
									<CustomButton full>Sending...</CustomButton>
								) : (
									<CustomButton full>Subscribe</CustomButton>
								)}
							</form>
						</div>
					</div>
				</div>
				<div className="absolute bottom-2 w-full text-center text-sm text-primary-700">
					<p>© 2024. QM Technologies </p>
				</div>
			</main>
		</>
	);
};

export default ComingSoon;
