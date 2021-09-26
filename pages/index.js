import Head from 'next/head'
import {Component} from 'react';

import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


import Image from 'next/image'
import Layout from '../components/layout'
import styles from './index.module.css'
import homeStyles from '../styles/home.module.css'
import Link from 'next/link'

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
							<Link href="/show/1a">
							<Chip label="1A" color="primary" variant="outlined" clickable className={styles.classbtn} />
							</Link>
							<div className={styles.classbtn_space} />
							<Link href="/show/1b">
							<Chip label="1B" color="primary" variant="outlined" clickable className={styles.classbtn} />
							</Link>
							<div className={styles.classbtn_space} />
							<Link href="/show/1c">
							<Chip label="1C" color="primary" variant="outlined" clickable className={styles.classbtn} />
							</Link>
							<div className={styles.classbtn_space} />
							<Link href="/show/2a">
							<Chip label="2A" color="primary" variant="outlined" clickable className={styles.classbtn} />
							</Link>
							<div className={styles.classbtn_space} />
							<Link href="/show/2b">
							<Chip label="2B" color="primary" variant="outlined" clickable className={styles.classbtn} />
							</Link>
							<div className={styles.classbtn_space} />
							<Link href="/show/2c">
							<Chip label="2C" color="primary" variant="outlined" clickable className={styles.classbtn} />
							</Link>
							<div className={styles.classbtn_space} />
							<Link href="/show/3a">
							<Chip label="3A" color="primary" variant="outlined" clickable className={styles.classbtn} />
							</Link>
							<div className={styles.classbtn_space} />
							<Link href="/show/3b">
							<Chip label="3B" color="primary" variant="outlined" clickable className={styles.classbtn} />
							</Link>
							<div className={styles.classbtn_space} />
							<Link href="/show/3c">
							<Chip label="3C" color="primary" variant="outlined" clickable className={styles.classbtn} />
							</Link>
							<div className={styles.classbtn_space} />
							<Link href="/show/4a">
							<Chip label="4A" color="primary" variant="outlined" clickable className={styles.classbtn} />
							</Link>
							<div className={styles.classbtn_space} />
							<Link href="/show/4b">
							<Chip label="4B" color="primary" variant="outlined" clickable className={styles.classbtn} />
							</Link>
							<div className={styles.classbtn_space} />
							<Link href="/show/4c">
							<Chip label="4C" color="primary" variant="outlined" clickable className={styles.classbtn} />
							</Link>
							<div className={styles.classbtn_space} />
							<Link href="/show/4d">
							<Chip label="4D" color="primary" variant="outlined" clickable className={styles.classbtn} />
							</Link>
							<div className={styles.classbtn_space} />
							<Link href="/show/5a">
							<Chip label="5A" color="primary" variant="outlined" clickable className={styles.classbtn} />
							</Link>
							<div className={styles.classbtn_space} />
							<Link href="/show/5b">
							<Chip label="5B" color="primary" variant="outlined" clickable className={styles.classbtn} />
							</Link>
							<div className={styles.classbtn_space} />
							<Link href="/show/5c">
							<Chip label="5C" color="primary" variant="outlined" clickable className={styles.classbtn} />
							</Link>
							<div className={styles.classbtn_space} />
							<Link href="/show/6a">
							<Chip label="6A" color="primary" variant="outlined" clickable className={styles.classbtn} />
							</Link>
							<div className={styles.classbtn_space} />
							<Link href="/show/6b">
							<Chip label="6B" color="primary" variant="outlined" clickable className={styles.classbtn} />
							</Link>
							<div className={styles.classbtn_space} />
							<Link href="/show/6c">
							<Chip label="6C" color="primary" variant="outlined" clickable className={styles.classbtn} />
							</Link>
						</div>
					</div>​
				</div>
			</div>
    </Layout>
		  )
	}
}

export default Home;
