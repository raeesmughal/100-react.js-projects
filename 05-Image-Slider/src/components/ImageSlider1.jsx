import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import './style.css'

const ImageSlider = ({ url, limit = 5, page = 2 }) => {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    function handlePrev() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }

    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }

    function handleCircleIndicator(currentIndex) {
        setCurrentSlide(currentIndex)
    }


    async function fetchImages(currentUrl) {
        setError(null);
        setLoading(true);
        try {
            const response = await fetch(`${currentUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImages(data);
            }

        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false);
        }
    }

    console.log(images);

    useEffect(() => {
        fetchImages(url)
    }, [url])


    if (loading) {
        <div>Loading... please Wait!</div>
    }
    if (error) {
        <div>Error found : {error}</div>
    }




    return (
        <div className='image-slider'>
            <FaArrowAltCircleLeft className='arrow arrow-left' size={30} onClick={handlePrev} />
            {
                images && images.length > 0 ? (images.map((image, index) => (
                    
                        <img src={image.download_url} alt={image.author} className={currentSlide === index ? 'current-image' : 'hiden-images'} key={image.id}/>
                    
                ))) : null
            }

            <div className='circle-indicators-container'>

                {
                    images && images.length > 0 ?
                        images.map((_, index) => (
                            <button type="button" className={currentSlide === index ? 'circle-indicator active' : 'circle-indicator'} onClick={()=>handleCircleIndicator(index)}></button>
                        )) : null
                }

            </div>

            <FaArrowAltCircleRight className='arrow arrow-right' size={30} onClick={handleNext} />
        </div>
    )
}

export default ImageSlider