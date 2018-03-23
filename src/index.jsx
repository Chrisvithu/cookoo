import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
//import {Router, Route} from 'react-router';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

// Import custom components
import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Car from './car/car.component.jsx'
import CarDetail from './car/car-detail.component.jsx'

const data = [
    {
        id: 1,
        name: 'Main Meal Rice & Curry',
        type: 'Veg',
        model: 's500',
        place: 'Nallur Bavan ,250 Kovil Rd, Jaffna',
        media: 'https://i.ndtvimg.com/i/2015-10/meal-on-banana-leaf_625x350_81444718243.jpg',
        price: '250Rs'

    },
    {
        id: 2,
        name: 'Idly & Jaffna Vadea',
        type: 'Veg',
        model: 's500',
        place: 'Nallur Bavan ,250 Kovil Rd, Jaffna',
        media: 'https://www.greavesindia.com/wp-content/uploads/2016/11/idli.jpg',
        price: '100Rs'

    },
    {
        id: 3,
        name: 'Masala Dosai',
        type: 'Veg',
        model: 's500',
        place: 'Nallur Bavan ,250 Kovil Rd, Jaffna',
        media: 'https://pbs.twimg.com/media/DMWFqNFUEAEdJwC.jpg',
        price: '180Rs'
    },
    {
        id: 4,
        name: 'Chicken Biryani',
        type: 'Non-Veg',
        model: 's500',
        place: 'Cosy Jaffna Main Street, Jaffna',
        media: 'https://bizimages.withfloats.com/tile/59b8edd922b0360b308fcbc4.jpg',
        price: '400Rs'
    },
    {
        id: 5,
        name: 'Curd Rice',
        type: 'Veg',
        model: 's500',
        place: 'Nallur Bavan ,250 Kovil Rd, Jaffna',
        media: 'http://somethingscookingwithalpa.com/wp-content/uploads/2016/09/0057_Curd-Rice.jpg',
        price: '200Rs'
    }
];

render(
    <BrowserRouter>

      <Main>
            <Route exact path="/" component={Home}/>
            <Route path="/foods" render={(props) => (<Car {...props} data={data}/>)}/>
            <Route path="/foods/:id" render={(props) => (<CarDetail {...props} data={data}/>)}/>
            <Route path="/about" component={About}/>
      </Main>

    </BrowserRouter>,
    document.getElementById('container')
);
