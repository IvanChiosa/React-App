import React, { useState } from 'react'

const HooksUseState = () => {
    const [ count, setCount] = useState(2)
  return (
    <div>
        <p>Du hast {count} mal</p>
        <button type='submit' onClick={() => setCount(count + 2)}>
            Click mich
        </button>
    </div>
  )
}

export default HooksUseState