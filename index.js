import { prompt } from "./prompt.js";

const instruction = () => {
	console.log(`
    Bienvenue au jeu de devinettes de nombres ! 🎮 

    Règles :
    1. Le système générera un nombre aléatoire entre 0 et 100.
    2. Votre tâche est de deviner ce nombre.
    3. Entrez un nombre lorsque vous y êtes invité.
    4. Si votre supposition est trop haute ou trop basse, vous en serez informé, et vous pourrez deviner à nouveau.
    5. Le jeu continue jusqu'à ce que vous deviniez le bon nombre.
    
    Commençons ! 🚀
`);
};

const generateRandomNumber = () => {
	instruction();
	let counter = 0;
	const randomNumber = Math.floor(Math.random() * 101);
	console.log("Le nombre généré est :", randomNumber);
	askNumberToUser(randomNumber, counter);
};

const askNumberToUser = (randomNumber, counter) => {
	let number = +prompt("Quel est le nombre ? ");
	counter += 1;

	if (number < 0 || number > 100) {
		console.log("cest entre 0 et 100");
		return askNumberToUser(randomNumber, counter);
	}

	if (randomNumber > number) {
		console.log(`📉 Le nombre entré est trop petit. || nb ${counter}`);
		return askNumberToUser(randomNumber, counter);
	} else if (randomNumber < number) {
		console.log(`📈 Le nombre entré est trop grand. || nb ${counter}`);
		return askNumberToUser(randomNumber, counter);
	} else {
		console.log(
			`🟢 Bravo ! Le nombre aléatoire était bien ${randomNumber} vous avez réussi en ${counter} essaies`
		);
		handleReplay();
	}
};

const handleReplay = () => {
	const replay = prompt(
		"Voulez-vous rejouer ? Tapez '0' pour Oui ou 'N' pour Non: "
	);

	if (replay === "0") {
		counter = 0;
		generateRandomNumber();
	} else {
		console.log("Merci d'avoir joué ! À la prochaine fois !");
	}
};

generateRandomNumber();
