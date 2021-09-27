import Head from 'next/head'
import {Component} from 'react';
import { withRouter } from 'next/router'
import Image from 'next/image'
import Layout from '../../components/layout'
import styles from './id.module.css'
import homeStyles from '../../styles/home.module.css'

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Link from 'next/link'

class Home extends Component
{
	constructor(props) {
		super(props);
        if(this.props.router.query) this.id = this.props.router.query.id;
        else this.id = null;
        
        
        this.state = {
        url1: "../images/photos/preview/"+this.id+"_正JPG.jpg",
        url2: "../images/photos/preview/"+this.id+"_cuteJPG.jpg"
      }
	}//end constructor


	componentDidMount(props, state)
	{
			//this.id = this.props.router.query.id;
			//alert(this.id);
            if(!this.id || this.id==null) window.location.href = "/";

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
						<li><Link href="/">班相</Link></li>
                        <li>-&gt;</li>
						<li>{this.id ? this.id.toUpperCase() : ""}</li>
					</ul>
				</div>
				<div className={homeStyles.cornerDivContent}>
					<div className={styles.bg}>
                        <div className={styles.prevImgDiv1}>
                            <img src={this.state.url1} />
                        </div>
                        <div className={styles.prevImgDiv2}>
                            <img src={this.state.url2} />
                        </div>
						<Box sx={{ minWidth: 120 }} className={styles.classSelectBox}>
							<FormControl fullWidth>
								<Select
									id="class-select"
									className={styles.classSelect}
									value={this.props.router.query.id}
								>
									<MenuItem className={styles.classSelectItem} value={"1a"}>1A</MenuItem>
									<MenuItem className={styles.classSelectItem} value={"1b"}>1B</MenuItem>
									<MenuItem className={styles.classSelectItem} value={"1c"}>1C</MenuItem>
									<MenuItem className={styles.classSelectItem} value={"2a"}>2A</MenuItem>
									<MenuItem className={styles.classSelectItem} value={"2b"}>2B</MenuItem>
									<MenuItem className={styles.classSelectItem} value={"2c"}>2C</MenuItem>
									<MenuItem className={styles.classSelectItem} value={"3a"}>3A</MenuItem>
									<MenuItem className={styles.classSelectItem} value={"3b"}>3B</MenuItem>
									<MenuItem className={styles.classSelectItem} value={"3c"}>3C</MenuItem>
									<MenuItem className={styles.classSelectItem} value={"4a"}>4A</MenuItem>
									<MenuItem className={styles.classSelectItem} value={"4b"}>4B</MenuItem>
									<MenuItem className={styles.classSelectItem} value={"4c"}>4C</MenuItem>
									<MenuItem className={styles.classSelectItem} value={"4d"}>4D</MenuItem>
									<MenuItem className={styles.classSelectItem} value={"5a"}>5A</MenuItem>
									<MenuItem className={styles.classSelectItem} value={"5b"}>5B</MenuItem>
									<MenuItem className={styles.classSelectItem} value={"5c"}>5C</MenuItem>
									<MenuItem className={styles.classSelectItem} value={"6a"}>6A</MenuItem>
									<MenuItem className={styles.classSelectItem} value={"6b"}>6B</MenuItem>
									<MenuItem className={styles.classSelectItem} value={"6c"}>6C</MenuItem>

								</Select>
							</FormControl>
						</Box>
					</div>
				</div>
			</div>
    </Layout>
		  )
	}
}

export default withRouter(Home);
