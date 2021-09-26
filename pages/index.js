import Head from 'next/head'
import React,{Component} from 'react';
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import photo2021styles from '../styles/2021/Photo.module.css'


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
			<div className={styles.cornerDiv}>
				<div className={styles.cornerDivHeader}>
					<div className={styles.cornerDivHeaderImg} />
					<ul className={styles.cornerDivHeaderNav} >
						<li><a className={styles.blue} href="https://slsj.edu.hk/index.htm">首頁</a></li>
						<li>-&gt;</li>
						<li>班相</li>
					</ul>
				</div>
				<div className={styles.cornerDivContent}>
					<div className={photo2021styles.bg}>

					</div>
				</div>
			</div>
    </Layout>
		  )
	}
}

export default Home;
