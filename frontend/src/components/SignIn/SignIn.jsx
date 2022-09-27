import {useState} from 'react'
import {Link} from 'react-router-dom'

import './signIn.css'

const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitData = (e) => {
        e.preventDefault()
        setEmail('')
        setPassword('')
    }

    return (
        <div className="signIn">
            <div className="container">
                <div className="signIn__inner">
                    <form  className='signIn__form' onSubmit={onSubmitData}>
                        <input 
                            type="email" 
                            className="signIn__input" 
                            placeholder="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input 
                            type="password" 
                            className="signIn__input" 
                            placeholder="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button className="signIn__btn">Sign In</button>
                    </form>
                    <p className="link__signUp">If u dont have account, <Link to='/signup' className='form__link'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;