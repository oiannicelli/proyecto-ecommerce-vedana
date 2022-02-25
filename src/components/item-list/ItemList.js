import React, { memo } from 'react';
import Item from '../item/Item';

const ItemList =  memo(

    ({ products}) => {
        return (
            <div className="row text-center ">
                {
                    products.map((product) => <Item key={product.id} product={product}/>)
                }
            </div>
        )
    }
)


export default ItemList;