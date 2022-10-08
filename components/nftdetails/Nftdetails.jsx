import React from 'react'
import classes from '../Nftdetails/nftdetails.module.css';
import {AiFillCloseCircle} from 'react-icons/ai'
import styles from '../../styles/containerstyle.module.css';
import {BsGlobe} from 'react-icons/bs'


const Nftdetails = (props) => {
  return (
    <div className={classes.claimrewards}  style={{display : props.isActive ? "flex" : "none"}}>
    <div className={classes.content__wrapper}>
    <div className={`${classes.left} ${styles.container}`}>
        <div className={classes.nft__img}>
            <img src="https://storage.googleapis.com/cdn.nftkey.app/nft-collections/hoboladiesonbsc/0x6884f55179ef6e11637b55ccaed8bece14137844c58655bbf7800dc3d6ca9a67" alt="nft" />
        </div>

        {/* <div className={classes.details}> */}
            
                {/* <h2>Description</h2> */}
                {/* <p>HorrorApeClub is a collection of 3333 unique and community owned NFT's built on the Binance smart chain!!!...</p> */}
            
            
        
        {/* </div> */}
    </div>

    <div className={`${classes.right} ${styles.container}`}>
        <div>

            <h1>HorrorLady 2966</h1>
            <small>Owned by 0x00000000000000</small>
        </div>
            <div className={classes.details1}>

            <h2>Description</h2>
                <p>HorrorApeClub is a collection of 3333 unique and community owned NFT's built on the Binance smart chain!!!...</p>
            </div>
            <div>
            <p>Sell price</p>

            <b>0.02 BNB</b>
            </div>
            <button>Buy Now</button>
            {/* <div className={classes.nft__links}>
                <a href="#">Contract</a>
                <a href="#"><BsGlobe /></a> 
             </div>  */}
    </div>
    {/* {props.poochain>0?<button  onClick={props.rewardsfunc}>CLAIM</button>: <button disabled>CLAIM</button>} */}
<AiFillCloseCircle className={classes.claim__close} onClick={props.closeFunc} />
</div>
</div> 
  )
}

export default Nftdetails