import React, {useState, useContext} from 'react';
import {MainContext} from '../../contexts/main-context';
import {useHistory} from 'react-router-dom';
import ApiService from '../../services/api-service';

const apiService = new ApiService();

function LoginComponent(props) {
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');
    const [isDisabled, changeDisabled] = useState(true);
    const {setJwt} = useContext(MainContext);
    const history = useHistory();

    function toggleDisabled() {
        if (email !== '' && password !== '') {
            changeDisabled(false);
        } else {
            changeDisabled(true);
        }
    }

    function handleChange(event) {
        switch (event.target.name) {
            case 'email':
                changeEmail(event.target.value);
                toggleDisabled();
                break;
            case 'password':
                changePassword(event.target.value);
                toggleDisabled();
                break;
            default:
                break;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        const user = {
            email,
            password
        };

        console.log(user);

        apiService.authenticate(user)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setJwt(res.token);
                history.push('/home');
            });
            
    }

    return (
        <section >
            <form >
                <div >
                    <label htmlFor="" >Email</label>
                    <div>
                        <input type="email" value={email} name="email"
                                onChange={handleChange}
                                required/>
                        <span>
                            <i ></i>
                        </span>
                    </div>
                </div>
                <div >
                    <label htmlFor="" >Password</label>
                    <div >
                    <input type="password" value={password} name="password"
                                            onChange={handleChange}
                                            required/>
                        <span >
                            <i></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <button type="submit" onClick={handleSubmit} disabled={isDisabled}>
                        Login
                    </button>
                </div> 
            </form>
        </section>
    );
}

export default LoginComponent