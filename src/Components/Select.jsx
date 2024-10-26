
import PropTypes from 'prop-types';
import Selectedplayer from './Selectedplayer';
// handleAvailble
const Select = ({ choosePlayer, handleDeletChoose, handleTwobutton }) => {

    return (
        <div>
            <h1 className='text-xl font-bold'>Selected Player ({choosePlayer.length}/6)</h1>
            {
                choosePlayer.map((selectedplayer, index) => <Selectedplayer key={index} selectedplayer={selectedplayer} handleDeletChoose={handleDeletChoose}></Selectedplayer>)
            }
            <button className='btn bg-blue-400' onClick={() => handleTwobutton("avail")}>Available Player</button>

        </div>
    );
};


Select.propTypes = {
    choosePlayer: PropTypes.object,
    handleDeletChoose: PropTypes.func,
    handleAvailble: PropTypes.func
};

export default Select;