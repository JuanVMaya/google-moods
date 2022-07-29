import React from 'react';
import "./FeelingBox.scss";
import people from "../../assets/Layer2.png";

const FeelingBox = () => {
    return (
       <article className='box'>
            <h1 className='box__header'>Share how you are feeling</h1>
            <h2 className='box__subheader'>Sharing your thoughts will help us assist you better.</h2>

            <textarea className='box__text-area'>


            </textarea>

            <section className='box__bottom'>
                <img className='box__img' src={people} alt="" />
                <div className='box__text'>
                    <h3 className='box__down-header'>
                        You are not alone!
                    </h3>
                    <p className='box__desc'>
                        Others like you struggle with the same frustrations.
                    </p>
                </div>
                <div className='box__container'>
                    <button className="google__search--button box__button">Cancel</button>
                    <button className="google__search--button">Continue</button>
                </div>
               
                
            </section>
       </article>
    );
};

export default FeelingBox;