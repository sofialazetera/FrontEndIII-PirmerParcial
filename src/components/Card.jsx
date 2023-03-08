import './Card.css'
const Card = ({userName, favouritePet}) => {


    return(
    <>
        <div className="card">
            <h3>Hola {userName}!</h3>
            <p>Tu animal favorito es un:</p>
            <p className="pet">{favouritePet}</p>
        </div>
    </>)
};

export default Card