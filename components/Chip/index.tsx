import { ChipStyled } from './styles';

interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
	color?: 'primary' | 'secondary' | 'green' | 'blue' | 'yellow' | 'neutral';
	children: React.ReactNode;
}

const Chip = ({ color, children, ...props }: ChipProps) => {
	return (
		<ChipStyled $color={color} {...props}>
			{children}
		</ChipStyled>
	);
};

export default Chip;
