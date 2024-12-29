import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductsButtons } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug',
  // img: '../../../public/coffee-mug.png'
}

const App = () => {
  return (
    <>
      <ProductCard
        product={product}
        className="bd-dark text-white"
        initialValues={{
          count: 4,
          // maxCount: 10
        }}
      >
        {
          ({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductsButtons />
            </>
          )
        }
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
