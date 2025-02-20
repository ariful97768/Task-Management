import React from 'react';
import Category from './Category';

const Home = () => {
    return (
        <main className='grid grid-cols-3 justify-center items-center max-w-max mx-auto gap-10'>
            <Category />
            <Category />
            <Category />
        </main>
    );
};

export default Home;