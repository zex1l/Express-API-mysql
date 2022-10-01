import {useState} from 'react'
import axios from 'axios'

import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '../../store/slices/userSlice'

import './Form.css'
import { useNavigate } from 'react-router-dom'

const Form = ({title, setToken}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const onSubmitData = (e) => {
        e.preventDefault()

        if(title === 'Sign In') {
            axios.post('http://localhost:5000/users/auth/signin', {
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'no-cors',
                data: {
                    email,
                    password
                }
            })
                .then(res => dispatch(addUser(res.data.value.token))
                ) 
        }
        else {
            // Add sign up with backend
        }

        
        setEmail('')
        setPassword('')
        setName('')
        navigate('/')
    }

    return(
        <div className="form">
            <div className="container">
                <div className="form__inner">
                <div className="form__logo">{title}</div>
                <form  className='form' onSubmit={onSubmitData}>
                        <input 
                            type="email" 
                            className="form__input" 
                            placeholder="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input 
                            type="password" 
                            className="form__input" 
                            placeholder="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        {title === 'Sign Up' ? 
                            <input 
                                placeholder='name'
                                type="text" 
                                className="form__input" 
                                value={name}
                                onChange={e => setName(e.target.value)}
                             />
                            :
                            null
                        }
                        <button className="form__btn">{title}</button>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default Form