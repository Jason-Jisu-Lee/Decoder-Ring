# Decoder-Ring

[Live Demo](https://sensibleengineer.github.io/decoder-ring/)

This application contains ciphers for three encryption techniques: (1) Caesar shift, (2) Polybius Square, and (3) Substitution. 

## Caesar Shift

The Caesar Shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.

For example, if the alphabets were to be "shifted" to the right by 3, the letter "A" would become "D".
"hello" -> "khoor"

When decoding the message, the user needs to know the originally shifted number so that the message can be shifted in the opposite direction.

## Polybius Square

The Polybius Square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate.

When decoding the message, each pair of numbers is translated using the coordinates.


## Substitution Cipher

The Substitution Cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the standard alphabet.

This cipher requires that the recipient have the substitution alphabet, otherwise it will be difficult to decode the message.
