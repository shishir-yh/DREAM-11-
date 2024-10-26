import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Player from './Player';
import { prototype } from 'postcss/lib/previous-map';

const Available = ({ handleSelectedPlayerList }) => {
    //take the data from the jason file
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setPlayers(data)
            )
    }, [])

    return (
        <div className='grid grid-cols-3 gap-6 rounded-3xl'>
            {
                players.map((player, index) => <Player key={index} player={player} handleSelectedPlayerList={handleSelectedPlayerList}> </Player>)
            }
        </div>
    );
};

Available.propTypes = {
    handleSelectedPlayerList: PropTypes.func
};

export default Available;