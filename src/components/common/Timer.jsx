import React from 'react'
import {useState} from 'react'
import Modal from './Modal';
import Backdrop from './Backdrop';


  
  function Timer (){
    const [seconds, setSeconds] = React.useState(600);
    const [times, setTimes] = React.useState();
    const [ timerStop, setSession ] = useState(true);

    React.useEffect(() => {


          var minCounter = Math.floor(seconds/60);
          var secCounter =  seconds%60;

      if (seconds >= 0 && timerStop === true) {
        setTimeout(() => {
          setSeconds(seconds - 1);

      if(minCounter < 10){
          minCounter = '0' + minCounter;
      }
      if( secCounter < 10){
        secCounter = '0' + secCounter;
      }
      setTimes(minCounter+":"+secCounter);
        
        }, 1000);
      } else {
        setTimes(times);
      }
    });

    const [ modalIsOpen, setModalOpen ] = useState(false);

    function endHandler(){
        setModalOpen(true);
        
    }
    function closeModelHandler(event){
        setModalOpen(false);
        if(event.target.id === 'endbutton'){
          setSession(false);
        } 
        
    }






      return (
      <div className="App">
      <div>
        {times}
        <button className="ml-2 bg-primary text-white font-bold py-2 px-4 rounded" onClick={endHandler}>End Class</button>
      </div>
      <div>
    {modalIsOpen && <Modal onClick={closeModelHandler}/>}
    {modalIsOpen && <Backdrop onClick={closeModelHandler} /> }
    </div>
    </div>
      
    );
  }
  



  export default Timer;