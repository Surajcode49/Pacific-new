import React, { useEffect, useRef, useState } from 'react'

const Counter = ({start = 0, end}) => {
    const [state, setState] = useState(null)
    const ref = useRef(start);

    const accu = end / 200;

    const updatecounter = () => {
        if (ref.current < end) {
            const result = Math.ceil(ref.current + accu)
            if (result > end) return setState(end)
            setState(result);
            ref.current = result;
        }
        setTimeout(updatecounter, 100);
    }

    useEffect(() => {
      let isMounted = true;
      if(isMounted){
        updatecounter();
      }
    
      return () => {
        (isMounted = false);
      }
    }, [])
    
    return (
        <div>
            {state}
        </div>
    )
}

export default Counter
