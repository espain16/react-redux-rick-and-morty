import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { getCharacters } from '../actions';

// Components
import Character from './Character';

const CharacterList = (props) => {
    console.log(props)
    useEffect(()=>{
        props.getCharacters()
    }, [])
    return (
        <div>
            {props.characters.map((character)=>{
               return <Character {...character}/>
            })}
        </div>
    );
};

const mapStateToProps = (state) => {

    return{
         ...state
    }
}

//connect takes two arguments mapStateToProps and mapActionsToProps / or just an object 
export default connect(mapStateToProps,{getCharacters})(CharacterList);