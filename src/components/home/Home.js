import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);
    
    return (
        <>
            {isLoading ? <Button variant="dark" disabled>
                    <Spinner
                    as="span"
                    variant="light"
                    size="lg"
                    role="status"
                    aria-hidden="true"
                    animation="border"/>
                </Button> : (
                <img src={"/assets/banner-home.jpg"} alt="selectedItemImage" />
            )}
        </>
    );
};

export default Home;
