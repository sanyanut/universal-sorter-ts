import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// Numbers collection check
const numbersCollection = new NumbersCollection([10, 3, -5, 0, -11]);
numbersCollection.sort();
console.log(numbersCollection);

// Characters collection check
const charactersCollection = new CharactersCollection('xaXayab');
charactersCollection.sort();
console.log(charactersCollection);

// Linked list check
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-19);
linkedList.add(-3)

linkedList.sort();
linkedList.print();
