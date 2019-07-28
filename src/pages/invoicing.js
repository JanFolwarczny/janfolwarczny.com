import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout';
import Head from '../components/Head';
import styles from './invoicing.module.css';

const Invoicing = () => (
    <Layout>
        <Head title="Invoicing info"/>
        <h1 className={styles.heading}>Invoicing info</h1>
        <p>
            Ing. Jan Folwarczny<br/>
            Email: jan@janfolwarczny.com<br/>
            Phone: +420 774 849 215<br/>
            Address: Neukončená 348/24, 725 29 Ostrava-Petřkovice, Czech Republic<br/>
            Company registration number: 88509729
        </p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
);

export default Invoicing;
