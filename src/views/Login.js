import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm'
import '../styles/Login.css'

const Login = () => (
    <div>
        <header>
            <Navbar color='#252930'/>
        </header>
        <main>
            <LoginForm />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
)

export default Login