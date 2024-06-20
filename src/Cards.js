import './Cards.css'

const Cards = ({image , title, text}) => {
    return (
        <section className="cards">
            <img src={image} alt='practical depiction of what we offer' width={300} height='auto' />
            <h2>{title}</h2>
            <p>{text}</p>
        </section>
    );
}
 
export default Cards;