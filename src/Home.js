import './Home.css';
import React, { useState } from 'react';
import Cards from './Cards';
import Deals from './last-minute-deals.avif';
import Meet from './meet-like-you-mean-it.webp';
import Vacation from './a-vacation-you-deserve.avif';
import Blog1 from './from-our-blog-1.jpg';
import Blog2 from './from-our-blog-2.jpg';
import Blog3 from './snacks.jpg';
import Card2 from './Card2';
import Search from './search-icon.png';
import { Link } from 'react-router-dom';

const Home = ({options}) => {

    const [userInput, setUserInput] = useState('');
    const [indexNumber, setIndexNumber] = useState(undefined);
    const [requestId, setRequestId] = useState('');
    const [isNotFound, setIsNotFound] = useState(false);
    const [showError, setShowError] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [noInput, setNoInput] = useState(false);
    const [finalInput, setFinalInput] = useState('');

    const focused = () => {
        const caption = document.querySelector('.caption');
        caption.style.display = 'block';
        setShowError(false);
        setNoInput(false);
        setFinalInput('');
        setIsValid(false)
    }
    const blured = () => {
        const caption = document.querySelector('.caption');
        caption.style.display = 'none'
    }

    const handleSearch = () => {
        const input = (userInput.toLowerCase()).trim();
        if (!input){
            setNoInput(true)
        } else {
            setFinalInput(input)
            const userRequest = options.filter((option)=>{
                return option.state === input
            });
            if (userRequest){
             const results = userRequest.map((request) => {
                 return request.id
             });
             setRequestId(results)
             const resultIndex = requestId - 1;
             if (indexNumber >= 0){
                 setIsValid(true)
             } else{
                 setIsValid(false)
             }
             setIndexNumber(resultIndex)
              if (userRequest.length < 1){
                  setIsNotFound(true)
              }else{
                  setIsNotFound(false)
              }
            } else {
             setIsNotFound(true);
             setIndexNumber(undefined);
             setShowError(true);
            }
        }
        }



    return (
        <section className="home">
            <section className="home-hero">
                <h1>Stay A While</h1>
                <p>Comfort befiting Nigerian royalty</p>
            </section>
            <section className="search" id='search-hotels'>
                <section className="input-search">
                    <label htmlFor="search" className='label'>Input your destination</label>
                    <input
                    id='search'
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onFocus={focused}
                    onBlur={blured}
                    placeholder='Where are you headed?'
                    autoComplete="off"
                    />
                    <button className='search-btn' onClick={handleSearch}><img src={Search} alt="Search icon" width={50} height='auto' /></button>
                </section>
                <p className='caption'><i>Enter state to see recommendations</i></p>

                {noInput && <p>You have not entered a Nigerian state</p>}

                {isNotFound && !showError && !noInput && finalInput &&
                <p className='err-msg'>No result was found for {finalInput}. Consider modifying the spelling then try again</p>
                }

                {isValid && !isNotFound && !noInput &&
                    <ul className='hotel-list'>
                        <li key={options[indexNumber].hotels[0].name}>
                            <Link to={`/hotel/${requestId}/0`} >{options[indexNumber].hotels[0].name}</Link>
                        </li>
                        <li key={options[indexNumber].hotels[1].name}>
                            <Link to={`/hotel/${requestId}/1`} >{options[indexNumber].hotels[1].name}</Link>
                        </li>
                        <li key={options[indexNumber].hotels[2].name}>
                            <Link to={`/hotel/${requestId}/2`} >{options[indexNumber].hotels[2].name}</Link>
                        </li>
                    </ul>
                    }

            </section>
            <section className="display-cards">
                <h2>Why Choose Us?</h2>
                <section className="cards-layout">
                    <Cards image={Deals} title='Last Minute Deals' text='Explore acomodations offering last minute deals' />
                    <Cards image={Meet} title='Meet like you mean it' text='Explore amazing locations for meetings' />
                    <Cards image={Vacation} title='A vacation befitting your status' text='Explore destinations for the perfect vacation' />
                    </section>
            </section>
            <section className="our-blogs">
                <h2>From Our Blog</h2>
                <section className="blog-articles">
                    <Card2 image={Blog1} title='Vacationing at Resorts' text='Float On: These are the Best Places to Kayak, Canoe, and Tube this Summer' />
                    <Card2 image={Blog2} title='Mountain climbing' text='The unsung jewels of the North' />
                    <Card2 image={Blog3} title='Healthy Travel Snacks That are Easy to Throw in Your Carry-On' text='Plan ahead and prepare these easy snacks that are healthy and delicious' />
                </section>
                <button>See all Articles</button>
            </section>
        </section>
    );
}

export default Home;