interface Props {
	className?: string;
}

const HeartIcon = ({ className }: Props) => {
	return (
		<svg
			className={className}
			width="14.000000"
			height="15.000000"
			viewBox="0 0 14 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<defs>
				<clipPath id="clip301_1304">
					<rect
						id="heart"
						width="14.203125"
						height="14.203125"
						transform="translate(-0.327637 -0.150482)"
						fill="white"
						fillOpacity="0"
					/>
				</clipPath>
			</defs>
			<g opacity="0.800000">
				<rect
					id="heart"
					width="14.203125"
					height="14.203125"
					transform="translate(-0.327637 -0.150482)"
					fill="currentColor"
					fillOpacity="0"
				/>
				<g clipPath="url(#clip301_1304)">
					<path
						id="Vector"
						d="M10.94 1.87C10.55 1.7 10.13 1.62 9.7 1.62C9.27 1.62 8.85 1.7 8.45 1.87C8.06 2.03 7.7 2.27 7.4 2.57L6.77 3.2L6.14 2.57C5.53 1.96 4.7 1.62 3.84 1.62C2.98 1.62 2.15 1.96 1.54 2.57C0.93 3.18 0.58 4.01 0.58 4.87C0.58 5.74 0.93 6.57 1.54 7.18L2.16 7.8L6.77 12.41L11.37 7.8L12 7.18C12.3 6.87 12.54 6.52 12.71 6.12C12.87 5.73 12.95 5.3 12.95 4.87C12.95 4.45 12.87 4.02 12.71 3.63C12.54 3.23 12.3 2.87 12 2.57C11.7 2.27 11.34 2.03 10.94 1.87Z"
						stroke="currentColor"
						strokeOpacity="1.000000"
						strokeWidth="1.183594"
						strokeLinejoin="round"
					/>
				</g>
			</g>
		</svg>
	);
};

export default HeartIcon;
