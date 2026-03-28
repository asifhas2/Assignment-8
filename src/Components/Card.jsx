import React from 'react';
import downlodeIcon from '../assets/icon-downloads.png'
import ratingIcon from '../assets/icon-ratings.png'
import { Link } from 'react-router';
const Card = ({data}) => {
    return (
        <Link to={`/apps/${data.id}`}>
            <div className="card bg-base-100 shadow-sm p-4 space-y-3 ">
  <figure>
    <img className='rounded-[8px]'
      src={data.image}
      alt="Shoes" />
  </figure>
  <div className="space-y-3">
    <h2 className="card-title">{data.title}</h2>
    <div className="flex justify-between items-center ">
      <button className="btn ">
        <img className='w-5' src={downlodeIcon} alt="" />
        <p className='text-[#627382]'>{data.size}M</p>
      </button>
      <button className="btn ">
        <img className='w-5' src={ratingIcon} alt="" />
        <p className='text-[#627382]'>{data.ratingAvg
}</p>
      </button>
    </div>
  </div>
</div>
        </Link>
    );
};

export default Card;