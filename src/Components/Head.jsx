import background from '../assets/images/bg-shadow.png'
import bpl from '../assets/images/banner-main.png'
import PropTypes from 'prop-types';

const Head = ({ handleChangeCoin }) => {
    return (
        //className=' bg-gradient-to-r from-transparent via-black to-black opacity-90'
        <div className=' w-fit w-full h-auto bg-no-repeat bg-cover bg-gradient-to-r from-transparent via-black to-black opacity-100 rounded-2xl ' >
            {/* <button className='btn btn-success' onClick={() => handleChangeCoin(7000000)}>Press it </button> */}

            <div className=" ] rounded-2xl mt-5 pt-10" style={{
                backgroundImage: `url(${background})`
            }}>
                <div className="flex justify-center ">
                    <img src={bpl} alt="" />
                </div>
                <h1 className="text-4xl font-extrabold text-center mt-2 text-white">Assemble Your Ultimate
                    Dream 11 Cricket team
                </h1>
                <h1 className="text-2xl text-center mt-3 text-white">Beyond Boundaries Beyond Limits</h1>

                <div className="mt-2 flex justify-center pb-3 pt-2">
                    <button className='ring-4 ring-gray-400 ring-opacity-50  btn bg-blue-200 font-bold ' onClick={() => handleChangeCoin(7000000)}>
                        Claim Free Credit </button>
                </div>
            </div>
        </div>
    );
};

Head.propTypes = {
    handleChangeCoin: PropTypes.func
};

export default Head;