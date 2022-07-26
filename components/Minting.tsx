import tw from 'tailwind-styled-components/dist/tailwind';
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';
import { NextPage } from 'next';

const Minting: NextPage = () => {
	const address = useAddress();
	const connectWithMetamask = useMetamask();
	const disconnectWallet = useDisconnect();

	console.log(address);

	return (
		<Container>
			<Mint>
				<TitleContainer>
					<Title>
						Welcome to <br /> the D2YBORED <br /> Yacht Club
					</Title>
				</TitleContainer>
				<ButtonContainer>
					{address ? (
						<>
							<FilledButton onClick={connectWithMetamask}>Mint</FilledButton>
							<UnfilledButton onClick={disconnectWallet}>Disconnect</UnfilledButton>
						</>
					) : (
						<FilledButton onClick={connectWithMetamask}>Connect Wallet</FilledButton>
					)}
				</ButtonContainer>
				<hr className='mt-4' />
			</Mint>
		</Container>
	);
};

export default Minting;

const Container = tw.div`
	max-w-screen-lg
	w-full
	mt-[-180px]
	z-50
`;

const Mint = tw.div`
	max-w-screen-sm
	w-1/3
	bg-black
	p-4
	z-50
	flex
	flex-col
`;

const TitleContainer = tw.div`
	flex
`;

const Title = tw.h2`
	uppercase
	text-3xl
	italic
	font-bold
`;

const ButtonContainer = tw.div`
	flex
	mt-2
	gap-4
`;

const FilledButton = tw.button`
	bg-[#bfc500]
	hover:bg-white
	font-bold
	py-2
	px-4
	rounded
	text-black
	uppercase
	flex-1
`;

const UnfilledButton = tw(FilledButton)`
	bg-black
	hover:bg-[#bfc500]
	text-[#bfc500]
	hover:text-black
	border-[#bfc500]
	border-2
`;
