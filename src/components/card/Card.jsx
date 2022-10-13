
const Card = ({name,image,age,email})=>{    
    return (
      <div className="mycard d-flex me-5 mb-3">
        <div className="image me-4">
          <img src={image} alt="img" className="border rounded-circle" />
        </div>
        <div className="info">
          <h3>{name}</h3>
          <p className="opacity-50">{email}</p>
          <p className="opacity-50">{age} years</p>
        </div>
      </div>
    );
}

export default Card;