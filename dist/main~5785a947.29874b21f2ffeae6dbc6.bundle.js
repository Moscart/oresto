(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(4);

// EXTERNAL MODULE: ./src/styles/main.css
var styles_main = __webpack_require__(5);

// EXTERNAL MODULE: ./src/styles/responsive.css
var responsive = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/lazysizes/lazysizes.js
var lazysizes = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js
var ls_parent_fit = __webpack_require__(7);

// CONCATENATED MODULE: ./src/scripts/utils/drawer-initiator.js
var DrawerInitiator = {
  init: function init(_ref) {
    var _this = this;

    var button = _ref.button,
        drawer = _ref.drawer,
        hero = _ref.hero,
        content = _ref.content,
        nav = _ref.nav;
    button.addEventListener('click', function (event) {
      _this._toggleDrawer(event, drawer);
    });
    content.addEventListener('click', function (event) {
      _this._closeDrawer(event, drawer);
    });
    hero.addEventListener('click', function (event) {
      _this._closeDrawer(event, drawer);
    });
    nav.addEventListener('click', function (event) {
      _this._closeDrawer(event, drawer);
    });
  },
  _toggleDrawer: function _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },
  _closeDrawer: function _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  }
};
/* harmony default export */ var drawer_initiator = (DrawerInitiator);
// CONCATENATED MODULE: ./src/scripts/routes/url-parser.js
var UrlParser = {
  parseActiveUrlWithCombiner: function parseActiveUrlWithCombiner() {
    var url = window.location.hash.slice(1).toLowerCase();

    var splitedUrl = this._urlSplitter(url);

    return this._urlCombiner(splitedUrl);
  },
  parseActiveUrlWithoutCombiner: function parseActiveUrlWithoutCombiner() {
    var url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },
  _urlSplitter: function _urlSplitter(url) {
    var urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null
    };
  },
  _urlCombiner: function _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? "/".concat(splitedUrl.resource) : '/') + (splitedUrl.id ? '/:id' : '') + (splitedUrl.verb ? "/".concat(splitedUrl.verb) : '');
  }
};
/* harmony default export */ var url_parser = (UrlParser);
// CONCATENATED MODULE: ./src/scripts/globals/config.js
var CONFIG = {
  KEY: '12345',
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images/medium/',
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: 'RestoCatalogue-V1',
  DATABASE_NAME: 'resto-catalogue-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'resto'
};
/* harmony default export */ var config = (CONFIG);
// CONCATENATED MODULE: ./src/scripts/globals/api-endpoint.js

var API_ENDPOINT = {
  HOME: "".concat(config.BASE_URL, "list"),
  DETAIL: function DETAIL(id) {
    return "".concat(config.BASE_URL, "detail/").concat(id);
  },
  SEARCH: function SEARCH(query) {
    return "".concat(config.BASE_URL, "search?q=").concat(query);
  }
};
/* harmony default export */ var api_endpoint = (API_ENDPOINT);
// CONCATENATED MODULE: ./src/scripts/data/restaurantdb-source.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var restaurantdb_source_RestaurantDbSource = /*#__PURE__*/function () {
  function RestaurantDbSource() {
    _classCallCheck(this, RestaurantDbSource);
  }

  _createClass(RestaurantDbSource, null, [{
    key: "home",
    value: function () {
      var _home = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response, responseJson;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return fetch(api_endpoint.HOME);

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.json();

              case 6:
                responseJson = _context.sent;
                return _context.abrupt("return", responseJson.restaurants);

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", _context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }));

      function home() {
        return _home.apply(this, arguments);
      }

      return home;
    }()
  }, {
    key: "detail",
    value: function () {
      var _detail = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        var response;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return fetch(api_endpoint.DETAIL(id));

              case 3:
                response = _context2.sent;
                return _context2.abrupt("return", response.json());

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", _context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function detail(_x) {
        return _detail.apply(this, arguments);
      }

      return detail;
    }()
  }, {
    key: "search",
    value: function () {
      var _search = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(query) {
        var response, responseJson;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return fetch(api_endpoint.SEARCH(query));

              case 3:
                response = _context3.sent;
                _context3.next = 6;
                return response.json();

              case 6:
                responseJson = _context3.sent;
                return _context3.abrupt("return", responseJson.restaurants);

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", _context3.t0);

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 10]]);
      }));

      function search(_x2) {
        return _search.apply(this, arguments);
      }

      return search;
    }()
  }]);

  return RestaurantDbSource;
}();

