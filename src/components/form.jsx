import React, {useState} from 'react';

const Form = (props) => {
    const [inputs, setInputs] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
    });

    
    

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };
    return (
        <form className="d-flexbox justify-content-center">
            <h1>Registration</h1>
            <div className="form-floating mb-3">
                <label htmlFor="firstName"></label>
                <input onChange={onChange} type="text" placeholder="First Name" name="firstName" />
                {inputs.firstName.length < 2 && inputs.firstName.length > 0 ? <p className="text-danger">Feild must be a least two characters. </p> :<p></p>
                }
            </div>
        <div className="form-floating mb-3">
            <label htmlFor="lastName"></label>
                <input onChange={onChange} placeholder="Last Name" type="text" name="lastName" />
                {
                    inputs.lastName.length < 2 && inputs.lastName.length > 0 ? <p className="text-danger">Feild must be a least two characters. </p> :<p></p>
            }
        </div>
        <div className="form-floating mb-3">
            <label htmlFor="email"></label>
                <input onChange={onChange} placeholder="Email" type="text" name="email" />
                {
                    inputs.email.length < 5 && inputs.email.length > 0 ? <p className="text-danger">Feild must be a least five characters. </p> :<p></p>
            }
        </div>
        <div className="form-floating mb-3">
            <label htmlFor="password"></label>
                <input onChange={onChange} placeholder="Password" type="password" name="password" />
                {
                    inputs.password.length < 8 && inputs.password.length > 0 ? <p className="text-danger">Feild must be a least eight characters. </p> :<p></p>
            }
        </div>
        <div className="form-floating mb-3">
            <label htmlFor="confirmPassword"></label>
                <input onChange={onChange} placeholder="Confirm Pass" type="password" name="confirmPassword" />
                {
                    inputs.confirmPassword !== inputs.password ? <p className="text-danger">Feild must be match. </p> :<p></p>
            }
        </div>
    </form>
    );
};

export default Form;

