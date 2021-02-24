import React from 'react';
import uniqueId from 'lodash/uniqueId';

const Project = (props) => {
  const {
    title,
    images,
    activities,
    shortDescription: { content: shortDescriptionContent },
    longDescription: { content: longDescriptionContent },
  } = props;

  return (
    <section className='project-block'>
      <div className='project-block--container container'>
        <div className='project-block--textImage project-element'>
          <h2>{title}</h2>
          <p>{shortDescriptionContent}</p>
          {images && images.length ? (
            images.map(({ file: { url: src } }) => (
              <img key={uniqueId()} src={src} alt='' />
            ))
          ) : (
            <></>
          )}
        </div>
        <div className='project-block--text project-element'>
          <p>{longDescriptionContent}</p>
        </div>
        {activities && activities.length ? (
          <div className='project-block--work project-element'>
            <h3>Werkzaamheden</h3>
            <br />
            {activities.map((activity) => (
              <div key={uniqueId()} className='works'>
                <span>
                  <span className='arrow-horizontal'>{'>>'}</span>
                  {activity}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Project;
