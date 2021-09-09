import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SubscribeForm from '../components/Common/SubscribeForm';

resetIdCounter();

const Faq = () => {
    return (
        <React.Fragment>
            <PageBanner
                pageTitle='Frequently Asked Questions'
                homePageUrl='/'
                homePageText='Home'
                activePageText="FAQ's"
            />

            <div className='faq-area ptb-100'>
                <div className='container'>
                    <div className='tab faq-accordion-tab'>
                        <Tabs>
                            <TabList>
                                <Tab>
                                    <i className='bx bx-flag'></i>{' '}
                                    <span>Lorem Ipsum </span>
                                </Tab>
                                <Tab>
                                    <i className='bx bxs-badge-dollar'></i>{' '}
                                    <span>Lorem Ipsum </span>
                                </Tab>
                                <Tab>
                                    <i className='bx bx-shopping-bag'></i>{' '}
                                    <span>Lorem Ipsum </span>
                                </Tab>
                                <Tab>
                                    <i className='bx bx-book-open'></i>{' '}
                                    <span>Lorem Ipsum </span>
                                </Tab>
                                <Tab>
                                    <i className='bx bx-info-circle'></i>{' '}
                                    <span>Lorem Ipsum</span>
                                </Tab>
                            </TabList>

                            <TabPanel>
                                <div className='faq-accordion'>
                                    <Accordion
                                        allowZeroExpanded
                                        preExpanded={['a']}>
                                        {[
                                            {
                                                key: 'a',
                                                q: 'How can I join one of your courses?',
                                                a: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.  ",
                                            },
                                            {
                                                key: 'a',
                                                q: 'How can I join one of your courses?',
                                                a: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.  ",
                                            },
                                            {
                                                key: 'a',
                                                q: 'How can I join one of your courses?',
                                                a: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.  ",
                                            },
                                        ].map((a) => (
                                            <AccordionItem uuid={a.key}>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        {a.q}
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>{a.a}</p>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>

            {/* <SubscribeForm /> */}
        </React.Fragment>
    );
};

export default Faq;
