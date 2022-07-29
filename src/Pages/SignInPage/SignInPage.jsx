import React from 'react';
import "./SignInPage.scss";

const SignInPage = () => {
    return (
        <main className='sign-in'>
                <article className='sign-in__main'>
                <section className='sign-in__top'>
                    <h1 className='sign-in__header'>Sign In</h1>
                    <h2 className='sign-in__sub-header'>Use your Google Account</h2>
                </section>
                <form action="submit" className='sign-in__form'>
                    <label className='sign-in__label' htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" className='sign-in__input'/>

                    <label className='sign-in__label' htmlFor="password"> Password</label>
                    <input type="password" name="password" id="password" className='sign-in__input'/>

                    <p className='sign-in__forgot'>
                        Forgot Password?
                    </p>
                    <section className='sign-in__outer-button'>
                        <button className='sign-in__inner-button'>
                            Next
                        </button>
                    </section>

                    <p className='sign-in__bottom-text'>
                        Not a member yet? Sign up for free profile
                    </p>
                    <p className='sign-in__create-account'>
                        Create Account
                    </p>
                </form>
            </article>
            <img src="https://via.placeholder.com/1" alt="three people" className='sign-in__img'/>
        </main>
    );
};

export default SignInPage;