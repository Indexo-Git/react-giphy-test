
import { GIFitem } from "./GIFitem";
import { useFetchGIFs } from "../hooks/useFetchGIFs";

export const GIFGrid = ({ category }) => {

    const { images, isLoading } = useFetchGIFs(category);

    console.log({images, isLoading});
    return (
        <>
            <h3>{ category }</h3>
            { isLoading && (<h2 >Cargando...</h2>) }
            
           <div className="card-grid">
                { 
                    images.map( image => 
                        (
                            <GIFitem 
                                key={image.id} 
                                { ...image }
                            />
                        )
                    )
                }
           </div>

        </>
    )
}
