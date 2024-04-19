import React from 'react';
import { Collapse, Image, Typography } from 'antd';

const { Panel } = Collapse;
const { Paragraph, Text } = Typography;

const Report = () => {
  return (
    <div className="App">
      <Collapse accordion>
        <Panel header="3. Is there evidence on the device(s) that can place Dr. Minion at the crime scene at the date and time in question?" key="3">
          <Paragraph>
            According to the case document, the crime happened on 02/23/2023, in the Knoy 421.
            From Frank, AXIOM, there is a picture of the exterior of the KNOY building taken by the same model of Dr.
            Minion's mobile phone(SM-G998U1) at 2/23/2023 12:28:31.
          </Paragraph>
          <Image
            src="/images/image18.png"
            alt="Exterior of KNOY building"
            width={200}
            preview
          />
          <Paragraph>
            From Natasha AXIOM, there is a photo of the door of KNOY 421 AT 2/23/2023 3:06:45 PM.
          </Paragraph>
          <Image
            src="/images/image20.png"
            alt="Photo of the door of KNOY 421"
            width={200}
            preview
          />
          <Paragraph>
            From Frank AXIOM, there are pictures showing the way to KNOY 421.
          </Paragraph>
          <Image
            src="images/image19.png"
            alt="Pictures showing the way to KNOY 421"
            width={200}
            preview
          />
          <Paragraph>
            We further found two photos of what is suspected to be Prof. Kremlin lying on the ground after receiving an attack.
          </Paragraph>
          <Image
            src="images/image21.png"
            alt="Photos of Prof. Kremlin lying on the ground"
            width={200}
            preview
          />
          <Image
            src="images/image24.png"
            alt="Photos of Prof. Kremlin lying on the ground"
            width={200}
            preview
          />
          <Paragraph>
            Tracking the latitude and longitude, it shows these photos were taken at KNOY building, and by the surroundings in the photo, we can see that it happened in the KNOY 421.
          </Paragraph>
          <Image
            src="images/image23.png"
            alt="Map showing the location of KNOY building"
            width={200}
            preview
          />
          <Paragraph>
            From the timestamp of photos above, we assume the exact time for the crime was around 2/23/2023 3:07 PM. And these pictures can be considered as evidence on the device(s) that can place Dr. Minion at the crime scene at the date and time.
          </Paragraph>
        </Panel>
        <Panel header="4. Is there evidence on the devices that can confirm that Dr. Minion was in possession of a Glock 19 G5 and 9mm ammunition (gun used to shoot Kremlin)?" key="4">
          <Paragraph>
            From the SM-G998U1 image, there is search history of ammo for Glock G43X.
          </Paragraph>
          <Image
            src="images/image28.png"
            alt="Search history of ammo for Glock G43X"
            width={200}
            preview
          />
          <Paragraph>
            There are also two pictures of the 9mm ammunition taken by the same model of Dr. Minion’s mobile phone(SM-G998U1) at 2/22/2023 before the crime happened.
          </Paragraph>
          <Image
            src="images/image26.png"
            alt="Pictures of the 9mm ammunition"
            width={200}
            preview
          />
          <Image
            src="images/image33.png"
            alt="Pictures of the 9mm ammunition"
            width={200}
            preview
          />
          <Paragraph>
            There are also emails between Dr. Minion and Daniel Olivee, who we believed is an ammunition dealer, indicating Dr. Minion had plan to buy Glock 19 9mm, and they planned to meet at 2/22 1:00 PM at the Walmart parking lot.
          </Paragraph>
          <Image
            src="images/image29.png"
            alt="Emails between Dr. Minion and Daniel Olivee"
            width={200}
            preview
          />
          <Image
            src="images/image31.png"
            alt="Emails between Dr. Minion and Daniel Olivee"
            width={200}
            preview
          />
          <Image
            src="images/image34.png"
            alt="Emails between Dr. Minion and Daniel Olivee"
            width={200}
            preview
          />
          <Paragraph>
            There is a photo showing that they met at the Walmart parking lot at the scheduled time and highly indicating they had indeed completed the transaction.
          </Paragraph>
          <Image
            src="images/image36.png"
            alt="Photo showing Dr. Minion and Daniel Olivee at the Walmart parking lot"
            width={200}
            preview
          />
          <Paragraph>
            But from Natasha AXIOM, there is also a search record about ammo for a revolver.
          </Paragraph>
          <Image
            src="images/image38.png"
            alt="Search record about ammo for a revolver"
            width={200}
            preview
          />
        </Panel>
        <Panel header="5. Is there evidence on the devices that can confirm or refute Dr. Minion's claim that he was fearful for his life as the victim (Kremlin) had attempted to kill him by poisoning him?" key="5">
          <Paragraph>
            We found messages between Dr. Minion and Prof. Kremlin showing they planned to meet, and Prof. Kremlin would bring the coffee on 2/20/2023.
          </Paragraph>
          <Image
            src="images/image40.png"
            alt="A screenshot of a chat"
            width={200}
            preview
          />
          <Paragraph>
            From Natasha AXIOM, there is a photo of Starbucks coffee at 2/20/2023 3:29:03 PM.
          </Paragraph>
          <Image
            src="images/image42.png"
            alt="A close up of a cup"
            width={200}
            preview
          />
          <Paragraph>
            From Natasha AXIOM, there are messages from Natasha to Frank after the photo of Starbucks coffee.
          </Paragraph>
          <Image
            src="images/image44.png"
            alt="A screenshot of a phone"
            width={200}
            preview
          />
          <Paragraph>
            The message at 2/20/2023 3:56:17 PM shows Dr. Minion claimed he was having a heart attack, and suspected it was because Prof. Kremlin did something to him. We think it may be related to coffee.
          </Paragraph>
          <Image
            src="images/image46.png"
            alt="A screenshot of a chat"
            width={200}
            preview
          />
        </Panel>

        {/* Panel 6 */}
        <Panel header="6. What information can be gleaned from the WhatsApp conversation between Dr. Minion and Daniel Olivee?" key="6">
          <Paragraph>
            The WhatsApp conversation between Dr. Minion and Daniel Olivee reveals:
          </Paragraph>
          <Paragraph>
            - Plans to meet at the Walmart parking lot on 2/22/2023 at 1:00 PM.
          </Paragraph>
          <Image
            src="images/image25.png"
            alt="WhatsApp conversation between Dr. Minion and Daniel Olivee"
            width={200}
            preview
          />
          <Paragraph>
            - Discussions about purchasing a Glock 19 9mm.
          </Paragraph>
          <Image
            src="images/image29.png"
            alt="WhatsApp conversation between Dr. Minion and Daniel Olivee"
            width={200}
            preview
          />
          <Image
            src="images/image31.png"
            alt="WhatsApp conversation between Dr. Minion and Daniel Olivee"
            width={200}
            preview
          />
          <Image
            src="images/image34.png"
            alt="WhatsApp conversation between Dr. Minion and Daniel Olivee"
            width={200}
            preview
          />
          <Paragraph>
            - Confirmation of the meeting at the Walmart parking lot, suggesting completion of the transaction.
          </Paragraph>
          <Image
            src="images/image36.png"
            alt="WhatsApp conversation between Dr. Minion and Daniel Olivee"
            width={200}
            preview
          />
          <Paragraph>
            This conversation provides strong evidence linking Dr. Minion to the purchase of a Glock 19 9mm and 9mm ammunition.
          </Paragraph>
        </Panel>
                {/* Panel 7 */}
                <Panel header="7. What classified and export control information was compromised, and who was involved?" key="7">
          <Paragraph>
            The classified and export control information compromised included:
          </Paragraph>
          <Paragraph>
            - Information obtained from a screenshot of a computer (Frank Google).
          </Paragraph>
          <Image
            src="images/image27.png"
            alt="A screenshot of a computer"
            width={394}
            preview
          />
          <Paragraph>
            - Information gathered from a search engine (Frank Google).
          </Paragraph>
          <Image
            src="images/image30.png"
            alt="A screenshot of a search engine"
            width={427}
            preview
          />
          <Image
            src="images/image32.png"
            alt="A screenshot of a search box"
            width={441}
            preview
          />
          <Image
            src="images/image35.png"
            alt="A screenshot of a search engine"
            width={451}
            preview
          />
          <Paragraph>
            - Information accessed from another search engine (Frank Google).
          </Paragraph>
          <Image
            src="images/image37.png"
            alt="A screenshot of a search engine"
            width={482}
            preview
          />
        </Panel>

        {/* Panel 8 */}
        <Panel header="8. Where and when did the classified and export control information exchange occur, and who was involved?" key="8">
          <Paragraph>
            The exchange of classified and export control information occurred:
          </Paragraph>
          <Image
            src="images/image39.png"
            alt="A screenshot of a message"
            width={576}
            preview
          />
          <Paragraph>
            The details of the exchange, including location and individuals involved, are being investigated further.
          </Paragraph>
        </Panel>

        {/* Panel 9 */}
        <Panel header="9. What was the motivation for Dr. Minion to engage in spying?" key="9">
          <Paragraph>
            The motivation for Dr. Minion to engage in spying is revealed in chat conversations:
          </Paragraph>
          <Image
            src="images/image41.png"
            alt="A screenshot of a chat"
            width={444}
            preview
          />
          <Image
            src="images/image43.png"
            alt="A screenshot of a chat"
            width={409}
            preview
          />
          <Image
            src="images/image45.png"
            alt="A screenshot of a chat"
            width={440}
            preview
          />
          <Image
            src="images/image1.png"
            alt="A screenshot of a phone"
            width={401}
            preview
          />
          <Image
            src="images/image2.png"
            alt="A screenshot of a phone"
            width={426}
            preview
          />
          <Image
            src="images/image4.png"
            alt="A yellow and black box with black text"
            width={437}
            preview
          />
          <Image
            src="images/image6.png"
            alt="A screenshot of a website"
            width={576}
            preview
          />
          <Paragraph>
            These conversations suggest various potential motivations for Dr. Minion's involvement in spying, including personal gain and vendettas.
          </Paragraph>
        </Panel>
        <Panel header="10. What is the timeline of events?" key="10">
          <Paragraph>
            Check the timeline Tab
          </Paragraph>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Report;
