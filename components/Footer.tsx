import tw from 'tailwind-styled-components/dist/tailwind';

const Footer = () => {
	return (
		<Container>
			<Title>
				A limited NFT collection where the token itself doubles as your membership to a swamp <br /> club for apes. The
				club is open! Ape in with us.
			</Title>
		</Container>
	);
};

export default Footer;

const Container = tw.div`
	flex
	justify-center
	pb-16
`;

const Title = tw.div`
	max-w-screen-lg
	w-full
	p-4
`;
