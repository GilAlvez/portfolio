import Link, { LinkProps } from 'next/link';

interface ConditionalLinkProps extends LinkProps {
	children: React.ReactNode;
	condition: boolean;
}

const ConditionalLink = ({ children, condition, ...props }: ConditionalLinkProps) => {
	return condition && props.href ? <Link {...props}>{children}</Link> : <>{children}</>;
};

export default ConditionalLink;
