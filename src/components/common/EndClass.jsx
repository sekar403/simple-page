import React from 'react'
import {useState} from 'react'




function EndClass(props) {
  const [ childIsOpen, setChildOpen ] = useState(false);
  const [ childIsOpena, setChildOpena ] = useState(false);

  function onSelectC(event){
    const target = event.target;
    var myCheckbox = document.getElementsByName(target.name);
    Array.prototype.forEach.call(myCheckbox,function(el){
      el.checked = false;
    });
    target.checked = true;
    setChildOpen(false);   
  }
  function onSelectCa(event){
    onSelectChild(event);
  }
  function onSelectChild(event){
    onSelectC(event);
    setChildOpen(true);    
    setChildOpena(false); 
  }
  function onSelectChilda(event){
    onSelectC(event);
    setChildOpena(true);    
    setChildOpen(true); 
  }



  function submitFunction(){
    props.onClick();
    
  }

  return (
    <div>
        <div className='checkbox-class'>
          <label><input type="checkbox" name="myCheckbox" className="form-radio" value="1" onClick={onSelectC}/>Class Completed</label>
          <label><input type="checkbox" name="myCheckbox" className="form-radio" value="2" onClick={onSelectChild}/>Class Interrupted/aborted</label>
           {childIsOpen &&  
              <div className='childinput transition duration-300'>
                <label><input type="checkbox" name="myCheckbox1" className="form-radio" value="3" onClick={onSelectCa}  />Student didn't show up for the class</label>
                <label><input type="checkbox" name="myCheckbox1" className="form-radio" value="4" onClick={onSelectCa}/>Student didn't shwo any intrest</label>
                <label><input type="checkbox" name="myCheckbox1" className="form-radio" value="5" onClick={onSelectCa}/>Student Get Disconnected</label>
           <label><input type="checkbox" name="myCheckbox1" className="form-radio" value="6" onClick={onSelectChilda}/>Other Reasons</label>
           {childIsOpena &&   
                  <label className="transition duration-300"><input type="textarea" name="myTextarea" className="form-textarea mt-1 focus:outline-none rounded-md" placeholder='Enter the Reason' /></label>
              }
              </div>
           }
     
      </div>
      <div className="">
        <button className='mr-2 bg-primary text-white font-bold py-2 px-4 rounded' type="submit" value="Submit" onClick={submitFunction}>End Class</button>
        <button className='ml-2 bg-transparent text-primary font-semibold py-2 px-4 border border-primary  rounded' type="cancel" value="Cancel" onClick={props.onClick}>Cancel</button>
      </div>
    </div>


  )
}

export default EndClass