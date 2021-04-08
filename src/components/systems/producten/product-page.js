import React from 'react';

const ProductPage = (props) => {
  if (!props) return <></>;

  const {
    name,
    specs,
    introTitle,
    introDescription,
    category,
    image,
    images,
    description1title,
    description2title,
    description1,
    description2,
    pdf,
  } = props;

  return (
    <section className='single-product-container'>
      <div className='product-page-container container'>
        <div className='product-info'>
          <h1 className='product-info--route'>
            {'PRODUCTEN >'} <span>{category.name}</span>
            <span>{' > '}</span>
            <span className='product-info--route-name'>{name}</span>
          </h1>
          <p className='product-info--intro'>
            <span className='product-info--oneliner'>{introTitle}</span>
            <br /> <br /> <br />
            {introDescription?.internal?.content}
          </p>
          <div className='product-info-details'>
            <h2 className='product-info-title'>{description1title}</h2>
            <p>{description1?.internal?.content}</p>
            <br />
            {specs && specs.length ? (
              <ul>
                {specs.map((spec) => (
                  <li key={spec}>
                    {'> '}
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <></>
            )}
          </div>
          <div className='product-info-details2'>
            <h2 className='product-info-title'>{description2title}</h2>
            {description2?.internal?.content}
            
          </div>
        </div>
        <div className='product-media'>
          <div className='container-main-image'>
            <img
              id='currentImage'
              className='main-image'
              src={image?.file?.url}
              alt=''
            />
            {images && images.length ? (
              <div className='preview-images'>
                {images.map(({ id, file }) => (
                  <img
                    key={id}
                    className='preview-image'
                    src={file?.url}
                    alt=''
                  />
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className='content-block-systems__buttons'>
            <a href=''>ADVIES & SERVICES</a>

            {pdf ? (
              <a target='_blank' href={pdf?.file?.url}>
                PDF FACTSHEET
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
