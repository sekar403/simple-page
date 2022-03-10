import React from 'react'
import {useState} from 'react'
import Modal from './Modal';
import Backdrop from './Backdrop';
import Timer from './Timer';



var setTime = 600;

function CountDown() {
    const [ modalIsOpen, setModalOpen ] = useState(false);

    function endHandler(){
        setModalOpen(true);

    }
    function closeModelHandler(){
        setModalOpen(false);
    }

  return (
    <div>  

    <div className="flex flex-row  items-center "> 
        <Timer setTime={setTime}/>   
        <button className="ml-2 bg-primary text-white font-bold py-2 px-4 rounded" onClick={endHandler}>End Class</button>
    </div>
    <div>
    {modalIsOpen && <Modal onClick={closeModelHandler}/>}
    {modalIsOpen && <Backdrop onClick={closeModelHandler} /> }
    </div>
    </div>
  )
}
export default CountDown