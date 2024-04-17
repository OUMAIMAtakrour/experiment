// import styled from 'styled-components';
import MembershipSection from "../components/MembershipAction";
import AboutSection from "../components/AboutSection";
// import TrainerCard from './TrainerCard';
import HeroSection from "../components/HeroSection";
import TrainersSection from "../components/TrainerSection";
import ReasonsToJoinSection from "../components/ReasonToJoin";
import Component from "../components/Component";
import Footer from "../components/Footer";
import ProgressForm from "../components/Form";
import ProgressList from "../components/ProgressList";
const Home = () => {
    const membershipPlans = [
        {
            title: "Basic",
            price: 9.99,
            features: ["Feature 1", "Feature 2", "Feature 3"],
        },
        {
            title: "Standard",
            price: 19.99,
            features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
        },
        {
            title: "Premium",
            price: 29.99,
            features: [
                "Feature 1",
                "Feature 2",
                "Feature 3",
                "Feature 4",
                "Feature 5",
            ],
        },
    ];

    const trainers = [
        { name: "Trainer 1", image: "https://via.placeholder.com/150" },
        { name: "Trainer 2", image: "https://via.placeholder.com/150" },
        { name: "Trainer 3", image: "https://via.placeholder.com/150" },
        { name: "Trainer 4", image: "https://via.placeholder.com/150" },
    ];

    return (
        <>
            <div>
                <HeroSection />
                <ProgressList/>
                <ProgressForm />
                <MembershipSection />

                <ReasonsToJoinSection />

                <TrainersSection />

                <Footer />
            </div>
        </>
    );
};

export default Home;
