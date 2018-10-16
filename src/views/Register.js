import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RegisterForm from '../components/RegisterForm'

const Register = () => (
    <div>
        <header>
            <Navbar />
        </header>
        <main>
            <RegisterForm />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
)

export default Register