/* harmony default export */ var restaurantdb_source = (restaurantdb_source_RestaurantDbSource);
// CONCATENATED MODULE: ./src/scripts/utils/card-utils.js
var limitText = function limitText(text, count) {
  return text.slice(0, count) + (text.length > count ? '...' : '');
};


// CONCATENATED MODULE: ./src/scripts/views/templates/template-creator.js



var template_creator_createRestaurantTemplate = function createRestaurantTemplate(resto) {
  return (
    /* html */
    "\n    <div class=\"card\">\n        <div class=\"card__tag\">\n            <span class=\"material-icons\">\n                place\n            </span>\n            ".concat(resto.city, "\n        </div>\n        <div class=\"card__imagebox\">\n            <img\n                class=\"card__image lazyload\"\n                data-src=\"").concat(config.BASE_IMAGE_URL + resto.pictureId, "\"\n                alt=\"").concat(resto.name, "\"\n                onerror=\"src='images/error/default.png'\"\n            />\n        </div>\n        <div class=\"card__rate\">\n            Rating : \n            <div class=\"star\">\n                <div class=\"rating\" style=\"width:").concat(resto.rating / 5 * 100, "%\">\n                    <span>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span>\n                </div>\n            </div>\n            ").concat(resto.rating.toFixed(1), "\n        </div>\n        <div class=\"card__content\">\n            <a href=\"#/detail/").concat(resto.id, "\" class=\"card__title\">").concat(resto.name, "</a>\n            <div class=\"card__description\">\n                ").concat(limitText(resto.description, 350), "\n            </div>\n        </div>\n    </div>\n")
  );
};

