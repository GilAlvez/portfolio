import Image from 'next/image';
import tw from 'tailwind-styled-components';

export const AboutImage = tw(Image)`
  transition-all 
  duration-300 
  mix-blend-multiply 
  grayscale 
  brightness-125
  will-change-contents
  object-cover 
  hover:mix-blend-normal hover:grayscale-0 hover:brightness-100 
`;
