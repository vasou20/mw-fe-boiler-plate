import { Link } from "react-router-dom";

interface LandingProps{}

const Landing: React.FC<LandingProps> = () => {

    return(
        <>
            <h1>Welcome to Mindwave boiler plate</h1>
            <div>
                <Link to="/components">View component list</Link>
            </div>
            <div>
                <Link to="/about">About the boiler plate</Link>
            </div>

        </>
    );
};

export default Landing;