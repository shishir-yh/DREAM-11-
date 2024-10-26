import PropTypes from 'prop-types';
import { MdDeleteSweep } from "react-icons/md";

{/* <div class="my-4 border border-solid px-5 py-5 rounded-lg flex justify-between">
        <div class="flex gap-4">
            <div>
                <img src="images/pet.webp" class="w-[70px] h-[50px]" alt="" srcset="">
            </div>
            <div>
                <h1 class="font-bold text-lg">Virt hoily </h1>
                <small>left hand boalerr</small>
            </div>
        </div>
        <div>
            <img src="images/logo.webp" alt="" srcset="">
        </div>
    </div> */}


const Selectedplayer = ({ selectedplayer, handleDeletChoose }) => {
    return (

        <div className="my-4 border border-solid px-5 py-5 rounded-lg flex justify-between">
            <div className="flex gap-4">
                <div>
                    <img src={selectedplayer.player_img} className='w-[50px]' alt="" />
                </div>
                <div>
                    <h1 className="font-bold text-lg">{selectedplayer.player_name}</h1>
                    <small>{selectedplayer.batting_type}</small>
                </div>
            </div>
            <div>
                <button className='text-red-400 w-16 h-10 text-4xl' onClick={() => handleDeletChoose(selectedplayer.id, selectedplayer.price)}><MdDeleteSweep></MdDeleteSweep></button>
            </div>
        </div>
    );
};

Selectedplayer.propTypes = {
    selectedplayer: PropTypes.object,
    handleDeletChoose: PropTypes.func
};

export default Selectedplayer;