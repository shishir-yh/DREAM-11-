import logo from '../assets/images/logo.png'
import PropTypes from 'prop-types';

const Nav = ({ totalCoin }) => {
    return (
        <div className='sticky top-0 bg-blue-200 w-[full] h-[100px] z-10 opacity-100 rounded-2xl   '>
            <div className="flex justify-between ">
                <div className="w-8/12 flex items-center pl-24 ">
                    <img src={logo} alt="" />
                </div>

                <div className="flex w-4/12 gap-5 items-center">
                    <h1>Home</h1>
                    <h1>Fixture</h1>
                    <h1>Team</h1>
                    <div className="flex border-2 border-solid-black px-4 rounded-xl gap-2 py-2  ">
                        <h1 className="font-bold">{totalCoin}</h1>
                        <h1 className="font-bold">Coin</h1>
                        {/* <img src="images/logo.png" class="w-6 h-5" alt="" srcset=""> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

Nav.propTypes = {
    totalCoin: PropTypes.value
};

export default Nav;