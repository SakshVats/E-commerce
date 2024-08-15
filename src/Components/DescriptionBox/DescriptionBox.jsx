import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="description navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews(122)</div>
            </div>
            <div className="descriptionbox-description">
                <p> A e-commerce website is an online platform that facilitate buying and selling of products
                     or servives over the internet and serves as a virtual marketplace where businesses and 
                     individual showcase there products, interact with customers, and conduct websites have 
                     gained immense popularity due to their convienent accessibility, and the global 
                     reach they offer. </p>
                     <p>
                        E- commerce websites typically display products or services in detailed descriptions,
                        images, prices, and any available variety. Each product usually has it's own detail
                        with relevant information.
                     </p>
            </div>
        </div>
    )
}
export default DescriptionBox