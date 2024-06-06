import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import text from './data.js'; 

const root = ReactDOM.createRoot(document.getElementById('root'));



const Text = (props) => {

  const [show, setShow] = React.useState([]);

  const showAll = (event) =>{
    let id = Number(event.target.id[1]);

    setShow(show => [...show,id]);

  }

  const showLess = (event) =>{
      let id = Number(event.target.id[1]);
      
      setShow(show => show.filter(item => item !== id));
      
  }

  const print = props.data.map((item,index) =>
    <p>
      <span className={(show.indexOf(index)!==-1)? "Less": "More"}>

          <span>{item.split(".")[0]}</span>
          <span id={"d"+index} onClick={showAll}>...</span>

      </span>

      <span id={"p"+index} className={(show.indexOf(index)!==-1)? "More": "Less"} onClick={showLess}>

        {item}

      </span>

    </p>
  )

  return(
    <p>
      {print}
    </p>

  )


}



function Content() { 
  return(     
    <>         
      <h3><Text data={text}/></h3>     
    </>     
  ) 
} 

root.render(<Content />)

