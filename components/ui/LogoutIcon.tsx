interface Props {
	className?: string;
}

const LogoutIcon = ({ className }: Props) => {
	return (
		<svg
			className={className}
			width="15.000000"
			height="14.000000"
			viewBox="0 0 15 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<defs>
				<clipPath id="clip301_1340">
					<rect
						id="log-out"
						width="14.203125"
						height="14.203125"
						transform="translate(-0.185059 -0.666077)"
						fill="white"
						fillOpacity="0"
					/>
				</clipPath>
			</defs>
			<g opacity="0.800000">
				<rect
					id="log-out"
					width="14.203125"
					height="14.203125"
					transform="translate(-0.185059 -0.666077)"
					fill="currentColor"
					fillOpacity="0"
				/>
				<g clipPath="url(#clip301_1340)">
					<path
						id="Vector"
						d="M5.14 11.76L2.77 11.76C2.45 11.76 2.15 11.63 1.93 11.41C1.71 11.19 1.59 10.89 1.59 10.57L1.59 2.29C1.59 1.97 1.71 1.67 1.93 1.45C2.15 1.23 2.45 1.1 2.77 1.1L5.14 1.1"
						stroke="currentColor"
						strokeOpacity="1.000000"
						strokeWidth="1.183594"
						strokeLinejoin="round"
						strokeLinecap="round"
					/>
					<path
						id="Vector"
						d="M9.28 9.39L12.24 6.43L9.28 3.47"
						stroke="currentColor"
						strokeOpacity="1.000000"
						strokeWidth="1.183594"
						strokeLinejoin="round"
						strokeLinecap="round"
					/>
					<path
						id="Vector"
						d="M12.24 6.43L5.14 6.43"
						stroke="currentColor"
						strokeOpacity="1.000000"
						strokeWidth="1.183594"
						strokeLinejoin="round"
						strokeLinecap="round"
					/>
				</g>
			</g>
		</svg>
	);
};

export default LogoutIcon;
