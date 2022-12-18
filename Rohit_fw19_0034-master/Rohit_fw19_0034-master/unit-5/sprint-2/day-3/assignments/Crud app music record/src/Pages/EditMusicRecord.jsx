import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getMusicRecord } from '../Redux/AppReducer/Action';

const EditMusicRecord = () => {

    const {id} = useParams();
    const albums = useSelector((store)=> store.AppReducer.musicRecords);
    const [musicName, setMusicName] = useState("");
    const dispatch= useDispatch()

    useEffect(()=>{
        if(albums.length === 0){
            dispatch(getMusicRecord())
        }
    },[])

    useEffect(()=>{
        if(id){
            const currentMusic = albums.find(albums=> albums.id === id);
            if(currentMusic){
                setMusicName(currentMusic.name)
            }
        }
    },[id, albums])

  return (
    <div>
      <h1>Edit Page</h1>
      <div>
        <form action="">
            <div>
                <label htmlFor="">Edit Music Name</label>
                <input type="text" value={musicName} onChange = {e => setMusicName(e.target.value)} />
            </div>
            <button type='submit'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default EditMusicRecord
