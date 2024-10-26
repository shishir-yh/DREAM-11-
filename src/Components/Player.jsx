import { FaFlag } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import PropTypes from 'prop-types';

const Player = ({ player, handleSelectedPlayerList }) => {
    const { id, player_img, batting_type, player_name, player_nation, player_type, price
    } = player
    return (
        <div className='border-2 border-solid rounded-2xl'>

            <div className='mx-4 my-4'>

                <img src={player_img} className="w-[250px] " alt="" />

                <div className="flex my-1">
                    <h1 className="mt-2"><CgProfile></CgProfile></h1>
                    <h1 className="text-lg font-bold ">{player_name}</h1>
                </div>


                <div className="flex justify-between my-2">
                    <div className="flex">
                        <h1 className="mt-1 mr-2"><FaFlag></FaFlag></h1>
                        <h1>{player_nation}</h1>
                    </div>
                    <h1 className="px-2 py-2 border border-solid bg-gray-300 rounded-md font-bold">{player_type}</h1>
                </div>
                <hr />
                <h1 className="font-bold ">Rating</h1>
                <h1 className="font-bold ">{batting_type}</h1>
                <div className="flex justify-between ">
                    <h1 className="font-bold pb-3 "> Price : ${price}</h1>
                    <button className="btn" onClick={() => handleSelectedPlayerList(player)}>Choose Player</button>
                </div>
            </div>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object,
    handleSelectedPlayerList: PropTypes.func
};

export default Player;