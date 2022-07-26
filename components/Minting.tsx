import tw from 'tailwind-styled-components/dist/tailwind';
import { useAddress, useDisconnect, useMetamask, useEditionDrop } from '@thirdweb-dev/react';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

const Minting: NextPage = () => {
	const [totalSupply, setTotalSupply] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [completed, setCompleted] = useState(false);

	const address = useAddress();
	const connectWithMetamask = useMetamask();
	const disconnectWallet = useDisconnect();
	const editionDrop = useEditionDrop('0xB19F7F99ba250574f26f7E34D6084a5E70810C91');

	const mint = async () => {
		if (editionDrop && address) {
			setIsLoading(true);
			const tokenId = 0; // the id of the NFT you want to claim
			const quantity = 1; // how many NFTs you want to claim
			const tx = await editionDrop.claimTo(address, tokenId, quantity);
			console.log(tx.receipt);
			setIsLoading(false);
			setCompleted(true);
		}
	};

	const startOver = () => {
		setIsLoading(false);
		setCompleted(false);
		disconnectWallet();
	};

	const view = () => {
		const url = 'https://testnets.opensea.io/collection/d2ybored';
		window.open(url, '_blank');
	};

	useEffect(() => {
		const getTotal = async () => {
			if (editionDrop) {
				const total = await editionDrop.totalSupply(0);
				setTotalSupply(total.toNumber());
			}
		};
		getTotal();
	}, [editionDrop]);

	return (
		<Container>
			<Mint>
				<TitleContainer>
					<Title>
						Welcome to <br /> the D2YBORED <br /> Yacht Club
					</Title>
					<Total>Total Supply : {totalSupply}</Total>
				</TitleContainer>
				<ButtonContainer>
					{address ? (
						<>
							{completed ? (
								<FilledButton onClick={view}>View</FilledButton>
							) : (
								<FilledButton onClick={mint} disabled={isLoading}>
									{isLoading ? (
										<ReactLoading type='bubbles' color='#000' height={32} className='mt-[-30px]' />
									) : (
										<>Mint</>
									)}
								</FilledButton>
							)}

							<UnfilledButton onClick={startOver} disabled={isLoading}>
								Disconnect
							</UnfilledButton>
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
	z-50
	`;

const Mint = tw.div`
	max-w-screen-sm
	lg:w-1/3
	md:w-1/2
	bg-black
	lg:mt-[-220px]
	p-4
	z-50
	flex
	flex-col
`;

const TitleContainer = tw.div`
	flex
	flex-col
`;

const Title = tw.h2`
	uppercase
	text-3xl
	italic
	font-bold
`;

const Total = tw.p`
	ml-1
`;

const ButtonContainer = tw.div`
	flex
	mt-2
	gap-4
`;

const FilledButton = tw.button`
	flex
	justify-center
	items-center
	flex-1
	bg-[#bfc500]
	hover:bg-white
	font-bold
	py-2
	px-4
	rounded
	text-black
	uppercase
`;

const UnfilledButton = tw(FilledButton)`
	bg-black
	hover:bg-[#bfc500]
	text-[#bfc500]
	hover:text-black
	border-[#bfc500]
	border-2
`;
