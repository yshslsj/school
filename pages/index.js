import Head from 'next/head'
import {Component} from 'react';

import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


import Image from 'next/image'
import Layout from '../components/layout'
import styles from './index.module.css'
import homeStyles from '../styles/home.module.css'


class Home extends Component
{
	constructor(props) {
		super(props);
	}//end constructor


	componentDidMount(props, state)
	{

	}


	render() {
		  return (
		<Layout>
      <Head>
        <title>石籬聖若望天主教小學</title>
      </Head>
			<div className={homeStyles.cornerDiv}>
				<div className={homeStyles.cornerDivHeader}>
					<div className={homeStyles.cornerDivHeaderImg} />
					<ul className={homeStyles.cornerDivHeaderNav} >
						<li><a className={homeStyles.blue} href="https://slsj.edu.hk/index.htm">首頁</a></li>
						<li>-&gt;</li>
						<li>班相</li>
					</ul>
				</div>
				<div className={homeStyles.cornerDivContent}>
					<div className={styles.p_contentWrapper}>
						各班的班照已經可以預覽, 班照共有兩​張：正經版和Q版，請在下方選擇你的班別：
						<div className={styles.classListWrapper}>
							<Chip label="1A" color="primary" variant="outlined" clickable className={styles.classbtn} />
							<div className={styles.classbtn_space} />
							<Chip label="1B" color="primary" variant="outlined" clickable className={styles.classbtn} />
							<div className={styles.classbtn_space} />
							<Chip label="1C" color="primary" variant="outlined" clickable className={styles.classbtn} />
							<div className={styles.classbtn_space} />
							<Chip label="2A" color="primary" variant="outlined" clickable className={styles.classbtn} />
							<div className={styles.classbtn_space} />
							<Chip label="2B" color="primary" variant="outlined" clickable className={styles.classbtn} />
							<div className={styles.classbtn_space} />
							<Chip label="2C" color="primary" variant="outlined" clickable className={styles.classbtn} />
							<div className={styles.classbtn_space} />
							<Chip label="3A" color="primary" variant="outlined" clickable className={styles.classbtn} />
							<div className={styles.classbtn_space} />
							<Chip label="3B" color="primary" variant="outlined" clickable className={styles.classbtn} />
							<div className={styles.classbtn_space} />
							<Chip label="3C" color="primary" variant="outlined" clickable className={styles.classbtn} />
							<div className={styles.classbtn_space} />
							<Chip label="4A" color="primary" variant="outlined" clickable className={styles.classbtn} />
							<div className={styles.classbtn_space} />
							<Chip label="4B" color="primary" variant="outlined" clickable className={styles.classbtn} />
							<div className={styles.classbtn_space} />
							<Chip label="4C" color="primary" variant="outlined" clickable className={styles.classbtn} />
							<div className={styles.classbtn_space} />
							<Chip label="4D" color="primary" variant="outlined" clickable className={styles.classbtn} />
							<div className={styles.classbtn_space} />
							<Chip label="5A" color="primary" variant="outlined" clickable className={styles.classbtn} />
							<div className={styles.classbtn_space} />
							<Chip label="5B" color="primary" variant="outlined" clickable className={styles.classbtn} />
							<div className={styles.classbtn_space} />
							<Chip label="5C" color="primary" variant="outlined" clickable className={styles.classbtn} />
							<div className={styles.classbtn_space} />
							<Chip label="6A" color="primary" variant="outlined" clickable className={styles.classbtn} />
							<div className={styles.classbtn_space} />
							<Chip label="6B" color="primary" variant="outlined" clickable className={styles.classbtn} />
							<div className={styles.classbtn_space} />
							<Chip label="6C" color="primary" variant="outlined" clickable className={styles.classbtn} />
						</div>
					</div>​
				</div>
			</div>
    </Layout>
		  )
	}
}

export default Home;
