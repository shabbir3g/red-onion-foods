import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo2.png';

const Register = () => {

    const {createUserEmailPassword} = useAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');
    const [passWord2, setPassWord2] = useState('');

    const changeUserName = e =>{
        setName(e.target.value);
    }
    const changeUserEmail = e =>{
        setEmail(e.target.value);
    }
    const changeUserPassWord = e =>{
        setPassWord(e.target.value);
    }
    const changeUserPassWord2 = e =>{
        setPassWord2(e.target.value);
    }
    const handleRegistrationUser = () =>{
        if(passWord === passWord2){
            createUserEmailPassword(email, passWord, name);
           
        }
       
    }

    






    return (
        <div>
           <div className="login-form mt-5 mx-auto w-25"> 
                <Link className="d-block  text-center mb-5" to="/"><img height="60" src={logo} alt="" /></Link>
                <InputGroup className="mb-3">
                <FormControl 
                    onBlur={changeUserName}
                    placeholder="Name"
                    aria-label="name"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                <FormControl
                    onBlur={changeUserEmail}
                    placeholder="Email"
                    aria-label="email"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                <FormControl 
                    type="password"
                    onBlur={changeUserPassWord}
                    placeholder="Password"
                    aria-label="password"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                <FormControl
                    type="password"
                    onBlur={changeUserPassWord2}
                    placeholder="Confirm Password"
                    aria-label="confirm-password"
                    />
                </InputGroup>
                <div className="d-grid gap-2">
                <Button onClick={handleRegistrationUser} variant="danger" size="lg">
                    Registration
                </Button>
                </div>
                <Link className="text-center mt-2 text-decoration-none d-block text-danger" to="/login">Already have an account</Link>
           </div>
        </div>
    );
};

export default Register;