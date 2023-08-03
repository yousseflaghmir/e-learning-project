import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import{mdOUTlineArrowDropDown} from 'react-icons/md';
import './Value.css'

const Value = () => {
    return (
        <section className="v-wrapper">
            <div className="paddingd innerWidth flexCenter v-container">
                {/* left side */}
                <div className="v-left">
                     <div className="image-container">
                        <img src="./value.png" alt="" />
                     </div>
                </div>
            </div>
        </section>
    )
}