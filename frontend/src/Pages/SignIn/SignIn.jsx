import {Link} from 'react-router-dom'

import Form from '../../components/Form/Form';
import './signIn.css'

const SignIn = () => {

    return (
        <div className='signIn'>
            <Form title='Sign In'/>
            <p className="link__signUp">If u dont have account, <Link to='/signup' className='form__link'>Sign Up</Link></p>
        </div>        
    );
};

export default SignIn;