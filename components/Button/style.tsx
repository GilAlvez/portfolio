import tw from 'tailwind-styled-components';

interface ButtonStyle {
	$color?: string;
	$size?: string;
	$fullWidth?: boolean;
}
/* You can check and edit these custom Tailwind classes at /src/styles/components/_button */
export const ButtonStyled = tw.button<any>`
  btn
  ${(p: ButtonStyle) =>
		p.$color === 'primary'
			? 'btn-primary'
			: p.$color === 'secondary'
			? 'btn-secondary'
			: p.$color === 'outlined'
			? 'btn-outline'
			: p.$color === 'success'
			? 'btn-success'
			: p.$color === 'dark'
			? 'btn-dark'
			: 'btn-primary'}
  ${(p: ButtonStyle) =>
		p.$size === 'sm' ? 'btn-sm' : p.$size === 'md' ? 'btn-md' : p.$size === 'lg' ? 'btn-lg' : 'btn-md'}
	${(p: ButtonStyle) => (p.$fullWidth ? 'w-full' : '')}
`;
export const Icon = tw.span<any>`
  text-xl
`;
export const LoadingIcon = tw.span<any>`
  text-xl
  animate-spin
`;
