import React from 'react'
import '../styles/Login.css'

const LoginForm = () => (
    <section id='login-background' className='background-image'>
        <form action='/' className='login-form'>
            <legend>WELCOME TO POALES</legend>
            <label>
                <input type='text' name='username' placeholder='Username' />
            </label>
            <label>
                <input type='text' name='password' placeholder='Password' />
            </label>
            <input type='submit' name='submit' value='Login' id='login-submit' />
            <a href='#'>Forgot your password? Click Here</a>
            <a href='#'>New to Poales? Click Here to Register</a>
        </form>
    </section>
)

export default LoginForm