import { useEffect, useState } from "react";
import { useLocation,useParams } from "react-router-dom"

const Profile = () => {

    const params = useParams();
    const location = useLocation();

    let [character,setCharacter] = useState(null);

    useEffect(() => {

        let getCharacter = async () => {
            let response = await fetch("https://swapi.dev/api/people/" + params.id);
            let json = await response.json()
            setCharacter(json);
        }
        if(location.state){
            setCharacter(location.state);
        } else {
            getCharacter();
            //Hämta data för karaktären
z
        }
    },[])

    
    return (<>
            <h2>Profile page</h2>
                {character && <>
                    <h3>Name: {character.name}</h3>
                    <h3>Height: {character.height} cm</h3>
                    <h3>Gender: {character.gender}</h3>
                </>
                }
            
        </>)


}

export default Profile