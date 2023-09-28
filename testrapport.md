#Testrapport labbration 2

### Automatiska tester

För att köra testerna gör du följande:
```bash
npm i
``` 
```bash
npm run test
```
Denna modul har testats med 21 automatiska tester.
### Följade klasser och metoder testas:

### ErrorHandling klass
handleArray och handleMinMax testas i samband med de metoder som använder sig av dessa metoder.

### LinearCongruentialGenerator klass
* nextDecimalRange 
* nextIntRange 

### RandomNumberGenerator klass

* randomInt
* randomBoolean
* randomDecimal

### RandomArrayGenerator klass

* randomArrayIndex
* randomSequenceArray
* randomArrayIndex
* shuffleArray

### RandomPrimeGenerator klass

* randomPrimeNumber
* randomPrimeNumberSequence


## 28/9-23: Alla test är godkända (21 passed, 21 total)
![Alt Text](images/automaticTests.png)