var template_creator_createDetailTemplate = function createDetailTemplate(resto) {
  return (
    /* html */
    "\n    <section class=\"content\">\n        <div class=\"katalog\">\n            <h1 class=\"katalog__label\">".concat(resto.name, "</h1>\n            <div class=\"cards details\">\n                <div class=\"detail detail__main\">\n                    <div class=\"card__imagebox\">\n                        <img\n                            class=\"detail__image\"\n                            src=\"").concat(config.BASE_IMAGE_URL + resto.pictureId, "\"\n                            alt=\"").concat(resto.name, "\"\n                        />\n                    </div>\n                    <div class=\"detail__like\"></div>\n                    <div class=\"detail__rate\">\n                        Rating : \n                        <div class=\"star\">\n                            <div class=\"rating\" style=\"width:").concat(resto.rating / 5 * 100, "%\">\n                                <span>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span>\n                            </div>\n                        </div>\n                        ").concat(resto.rating.toFixed(1), "\n                    </div>\n                    <div class=\"detail__content\">\n                        <div class=\"detail__item\">\n                            <div class=\"detail__itemTitle\">\n                                <span class=\"material-icons\">\n                                    label\n                                </span>\n                                Categories : \n                            </div>\n                            <div class=\"detail__itemContent\">\n                                ").concat(resto.categories.map(function (category) {
      return '<div class="detail__itemTag">' + category.name + '</div>';
    }).join(''), "\n                            </div>\n                        </div>\n                        <div class=\"detail__item\">\n                            <div class=\"detail__itemTitle\">\n                                <span class=\"material-icons\">\n                                    location_city\n                                </span>\n                                City : \n                            </div>\n                            <div class=\"detail__itemContent\">\n                                ").concat('<div class="detail__itemTag">' + resto.city + '</div>', "\n                            </div>\n                        </div>\n                        <div class=\"detail__item\">\n                            <div class=\"detail__itemTitle\">\n                                <span class=\"material-icons\">\n                                    place\n                                </span>\n                                Address : \n                            </div>\n                            <div class=\"detail__itemContent\">\n                                ").concat('<div class="detail__itemTag">' + resto.address + '</div>', "\n                            </div>\n                        </div>\n                        <div class=\"detail__item\">\n                            <div class=\"detail__itemTitle\">\n                                <span class=\"material-icons\">\n                                    description\n                                </span>\n                                Description : \n                            </div>\n                            <div class=\"detail__itemContent\">\n                                ").concat('<div class="detail__itemTag">' + resto.description + '</div>', "\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"detail detail__menu\">\n                    <div class=\"detail__header\">\n                        Menu\n                    </div>\n                    <div class=\"detail__content\">\n                        <div class=\"detail__item\">\n                            <div class=\"detail__itemTitle\">\n                                <span class=\"material-icons\">\n                                    fastfood\n                                </span>\n                                Food : \n                            </div>\n                            <div class=\"detail__itemContent\">\n                                ").concat(resto.menus.foods.map(function (food) {
      return '<div class="detail__itemTag">' + food.name + '</div>';
    }).join(''), "\n                            </div>\n                        </div>\n                        <div class=\"detail__item\">\n                            <div class=\"detail__itemTitle\">\n                                <span class=\"material-icons\">\n                                    local_cafe\n                                </span>\n                                Drink : \n                            </div>\n                            <div class=\"detail__itemContent\">\n                                ").concat(resto.menus.drinks.map(function (drink) {
      return '<div class="detail__itemTag">' + drink.name + '</div>';
    }).join(''), "\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"detail detail__review\">\n                    <div class=\"detail__header\">\n                        Review\n                    </div>\n                    <div class=\"detail__content\">\n                        ").concat(resto.customerReviews.map(function (review) {
      return (
        /* html */
        "\n                        <div class=\"detail__item\">\n                            <div class=\"detail__itemTitle\">\n                                <span class=\"material-icons\">\n                                    account_circle\n                                </span>\n                                ".concat(review.name, "\n                            </div>\n                            <div class=\"detail__itemContent\">\n                                ").concat('<div class="detail__itemTag">' + review.review + '</div>', "\n                                <div>").concat(review.date, "</div>\n                            </div>\n                        </div>\n                        ")
      );
    }).join(''), "\n                    </div>\n                </div>\n                <div class=\"detail detail__addreview\">\n                    <div class=\"detail__header\">\n                        Your Review\n                    </div>\n                    <form action id=\"review__form\" method=\"POST\">\n                        <div class=\"detail__content\">\n                            <div class=\"detail__item\">\n                                <div class=\"detail__itemTitle\">\n                                    <span class=\"material-icons\">\n                                        person\n                                    </span>\n                                    Name\n                                </div>\n                                <input type=\"text\" placeholder=\"Your Name\" id=\"review__name\" required autocomplete=\"off\"/>\n                            </div>\n                            <div class=\"detail__item\">\n                                <div class=\"detail__itemTitle\">\n                                    <span class=\"material-icons\">\n                                        reviews\n                                    </span>\n                                    Review \n                                </div>\n                                <textarea placeholder=\"Your Review\" id=\"review__text\" required></textarea>\n                            </div>\n                            <button id=\"review__submit\" arial-label=\"Submit your review\">Submit Review</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </section>\n")
  );
};

var createLikeRestoButtonTemplate = function createLikeRestoButtonTemplate() {
  return (
    /* html */
    "\n    <button id=\"likeButton\" class=\"like\" arial-label=\"Like this restaurant\">\n        <span class=\"material-icons\">\n            favorite_border\n        </span>\n    </button>\n"
  );
};

