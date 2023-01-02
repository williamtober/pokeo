# pokeo 
pokemon card inventory application

## why did i make this?
Because I collect pokemon cards in my spare time and need an application that just displays exactly what I need. the below images are a basic idea of what I setout to create with pokeo.
The colors in the frames show where the user can click to increase teh count of that card or decrease the count of that card. 

![pokeo frame cards](./design/iPhone%2014%20-%201pokeo.png)
![pokeo small cards list](./design/iPhone%2014%20-%202pokeo.png)

## how to run
- clone repo ```git clone https://github.com/williamtober/pokeo.git```
- install dependencies```npm i ```
- start react ```npm run start```

## todo 
here are various things I need to remember to do when I come back to this project
- [X] import set data from [PokemonTCG Project Repo](https://github.com/PokemonTCG/pokemon-tcg-data/blob/master/sets/en.json)
- [X] using the set data, get card data depending on the set... Perhaps this involves some FS work [Set Data Files](https://github.com/PokemonTCG/pokemon-tcg-data/tree/master/cards/en)
- [ ] create type/interface so that redux knows what type of datatype to expect from the json files
- [ ] give each individual card a style
- [ ] create a library redux store it needs to account for decks, cards, needs, and selling.
- [ ] considering renaming the cards redux store to something like pokemon because it's not really specific.
- [ ] write tests and make sure that the cards set selector, button menu collapse, and card add/minus features work via keyboard accessibilities.