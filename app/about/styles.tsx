import Image from 'next/image';
import tw from 'tailwind-styled-components';

export const AboutImage = tw(Image)`
  transition-all 
  duration-500 
  mix-blend-multiply 
  grayscale 
  brightness-125 
  object-cover 
  object-center
  rounded-lg
  hover:mix-blend-normal hover:grayscale-0 hover:brightness-100 
`;
