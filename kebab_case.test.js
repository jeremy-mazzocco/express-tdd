const {test, expect} = require("@jest/globals");
const kebabCase = require("./kebab_case");

test("dovrebbe convertire il testo in kebab-case", () => {
  const testo = "questo è un testo";
  const result = kebabCase(testo);

  expect(result).toBe("questo-e-un-testo");
})

test("dovrebbe gestire tutti i caratteri accentati", () => {
  const testo = "questo èàòùéèì un testo";
  const result = kebabCase(testo);

  expect(result).toBe("questo-eaoueei-un-testo");
})

test("dovrebbe gestire i caraterri speciali", () => {
  const testo = "questo !\"£$%&/()=?^ ' ?_!£$%&/()= testo";
  const result = kebabCase(testo);

  expect(result).toBe("questo----testo");
})

test("dovrebbe gestire i caratteri in maiuscolo", () => {
  const testo = "qUesto UN MESSAGGio di testo";
  const result = kebabCase(testo);

  expect(result).toBe("questo-un-messaggio-di-testo");
})

test("dovrebbe gestire gli spazi vuoti prima e dopo", () => {
  const testo = "     qUesto UN MESSAGGio di testo  ";
  const result = kebabCase(testo);

  expect(result).toBe("questo-un-messaggio-di-testo");
})

test("dovrebbe lanciare un errore in caso di input non valido", () => {
  // Siccome stiamo testando un errore, dobbiamo racchiudere la funzione
  // in una arrow function, altrimenti il test fallirebbe
  const result = () => kebabCase(12654654);

  expect(result).toThrowError("kebab_case: input must be a string");
})