// react
import React from 'react';

// application
import Pagination from '../shared/Pagination';
import Rating from '../shared/Rating';

// data stubs
import qas from '../../data/shopProductQA';

function ProductTabQA() {
    const qasList = qas.map((qa, index) => (
        <li key={index} className="reviews-list__item">
            <div className="review">
                <div className=" review__content">
                    <div className=" review__text">{qa.question}</div>
                    <div className=" review__date">{qa.answer}</div>
                </div>
            </div>
        </li>
    ));

    return (
        <div className="reviews-view">
            <div className="reviews-view__list">
                <h3 className="reviews-view__header">Questions & Answers</h3>

                <div className="reviews-list">
                    <ol className="reviews-list__content">
                        {qasList}
                    </ol>
                    <div className="reviews-list__pagination">
                        <Pagination current={1} siblings={2} total={10}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductTabQA;
