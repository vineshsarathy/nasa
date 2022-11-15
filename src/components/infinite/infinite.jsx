import React from 'react'
import Card from "../card/card";
import './infinite.css'

export default function Infinite({items,setModalData,setShowModal}) {
  return (
    <>
    <h2 className='infiteHead'>Our Achievments</h2>
    <div className="infiniteContainer">
        
        {items.length !==0 ? items.map((i) => (
        <Card
          image={i.thumbnail_url ? i.thumbnail_url : i.url}
          content={i.title}
          date={i.date}
          desc={i.explanation}
          setModalData={setModalData}
          setShowModal={setShowModal}
        />
      )):"Fetching Data...." }</div>
      </>
  )
}
