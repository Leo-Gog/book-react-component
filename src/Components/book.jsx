import './bookstyle.css'
function myFunc(name, characters){
    console.log(`Name: ${name} \nCharacters: ${characters.map((el)=>`${el.firstname} ${el.lastname}`).join(', ')} `)
  }
const Book = ({name, poster, description, characters}) => <article>
    <h1>{name}</h1>
    <div className="wrapper">
        <div>
            <img src={poster} alt="poster" />
            <button onClick={()=>myFunc(name, characters)}>Button</button>
        </div>
        <div>
            <h3>Description:</h3>
            <p className="description">{description}</p>
            <h3>Characters:</h3>
            <ul>
                {characters.map((character, index)=>{
                    const {firstname,lastname} = character
                    return <li key={index} title={`${firstname} ${lastname}`}>{firstname}</li>
                })}
            </ul>
        </div>
    </div>
</article>


export default Book