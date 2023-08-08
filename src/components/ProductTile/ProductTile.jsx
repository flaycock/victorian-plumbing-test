import React from 'react';
import InStock from '../../assets/InStock.svg';
import OutOfStock from '../../assets/OutOfStock.svg'
import './ProductTile.css';

const ProductTile = ({ productData }, key) => {
    const roundedRating = Math.floor(productData.averageRating) || 0;
    const formatTitle = (title) => {
        if (title.length > 30) {
            return title.slice(0, 50) + '...';
        } else {
            return title;
        }
    }
    return (
        <div className='productTileWrapper' key={key}>
            <img className='productTileImage' loading='lazy' src={productData.image.url} alt={productData.image.attributes.imageAltText} />
            <div className="productTileText">
                <div className='productTileTitle'>
                    {formatTitle(productData.productName)}
                </div>
                <div className='productTilePrice'>
                    £{productData.price.priceExcTax}
                </div>
                <div className='productTileStock'>
                    {productData.stockStatus.status == 'G' ? (
                        <>
                            <img src={InStock} />
                            <span>
                                In Stock
                            </span>
                        </>
                    ) : (
                        <>
                            <img src={OutOfStock} />
                            <span>
                                Coming Soon
                            </span>
                        </>
                    )}
                </div>
                <div className={`productTileReviews ${roundedRating > 0 ? 'star'.repeat(roundedRating) : 'none'}`}>
                    &nbsp;{productData.reviewsCount} reviews
                </div>
            </div>
        </div>
    )
}

export default ProductTile;