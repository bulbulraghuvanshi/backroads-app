import React from 'react'

const Tour = (tour) => {
  return (
    <article className="tour-card">
          <div className="tour-img-container">
            <img src={tour.image} className="tour-img" alt="" />
            <p className="tour-date">{tour.date}</p>
          </div>
          <div className="tour-info">
            <h4>{tour.title}</h4>
            <p>
              {tour.text}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className={tour.icon}></i></span> {tour.location}
              </p>
              <p>{tour.duration} days</p>
              <p>from ${tour.cost}</p>
            </div>
          </div>
        </article>
  )
}

export default Tour
