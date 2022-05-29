import React from 'react'
import Title from '../base_components/Title'



const Chips = () => {
  return (
    <>
      <Title>Team</Title>
      <div className="chips">
        <div className="chip"> <a href="https://github.com/magdalenasar/Groepsproject-2/tree/Magdalena"><img src="/src/image/github.png" alt="mag git" />Magdalena</a></div>
        <div className="chip"> <a href="https://github.com/magdalenasar/Groepsproject-2/tree/Tijl"><img src="/src/image/github.png" alt="steven git" /> Tijl</a> </div>
        <div className="chip"> <a href="https://github.com/magdalenasar/Groepsproject-2/tree/Steven"> <img src="/src/image/github.png" alt="tijl git"/> Steven</a> </div>
      </div>
    </>
  )
}

export default Chips