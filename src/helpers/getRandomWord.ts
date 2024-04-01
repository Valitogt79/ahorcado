const words: string[] = [
  'COMPUTADORA',
  'AGUACATE',
  'CERDO',
  'CERRADO',
  'ABIERTO',
  'AVION',
  'TREN',
  'PSICOLOGIA',
  'MEDICINA',
  'PROGRAMACION',
  'CELULAR',
  'VETERINARIO',
];

export function getRandomWord(){

  const randomIndex = (Math.floor(Math.random() * words.length));
  return words[randomIndex];

}