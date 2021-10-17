import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';

const Checkout = () => {
    return (
        <div>
           <div className="login-form mt-5 mx-auto w-25 mb-5"> 
                <Link className="d-block  text-center mb-5" to="/"><img height="60" src={logo} alt="" /></Link>
                <h1>Edit Delivery Details</h1>
                <InputGroup className="mb-3">
                <FormControl
                    placeholder="Name"
                    aria-label="name"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                <FormControl
                    placeholder="Address 1"
                    aria-label="address-1"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                <FormControl
                    placeholder="Address 2"
                    aria-label="address-2"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                <FormControl
                    placeholder="Business Name"
                    aria-label="business-name"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                <FormControl
                    placeholder="Add delivery instructor"
                    aria-label="add-delivery-instructor"
                    />
                </InputGroup>
                <div className="d-grid gap-2">
                <Link to="/order"><Button variant="danger" size="lg">
                Save & Continue
                </Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Checkout;