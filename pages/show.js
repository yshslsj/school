import Head from 'next/head'
import React,{Component} from 'react';
import Image from 'next/image'
import Layout from '../components/layout'
import styles from './show.module.css'
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
					<div className={styles.bg}>

					</div>
				</div>
			</div>
    </Layout>
		  )
	}
}

export default Home;
