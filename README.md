# immz-product-card

Este es un paquete de pruebas de despliegue en NPM

### IvanManuel

## Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductsButtons } from 'immz-product-card'
```


```
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
```