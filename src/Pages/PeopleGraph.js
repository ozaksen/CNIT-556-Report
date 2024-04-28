import React from 'react';
import { GraphView } from 'react-digraph';
import { Image } from 'antd';
import relationpng from './relations.png'; // The path should be relative to the current file

const Graph = () => {
    return (
      <div>
      <Image
        width="100%" // This will make the image take the full width of its container
        src={relationpng}
        alt="Description"
        preview={false}
      />
    </div>
    );
}

export default Graph;
