import React from 'react';
import Banner from '../../components/Banner/Banner';
import Activity from './Activity';
import TrendingApps from './TrendingApps';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Activity></Activity>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default Home;
