import React, { Suspense } from 'react';
import Banner from './Banner';
import PopularBooks from '../Pages/PopularBooks';
import Loading from '../Pages/Loading';
import FindOut from '../Pages/FindOut';
import FeaturedCategory from '../Pages/FeaturedCategory';


// import GradientText from './GradientText';



const Home = () => {
    return (
        <div className='space-y-20'>
             
            <Suspense fallback={<Loading></Loading>}>
                <Banner></Banner>
                
                <PopularBooks></PopularBooks>
               
                <FeaturedCategory></FeaturedCategory>
              
                {/* <GradientText></GradientText> */}
                 <FindOut></FindOut>
                
                 
                
            </Suspense>
        </div>
    );
};

export default Home;