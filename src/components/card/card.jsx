import React from 'react'
import './card.css'
export default function Card({image,content,date,desc,setModalData,setShowModal}) {
    const setData=()=>{
        setModalData({title:content,desc:desc,img:image})
        setShowModal(true)
    }
  return (
    <div className='cardContainer' onClick={()=>{setData()}}>
        <img className='cardImg' src={image} alt="" />
        <h3 className='cardTitle'>{content} </h3>
        <small className='cardDate'>{date}</small>
    </div>
  )
}
