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
            cardDetailedText: "",
            media: {
                name: "Screenshot of a computer",
                source: {
                    url: "images2/image29.png"
                },
                type: "IMAGE"
            }
        },

        {
            title: "Money has been wired to Frank Minion by DollarKing.",
            cardTitle: "02/16/2023",
            cardDetailedText: "",
            media: {
                name: "Screenshot of a computer",
                source: {
                    url: "images2/image35.png"
                },
                type: "IMAGE"
            }
        },

        {
            title: "Frank Minion searched for bringing guns to purdue and emailed Natasha Kremlin for regreting to give them the secret files.",
            cardTitle: "02/17/2023",
            cardDetailedText: "",
            media: {
                name: "Screenshot of a computer",
                source: {
                    url: "images2/image1.png"
                },
                type: "IMAGE"
            }
        },

        {
            title: "Natasha Kremlin communicated with Boris Kremlin on email about flight to Zagreb where Natasha Kremlin can go immediately after giving Frank Minion poisonous coffee.",
            cardTitle: "02/19/2023 9:58 AM",
            cardDetailedText: "",
            media: {
                name: "Screenshot of a computer",
                source: {
                    url: "images2/image2.png"
                },
                type: "IMAGE"
            }
        },

        {
            title: "Frank Minion asked for Natasha Kremlin's help because of monitoring",
            cardTitle: "02/19/2023 3:26 PM",
            cardDetailedText: "",
            media: {
                name: "Screenshot of a computer",
                source: {
                    url: "images2/image2.png"
                },
                type: "IMAGE"
            }
        },

        {
            title: "Natasha Kremlin's notes exhibited the Frank Minion's garage code",
            cardTitle: "02/20/2023",
            cardDetailedText: "",
            media: {
                name: "Screenshot of a computer",
                source: {
                    url: "images2/image4.png"
                },
                type: "IMAGE"
            }
        },

        {
            title: "Natasha Kremlin bought and brought the coffee to the meeting with Frank Minion in the lab",
            cardTitle: "02/20/2023",
            cardDetailedText: "",
            media: {
                name: "Screenshot of a computer",
                source: {
                    url: "images2/image6.png"  //&image7  
                },
                type: "IMAGE"
            }
        },

        {
            title: "Frank Minion claimed he was having a heart attack, and suspected it was caused by Natasha Kremlin.",
            cardTitle: "02/20/2023 3:56 PM",
            cardDetailedText: "",
            media: {
                name: "Screenshot of a computer",
                source: {
                    url: "images2/image5.png"    
                },
                type: "IMAGE"
            }
        },

        {
            title: "Frank Minion claimed he was having a heart attack, and suspected it was caused by Natasha Kremlin.",
            cardTitle: "02/20/2023 3:56 PM",
            cardDetailedText: "",
            media: {
                name: "Screenshot of a computer",
                source: {
                    url: "images2/image5.png"    
                },
                type: "IMAGE"
            }
        },

        {
            title: "Natasha Kremlin emailed Boris Kremlin for the fact that Frank Minion was still alive and she needed to be lay low in West Lafayette for several days.",
            cardTitle: "02/20/2023 9:28 PM",
            cardDetailedText: "",
            media: {
                name: "Screenshot of a computer",
                source: {
                    url: "images2/image8.png"    
                },
                type: "IMAGE"
            }
        },

        {
            title: "Frank Minion posted for food poisoning on Facebook.",
            cardTitle: "02/21/2023",
            cardDetailedText: "",
            media: {
                name: "Screenshot of a computer",
                source: {
                    url: "images2/image9.png"    
                },
                type: "IMAGE"
            }
        },

        {
            title: "Frank Minion emailed Daniel Olivee, an ammunition dealer, for purchasing Glock 19 9mm.",
            cardTitle: "02/22/2023 8:49 AM",
            cardDetailedText: "",
            media: {
                name: "Screenshot of a computer",
                source: {
                    url: "images2/image20.png"    
                },
                type: "IMAGE"
            }
        },

        {
            title: "Frank Minion and Daniel Olivee agreed on the price of guns.",
            cardTitle: "02/22/2023 8:49 AM",
            cardDetailedText: "",
            media: {
                name: "Screenshot of a computer",
                source: {
                    url: "images2/image23.png"    
                },
                type: "IMAGE"
            }
        },

        {
            title: "Frank Minion and Daniel Olivee made the deal and and planned to meet at 2/22 1:00PM at the Walmart parking lot in West Lafayette.",
            cardTitle: "02/22/2023 8:53 AM",
            cardDetailedText: "",
            media: {
                name: "Screenshot of a computer",
                source: {
                    url: "images2/image25.png"    
                },
                type: "IMAGE"
            }
        },

        {
            title: "The photo showed they met at the Walmart parking lot at the scheduled time and highly indicating they had indeed completed the transaction.",
            cardTitle: "02/22/2023 12:59 PM",
            cardDetailedText: "",
            media: {
                name: "Screenshot of a computer",
                source: {
                    url: "images2/image28.png"    
                },
                type: "IMAGE"
            }
        },
        
        {
            title: "The picture of the 9mm ammunition were taken by Frank Minion's mobile phone(SM-G998U1) before the crime happened.",
            cardTitle: "02/22/2023 1:25 PM",
            cardDetailedText: "",
            media: {
                name: "Screenshot of a computer",
                source: {
                    url: "images2/image10.png"    
                },
                type: "IMAGE"
            }
        },

        {
            title: "Frank Minion has been to Natasha Kremlin's  in KNOY hall.",
            cardTitle: "02/23/2023",
            cardDetailedText: "",
            media: {
                name: "Screenshot of a computer",
                source: {
                    url: "images2/image32.png"    
                },
                type: "IMAGE"
            }
        },

        {
            title: "Two photos showed Natasha Kremlin lied on the ground in KNOY Hall by altitude and longitude which is highly suspected as crime scene. In addtion, pictures can be considered as evidence that Frank Minion was at the crime scene at that time.",
            cardTitle: "02/23/2023 3:07 PM",
            cardDetailedText: "",
            media: {
                name: "Screenshot of a computer",
                source: {
                    url: "images2/image34.png"  //&image36   
                },
                type: "IMAGE"
            }
        },        
    ];

    return (
        <Chrono items={items} cardHeight={600} mode="VERTICAL_ALTERNATING" textOverlay />
    );
};

export default TimelineTab;
