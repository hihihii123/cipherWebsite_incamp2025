import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import './App.css'

function App() {
  const navigate = useNavigate()
  const [groupnumber, setGroupnumber] = useState(1)

  function checkGroup() {
    // only pass the group number; randomisation & encryption moved to StartPage
    navigate('/cipherpage', { state: { groupnumber } })
  }

  return (
    <div>
      <p>Please input your group number</p>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <input
          type="number"
          value={groupnumber}
          onChange={e => setGroupnumber(Number(e.target.value))}
        />
        <div style={{ padding: 5 }} />
        <button onClick={checkGroup}>Confirm</button>
      </div>
    </div>
  )
}

export default App