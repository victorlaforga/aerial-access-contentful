import React, { useState } from 'react';

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
pdf2,


pdfFactsheet

} = props;
console.log({ props });

const [mainImageSrc, setImage] = useState(image?.file?.url || '');

return (
<section className='single-product-container'>
  <div className='product-page-container container'>
    <div className='product-info'>
      <h1 className='product-info--route'>
        {'PRODUCTEN >'} <span>{category?.name}</span>
        <span>{' > '}</span>
        <span className='product-info--route-name'>{name}</span>
      </h1>
      <p className='product-info--intro'>
        <span className='product-info--oneliner'>{introTitle}</span>
        <br /> <br /> <br />
        <span dangerouslySetInnerHTML={{
                __html: introDescription.childMarkdownRemark.html,
              }} />
      </p>
      <div className='product-info-details'>
        <h2 className='product-info-title'>{description1title}</h2>
        <span dangerouslySetInnerHTML={{
                __html: description1?.childMarkdownRemark.html,
              }} />
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
        <span dangerouslySetInnerHTML={{
                __html: description2.childMarkdownRemark.html,
              }} />
      </div>
    </div>
    <div className='product-media'>
      <div className='container-main-image'>
        <img id='currentImage' className='main-image' src={mainImageSrc} alt='' />
        {images && images.length ? (
        <div className='preview-images'>
          <img className='preview-image' src={image?.file?.url} onClick={()=> setImage(image?.file?.url)}
          />
          {images.map(({ id, file }) => (
          <img key={id} className='preview-image' src={file?.url} alt='' onClick={()=> setImage(file?.url)}
          />
          ))}
        </div>
        ) : (
        <></>
        )}
      </div>
      <div className='content-block-systems__buttons'>
        <a href='/systems/advies-service/'>ADVIES & SERVICES</a>

        {pdf ? (
        <a target='_blank' href={pdf?.file?.url}>
          PDF FACTSHEET
        </a>
        ) : (
        <></>
        )}
        {pdf2 ? (
        <a target='_blank' href={pdf2?.file?.url}>
          PDF FACTSHEET 2
        </a>
        ) : (
        <></>
        )}
        {pdfFactsheet[0] ? (
        <a target="blank" href={pdfFactsheet[0].file?.url}>PDF FACTSHEET 1</a>
        ) : (
        <></>
        )}
        {pdfFactsheet[1] ? (
        <a target="blank" href={pdfFactsheet[1].file?.url}>PDF FACTSHEET 2</a>
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