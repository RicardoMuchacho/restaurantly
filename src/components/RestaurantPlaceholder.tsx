import placeholderImg from '../assets/placeholder.png'

const RestaurantPlaceholder = () => {
  return (
    <div style={{ width: '250px', height: '290px' }} className="card" aria-hidden="true">
      <div className="">
        <img width={250} className="card-image-top" src={placeholderImg} alt={'placeholder'}/>
      </div>
      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-6"></span>
          <button style={{ marginLeft: 15 }} className="btn btn-primary disabled placeholder col-5"></button>
          <span className="placeholder col-3"></span>
        </h5>
      </div>
    </div>
  )
}

export default RestaurantPlaceholder
