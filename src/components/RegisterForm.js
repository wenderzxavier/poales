import React from 'react'
import Products from '../utils/Products'
import '../styles/RegisterForm.css'
import Certifications from '../utils/Certifications'
import Profile from '../img/user.svg'

const RegisterForm = () => (
    <section id='register-background' className='background-image'>
        <form action='/' className='register-form'>
            <legend className='form-title'>
                Registration Form
            </legend>
            <div className='farmer-data flex-column'>
                <div>
                    <label htmlFor='avatar' className='profile-img-label'>
                        <img src={Profile} alt='Profile Icon' id='profile-pic'></img>
                        <p>Clique para alterar avatar</p>
                        <input type='file' id='avatar' name='avatar' accept='image/png, image/jpeg' className='register-img-input' />
                    </label>
                </div>
                <div>
                    <label htmlFor='bio'>
                    <textarea rows='20' columns='15' placeholder='Short Bio' className='input-text' id='bio'/>
                    </label>
                </div>
                {/* <div>
                    <label htmlFor='photos'>Production Photos:
                    <input type='file' id='photos' name='photos' accept='image/png, image/jpeg' multiple className='register-img-input' />
                    </label>
                </div>
                <div>
                    <label htmlFor='video'>Cover Video:
                    <input type='file' id='video' name='video' accept='video/*' className='register-img-input' />
                    </label>
                </div> */}
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
                    <div className='checkbox-select'>
                        {Products.map((data, key) => (
                            <div key={key}>
                                <input type='checkbox' id={data.name.toLowerCase()} name='product-type' className='product-checkbox' />
                                <label key={key} className='product wrap-checkbox' htmlFor={data.name.toLowerCase()}>
                                    {data.img}
                                    <p>{data.name}</p>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <textarea id='register-textarea' rows='8' cols='15' placeholder={`Tell more about your product:${'\n\n'}Information related to amount produced, type of grains, production time`} className='input-text'></textarea>
                </div>
                <div className='flex-text-fields'>
                    <legend>
                        Specify the metric for the following fields (e.g. gallons, liters):
                    </legend>
                    <input type='text' id='production' name='production' placeholder='Monthly Production' className='input-text' required />
                    <input type='text' id='growth-capacity' name='growth-capacity' placeholder='Growth capacity' className='input-text' required />
                    <input type='text' id='destiny' name='destiny' placeholder='Current Buyers' className='input-text' required />
                </div>
                <div>
                    <legend>
                        Cerfitications:
                    </legend>
                    <div className='checkbox-select'>
                        {Certifications.map((data, key) => (
                            <div key={key}>
                                <input type='checkbox' id={`certification-${key}`} name='certification-type' className='certification-checkbox' />
                                <label htmlFor={`certification-${key}`} className='certification wrap-checkbox'>
                                    <img src={data.img} alt='Certification' className='certification-icon'></img>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='terms-conditions'>
                <div>
                    <label htmlFor='agreement'>
                        I agree to the terms and conditions.<input type='checkbox' id='agreement' name='agreement' />
                    </label>
                </div>
                <input type='submit' name='sumit' value='Submit' />
            </div>
        </form>
    </section>
)

export default RegisterForm