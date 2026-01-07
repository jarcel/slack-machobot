// Random Macho Man Randy Savage catchphrases
export const taglines: string[] = [
  "Best there is… past, present and future! Ohhhhh yeahhhh!",
  "Dig it!",
  "History beckons the Macho Man!",
  "Hulkamania is like a single grain of sand in the Sahara desert that is Macho Madness.",
  "I'm too hot to handle and too cold to hold!",
  "Oooooh yeeeah!",
  "Oooooh yeeeah! I want everybody to freak out! Freak out! The Macho Man is right here, and I'm gonna take it to the limit! Yeah!",
  "Snap into a Slim Jim!",
  "Ten thousand years as Intercontinental Champion, Oooooh yeeeah!",
  "The madness is runnin' wild!",
  "The tower of power, too sweet to be sour, ohhhh yeahh!",
  "We're in space and space is the place!",
  "Who's in the danger zone?!",
  "You will eat my rear rockets and like it! Ohhhh yeahhh!",
  "Let me tell you now a man of my position can afford to look ridiculous at any time.",
  "I hate yer guts!",
  "You say you love me like a brother but I hate you, I hate your guts.",
  "I heard what you said about me a few days ago.",
  "You wouldn't give her that flower would ya?",
  "Put that thing down, don't degrade the champ at any time.",
];

export function getRandomTagline(): string {
  return taglines[Math.floor(Math.random() * taglines.length)];
}
