
import React from 'react';
import { Link } from 'react-router-dom';

const Cards = () => {
    return (
        <div className='blog-main-part'>
            <div className='blog-title'>Blog Section</div>
            <div className="blogs-cards-parts" >
                <div className="blogs-cards" >
                    <article className="card card--1">
                        <div className="card__info-hover">
                            <div className="card__clock-info">
                            </div>
                        </div>
                        <div className="card__img"></div>
                        <Link to="/blog-page" className="card_link">
                            <div className="card__img--hover"></div>
                        </Link>
                        <div className="card__info">
                            <h3 className="card__title">A Guide for Parents: Sending Your Child to Study Abroad</h3>
                          
                        </div>
                    </article>

                    <article className="card card--2">
                        <div className="card__info-hover">
                            <div className="card__clock-info">
                            </div>
                        </div>
                        <div className="card__img"></div>
                        <a href="/blog-Page" className="card_link">
                            <div className="card__img--hover"></div>
                        </a>
                        <div className="card__info">
                            <h3 className="card__title">Studying Abroad
                                Start Your Study Abroad Journey with Pacific Educational Consultant
                            </h3>
                            
                        </div>
                    </article>

                    <article className="card card--3">
                        <div className="card__info-hover">
                            <div className="card__clock-info">
                            </div>
                        </div>
                        <div className="card__img"></div>
                        <a href="/blog-Page" className="card_link">
                            <div className="card__img--hover"></div>
                        </a>
                        <div className="card__info">
                            <h3 className="card__title">Choosing a course for studying abroad</h3>
                            
                        </div>
                    </article>


                </div>
            </div>
        </div>
    );
};

export default Cards;
