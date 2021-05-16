import {useState} from 'react';
import "./styles.css"



  const Calc = () => {
    const toRadian = (grades) => {
        return grades * 0.01745;
      };
      
      const toGrades = (radians) => {
        return radians * 57.296;
      };
    
 
      const [grades, setGrades] = useState(0);
      const [radians, setRadians] = useState(0);

    

      return (
          <div className="card">
                        <h2>Radians and Grades Converter</h2>
                        <div className="bg-greenOne">
                            <h5>Radianes</h5>
                        <input onChange={evento =>{
                            setGrades(evento.target.value)
                            setRadians(toRadian(evento.target.value))
                        }} 
                        type="number"
                        value={grades} />
                        </div>
                        <div className="bg-greenTwo">
                            <h5>Grados</h5>

                        <input onChange={evento =>{
                            setRadians(evento.target.value)
                            setGrades(toGrades(evento.target.value))
                        }} 
                        type="number"
                        value={radians}  />
                            
                        </div>

          </div>
      )
  }

  export default Calc;