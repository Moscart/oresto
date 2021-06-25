import CONFIG from '../../globals/config'
import { limitText } from '../../utils/card-utils'

const createRestaurantTemplate = (resto) => /* html */`
    <div class="card">
        <div class="card__tag">
            <span class="material-icons">
                place
            </span>
            ${resto.city}
        </div>
        <div class="card__imagebox">
            <img
                class="card__image lazyload"
                data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"
                alt="${resto.name}"
                onerror="src='images/error/default.png'"
            />
        </div>
        <div class="card__rate">
            Rating : 
            <div class="star">
                <div class="rating" style="width:${resto.rating / 5 * 100}%">
                    <span>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span>
                </div>
            </div>
            ${(resto.rating).toFixed(1)}
        </div>
        <div class="card__content">
            <a href="#/detail/${resto.id}" class="card__title">${resto.name}</a>
            <div class="card__description">
                ${limitText(resto.description, 350)}
            </div>
        </div>
    </div>
`

const createDetailTemplate = (resto) => /* html */`
    <section class="content">
        <div class="katalog">
            <h1 class="katalog__label">${resto.name}</h1>
            <div class="cards details">
                <div class="detail detail__main">
                    <div class="card__imagebox">
                        <img
                            class="detail__image"
                            src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"
                            alt="${resto.name}"
                        />
                    </div>
                    <div class="detail__like"></div>
                    <div class="detail__rate">
                        Rating : 
                        <div class="star">
                            <div class="rating" style="width:${resto.rating / 5 * 100}%">
                                <span>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span>
                            </div>
                        </div>
                        ${(resto.rating).toFixed(1)}
                    </div>
                    <div class="detail__content">
                        <div class="detail__item">
                            <div class="detail__itemTitle">
                                <span class="material-icons">
                                    label
                                </span>
                                Categories : 
                            </div>
                            <div class="detail__itemContent">
                                ${resto.categories.map((category) => '<div class="detail__itemTag">' + category.name + '</div>').join('')}
                            </div>
                        </div>
                        <div class="detail__item">
                            <div class="detail__itemTitle">
                                <span class="material-icons">
                                    location_city
                                </span>
                                City : 
                            </div>
                            <div class="detail__itemContent">
                                ${'<div class="detail__itemTag">' + resto.city + '</div>'}
                            </div>
                        </div>
                        <div class="detail__item">
                            <div class="detail__itemTitle">
                                <span class="material-icons">
                                    place
                                </span>
                                Address : 
                            </div>
                            <div class="detail__itemContent">
                                ${'<div class="detail__itemTag">' + resto.address + '</div>'}
                            </div>
                        </div>
                        <div class="detail__item">
                            <div class="detail__itemTitle">
                                <span class="material-icons">
                                    description
                                </span>
                                Description : 
                            </div>
                            <div class="detail__itemContent">
                                ${'<div class="detail__itemTag">' + resto.description + '</div>'}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="detail detail__menu">
                    <div class="detail__header">
                        Menu
                    </div>
                    <div class="detail__content">
                        <div class="detail__item">
                            <div class="detail__itemTitle">
                                <span class="material-icons">
                                    fastfood
                                </span>
                                Food : 
                            </div>
                            <div class="detail__itemContent">
                                ${resto.menus.foods.map((food) => '<div class="detail__itemTag">' + food.name + '</div>').join('')}
                            </div>
                        </div>
                        <div class="detail__item">
                            <div class="detail__itemTitle">
                                <span class="material-icons">
                                    local_cafe
                                </span>
                                Drink : 
                            </div>
                            <div class="detail__itemContent">
                                ${resto.menus.drinks.map((drink) => '<div class="detail__itemTag">' + drink.name + '</div>').join('')}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="detail detail__review">
                    <div class="detail__header">
                        Review
                    </div>
                    <div class="detail__content">
                        ${resto.customerReviews.map((review) => /* html */`
                        <div class="detail__item">
                            <div class="detail__itemTitle">
                                <span class="material-icons">
                                    account_circle
                                </span>
                                ${review.name}
                            </div>
                            <div class="detail__itemContent">
                                ${'<div class="detail__itemTag">' + review.review + '</div>'}
                                <div>${review.date}</div>
                            </div>
                        </div>
                        `).join('')}
                    </div>
                </div>
                <div class="detail detail__addreview">
                    <div class="detail__header">
                        Your Review
                    </div>
                    <form action id="review__form" method="POST">
                        <div class="detail__content">
                            <div class="detail__item">
                                <div class="detail__itemTitle">
                                    <span class="material-icons">
                                        person
                                    </span>
                                    Name
                                </div>
                                <input type="text" placeholder="Your Name" id="review__name" required autocomplete="off"/>
                            </div>
                            <div class="detail__item">
                                <div class="detail__itemTitle">
                                    <span class="material-icons">
                                        reviews
                                    </span>
                                    Review 
                                </div>
                                <textarea placeholder="Your Review" id="review__text" required></textarea>
                            </div>
                            <button id="review__submit" arial-label="Submit your review">Submit Review</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
`

const createLikeRestoButtonTemplate = () => /* html */`
    <button id="likeButton" class="like" arial-label="Like this restaurant">
        <span class="material-icons">
            favorite_border
        </span>
    </button>
`

const createUnlikeRestoButtonTemplate = () => /* html */`
    <button id="likeButton" class="like" arial-label="Unlike this restaurant">
        <span class="material-icons">
            favorite
        </span>
    </button>
`

const createErrorTemplate = (message) => /* html */`
    <span class="material-icons">
        warning
    </span>
    <div class="error__message">${message.toUpperCase()}</div>
`

const createContentTemplate = (label) => /* html */`
    <div class="katalog">
        <h1 class="katalog__label">${label}</h1>
        <div class="cards">
        </div>
    </div>
`

export { createRestaurantTemplate, createDetailTemplate, createLikeRestoButtonTemplate, createUnlikeRestoButtonTemplate, createErrorTemplate, createContentTemplate }
