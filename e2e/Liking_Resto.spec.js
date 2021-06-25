const assert = require('assert')
Feature('Liking Resto')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('showing empty liked resto', ({ I }) => {
  I.seeElement('.search__text')
  I.see('NOT FOUND', '.error__message')
})

Scenario('liking one resto', async ({ I }) => {
  I.see('NOT FOUND', '.error__message')

  I.amOnPage('/')

  I.seeElement('.card .card__content a')

  const firstResto = locate('.card .card__content a').first()
  const firstRestoTitle = await I.grabTextFrom(firstResto)

  I.click(firstResto)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('.card')
  const likedRestoTitle = await I.grabTextFrom('.card .card__content a')

  assert.strictEqual(firstRestoTitle, likedRestoTitle)
})

Scenario('uliking one resto', async ({ I }) => {
  I.see('NOT FOUND', '.error__message')

  I.amOnPage('/')

  I.seeElement('.card .card__content a')

  const firstResto = locate('.card .card__content a').first()
  const firstRestoTitle = await I.grabTextFrom(firstResto)

  I.click(firstResto)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('.card')

  const likedRestoTitle = await I.grabTextFrom('.card .card__content a')
  assert.strictEqual(firstRestoTitle, likedRestoTitle)

  I.click(locate('.card .card__content a').first())

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.see('NOT FOUND', '.error__message')
})

Scenario('searching resto', async ({ I }) => {
  I.see('NOT FOUND', '.error__message')

  I.amOnPage('/')

  const titles = []

  for (let i = 1; i <= 20; i++) {
    titles.push(await I.grabTextFrom(locate('.card .card__content a').at(i)))
  }

  I.seeElement('.search__text')

  const searchQuery = titles[1].substring(1, 3)
  const matchingResto = titles.filter((title) => title.indexOf(searchQuery) !== -1)

  I.fillField('.search__text', searchQuery)
  I.pressKey('Enter')

  I.seeElement('.card')

  const visibleLikedResto = await I.grabNumberOfVisibleElements('.card')
  assert.strictEqual(matchingResto.length, visibleLikedResto)

  matchingResto.forEach(async (title, index) => {
    const visibleTitle = await I.grabTextFrom(locate('.card .card__content a').at(index + 1))
    assert.strictEqual(title, visibleTitle)
  })
})

Scenario('Review resto', async ({ I }) => {
  I.see('NOT FOUND', '.error__message')

  I.amOnPage('/')

  I.seeElement('.card .card__content a')

  I.click(locate('.card .card__content a').first())

  const name = []
  const text = []

  name.push(Math.random())
  text.push(Math.random())

  I.seeElement('#review__name')
  I.fillField('#review__name', name[0])

  I.seeElement('#review__text')
  I.fillField('#review__text', text[0])

  I.click('#review__submit')
  I.wait(10)

  I.amOnPage('/')

  I.seeElement('.card .card__content a')
  I.click(locate('.card .card__content a').first())

  I.seeElement('.detail__review .detail__itemTitle')
  const reviewName = await I.grabTextFrom(locate('.detail__review .detail__itemTitle').at(-1))

  assert.strictEqual(name[0].toString(), reviewName.split(/\r?\n/).pop())

  I.seeElement('.detail__review .detail__itemTag')
  const reviewText = await I.grabTextFrom(locate('.detail__review .detail__itemTag').at(-1))

  assert.strictEqual(text[0].toString(), reviewText)
})
