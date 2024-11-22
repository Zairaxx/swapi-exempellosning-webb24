import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
const Home = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        let getCharacters = async () => {
            let response = await fetch("https://swapi.dev/api/people/");
            let json = await response.json()
            setCharacters(json.results)
        }
        getCharacters();
        //Hämta characters
    },[])

    return(<>
    <h2>Home page</h2>
    <h3>Characters</h3>
    <ul>
        {characters.map( (char,i) => <li><Link to={"/character/" + (i+1)} state={char} >{char.name}</Link></li>)}
    </ul>
    
    </>
    )
}

export default Home