const NoiseFilter = () => {
	return (
		<svg className="absolute pointer-events-none inset-0 h-full w-full">
			<filter id="noiseFilter">
				<feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" stitchTiles="stitch" />
			</filter>
			<rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.2" />
		</svg>
	);
};

export default NoiseFilter;
