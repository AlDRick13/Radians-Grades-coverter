import {useState} from 'react';

const Bulb =()=>{
    const [isOn, setIsOn] = useState('OFF');

    const handleBulb = () => {
        if(isOn === 'OFF') {
            setIsOn ('ON')
        } else {
            setIsOn('OFF')
        }
    }

    return <div><p>La bombilla está encendida: {isOn}</p>{' '}
    <button onClick={handleBulb}>SWITCH</button>
    </div>
}

export default Bulb;