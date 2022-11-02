import Link from 'next/link';
import { ButtonHTMLAttributes, ReactElement } from 'react';
import { VscLoading } from 'react-icons/vsc';
import { ButtonStyled, Icon, LoadingIcon } from './style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: 'primary' | 'secondary' | 'outlined' | 'success' | 'dark';
	size?: 'sm' | 'md' | 'lg';
	fullWidth?: boolean;
	href?: string;
	iconStart?: ReactElement;
	iconEnd?: ReactElement;
	isBlank?: boolean;
	loading?: boolean;
}

const Button = (props: ButtonProps) => {
	const {
		color,
		children,
		loading,
		href,
		isBlank,
		size,
		fullWidth,
		iconStart,
		iconEnd,
		...buttonAttributes
	} = props;

	return (
		<>
			{href && isBlank ? (
				// TO BUTTONS LINK WITH BLANK //
				<a href={href} target="_blank" rel="noreferrer noopener" className={fullWidth ? 'w-full' : ''}>
					<ButtonStyled $color={color} $size={size} $fullWidth={fullWidth} {...buttonAttributes}>
						{iconStart && <Icon>{iconStart}</Icon>}
						{children}
						{iconEnd && <Icon>{iconEnd}</Icon>}
					</ButtonStyled>
				</a>
			) : href && !isBlank ? (
				// TO BUTTONS LINK INSIDE APP //
				<Link href={href} className={fullWidth ? 'w-full' : ''}>
					<ButtonStyled $color={color} $size={size} $fullWidth={fullWidth} {...buttonAttributes}>
						{iconStart && <Icon>{iconStart}</Icon>}
						{children}
						{iconEnd && <Icon>{iconEnd}</Icon>}
					</ButtonStyled>
				</Link>
			) : (
				// REST OF BUTTONS //
				<ButtonStyled $color={color} $size={size} $fullWidth={fullWidth} {...buttonAttributes}>
					{iconStart && <Icon>{iconStart}</Icon>}
					{children}
					{iconEnd && <Icon>{iconEnd}</Icon>}
					{loading && (
						<LoadingIcon>
							<VscLoading />
						</LoadingIcon>
					)}
				</ButtonStyled>
			)}
		</>
	);
};

export default Button;
