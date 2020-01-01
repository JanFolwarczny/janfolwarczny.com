import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout';
import Head from '../components/Head';
import Container from "../components/Container";

const Invoicing = () => (
    <Layout>
        <Head title="Invoicing info"/>
        <Container>
            <h1>Invoicing info</h1>
            <p>
                Ing. Jan Folwarczny<br/>
                Email: jan@janfolwarczny.com<br/>
                Phone: +420 774 849 215<br/>
                Address: Neukončená 348/24, 725 29 Ostrava-Petřkovice, Czech Republic<br/>
                Company registration number: 88509729
            </p>
            <Link to="/">Go back to the homepage</Link>
        </Container>
    </Layout>
);

export default Invoicing;
