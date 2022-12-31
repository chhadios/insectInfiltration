import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getResults } from "../store/actions";
import './app.css';
const Home = () => {

    const [instructions, setInstructions] = useState();
    const dispatch = useDispatch();
    const results = useSelector(state => state.results);
    // const [chunk,setChunk]=useState([]);
    const handleChange = (event) => {
        setInstructions(event.target.value);
        console.log(instructions);
    }

    function handleSubmit() {
        dispatch(getResults(instructions))
        console.log(chunkArray(results.results.results+`\n`,3))
        // setChunk(chunkArray(results.results.results+`\n`,3));
        
    }
    function chunkArray (S, size) {
        let temp='';
        let chunk=[];
        for(let i=0;i<=S.length;i++){
            temp+=S[i];
            let tempArray=[]
            if(S[i]===`\n`){
                chunk.push(temp)
                temp='';
            }
        }
        return chunk.map((item,key)=>(          
                <p>Insect {key}: {item}</p>
            ))
        }
    
    return (
        <>
            <div className="app_container">
                <div className="header">
                    INSECTS INFILTRATION
                </div>
                <div className="game_container">
                <p className="game_container_header">INITIATE THE ATTACK</p>
                    <textarea className="text_area" name="w3review" rows="7" cols="60" onChange={handleChange} />
                    <button className="button" onClick={handleSubmit}>Get Position</button>
                </div>
                <div className="results_container">
                    <p className="results_heading">Results</p>
                    { results.results ?
                   chunkArray(results.results.results+`\n`,3)
                    :null
                     }
                     
                </div>
            </div>
        </>
    )
}
export default Home;