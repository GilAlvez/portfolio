import tw from 'tailwind-styled-components';

interface ChipStyle {
	$color: 'primary' | 'secondary' | 'green' | 'blue' | 'yellow';
}

const handleColor = (color: string) => {
	switch (color) {
		case 'primary':
			return 'bg-primary-200 text-primary-900 dark:bg-primary-900 dark:text-primary-200';
		case 'secondary':
			return `bg-secondary-200 text-secondary-900 dark:bg-secondary-900 dark:text-secondary-200`;
		case 'green':
			return `bg-green-200 text-green-900 dark:bg-green-900 dark:text-green-200`;
		case 'blue':
			return `bg-blue-200 text-blue-900 dark:bg-blue-900 dark:text-blue-200`;
		case 'yellow':
			return `bg-amber-200 text-amber-900 dark:bg-amber-900 dark:text-amber-200`;
		default:
			return `bg-primary-200 text-primary-900 dark:bg-primary-900 dark:text-primary-200`;
	}
};

export const ChipStyled = tw.span<any>`
  px-1 rounded-sm text-sm font-normal
  ${(p: ChipStyle) => handleColor(p.$color)}
`;
