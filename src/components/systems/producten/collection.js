import React from 'react';

const AdviesBanner = (props) => {
  const { categories } = props;

  return categories && categories.length ? (
    <section className='product-collection'>
      {categories.map(
        ({
          node: {
            id,
            name,
            slug: categorySlug,
            description: {
              internal: { content },
            },
            image: {
              file: { url: categoryImageSrc },
            },
            product: products,
          },
        }) => (
          <div key={id} className='product-collection-container'>
            <div className='collection-block container'>
              <div className='collection-block-info'>
                <h2>{name}</h2>
                {content ? <p>{content}</p> : <></>}
                {categoryImageSrc ? (
                  <img className='uitleg-img' src={categoryImageSrc} />
                ) : (
                  <></>
                )}
                {/* TODO: Should we do single category page? */}
                {/* <div className='content-block-systems__buttons'>
                  <a href={`/systems/producten/${categorySlug}`}>producten</a>
                </div> */}
              </div>
              {products && products.length ? (
                <div className='collection-block-products'>
                  {products.map(
                    ({
                      id,
                      name,
                      slug: productSlug,
                      image: {
                        file: { url: productImageSrc },
                      },
                    }) => (
                      <div key={id} className='single-product'>
                        <a href={`/systems/producten/${productSlug}`}>
                          {productImageSrc ? (
                            <img src={productImageSrc} />
                          ) : (
                            <></>
                          )}
                        </a>
                        <span>{name}</span>
                      </div>
                    )
                  )}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        )
      )}
    </section>
  ) : (
    <></>
  );
};

export default AdviesBanner;
