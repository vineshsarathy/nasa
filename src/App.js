import { useState, useEffect } from "react";
import dayjs from 'dayjs'
import HeaderComponent from "./components/header/header";
import Infinite from "./components/infinite/infinite";
import axios from "axios";
import "./App.css";
import Slide from "./components/Slide/Slide";
import  Modal  from "./components/modal/Modal";

function App() {
  const [listItems, setListItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [slideData,setSlideData] =useState([])
  const [dates,setDates]=useState({start:'2022-10-01',end:'2022-10-29'})
  const [modalData, setModalData]= useState({title:'',desc:'',img:''})
  const [showModal,setShowModal]=useState(false)
  const fetchNasa = async() =>{
    await axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7&start_date=${dates.start}&end_date=${dates.end}&thumbs=true`
      )
      .then((res) => {
      const totalItems = [...listItems,...res.data]
      setListItems(totalItems)
      setSlideData(res.data.slice(0,7))
      setIsFetching(false)})
      .catch((err) => console.log(err));
  }
  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setIsFetching(true);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(()=>{
    fetchNasa()
  },[])
  const getMoreData =()=> {
    setTimeout(() => {
     const newStart = dayjs(dates.start).subtract(30, 'day').format('YYYY-MM-DD');
     const endStart = dayjs(dates.end).subtract(30, 'day').format('YYYY-MM-DD');
      setDates({start:newStart,end:endStart})
      fetchNasa();
    }, 2000);
  }
  useEffect(() => {
    if (!isFetching) return;
    getMoreData();
  }, [isFetching]);
  return (
    <>
      {listItems.length !== 0 ?
      <div  className="App">
        <HeaderComponent />
      <div className="mainContainer">
        <div className="contentContainer">
          <h3 className="heroTitle">{listItems[1]?.title}</h3>
          <p className="heroPara">
          {listItems[1]?.explanation}
          </p>
          <em>{listItems[1]?.date}</em>
        </div>
        <div className="imageContainer">
          <img
            className="mainImage"
            src={listItems[1]?.url}
            alt=""
          />
        </div>
      </div>
      {slideData.length !==0 && <Slide slideData={slideData} setModalData={setModalData} 
      setShowModal={setShowModal}/>}
      <Infinite items={listItems} setModalData={setModalData} setShowModal={setShowModal} />
      {isFetching && 'Fetching Data.... '}
      {showModal && <Modal content={modalData} closePopup={setShowModal} />}
      </div>:<div className="load"></div>
      }
    </>
  );
}

export default App;
