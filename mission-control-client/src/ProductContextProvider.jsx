import React, {useState} from 'react';
import Product from './components/dashboard/products/Product';

const ProductContextProvider = () = {
    const [state, setState] = useState()
    return (
        <div>
            <ProductContext.Provider value={state, setState}>
            </ProductContext.Provider>
        </div>
        
    )
}

export default ProductContextProvider;