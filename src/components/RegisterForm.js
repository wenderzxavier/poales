import React from 'react'
import '../styles/RegisterForm.css'

const RegisterForm = () => (
    <section id='register-background'>
        <form action='/' className='register-form'>
            <div className='overview-data'>
                <legend>
                    Registration Form
            </legend>
                <div className='input-text'>
                    <input type='text' id='nome-empresa' name='nome-empresa' placeholder='Company Name' required />
                    <input type='text' id='id' name='id' placeholder='Employer ID Number' required />
                    <input type='text' id='location' name='location' placeholder='Location' required />
                </div>
            </div>
            <div className='product-picker'>
                <legend>
                    Select the products you work with:
                </legend>
                <div className='product-select'>
                    <label className='product'>
                        <p>Honey</p>
                        <input type='checkbox' id='mel' name='product-type' />
                    </label>
                    <input type='checkbox' id='cafe' name='product-type' /> Coffee
                    <input type='checkbox' id='cachaca' name='product-type' /> Licor
                    <input type='checkbox' id='laticinios' name='product-type' /> Dairy
                    <input type='checkbox' id='cotton' name='product-type' /> Cotton
                </div>
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
                    <input type='file' id='photos' name='photos' accept='image/png, image/jpeg' multiple />
                </label>
            </div>
            <div>
                <label for='video'>Cover Video:
                    <input type='file' id='video' name='video' accept='video/*' />
                </label>
            </div>
            <div>
                <label for='bio'>Bio
                    <textarea rows='5' columns='15' />
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
                    <textarea rows='5' columns='15' />
                </label>
            </div>
            <input type='submit' name='sumit' value='Submit' />
        </form>
    </section>
)

export default RegisterForm