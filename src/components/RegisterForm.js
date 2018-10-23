import React from 'react'
import Products from '../utils/Products'
import '../styles/RegisterForm.css'

const RegisterForm = () => (
    <section id='register-background' className='background-image'>
        <form action='/' className='register-form'>
            <legend className='form-title'>
                Registration Form
            </legend>
            <div className='farmer-data flex-column'>
                <div>
                    <label for='avatar'>Escolher Avatar
                    <input type='file' id='avatar' name='avatar' accept='image/png, image/jpeg' />
                    </label>
                </div>
                <div>
                    <label for='bio'>Bio
                    <textarea rows='5' columns='15' />
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
            </div>
            <div className='product-data flex-column'>
                <div className='overview-data'>
                    <div className='flex-text-fields'>
                        <input type='text' id='nome-empresa' name='nome-empresa' placeholder='Company Name' className='input-text' required />
                        <input type='text' id='id' name='id' placeholder='Employer ID Number' className='input-text' required />
                        <input type='text' id='location' name='location' placeholder='Location' className='input-text' required />
                    </div>
                </div>
                <div className='product-picker'>
                    <legend>
                        Select the products you work with:
                </legend>
                    <div className='product-select'>
                        {Products.map((data, key) => (
                            <label key={key} className='product' htmlFor={data.name.toLowerCase()}>
                                <img src={data.img} className='product-icon' alt={`${data.name} icon`}></img>
                                <p>{data.name}</p>
                                <input type='checkbox' id={data.name.toLowerCase()} name='product-type' />
                            </label>
                        ))}
                    </div>
                </div>
                <div>
                    <textarea id='register-textarea' rows='10' cols='15' placeholder={`Tell more about your product:${'\n\n'}Information related to amount produced, type of grains, production time`} className='input-text'></textarea>
                </div>
                <div className='flex-text-fields'>
                    <legend>
                        Specify the metric for the following fields (e.g. gallons, liters):
                    </legend>                    
                <input type='text' id='production' name='production' placeholder='Monthly Production (specify the metric)' className='input-text' required />
                    <input type='text' id='growth-capacity' name='growth-capacity' placeholder='Growth capacity (specify the metric)' className='input-text' required />
                    <input type='text' id='destiny' name='destiny' placeholder='Current Buyers:' className='input-text' required />
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

            </div>
            <div className='terms-conditions'>
                <div>
                    <label htmlFor='agreement'>
                        <input type='checkbox' id='agreement' name='agreement' />I agree to the terms and conditions.
                    </label>
                </div>
                <input type='submit' name='sumit' value='Submit' />
            </div>
        </form>
    </section>
)

export default RegisterForm