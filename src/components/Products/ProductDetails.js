import React, { useContext, useEffect } from "react";
import ReactPlayer from "react-player";
import { productContext } from "../../context/ProductContext";

const ProductDetails = (props) => {
  const { getProductDetails, productDetails } = useContext(productContext);
  const id = props.match.params.id;
  useEffect(() => {
    getProductDetails(id);
    // console.log(productDetails.video);
  }, []);
  return (
    <div>
      <div>
        <div className="wraper">
          <div className="container">
            <div className="main-left">
              <div className="main-box">
                {productDetails ? (
                  <>
                    <h1>{productDetails.title}</h1>
                    <p className="box-desc">{productDetails.description}</p>
                    <img src={productDetails.img} alt="product-img" />
                    <h2>{productDetails.subTitle}</h2>
                    <p className="box-desc">
                      {productDetails.secondDescription}
                    </p>
                    <img src={productDetails.secondImg} />
                    <p>{productDetails.price}$</p>
                    <video
                      autoPlay
                      loop
                      muted

                      // className="fullscreen-bg__video"
                    >
                      <source
                        // src={
                        //   "https://r7---sn-w5nuxa-c33ll.googlevideo.com/videoplayback?expire=1620124085&ei=Vc2QYK-xN6uD0u8PnsO9sA0&ip=183.88.94.240&id=o-AAbVto_v4TSggfXv8gqW-KD03712vU-0QCB6IkYwA38t&itag=22&source=youtube&requiressl=yes&mh=GG&mm=31%2C26&mn=sn-w5nuxa-c33ll%2Csn-npoe7nlz&ms=au%2Conr&mv=m&mvi=7&pcm2cms=yes&pl=20&initcwndbps=1463750&vprv=1&mime=video%2Fmp4&ns=p22xWc8OCt0JLtoCp4jV5G4F&cnr=14&ratebypass=yes&dur=47.090&lmt=1619505829370038&mt=1620102042&fvip=4&fexp=24001373%2C24007246&c=WEB&txp=5432434&n=2Jd6sKy7UEDn1wSAN36&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAOoMabMTGdxRA5ro6lnEOaCpPyZ0GX-CiVFNlduxle5OAiEAqQlKiWcuSURwkLHOOxmTRl21MhAqpDVjh1mSz7qnDQ0%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgfL0xplWCVgXzlbPVwBfaLfRncCQtKpHcosXjCahMddUCIBluIJPjjYe7qUMQtauAjNcJoulsrask0b0yUpHNI5P-&title=The%20Explorer's%20new%20territories"
                        // }
                        src={productDetails.video}
                        type="video/mp4"
                      />
                    </video>
                    {/* <ReactPlayer
                      url={productDetails.video}
                      loop
                      muted
                      playing
                    /> */}
                  </>
                ) : (
                  "details"
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
