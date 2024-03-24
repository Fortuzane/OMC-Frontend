// react
import React, { Component } from 'react';

// third-party
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ScrollContext } from 'react-router-scroll-4';


// pages
import Layout from './Layout';
import HomePageOne from './home/HomePageOne';

class Root extends Component {
    componentDidMount() {
        // preloader
        setTimeout(() => {
            const preloader = document.querySelector('.site-preloader');

            preloader.addEventListener('transitionend', (event) => {
                if (event.propertyName === 'opacity') {
                    preloader.parentNode.removeChild(preloader);
                }
            });
            preloader.classList.add('site-preloader__fade');
        }, 500);

    }

    shouldUpdateScroll = (prevRouterProps, { location }) => (
        prevRouterProps && location.pathname !== prevRouterProps.location.pathname
    );

    render() {
        return (
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <HelmetProvider>
                        <Helmet/>
                        <ScrollContext shouldUpdateScroll={this.shouldUpdateScroll}>
                            <Switch>
                                <Route
                                    path="/"
                                    render={(props) => (
                                        <Layout {...props} headerLayout="default" homeComponent={HomePageOne} />
                                    )}
                                />
                                <Redirect to="/" />
                            </Switch>
                        </ScrollContext>
                    </HelmetProvider>
                </BrowserRouter>
        );
    }
}

export default Root;
