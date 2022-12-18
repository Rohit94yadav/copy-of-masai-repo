import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { editMusicRecord, getMusicRecord, setAlbumUpdated, updateMusicRecord } from '../Redux/AppReducer/Action';

const EditMusicRecord = () => {

    const {id} = useParams();
    const album = useSelector((store)=> store.AppReducer.album);
    const albumUpdated = useSelector((store)=> store.AppReducer.albumUpdated);
    const navigate = useNavigate();

    const [musicName, setMusicName] = useState("");
    const [musicGenre, setMusicGenre] = useState("");
    const [musicImg, setMusicImg] = useState("");
    const dispatch= useDispatch()
    const[error, setError] = useState("");
    const[state, setState] = useState({
          name:"",
          genre: "",
          img: "",
        });
      
    useEffect(()=>{
        // if(albums?.length === 0){
        //     dispatch(editMusicRecord(id))
        // }
        dispatch(editMusicRecord(id))
    },[])

    useEffect(()=>{
        // if(id){
            // const currentMusic = albums?.find(album => album?.id === id);
            if(album){
               console.log(album)
                setState({name : album.name, genre: album.genre, img: album.img})
            }
        // }
    },[ album])

    useEffect(()=>{
      if(albumUpdated){
        navigate("/")
        dispatch(setAlbumUpdated(false))
      }

    },[albumUpdated])

    const {name, genre, img} = state;

    const handleinputChange = (e)=>{
            let {name, value} = e.target;
            
            setMusicName(e.target.value)
            setMusicGenre(e.target.value)
                setMusicImg(e.target.value)
                console.log(name,value)
            setState({...state, [name]: value})
        }

    const handleSubmit = (e)=>{
          e.preventDefault();
          if(!name || !genre || !img){
            setError("Please write in every input fiels");
          }else{
            dispatch(updateMusicRecord(state, id));
              
              setError("");
          }
        }

  return (
    <div>
      <h1>Edit Page</h1>
      <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Edit Music Name</label>
                <input type="text" name="name" value={state.name} onChange={handleinputChange} />
                <input type="text" name="genre" value={state.genre} onChange={handleinputChange} />
                <input type="text" name="img" value={state.img} onChange={handleinputChange} />

            </div>
            <button type='submit'  >Update</button>
        </form>
      </div>
    </div>
  )
}




// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// import { addMusicRecord, editMusicRecord } from '../Redux/AppReducer/Action';

// const EditMusicRecord = () => {

//   const[state, setState] = useState({
//     name:"",
//     genre:"",
//     img:"",
//   });

//   const[error, setError] = useState("");
//   const {id} = useParams();

//   const {albums} = useSelector((state)=> state.data);

//   let navigate = useNavigate()
//   let dispatch = useDispatch()

//   const {name, genre, img} = state;

//   useEffect(()=>{
//     dispatch(editMusicRecord(id))
//   },[])

//   useEffect(()=>{
//     if(albums){
//       setState({...albums})
//     }
//   },[albums])

//   const handleinputChange = (e)=>{
//       let {name, value} = e.target;
//       setState({...state, [name]: value})
//   }

//   const handleSubmit = (e)=>{
//     e.preventDefault();
//     if(!name || !genre || !img){
//       setError("Please write in every input fiels");
//     }else{
//       dispatch(addMusicRecord(state));
//         navigate("/")
//         setError("");
//     }
//   }


//   return (
//     <div>
//       <h1>Edit Music Albums</h1>
//       {error && <h3 style={{color:"red"}}>{error}</h3>}
//       <form onSubmit={handleSubmit} >
//         <label htmlFor="">ADD NAME</label>
//         <br />
//         <input type="text" placeholder='Name' value={name || ""} name="name" onChange={handleinputChange} />
//         <br />
//         <label htmlFor="">ADD GENRE</label>
//         <br />
//         <input type="text" placeholder='genre' value={genre || ""} name="genre" onChange={handleinputChange} />
//         <br />
//         <label htmlFor="">ADD IMAGE</label>
//         <br />
//         <input type="text" placeholder='image' value={img || ""} name="img" onChange={handleinputChange} />
//         <br />
//         <button type='submit' >Update</button>
//       </form>
//     </div>
//   )
// }

export default EditMusicRecord;
