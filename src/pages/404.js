import React from 'react'

import Layout from '../components/Layout';
import Head from '../components/Head';
import {Link} from "gatsby";

const NotFoundPage = () => (
    <Layout>
        <Head title="Oops! Not found"/>
        <h1>Oops!</h1>
        <p>There isn't the page you're looking for.</p>
        <Link to="/">Go to the homepage</Link>
    </Layout>
);

export default NotFoundPage;
