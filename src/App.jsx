import './App.css'
import Book from './Components/book.jsx'

const bookData = {
  name: 'Lord of Mysteries',
  poster: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1596807666l/54843019.jpg',
  description: 'With the rising tide of steam power and machinery, who can come close to being a Beyonder? Shrouded in the fog of history and darkness, who or what is the lurking evil that murmurs into our ears? \nWaking up to be faced with a string of mysteries, Zhou Mingrui finds himself reincarnated as Klein Moretti in an alternate Victorian era world where he sees a world filled with machinery, cannons, dreadnoughts, airships, different machines, as well as Potions, Divination, Hexes, Tarot Cards, Sealed Artifacts...',
  characters:[
      {
          firstname: 'Klein',
          lastname: 'Moretti'
      },
      {
          firstname: 'Audrey',
          lastname: 'Hall'
      },
      { 
          firstname: 'Alger',
          lastname: 'Wilson'
      }
  ]
}

const {name, poster, description, characters} = bookData


function App() {
  return (
    <Book name={name} poster={poster} description={description} characters={characters} />
  );
}

export default App;
