import React from "react";
import renderer from "react-test-renderer"
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {

    test('debe mostrar correctamente el componente con el título personalizado', () => { 

        const wrapper = renderer.create(
            <ProductTitle title="Custom Product" />
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();

     });

     test('debe mostrar el compornente con el nombre del producto', () => { 

        const wrapper = renderer.create(
            <ProductCard product={product1 }>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();

     });

})
