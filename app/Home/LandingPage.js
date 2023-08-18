import React from 'react';
import FeaturedCard from "../components/FeaturedCard";
import SideBar from "../components/SideBar";
import LatestNews from "../components/LatestNews";
import Title from "../components/Title";
import Progress from "../components/Progress";
import SignUp from '../sign-up/SignUp';

const LandingPage = () => {
    return (
        <div>
            <div className="flex">
                <div>
                    <SideBar />
                </div>
                <div className=" pr-16 pl-4 space-y-2">
                    <div>
                        <Title title="Featured Courses" />
                        <div className="grid grid-cols-4 gap-4">
                            <FeaturedCard />
                        </div>
                    </div>
                    <div>
                        <Title title="Latest News" />
                        <div className="flex justify-between items-center">
                            <LatestNews />
                        </div>
                    </div>
                    <div>
                        <Title title="My Progress" />
                        <div className="flex gap-8">
                            <Progress />
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className='bg-[#FF2C25] px-8 py-1 rounded-2xl text-white font-semibold mb-3'>View All</button>
                    </div>
                </div>
            </div>
            <div>
                <SignUp />
            </div>
        </div>
    )
}

export default LandingPage;
