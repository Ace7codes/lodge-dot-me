import './Card2.css'

const Card2 = ({image , title, text}) => {
    return (
        <section className="card2">
            <img src={image} alt='A picturre from our corespondent' width={300} height='auto' />
            <h2>{title}</h2>
            <p>{text}</p>
        </section>
    );
}
 
export default Card2;