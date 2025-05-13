import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import './App.css'
import { text2Binary, Vigenereencrypt, xorCipher } from './functions'

function App() {
  const navigate = useNavigate()
  const [groupnumber, setGroupnumber] = useState(1)

  function checkGroup() {
    const cipherText = "INCAMPVIGENERE"                // use string, not array
    const groups = ["marco", "dylan"]
    const name = groups[groupnumber - 1] || ""
    const xored = xorCipher(cipherText, groupnumber)
    const vig = Vigenereencrypt(xored, name)
    const toShow = text2Binary(vig)
    console.log(toShow)
    navigate('/cipherpage', { state: { toShow, name, cipherText } })
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