<<<<<<< HEAD
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
=======
Расположение товаров
===

Вам необоходимо сделать приложение для отображение товаров в интернет-магазине. Заказчик хочет, чтобы пользователь мог увидеть товары в виде карточек или в виде списка, в зависимости от того, какое расположение выберет пользователь. 

![cards view](./assets/card_view.png)

## Описание проекта

Реализуйте компонент `Store`, который управляет состоянием приложения, (хранит список товаров в атрибуте `products`).

Иконка разметки, которая указывает на переключение между типами расположения товаров реализована в компоненте без состояния `IconSwitch`, которому от `Store` мы передаем два свойства:
- `icon` - название иконки, которую хотим показать. Название иконки соответствует названию класса из библиотеки [material icons](https://material.io/icons/#ic_view_module). В нашем случае это - либо `view_list`, либо `view_module`.
- `onSwitch()` - обработчик события, который реагирует на нажатие пользователем на иконку.

Пример:
```jsx
<IconSwitch icon={"view_list"} onSwitch={() => console.log("change state here")}/>
```
Сами товары отображаются в компонентах без состояния `CardsView` или `ListView`.

Компоненту `CardsView` от `Store` мы передаем свойство `cards` - массив с данными, каждый элемент из которого затем уже отображается с помощью карточки товара `ShopCard`.

Т.е. `CardsView` отображает много карточек `ShopCard`. На один товар - одна карточка `ShopCard`.

Компоненту `ListView` от `Store` мы передаем всего одно свойство `items` - массив с данными, каждый элемент из которого затем уже отображается с помощью `ShopItem` для товаров, которые мы хотим отобразить.

Т.е. `ListView` отображает много `ShopItem`. На один товар - один `ShopItem`.

Чтобы компонент `Store` мог реагировать на выбор пользователем вида разметки, в класс `Store` необходимо добавить состояние (state).

Ваша задача:
- установить состояние выбранного типа разметки в обработчике события который `Store` передает в свойство `onSwitch` компонента `IconSwitch`
- из компонента `Store` передать правильную иконку в свойство `icon` компонента `IconSwitch`
- в компоненте `Store` отобразить товары в компоненте `CardsView` или `ListView` соответсвенно состоянию компонента `App`

![list_view](./assets/list_view.png)

Не забудьте подключить Material Icons:
```css
@import url('https://fonts.googleapis.com/icon?family=Material+Icons')
```

Данные для отображения:
```js
const products = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];
```
>>>>>>> c872f88cebede92949d99c81498c6b2f02a17f8f
