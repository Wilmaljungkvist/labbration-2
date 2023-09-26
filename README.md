# labbration-2
Detta är ett Javascript bibliotek som erbjuder funktioner för att slumpa fram olika typer av nummer och arrayer användandes av en linear congruential metod. Nedanför finns klasser och metoder som går att använda i detta biblitek tillsammans med kodexempel.

## ErrorHandling class

ErrorHandlling klassen hanterar fel relaterade till minimum, maximum och validering av arrayer.

### handleMinMax(min, max)
Kastar ett fel om minimum är större än maximum.
Exempel på hur denna metod kan användas:

```Javascript
const error = new ErrorHandling()
error.handleMinMax(1, 5) // Retunerar true.
error.handleMinMax(5, 1) // Kastar ett fel: "Minimum must be the same or smaller than maximum."
```

### handleArray(arr)
Kastar ett fel om arrayen har en längd på 0 eller mindre och om inputen inte är av typen array.

```Javascript
const error = new ErrorHandling()
error.handleArray([1, 2, 3]) // Returnerar true.
error.handleArray([]) // Kastar ett fel: "Array can not be empty."
error.handleArray("inte en array") // Kastar ett fel: "Must be an array."
```

randomInt:
Väljer mellan vilka tal det ska slumpas fram ett tal.

randomDecimal: 
Väljer mellan vilka nummer de sja slumpas fram ett decimaltal

randomArrayIndex: 
Tar en array och väljer sedan ut ett random index i denna array.

randomBoolean:
retunerar true or false: 

randomSequenceArray: 
gör en array med ett slumpartade nummer där den som använder funktionen väljer mellan ett maxvärde och längden på arrayen.

isPrime: 

Funkar för de slumpade talen som jag valt att ha de upp till, ska man ha större increments eller modulus med kanske 10000 tal etc... kan man behöva använda sig av t.ex en prime algoritm Miller-Rabin test.