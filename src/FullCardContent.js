import './FullCardContent.css';
import { useParams } from 'react-router-dom';

const FullCardContent = ({options}) => {

    const { id } = useParams();
    const { index } = useParams();
    const hotel = options.filter(option => option.id === Number(id))

    return (
        <article className="full-card">
            <img src={hotel[0].hotels[index].image1} alt={`A depiction of ${hotel[0].hotels[index].name}`} width='300px' height='auto'/>
            <img src={hotel[0].hotels[index].image2} alt={`A depiction of ${hotel[0].hotels[index].name}`} width='300px' height='auto'/>
            <h2><span className="details-h2">Hotel Name</span> : {hotel[0].hotels[index].name}</h2>
            <h3><span className="details-h3">Rating</span> : {hotel[0].hotels[index].rating}</h3>
            <h3><span className="details-h3">Price per night</span> : {hotel[0].hotels[index].price}</h3>
            <p><span className="details-p">Phone Number</span> : +{hotel[0].hotels[index].contact}</p>
            <p><span className="details-p">Hotel Address</span> : {hotel[0].hotels[index].address}</p>
        </article>
    );
}
 
export default FullCardContent;