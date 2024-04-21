import React from 'react';
import { Chrono } from "react-chrono";

const TimelineTab = () => {
    const items = [
        {
            title: "NSF new funding for cybersecurity for Frank Minion",
            cardTitle: "02/01/2023",
            cardDetailedText: "A short conversation between Natasha Kremlin and Frank Minion to discuss the difficulty that Frank Minion confronted using WhatsApp. And meeting for GRA.",
            media: {
                name: "Screenshot of a computer",
                source: {
                    url: "images2/image11.png"
                },
                type: "IMAGE"
            }
        },
        {
            title: "Frank Minion is addicted to gambling and being debt-collection",
            cardTitle: "02/06/2023",
            cardDetailedText: "Detailed description of Frank Minion's addiction issues and consequences...",
            media: {
                name: "Screenshot of a chat",
                source: {
                    url: "images2/image14.png"
                },
                type: "IMAGE"
            }
        },
        {
            title: "Several emails contain gambling information sent to Frank Minion's email account",
            cardTitle: "02/07/2023",
            cardDetailedText: "Description of the emails containing gambling information sent to Frank Minion.",
            media: {
                name: "Screenshot of a computer",
                source: {
                    url: "images2/image17.png"
                },
                type: "IMAGE"
            }
        },
        {
            title: "Frank Minion booked the flight on 02/14/2023 to Florida",
            cardTitle: "02/07/2023",
            cardDetailedText: "Frank Minion made a flight booking to Florida on 02/14/2023.",
            media: {
                name: "Screenshot of a phone",
                source: {
                    url: "images2/image16.png"
                },
                type: "IMAGE"
            }
        },
        {
            title: "Frank Minion shared more details about the project to Natasha Kremlin and Boris Kremlin",
            cardTitle: "02/08/2023",
            cardDetailedText: "Frank Minion provided additional project details to Natasha Kremlin and Boris Kremlin.",
            media: {
                name: "Screenshot of an email",
                source: {
                    url: "images2/image19.png"
                },
                type: "IMAGE"
            }
        },
        {
            title: "Frank Minion emailed Boris Kremlin about project documentation and the money",
            cardTitle: "02/11/2023",
            cardDetailedText: "Frank Minion sent an email to Boris Kremlin regarding project documentation and financial matters.",
            media: {
                name: "Screenshot of an email",
                source: {
                    url: "images2/image26.png"
                },
                type: "IMAGE"
            }
        },
        {
            title: "Frank Minion emailed Natasha Kremlin that Boris Kremlin started to threaten him",
            cardTitle: "02/11/2023",
            cardDetailedText: "Frank Minion sent an email to Natasha Kremlin informing her that Boris Kremlin had begun threatening him.",
            media: {
                name: "Screenshot of an email",
                source: {
                    url: "images2/image22.png"
                },
                type: "IMAGE"
            }
        },
        {
            title: "Frank Minion went to Florida",
            cardTitle: "02/14/2023",
            cardDetailedText: "Frank Minion traveled to Florida on 02/14/2023. A picture of the hotel where he stayed was taken with location information.",
            media: {
                name: "Screenshot of a phone",
                source: {
                    url: "images2/image27.png"
                },
                type: "IMAGE"
            }
        },
        {
            title: "Boris Kremlin and Natasha Kremlin arrived at Orlando",
            cardTitle: "02/15/2023",
            cardDetailedText: "Boris Kremlin and Natasha Kremlin arrived at Orlando. They discussed the method of sending the money.",
            media: {
                name: "Screenshot of a computer",
                source: {
                    url: "images2/image29.png"
                },
                type: "IMAGE"
            }
        }
    ];

    return (
        <Chrono items={items} mode="VERTICAL" />
    );
};

export default TimelineTab;
