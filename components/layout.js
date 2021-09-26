import Head from 'next/head'
import React,{Component} from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'


class Layout extends Component
{
	constructor(props) {
		super(props);
		this.children	= props.children;
	}//end constructor


	componentDidMount(props, state)
	{

	}


	render() {
		  return (
			<div className={styles.wrapper}>
				<Head>
					<title>石籬聖若望天主教小學</title>
					<meta name="description" content="石籬聖若望天主教小學" />
					<link rel="icon" href="/favicon.ico" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com"  />
					<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400&display=swap" rel="stylesheet" />
					<link
					  rel="stylesheet"
					  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
					/>
					<link
					  rel="stylesheet"
					  href="https://fonts.googleapis.com/icon?family=Material+Icons"
					/>
				</Head>

				<div className={styles.container}>
					<ul className={styles.headLinkWrap}>
						<li><a href="https://slsj.edu.hk/top/1.htm">內聯網</a></li>
						<li className={styles.headLinkSep}>|</li>
						<li><a href="https://slsj.edu.hk/top/2.htm">聯絡我們</a></li>
						<li className={styles.headLinkSep}>|</li>
						<li><a href="https://www.facebook.com/1970slsj">Facebook</a></li>
					</ul>
					<div className={styles.bannerWrapper}>
					</div>
					<div className={styles.movingWrapper}>
						<div className={styles.movingTitleImg} />
						<div className={styles.movingTextWrap}><p>耶穌解釋莠子的比喻說：「在今世的終結時也將是如此：人子要差遣他的天使，由他的國內，將一切使人跌倒的事，及作惡的人收集起來，扔到火窯裏。」 耶 14：17-22 ； （瑪 13：36-43）</p></div>
					</div>
					<div className={styles.contentWrapper}>
						{this.children}
					</div>
					<footer className={styles.footer}>
							<li className={styles.footerItem1}>石籬聖若望天主教小學</li>
							<li className={styles.footerItem2}>地址：新界葵涌大白田街99號</li>
							<li className={styles.footerItem3}>電話：3595 0036</li>
							<li className={styles.footerItem4}>傳真：3595 0163</li>
							<li className={styles.footerItem5}>電郵：slsj@slsj.edu.hk</li>
					</footer>
				</div>
			</div>
		  )
	}
}

export default Layout;
