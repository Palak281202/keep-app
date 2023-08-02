import React, { useState } from 'react'

export default function Makenotw(props) {
    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    const addnote = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        //const {value,name} = event.target;--> this is called object destructuring.

        setNote((preData) => {
            return {
                ...preData,
                [name]: value
            };
        });
        // console.log(note);
    };
    const addEvent = () => {
        
        
        if(note.title=== ''&&note.content=== ''){
            alert("Note is Empty.")
        }
        else{
            props.clickaction(note);
        }
        setNote({
            title: '',
            content: ''
            })
    };
    return (
        <div>
            <input className="Makenote_title" name="title" value={note.title} onChange={addnote} type="text" placeholder='Title' autoComplete='off'/>

            <br />
            <textarea className="Makenote_text" name="content" value={note.content} onChange={addnote} placeholder='Type note' id="" cols="" rows=""></textarea>
            <button className='addbtn' onClick={addEvent}>+</button>
        </div>
    )
}
