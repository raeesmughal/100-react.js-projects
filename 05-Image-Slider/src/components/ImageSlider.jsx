import React, { useEffect, useState } from 'react'
import './style.css';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const ImageSlider = ({ url, limit = 20, page = 2 }) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    function handlePrev() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }
    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }

    function handleCircieIndicator (index){
        setCurrentSlide(index);
    }
    
    console.log(currentSlide)

    async function fetchImages() {
        setLoading(true);
        setError(null);
        try {

            const response = await fetch(`${url}?page=${page}&limit=${limit}`);
            const data = await response.json();


            if (data) {
                console.log(data);
                setImages(data)
            }


        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);

        }
    }



    useEffect(() => {
        fetchImages()
    }, [url])

    if (loading) {
        return <h1 className='loading'>Loading</h1>
    }

    if (error) {
        return <h1 className="error">Error : {error}</h1>
    }



    return (
        <div className='container'>
            <FaArrowAltCircleLeft className='arrow arrow-left' size={30} onClick={handlePrev} />
            <FaArrowAltCircleRight className='arrow arrow-right' size={30} onClick={handleNext} />

            <div className='circle-indicator-container'>
                {
                    (images && images.length > 0) ? images.map((_, index) => (
                        <button key={index} className={currentSlide === index?'circle-indicator active':'circle-indicator'} onClick={() => handleCircieIndicator(index)}></button>
                    )) : null
                }
            </div>
            {
                (images && images.length > 0) ? images.map((image,index) => (
                    <img src={image.download_url} alt={image.download_url} key={image.id} className={currentSlide === index ?'image':'image hidden-image'} />
                )) : <div>Images Not Found</div>
            }
        </div>
    )
}

export default ImageSlider