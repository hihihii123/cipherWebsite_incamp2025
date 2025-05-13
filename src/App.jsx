import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import './App.css'
import { makeid, text2Binary, Vigenereencrypt, xorCipher } from './functions'

function App() {
  const navigate = useNavigate()
  const [groupnumber, setGroupnumber] = useState(1)

  function checkGroup() {
    const cipherText = String("INCAMP" + makeid(8)).toUpperCase()         
    const groups = [["marco", "renjie", "kayden", "ted", "darius"], ["dylan", "fred", "drek", "warren", "allen"], ["lili", "kmy", "abigail", "axelia", "gracelyn"]]
    const name = groups[groupnumber - 1][Math.floor(Math.random()*5)] || ""
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