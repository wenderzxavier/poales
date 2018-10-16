import React from 'react'
import '../styles/RegisterForm.css'

const RegisterForm = () => (
    <section id='register-form'>
        <header>
            <h1>Registration Form</h1>
        </header>
        <form action='/'>
            <div>
                <label for='nome-empresa'>Social Name
            <input type='text' id='nome-empresa' name='nome-empresa' placeholder='WZX S.A.' required />
                </label>
            </div>
            <div>
                <label for='id'>Employer ID Number
            <input type='text' id='id' name='id' placeholder='102.365.9662.75/25-45' required />
                </label>
            </div>
            <div>
                <label for='location'>Location
            <input type='text' id='location' name='location' required />
                </label>
            </div>
            <div>
                <div>
                    Product:
                </div>
                <label for='mel'>
                    <input type='checkbox' id='mel' name='product-type' /> Honey
                </label>
                <label for='cafe'>
                    <input type='checkbox' id='cafe' name='product-type' /> Coffee
                </label>
                <label for='cachaca'>
                    <input type='checkbox' id='cachaca' name='product-type' /> Licor
                </label>
                <label for='laticionios'>
                    <input type='checkbox' id='laticinios' name='product-type' /> Dairy
                </label>
                <label for='cotton'>
                    <input type='checkbox' id='cotton' name='product-type' /> Cotton
                </label>
            </div>
            <div>
                <div>
                    <label for='description'>Describe the product:</label>
                </div>
                <textarea id='description' rows='10' cols='30' placeholder='Information related to amount produced, type of grains, production time'></textarea>
            </div>
            <div>
                <label for='production'>Monthly Production (specify the metric)
                    <input type='text' id='production' placeholder='25 gallons' required />
                </label>
            </div>
            <div>
                <label for='capacity'>Growth capacity (specify the metric)
                    <input type='text' id='capacity' placeholder='30 gallons' required />
                </label>
            </div>
            <div>
                <label for='destiny'>Current Buyers:
                    <input type='text' id='destiny' placeholder='Whom are you selling to? (Countries, companies)' />
                </label>
            </div>
            <div>
                <label for='avatar'>Escolher Avatar
                    <input type='file' id='avatar' name='avatar' accept='image/png, image/jpeg' />
                </label>
            </div>
            <div>
                <label for='photos'>Production Photos:
                    <input type='file' id='photos' name='photos' accept='image/png, image/jpeg' multiple/>
                </label>
            </div>
            <div>
                <label for='video'>Cover Video:
                    <input type='file' id='video' name='video' accept='video/*'/>
                </label>
            </div>
            <div>
                <label for='bio'>Bio
                    <textarea rows='5' columns='15'/>
                </label>
            </div>
            <div>
                <div>
                    Cerfitications:
                </div>
                <label for='mel'>
                    <input type='checkbox' id='mel' name='certification' /> Certification 1
                </label>
                <label for='cafe'>
                    <input type='checkbox' id='cafe' name='certification' /> Certification 2
                </label>
                <label for='cachaca'>
                    <input type='checkbox' id='cachaca' name='certification' /> Certification 3
                </label>
                <label for='laticionios'>
                    <input type='checkbox' id='laticinios' name='certification' /> Certification 4
                </label>
            </div>
            <div>
                <label for='avatar'>Escolher Avatar
                    <input type='file' id='avatar' name='avatar' accept='image/png, image/jpeg' />
                </label>
            </div>
            <div>
                <label for='veracity'>Bio
                    <textarea rows='5' columns='15'/>
                </label>
            </div>
            <input type='submit' name='sumit' value='Submit' />
        </form>
    </section>
)

export default RegisterForm