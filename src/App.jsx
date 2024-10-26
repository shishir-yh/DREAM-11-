import { useState } from 'react';
import './App.css'
import Available from './Components/Available';
import Select from './Components/Select';
import Twobutton from './Components/Twobutton';
import Head from './Components/Head';
import Nav from './Components/Nav';
import Foot from './Components/Foot';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsNutFill } from 'react-icons/bs';

function App() {
  // use this --> create pic in select component
  const [choosePlayer, setChoosePlayer] = useState([])

  const handleSelectedPlayerList = (player) => {
    const samePlayer = choosePlayer.find((sameplay => sameplay.id === player.id));
    if (samePlayer) {
      toast.error("YOU can not add same player two time", {
        position: 'top-center',
        autoClose: 3000
      })
      return
    }
    if (choosePlayer.length >= 6) {
      toast.error("YOU Can not add more then 6 !", {
        position: 'top-center',
        autoClose: 3000
      })
      return
    }
    // show alert of insuffocient coin

    if (totalCoin <= 0 || totalCoin <= player.price) {
      toast.error("YOU have insupocient coin sir", {
        position: 'top-center',
        autoClose: 3000
      })
      return
    }

    if (totalCoin >= player.price && !samePlayer) {
      setCoin(totalCoin - player.price)
    }
    const newchoosePlayer = [...choosePlayer, player]
    setChoosePlayer(newchoosePlayer);
    toast.success("You Successfully added this Player!", {
      position: 'top-center',
      autoClose: 3000
    })
  };

  // use this function --> remove the choose item 

  const handleDeletChoose = (deletPlayerID, selectedplayerPrice) => {
    const newvalue = choosePlayer.filter(p => p.id !== deletPlayerID)
    toast.info(" Prayer is remove!", {
      autoClose: 3000
    })
    setChoosePlayer(newvalue);
    setCoin(totalCoin + selectedplayerPrice)
  }


  // use this --> click button and select the available and select
  const [buttonDestination, setButtonDestination] = useState('avail')

  const handleTwobutton = (value) => {
    const newvalue = value;
    setButtonDestination(newvalue)
  }
  // use this --> For change the coin
  const [totalCoin, setCoin] = useState(0)

  const handleChangeCoin = (coin) => {
    toast.success("You Successfully Added 7000000 on you account", {
      position: 'top-center'
    })
    const newconin = coin;
    setCoin(newconin + totalCoin)
  }



  return (
    <div>
      <Nav totalCoin={totalCoin}></Nav>
      <div className='w-9/12 mx-auto pt-6'>
        <Head handleChangeCoin={handleChangeCoin}></Head>
        <ToastContainer></ToastContainer>
        <Twobutton handleTwobutton={handleTwobutton} buttonDestination={buttonDestination} choosePlayer={choosePlayer} ></Twobutton>

        {/* handleAvailble={handleAvailble} */}
        {
          buttonDestination === 'avail' ? (<Available handleSelectedPlayerList={handleSelectedPlayerList}></Available>) : (<Select choosePlayer={choosePlayer}
            handleDeletChoose={handleDeletChoose} handleTwobutton={handleTwobutton} ></Select>)

        }
        {/* {available === true && (
          // <Available handleSelectedPlayerList={handleSelectedPlayerList} />
          <Available></Available>
        )} */}



      </div>
      <Foot></Foot>

    </div>
  )
}

export default App
