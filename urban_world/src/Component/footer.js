import React from 'react';

class Footer extends React.Component{
 render(){
     return(
        <footer className="footer-distributed">

        <div className="footer-left">

            <h3>Urban<span>World</span></h3>

            <p className="footer-links">
                <a href="#" className="link-1">Home</a>
                
                <a href="#">Blog</a>
            
                <a href="#">Pricing</a>
            
                <a href="#">About</a>
                
                <a href="#">Faq</a>
                
                <a href="#">Contact</a>
            </p>

            <p className="footer-company-name">Company Name © 2021</p>
        </div>

        <div className="footer-center">

            <div>
                <i className="fa fa-map-marker"></i>
                <p><span>Bihar</span> Rajjopati sitamarhi, Bihar</p>
            </div>

            <div>
                <i class="fa fa-phone"></i>
                <p>+977 1-449278</p>
            </div>

            <div>
                <i class="fa fa-envelope"></i>
                <p><a href="https://www.infinitylabs.in/">urbanWorld.in</a></p>
            </div>

        </div>

        <div class="footer-right">

            <p class="footer-company-about">
                <span>About the company</span>
               UrbanWorld designs service provider of wooden material that are flexible and aid in quick deployment of new services. By leveraging our services, enterprises can increase their service velocity and have a competitive edge in the market.
            </p>

            <div class="footer-icons">

                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-github"></i></a>

            </div>

        </div>

    </footer>
     )
 }
}

export default Footer;