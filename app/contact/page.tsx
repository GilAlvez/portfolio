import FadeIn from '../../components/Animation/FadeIn';
import ContactList from '../../components/ContactList';
import Navigator from '../../components/Navigator';
import Title from '../../components/Title';
import { client } from '../../libs/graphql/client';
import { getOwnerContact, getOwnerHeading } from '../../libs/graphql/queries/owner';

const Contact = async () => {
	const {
		owners: [heading],
	} = await client.request(getOwnerHeading);
	const {
		owners: [contact],
	} = await client.request(getOwnerContact);

	return (
		<FadeIn>
			<div className="grid grid-cols-1 gap-10 lg:h-full lg:gap-32 md:grid-cols-2">
				<div className="flex flex-col gap-10 lg:justify-between">
					<Title name={heading?.name} subtitle={heading?.subtitle} />
					<Navigator />
				</div>
				<ContactList contact={contact.social} />
			</div>
		</FadeIn>
	);
};

export default Contact;