var createUnlikeRestoButtonTemplate = function createUnlikeRestoButtonTemplate() {
  return (
    /* html */
    "\n    <button id=\"likeButton\" class=\"like\" arial-label=\"Unlike this restaurant\">\n        <span class=\"material-icons\">\n            favorite\n        </span>\n    </button>\n"
  );
};

var createErrorTemplate = function createErrorTemplate(message) {
  return (
    /* html */
    "\n    <span class=\"material-icons\">\n        warning\n    </span>\n    <div class=\"error__message\">".concat(message.toUpperCase(), "</div>\n")
  );
};

var createContentTemplate = function createContentTemplate(label) {
  return (
    /* html */
    "\n    <div class=\"katalog\">\n        <h1 class=\"katalog__label\">".concat(label, "</h1>\n        <div class=\"cards\">\n        </div>\n    </div>\n")
  );
};


// CONCATENATED MODULE: ./src/scripts/views/pages/home.js
function home_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function home_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { home_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { home_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var Home = {
  render: function render() {
    return home_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return",
              /* html */
              "\n    <div class=\"error invisible\"></div>\n    <section class=\"content\">\n        <div class=\"katalog\">\n            <h1 class=\"katalog__label\">List Restaurants</h1>\n            <div class=\"cards\">\n              <div class=\"skeleton\"></div>\n              <div class=\"skeleton\"></div>\n              <div class=\"skeleton\"></div>\n              <div class=\"skeleton\"></div>\n              <div class=\"skeleton\"></div>\n              <div class=\"skeleton\"></div>\n            </div>\n        </div>\n    </section>\n    ");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  afterRender: function afterRender() {
    return home_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var restaurants, skeleton, content, error, cards, i;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return restaurantdb_source.home();

            case 2:
              restaurants = _context2.sent;
              skeleton = document.querySelectorAll('.skeleton');
              content = document.querySelector('.content');
              error = document.querySelector('.error');
              cards = document.querySelector('.cards');

              for (i = 0; i < skeleton.length; i++) {
                skeleton[i].classList.add('invisible');
              }

              if (Array.isArray(restaurants)) {
                restaurants.forEach(function (restaurant) {
                  cards.innerHTML += template_creator_createRestaurantTemplate(restaurant);
                });
              } else {
                content.classList.add('invisible');
                error.classList.remove('invisible');
                error.innerHTML = createErrorTemplate('please check your connection');
              }

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};
/* harmony default export */ var pages_home = (Home);
// EXTERNAL MODULE: ./node_modules/idb/build/esm/index.js + 1 modules
var esm = __webpack_require__(3);

// CONCATENATED MODULE: ./src/scripts/data/favorite-resto-idb.js
function favorite_resto_idb_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function favorite_resto_idb_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { favorite_resto_idb_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { favorite_resto_idb_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var DATABASE_NAME = config.DATABASE_NAME,
    DATABASE_VERSION = config.DATABASE_VERSION,
    OBJECT_STORE_NAME = config.OBJECT_STORE_NAME;
var dbPromise = Object(esm["a" /* openDB */])(DATABASE_NAME, DATABASE_VERSION, {
  upgrade: function upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id'
    });
  }
});
var FavoriteRestoIdb = {
  getResto: function getResto(id) {
    return favorite_resto_idb_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (id) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.next = 4;
              return dbPromise;

            case 4:
              return _context.abrupt("return", _context.sent.get(OBJECT_STORE_NAME, id));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  getAllResto: function getAllResto() {
    return favorite_resto_idb_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return dbPromise;

            case 2:
              return _context2.abrupt("return", _context2.sent.getAll(OBJECT_STORE_NAME));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  putResto: function putResto(Resto) {
    return favorite_resto_idb_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (Resto.hasOwnProperty('id')) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              _context3.next = 4;
              return dbPromise;

            case 4:
              return _context3.abrupt("return", _context3.sent.put(OBJECT_STORE_NAME, Resto));

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  deleteResto: function deleteResto(id) {
    return favorite_resto_idb_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return dbPromise;

            case 2:
              return _context4.abrupt("return", _context4.sent["delete"](OBJECT_STORE_NAME, id));

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  searchResto: function searchResto(query) {
    var _this = this;

    return favorite_resto_idb_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this.getAllResto();

            case 2:
              return _context5.abrupt("return", _context5.sent.filter(function (resto) {
                var loweredCaseRestoTitle = (resto.title || '-').toLowerCase();
                var jammedRestoTitle = loweredCaseRestoTitle.replace(/\s/g, '');
                var loweredCaseQuery = query.toLowerCase();
                var jammedQuery = loweredCaseQuery.replace(/\s/g, '');
                return jammedRestoTitle.indexOf(jammedQuery) !== -1;
              }));

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  }
};
/* harmony default export */ var favorite_resto_idb = (FavoriteRestoIdb);
// CONCATENATED MODULE: ./src/scripts/views/pages/favorite.js
function favorite_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function favorite_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { favorite_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { favorite_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var Favorite = {
  render: function render() {
    return favorite_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return",
              /* html */
              "\n    <div class=\"error invisible\"></div>\n    <section class=\"content\">\n        <div class=\"katalog\">\n            <h1 class=\"katalog__label\">Favorite Restaurants</h1>\n            <div class=\"cards\">\n              <div class=\"skeleton\"></div>\n              <div class=\"skeleton\"></div>\n              <div class=\"skeleton\"></div>\n              <div class=\"skeleton\"></div>\n              <div class=\"skeleton\"></div>\n              <div class=\"skeleton\"></div>\n            </div>\n        </div>\n    </section>\n    ");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  afterRender: function afterRender() {
    return favorite_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var restaurant, skeleton, cards, error, content, i;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return favorite_resto_idb.getAllResto();

            case 2:
              restaurant = _context2.sent;
              skeleton = document.querySelectorAll('.skeleton');
              cards = document.querySelector('.cards');
              error = document.querySelector('.error');
              content = document.querySelector('.content');

              for (i = 0; i < skeleton.length; i++) {
                skeleton[i].classList.add('invisible');
              }

              if (restaurant.length === 0) {
                content.classList.add('invisible');
                error.classList.remove('invisible');
                error.innerHTML = createErrorTemplate('not found');
              } else {
                restaurant.forEach(function (resto) {
                  cards.innerHTML += template_creator_createRestaurantTemplate(resto);
                });
              }

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};
/* harmony default export */ var favorite = (Favorite);
// CONCATENATED MODULE: ./src/scripts/utils/review-initiator.js
function review_initiator_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function review_initiator_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { review_initiator_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { review_initiator_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var ReviewInitiator = {
  init: function init(_ref) {
    var _this = this;

    return review_initiator_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var reviewName, reviewText, reviewForm;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              reviewName = _ref.reviewName, reviewText = _ref.reviewText, reviewForm = _ref.reviewForm;
              _this._reviewName = reviewName;
              _this._reviewText = reviewText;
              _this._reviewForm = reviewForm;
              _context.next = 6;
              return _this._review();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  _review: function _review() {
    var _this2 = this;

    return review_initiator_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this2._reviewForm.addEventListener('submit', /*#__PURE__*/function () {
                var _ref2 = review_initiator_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {
                  var url, reviewName, reviewText, data;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          url = url_parser.parseActiveUrlWithoutCombiner();
                          reviewName = _this2._reviewName.value;
                          reviewText = _this2._reviewText.value;
                          data = {
                            id: url.id,
                            name: reviewName,
                            review: reviewText
                          };
                          event.preventDefault();
                          _context2.next = 7;
                          return _this2._addReview(data);

                        case 7:
                          document.location.reload();

                        case 8:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }());

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  _addReview: function _addReview(data) {
    return review_initiator_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var response;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return fetch(config.BASE_URL + 'review', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'X-Auth-Token': config.KEY
                },
                body: JSON.stringify(data)
              });

            case 2:
              response = _context4.sent;

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  }
};
/* harmony default export */ var review_initiator = (ReviewInitiator);
// CONCATENATED MODULE: ./src/scripts/utils/like-button-presenter.js
function like_button_presenter_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function like_button_presenter_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { like_button_presenter_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { like_button_presenter_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var LikeButtonPresenter = {
  init: function init(_ref) {
    var _this = this;

    return like_button_presenter_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var likeButtonContainer, favoriteResto, resto;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              likeButtonContainer = _ref.likeButtonContainer, favoriteResto = _ref.favoriteResto, resto = _ref.resto;
              _this._likeButtonContainer = likeButtonContainer;
              _this._resto = resto;
              _this._favoriteResto = favoriteResto;
              _context.next = 6;
              return _this._renderButton();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  _renderButton: function _renderButton() {
    var _this2 = this;

    return like_button_presenter_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var id;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = _this2._resto.id;
              _context2.next = 3;
              return _this2._isRestoExist(id);

            case 3:
              if (!_context2.sent) {
                _context2.next = 7;
                break;
              }

              _this2._renderLiked();

              _context2.next = 8;
              break;

            case 7:
              _this2._renderLike();

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  _isRestoExist: function _isRestoExist(id) {
    var _this3 = this;

    return like_button_presenter_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var resto;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3._favoriteResto.getResto(id);

            case 2:
              resto = _context3.sent;
              return _context3.abrupt("return", resto);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  _renderLike: function _renderLike() {
    var _this4 = this;

    this._likeButtonContainer.innerHTML = createLikeRestoButtonTemplate();
    var likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', /*#__PURE__*/like_button_presenter_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this4._favoriteResto.putResto(_this4._resto);

            case 2:
              _this4._renderButton();

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
  },
  _renderLiked: function _renderLiked() {
    var _this5 = this;

    this._likeButtonContainer.innerHTML = createUnlikeRestoButtonTemplate();
    var likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', /*#__PURE__*/like_button_presenter_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this5._favoriteResto.deleteResto(_this5._resto.id);

            case 2:
              _this5._renderButton();

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
  }
};
/* harmony default export */ var like_button_presenter = (LikeButtonPresenter);
// CONCATENATED MODULE: ./src/scripts/views/pages/detail.js
function detail_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function detail_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { detail_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { detail_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var Detail = {
  render: function render() {
    return detail_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return",
              /* html */
              "\n    <div class=\"error invisible\"></div>\n    <section class=\"content\">\n        <div class=\"katalog\">\n            <h1 class=\"katalog__label\">Best Restaurants</h1>\n            <div class=\"cards details\">\n              <div class=\"skeleton__main detail__main\"></div>\n              <div class=\"skeleton__menu detail__menu\"></div>\n              <div class=\"skeleton__review detail__review\"></div>\n              <div class=\"skeleton__addreview detail__addreview\"></div>\n            </div>\n        </div>\n    </section>\n    ");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  afterRender: function afterRender() {
    return detail_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var url, restaurant, resto, error, content, main;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              url = url_parser.parseActiveUrlWithoutCombiner();
              _context2.next = 3;
              return restaurantdb_source.detail(url.id);

            case 3:
              restaurant = _context2.sent;
              resto = restaurant.restaurant;
              error = document.querySelector('.error');
              content = document.querySelector('.content');
              main = document.querySelector('#maincontent');

              if (resto) {
                main.innerHTML = template_creator_createDetailTemplate(resto);
                review_initiator.init({
                  reviewName: document.querySelector('#review__name'),
                  reviewText: document.querySelector('#review__text'),
                  reviewForm: document.querySelector('#review__form')
                });
                like_button_presenter.init({
                  likeButtonContainer: document.querySelector('.detail__like'),
                  favoriteResto: favorite_resto_idb,
                  resto: {
                    id: resto.id,
                    address: resto.address,
                    city: resto.city,
                    description: resto.description,
                    name: resto.name,
                    customerReview: resto.customerReview,
                    pictureId: resto.pictureId,
                    rating: resto.rating,
                    menus: resto.menus,
                    categories: resto.categories
                  }
                });
              } else {
                content.classList.add('invisible');
                error.classList.remove('invisible');
                error.innerHTML = createErrorTemplate('please check your connection');
              }

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};
/* harmony default export */ var pages_detail = (Detail);
// CONCATENATED MODULE: ./src/scripts/views/pages/search.js
function search_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function search_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { search_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { search_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var Search = {
  render: function render() {
    return search_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return",
              /* html */
              "\n    <div class=\"error invisible\"></div>\n    <section class=\"content\">\n        <div class=\"katalog\">\n            <h1 class=\"katalog__label\">Your Search Results</h1>\n            <div class=\"cards\">\n              <div class=\"skeleton\"></div>\n              <div class=\"skeleton\"></div>\n              <div class=\"skeleton\"></div>\n              <div class=\"skeleton\"></div>\n              <div class=\"skeleton\"></div>\n              <div class=\"skeleton\"></div>\n            </div>\n        </div>\n    </section>\n    ");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  afterRender: function afterRender() {
    return search_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var url, restaurants, skeleton, content, cards, error, i;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              url = url_parser.parseActiveUrlWithoutCombiner();
              _context2.next = 3;
              return restaurantdb_source.search(url.id);

            case 3:
              restaurants = _context2.sent;
              skeleton = document.querySelectorAll('.skeleton');
              content = document.querySelector('.content');
              cards = document.querySelector('.cards');
              error = document.querySelector('.error');

              for (i = 0; i < skeleton.length; i++) {
                skeleton[i].classList.add('invisible');
              }

              if (Array.isArray(restaurants)) {
                if (restaurants.length === 0) {
                  content.classList.add('invisible');
                  error.classList.remove('invisible');
                  error.innerHTML = createErrorTemplate('not found');
                } else {
                  restaurants.forEach(function (restaurant) {
                    cards.innerHTML += template_creator_createRestaurantTemplate(restaurant);
                  });
                }
              } else {
                content.classList.add('invisible');
                error.classList.remove('invisible');
                error.innerHTML = createErrorTemplate('please check your connection');
              }

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};
/* harmony default export */ var pages_search = (Search);
// CONCATENATED MODULE: ./src/scripts/routes/routes.js




var routes = {
  '/': pages_home,
  // default page
  '/home': pages_home,
  '/favorite': favorite,
  '/detail/:id': pages_detail,
  '/search/:id': pages_search
};
/* harmony default export */ var routes_routes = (routes);
// CONCATENATED MODULE: ./src/scripts/utils/search-initiator.js
function search_initiator_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function search_initiator_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { search_initiator_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { search_initiator_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var SearchInitiator = {
  init: function init(_ref) {
    var _this = this;

    return search_initiator_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var searchText, searchForm;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              searchText = _ref.searchText, searchForm = _ref.searchForm;
              _this._searchText = searchText;
              _this._searchForm = searchForm;
              _context.next = 5;
              return _this._search();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  _search: function _search() {
    var _this2 = this;

    return search_initiator_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this2._searchForm.addEventListener('submit', /*#__PURE__*/function () {
                var _ref2 = search_initiator_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          location.replace('#/search/' + _this2._searchText.value);
                          event.preventDefault();

                        case 2:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }());

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  }
};
/* harmony default export */ var search_initiator = (SearchInitiator);
// CONCATENATED MODULE: ./src/scripts/utils/footer-initiator.js
var FooterInitiator = {
  init: function init(_ref) {
    var footer = _ref.footer;
    this._footer = footer;

    this._attachFooter();
  },
  _attachFooter: function _attachFooter() {
    this._footer.innerHTML = 'Copyrignt &copy ' + new Date().getFullYear() + " - O'Resto";
  }
};
/* harmony default export */ var footer_initiator = (FooterInitiator);
// CONCATENATED MODULE: ./src/scripts/views/app.js
function app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function app_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function app_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function app_createClass(Constructor, protoProps, staticProps) { if (protoProps) app_defineProperties(Constructor.prototype, protoProps); if (staticProps) app_defineProperties(Constructor, staticProps); return Constructor; }







var app_App = /*#__PURE__*/function () {
  function App(_ref) {
    var button = _ref.button,
        drawer = _ref.drawer,
        hero = _ref.hero,
        content = _ref.content,
        nav = _ref.nav,
        searchText = _ref.searchText,
        searchForm = _ref.searchForm,
        footer = _ref.footer;

    app_classCallCheck(this, App);

    this._button = button;
    this._drawer = drawer;
    this._hero = hero;
    this._content = content;
    this._nav = nav;
    this._searchText = searchText;
    this._searchForm = searchForm;
    this._footer = footer;

    this._initialAppShell();
  }

  app_createClass(App, [{
    key: "_initialAppShell",
    value: function _initialAppShell() {
      drawer_initiator.init({
        button: this._button,
        drawer: this._drawer,
        hero: this._hero,
        content: this._content,
        nav: this._nav
      });
      search_initiator.init({
        searchText: this._searchText,
        searchForm: this._searchForm
      });
      footer_initiator.init({
        footer: this._footer
      });
    }
  }, {
    key: "renderPage",
    value: function () {
      var _renderPage = app_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var url, page;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = url_parser.parseActiveUrlWithCombiner();
                page = routes_routes[url];

                if (url === '/') {
                  window.location.replace('#/');
                }

                _context.next = 5;
                return page.render();

              case 5:
                this._content.innerHTML = _context.sent;
                _context.next = 8;
                return page.afterRender();

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function renderPage() {
        return _renderPage.apply(this, arguments);
      }

      return renderPage;
    }()
  }]);

  return App;
}();

/* harmony default export */ var app = (app_App);
// EXTERNAL MODULE: ./node_modules/serviceworker-webpack-plugin/lib/runtime.js
var lib_runtime = __webpack_require__(2);
var lib_runtime_default = /*#__PURE__*/__webpack_require__.n(lib_runtime);

// CONCATENATED MODULE: ./src/scripts/utils/sw-register.js
function sw_register_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function sw_register_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { sw_register_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { sw_register_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var swRegister = /*#__PURE__*/function () {
  var _ref = sw_register_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!('serviceWorker' in navigator)) {
              _context.next = 4;
              break;
            }

            _context.next = 3;
            return lib_runtime_default.a.register();

          case 3:
            return _context.abrupt("return");

          case 4:
            console.log('Service worker not supported in this browser');

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function swRegister() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var sw_register = (swRegister);
// CONCATENATED MODULE: ./src/scripts/index.js
/* eslint-disable no-tabs */

/* for async await transpile */







var scripts_app = new app({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  hero: document.querySelector('.hero'),
  content: document.querySelector('#maincontent'),
  nav: document.querySelector('.nav__list'),
  searchText: document.querySelector('.search__text'),
  searchForm: document.querySelector('.hero__search'),
  footer: document.querySelector('#footer')
});
window.addEventListener('hashchange', function () {
  scripts_app._content.scrollIntoView();

  scripts_app.renderPage();
});
window.addEventListener('load', function () {
  scripts_app._content.scrollIntoView();

  scripts_app.renderPage();
  sw_register();
});

/***/ })

}]);