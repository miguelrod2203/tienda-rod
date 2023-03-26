
import './BannerFinal.css'


export const BannerFinal = ( { orderId } ) => {

    return (
        <div className="contenedorBannerFinal">
            <div className='imagenBannerFinal'>
                <img src="../../imagenes/bannerFinal.jpg" alt="banner" title='banner'/>
                <div className='textoBannerFinal titul'>
                    <h5>Orden registrada con exito</h5>
                    <p>
                        Recibiras este codigo en tu correo <br/>
                        Codigo de Ref: { orderId }
                    </p>
                </div>
            </div>
        </div>
    )
}