export function MyAwesomeApp() {
	const firstMessage = "Hello World";
	const lastMessage = "Goodbye World";

	const favoriteGames = [
		"The Legend of Zelda",
		"Super Mario Bros",
		"Minecraft",
	];

	const isActive = true;
	const address = {
		zipCode: "12345",
		country: "USA",
	};

	return (
		<>
			<h1>{firstMessage}</h1>
			<h3>{lastMessage}</h3>
			<p>{favoriteGames.join(", ")}</p>
			<p>{2 + 2 + 1}</p>
			<h1>{isActive ? "Active" : "Inactive"}</h1>
			<p>
				{address.zipCode} - {address.country}
			</p>
			<p>{JSON.stringify(address)}</p>
		</>
	);
}
