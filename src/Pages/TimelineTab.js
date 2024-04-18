import React from 'react';
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Chrono } from "react-chrono";



const TimelineTab = () => {
    var items = [
        {
            title: "Frank Minion is addicted to gambling and being debt-collection",
            cardTitle: "02/06/2023",
            cardDetailedText: "Detailed description of Frank Minion's addiction issues and consequences...", // Add your description here
            media: {
              name: "dunkirk beach",
              source: {
                url: "3_1.png"
              },
              type: "IMAGE"
            }
          },
      {
        title: "02/06/2023",
        cardTitle: "Frank Minion is addicted to gambling and being debt-collection",
        media: {
          name: "dunkirk beach",
          source: {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh7ddWs9R2EXa8dJTh6FSkhtqICdNRfhEH4LU2bCGijBzmhiUP"
          },
          type: "IMAGE"
        }
      },
      {
        title: "02/06/2023",
        cardTitle: "Frank Minion is addicted to gambling and being debt-collection",
        media: {
          name: "dunkirk beach",
          source: {
            url: "/timeline_1.png"
          },
          type: "IMAGE"
        }
      },
      {
        title: "02/06/2023",
        cardTitle: "Frank Minion is addicted to gambling and being debt-collection",
        media: {
          name: "dunkirk beach",
          source: {
            url: "/timeline_1.png"
          },
          type: "IMAGE"
        }
      },
      {
        title: "02/06/2023",
        cardTitle: "Frank Minion is addicted to gambling and being debt-collection",
        media: {
          name: "dunkirk beach",
          source: {
            url: "/timeline_1.png"
          },
          type: "IMAGE"
        }
      },
      {
        title: "Frank Minion is addicted to gambling and being debt-collection",
        cardTitle: "02/06/2023",
        cardDetailedText: "Detailed description of Frank Minion's addiction issues and consequences...", // Add your description here
        media: {
          name: "dunkirk beach",
          source: {
            url: "3_1.png"
          },
          type: "IMAGE"
        }
      },
  {
    title: "02/06/2023",
    cardTitle: "Frank Minion is addicted to gambling and being debt-collection",
    media: {
      name: "dunkirk beach",
      source: {
        url: "/timeline_1.png"
      },
      type: "IMAGE"
    }
  },
  {
    title: "02/06/2023",
    cardTitle: "Frank Minion is addicted to gambling and being debt-collection",
    media: {
      name: "dunkirk beach",
      source: {
        url: "/timeline_1.png"
      },
      type: "IMAGE"
    }
  },
  {
    title: "02/06/2023",
    cardTitle: "Frank Minion is addicted to gambling and being debt-collection",
    media: {
      name: "dunkirk beach",
      source: {
        url: "/timeline_1.png"
      },
      type: "IMAGE"
    }
  },
  {
    title: "02/06/2023",
    cardTitle: "Frank Minion is addicted to gambling and being debt-collection",
    media: {
      name: "dunkirk beach",
      source: {
        url: "/timeline_1.png"
      },
      type: "IMAGE"
    }
  },
    ]
    return (
        <>
            <Chrono items={items} mode="HORIZONTAL"></Chrono></>

    );
};

export default TimelineTab;