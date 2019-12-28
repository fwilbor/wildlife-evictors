import React, { Fragment } from 'react';
import Logo2 from '../../src/AboutUsWEImage.jpg';

export const About = () => {
    return (

        <Fragment>
            <h2>About Us</h2>
            <div>
                <img src={Logo2} alt="AboutImg" />
            </div>
            <h4>Shinya Coulter</h4>

            <p>Welcome to Wildlife Evictors! We are a residential and commercial full exclusion company located in Canton, GA.  We have been in business at this location since 2013, but have been doing wildlife removal and exclusion work since 2005. We have developed and fine tuned our methods and materials to become what we believe is the best in the industry. We have adopted an old NASA philosophy for “zero defects” and “do it right the first time.” This way our clients get the best quality service available the first time out. With our video ability we are pushing the standards of wildlife removal. Our helpful videos and video inspections are top notch services! We are able to show you exactly what is going on at you residence, before, during and after. There is no lying, no scare tactics, just plain honest what you see is what you get truth!   We go above and beyond to make sure that all entry points, potential entry points, and other problem areas are eliminated for our clients. This way, on most jobs, we can guarantee our work for 5 years. Our warranty is renewable and transferable! Rest assured that Wildlife Evictors can and will solve your nuisance wildlife problem. Watch us in action on Facebook (Insert FB Link) and Youtube (Insert Youtube Link).</p>

        </Fragment>
    );
};

export default About