import FadeIn from '../../components/Animation/FadeIn';
import ContactList from '../../components/ContactList';
import { client } from '../../services/graphql/client';
import { getOwnerContact } from '../../services/graphql/queries/owner';

const Contact = async () => {
	const {
		owners: [contact],
	} = await client.request(getOwnerContact);

	return (
		<FadeIn>
			<ContactList contact={contact.social} />
		</FadeIn>
	);
};

export default Contact;
