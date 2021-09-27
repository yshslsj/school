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


import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';


class Home extends Component
{
	constructor(props) {
		super(props);
        if(this.props.router.query) this.id = this.props.router.query.id;
        else this.id = null;
        
        this.state = {
        url1: "../images/photos/preview/"+this.id+"_正JPG.jpg",
        url2: "../images/photos/preview/"+this.id+"_cuteJPG.jpg",
        fullurl1: "../images/photos/full/"+this.id+"_正.jpg",
        fullurl2: "../images/photos/full/"+this.id+"_cute.jpg",
        diaOpen: false,
      }
	}//end constructor


	componentDidMount(props, state)
	{
			//this.id = this.props.router.query.id;
			//alert(this.id);
            if(!this.id || this.id==null) window.location.href = "/";

	}
    
    image1onclick(e)
    {
        alert(this.state.diaOpen);
        this.setState({
          diaOpen: true
        });
        alert(this.state.diaOpen);
    }


	render() {
		  return (
		<Layout>
      <Head>
        <title>石籬聖若望天主教小學</title>
      </Head>
                  
                <Dialog fullScreen open={this.state.diaOpen}>
                    <AppBar>
                      <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="close">
                          <CloseIcon />
                        </IconButton>
                        <Typography variant="h6">
                          班相
                        </Typography>
                      </Toolbar>
                    </AppBar>
                    <div className={styles.dialogContent}>
                        <img src={this.state.fullurl1} />
                    </div>
                  </Dialog>  
                  
                  
                  
                  
                  
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
                        <div className={styles.prevImgDiv1} onClick={(e)=>{this.image1onclick(e)}}>
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
