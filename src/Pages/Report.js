import React from 'react';
import { Collapse, Image, Typography } from 'antd';

const { Panel } = Collapse;
const { Paragraph, Text } = Typography;

const Report = () => {
  return (
    <div className="App">
      <Collapse accordion>
        <Panel header="3. Is there evidence on the device(s) that can place Dr. Minion at the crime scene at the date and time in question?
" key="1">
          <Paragraph>
          According to the case document, the crime happened on 02/23/2023, in the Knoy 421.
          From Frank, AXIOM, there is a picture of the exterior of the KNOY building taken by
          the same model of <Text strong>Dr. Minion’s mobile phone(SM-G998U1)</Text> at 2/23/2023 12:28:31.

          </Paragraph>
          <Image
            src="3_1.png"
            alt="Evidence 3.1"
            // width={200}
            preview
          />
          <Paragraph>
          From <Text strong>Natasha AXIOM</Text>, there is a photo of the door of KNOY 421 AT 2/23/2023 3:06:45PM.
          </Paragraph>
          <Image
            src="3_2.png"
            alt="Evidence 3.2"
            // width={200}
            preview
          />
        </Panel>
        <Panel header="What is the motive of the crime?" key="2">
          <Paragraph>
            The motive of the crime is believed to be <Text strong>jealousy</Text>.
            According to the investigation, John Doe had a romantic interest in
            Jane Smith, but she rejected him and started dating another coworker,
            Mike Lee. John Doe was enraged by this and planned to kill Jane Smith
            out of revenge.
          </Paragraph>
          <Image
            src="motive.jpg"
            alt="A picture of Jane Smith and Mike Lee"
            width={200}
            preview
          />
        </Panel>
        <Panel header="How was the crime committed?" key="3">
          <Paragraph>
            The crime was committed by <Text strong>stabbing</Text>. John Doe
            followed Jane Smith to her apartment after work and attacked her with
            a knife. He stabbed her multiple times in the chest and abdomen,
            causing fatal injuries. He then fled the scene and disposed of the
            knife in a nearby dumpster.
          </Paragraph>
          <Image
            src="weapon.jpg"
            alt="A picture of the knife used in the crime"
            width={200}
            preview
          />
        </Panel>
      </Collapse>
    </div>
  );
};

export default Report;