import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export default function Notes(props) {
  const deletekaro = () => {
    props.delNote(props.id);
  }
   return (
    <div><h2 className="Makenote_title smalltitle">{props.title}</h2>
   <p className = "Makenote_text smallsize">{props.content}</p>
    <button className='delbtn' onClick={deletekaro}><DeleteIcon/></button></div>
  )
}
