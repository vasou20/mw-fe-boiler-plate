interface AboutProps{};

const About: React.FC<AboutProps> = () => {
    return(
        <>
            <h2>About</h2>
            <h4>This boiler plate includes:</h4>
            <p>React 18.2.0 + Material UI 5.10.13+ Tailwind 3.2.3 + React Router Dom 6.4.3</p>
            <ul>
                <li>
                    To add more pages. Check src/containers/pages/
                </li>
                <li>
                    To use the component available. Check src/components/
                </li>
                <li>
                    To add image/icons/svgs. Check src/assets/
                </li>
            </ul>
        </>
    );
};

export default About;