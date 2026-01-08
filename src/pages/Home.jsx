import Banner from "../components/Banner";
import ClientSay from "../components/ClientSay";
import Faq from "../components/Faq";
import Services from "../components/services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ClientSay></ClientSay>
            <Faq></Faq>
        </div>
    );
};

export default Home;