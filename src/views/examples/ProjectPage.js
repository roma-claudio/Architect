/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionCarousel from "views/index-sections/SectionCarousel";

function ProjectPage() {

    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("landing-page");
        return function cleanup() {
            document.body.classList.remove("landing-page");
        };
    });
    return (
        <>
            <ExamplesNavbar />
            <ProfilePageHeader />
            <br />
            <div className="section profile-content">
                <Container>
                    <br />
                    <Row>
                        <Col className="ml-auto mr-auto text-left" md="10">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie, 
                            sem a mollis pulvinar, leo mi ultricies nisl, sed vehicula velit augue ut nisl.
                            Aliquam blandit risus risus, nec imperdiet elit fringilla a.
                            Sed faucibus rutrum dolor, ac pharetra enim eleifend ut. Maecenas viverra vulputate lacus, 
                            nec eleifend turpis maximus vitae. Phasellus tempus viverra felis sit amet dapibus. Phasellus gravida, 
                            ligula a pulvinar ultricies, sem libero tincidunt ante, pellentesque efficitur dolor dolor varius mi.
                            <br />
                            Nam laoreet consequat odio, vitae tincidunt lorem commodo quis. Nunc sed eleifend mauris.
                            Phasellus a augue ornare quam ultrices bibendum. Integer blandit, purus sed placerat tempor, 
                            metus purus accumsan sem, quis faucibus lectus neque ac elit. In lobortis laoreet dapibus. 
                            Integer pretium eget risus eu sodales. Nunc pellentesque dignissim nisl non cursus. 
                            Integer vehicula sagittis libero vitae dapibus. Nam scelerisque felis id dapibus pretium. 
                            Nam laoreet, nulla ut vulputate sodales, purus risus lobortis risus, vel vestibulum dolor tortor id felis. 
                            Aliquam tristique pellentesque felis, non vulputate nisl lacinia ut. Donec interdum varius tempor.
                            Nam laoreet consequat odio, vitae tincidunt lorem commodo quis. Nunc sed eleifend mauris.
                            <br />
                            Phasellus a augue ornare quam ultrices bibendum. Integer blandit, purus sed placerat tempor, 
                            metus purus accumsan sem, quis faucibus lectus neque ac elit. In lobortis laoreet dapibus. 
                            Integer pretium eget risus eu sodales. Nunc pellentesque dignissim nisl non cursus. 
                            Integer vehicula sagittis libero vitae dapibus. Nam scelerisque felis id dapibus pretium. 
                            Nam laoreet, nulla ut vulputate sodales, purus risus lobortis risus, vel vestibulum dolor tortor id felis. 
                            Aliquam tristique pellentesque felis, non vulputate nisl lacinia ut. Donec interdum varius tempor.
                            </p>
                            <br />
                        </Col>
                    </Row>
                    <Row>
                        <SectionCarousel />
                    </Row>
                    <Row >
                        <Col className="ml-auto mr-auto text-left" md="10">
                            <p>
                            Nam laoreet consequat odio, vitae tincidunt lorem commodo quis. Nunc sed eleifend mauris.
                            Phasellus a augue ornare quam ultrices bibendum. Integer blandit, purus sed placerat tempor, 
                            metus purus accumsan sem, quis faucibus lectus neque ac elit. In lobortis laoreet dapibus. 
                            Integer pretium eget risus eu sodales. Nunc pellentesque dignissim nisl non cursus. 
                            Integer vehicula sagittis libero vitae dapibus. Nam scelerisque felis id dapibus pretium. 
                            Nam laoreet, nulla ut vulputate sodales, purus risus lobortis risus, vel vestibulum dolor tortor id felis. 
                            Aliquam tristique pellentesque felis, non vulputate nisl lacinia ut. Donec interdum varius tempor.
                            </p>
                            <br />
                        </Col>
                    </Row>
                    <br />
                </Container>
            </div>
            <DemoFooter />
        </>
    );
}

export default ProjectPage;
