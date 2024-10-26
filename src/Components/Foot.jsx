import flog from '../assets/images/logo-footer.png'
import PropTypes from 'prop-types';

const Foot = () => {
    return (
        <div className='parent relative mt-48'>

            <div className="absolute top-[-6rem] right-[30rem] flex justify-center ">
                <div className="card bg-gradient-to-tr from-blue-300 to-yellow-300 bg-base-100 w-[40rem] shadow-xl ring-8 ring-gray-400 ring-opacity-50 rounded-lg">
                    <div className="flex flex-col items-center card-body">
                        <h2 className="card-title">Subscribe to our Newsletter</h2>
                        <p>Get the latest updates and news right in your inbox!</p>
                        <div className="flex pt-2">
                            <input type="text" placeholder="Enter your email " className="input input-bordered block mb-3" />
                            <button className="btn bg-indigo-400">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black lg:py-16 py-10 ">

                <div className="flex justify-center mt-20 mb-10 ">
                    <img src={flog} alt="" />
                </div>

                <div className="lg:grid lg:grid-cols-3 grid grid-cols-1  w-9/12 mx-auto gap-3 ">
                    {/* <!-- child 1 footer  --> */}
                    <div className=" text-white mt-3  ">
                        {/* <!-- padday logo 1  --> */}
                        <h1 className="font-bold mb-4 text-xl text-white">About Us</h1>
                        <div className="text-sm text-gray-400">
                            <p className="w-10/12 ">We are a passionate team dedicated to providing the best services to our
                                customers.</p>
                        </div>

                    </div>

                    {/* <!-- child 2 footer  --> */}
                    <div className="text-sm text-gray-400 mt-3">
                        <h1 className="font-bold mb-4 text-xl text-white">Quick Links</h1>
                        <ul>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* <!-- child 3 footer  --> */}
                    <div className="mt-3">
                        <h1 className="font-bold mb-6 text-xl text-white">Subscribe</h1>
                        <p className="text-white pb-5">Subscribe to our newsletter for the latest updates.</p>
                        <div className="flex">
                            <input type="text" placeholder="Enter your email " className="input input-bordered block mb-3" />
                            <button className="btn bg-indigo-400">Subscribe</button>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="flex justify-center">
                    <h6 className=" "><small className=" text-white">@2024 Your Company All Rights Reserved.</small></h6>
                </div>

            </div>


        </div >
    );
};

Foot.propTypes = {

};

export default Foot;