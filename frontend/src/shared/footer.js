import About from "./about";

function Footer() {
    return ( 
        <>
            <About />
            <br className="my-5" />
            <div className="bg-light shadow-lg py-3 mt-5 d-flex justify-content-center">
                <h4 className="logo">NeptuneGarden</h4>
            </div>
        </>
     );
}

export default Footer;