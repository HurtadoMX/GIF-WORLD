import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3> Resultados de: <span className='animate__animated animate__bounceInLeft'>{ !category ? <span>"Debes buscar algo"</span> : category } </span> </h3>


            <div className='card-grid animate__animated animate__backInDown'>
                
                {
                    images.map( img => (
                        <GifGridItem 
                        
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            
            </div>
        </>
    )
}
