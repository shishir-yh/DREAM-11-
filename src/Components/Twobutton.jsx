
import PropTypes from 'prop-types';

const Twobutton = ({ handleTwobutton, buttonDestination, choosePlayer }) => {
    return (
        <div>
            <div className="flex justify-between my-5">
                <h1 className={`text-xl font-bold ${buttonDestination === 'select' ? 'invisible' : 'block'}`}>Available Players</h1>

                <div className="flex">
                    <button className={`btn ${buttonDestination === 'avail' ? 'bg-blue-200 text-blue' : 'bg-gray-300 text-black'}`} onClick={() => handleTwobutton('avail')}>Available</button>
                    <button className={`btn ${buttonDestination === 'select' ? 'bg-blue-200 text-blue' : 'bg-gray-300 text-black'}`} onClick={() => handleTwobutton('select')}>Selected <span>{choosePlayer.length}/6</span></button>
                </div>
            </div>
        </div>
    );
};

Twobutton.propTypes = {
    handleTwobutton: PropTypes.func,
    buttonDestination: PropTypes.value,
    choosePlayer: PropTypes.value
};

export default Twobutton;