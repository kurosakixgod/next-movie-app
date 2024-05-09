interface Props {
	className?: string;
}

const CaledarIcon = ({ className }: Props) => {
	return (
		<svg
			className={className}
			width="14.000000"
			height="14.000000"
			viewBox="0 0 14 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<defs>
				<clipPath id="clip301_1309">
					<rect
						id="calendar"
						width="14.203125"
						height="14.203125"
						transform="translate(-0.327637 -0.910248)"
						fill="white"
						fillOpacity="0"
					/>
				</clipPath>
			</defs>
			<g opacity="0.800000">
				<rect
					id="calendar"
					width="14.203125"
					height="14.203125"
					transform="translate(-0.327637 -0.910248)"
					fill="currentColor"
					fillOpacity="0"
				/>
				<g clipPath="url(#clip301_1309)">
					<path
						id="Vector"
						d="M10.91 1.45C11.56 1.45 12.09 1.98 12.09 2.64L12.09 10.92C12.09 11.57 11.56 12.1 10.91 12.1L2.63 12.1C1.97 12.1 1.44 11.57 1.44 10.92L1.44 2.64C1.44 1.98 1.97 1.45 2.63 1.45L10.91 1.45Z"
						stroke="currentColor"
						strokeOpacity="1.000000"
						strokeWidth="1.183594"
						strokeLinejoin="round"
					/>
					<path
						id="Vector"
						d="M9.14 0.27L9.14 2.64"
						stroke="currentColor"
						strokeOpacity="1.000000"
						strokeWidth="1.183594"
						strokeLinejoin="round"
						strokeLinecap="round"
					/>
					<path
						id="Vector"
						d="M4.4 0.27L4.4 2.64"
						stroke="currentColor"
						strokeOpacity="1.000000"
						strokeWidth="1.183594"
						strokeLinejoin="round"
						strokeLinecap="round"
					/>
					<path
						id="Vector"
						d="M1.44 5L12.09 5"
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

export default CaledarIcon;
