import React from 'react';
import { Collapse, Image, Typography } from 'antd';

const { Panel } = Collapse;
const { Paragraph, Text } = Typography;

const Report = () => {
  return (
    <div className="App">
      <Collapse accordion>
                {/* Part 3 - Incorporate the new content */}
                <Panel header="3. Is there evidence on the device(s) that can place Dr. Minion at the crime scene at the date and time in question?" key="3">
          <Paragraph>
            Yes. According to the case document, the crime happened on 02/23/2023, in the Knoy 421. From Frank, AXIOM, there is a picture of the exterior of the KNOY building taken by the same model of Dr. Minion's mobile phone(SM-G998U1) at 2/23/2023 12:28:31.
          </Paragraph>
          <Image
            src="images/image75.png"
            alt="A screenshot of a computer"
            width={200}
            preview
          />
          <Paragraph>
            From Natasha AXIOM, there is a photo of the door of KNOY 421 at 2/23/2023 3:06:45 PM.
          </Paragraph>
          <Image
            src="images/image77.png"
            alt="A white paper on a brown door"
            width={200}
            preview
          />
          <Paragraph>
            From Frank AXIOM, there are pictures showing on the way to KNOY 421.
          </Paragraph>
          <Image
            src="images/image76.png"
            alt="A screenshot of a computer"
            width={200}
            preview
          />
          <Image
            src="images/image79.png"
            alt="A screenshot of a computer"
            width={200}
            preview
          />
          <Paragraph>
            We further found two photos of what is suspected to be Natasha lying on the ground after receiving an attack.
          </Paragraph>
          <Image
            src="images/image78.png"
            alt="A screenshot of a computer"
            width={200}
            preview
          />
          <Image
            src="images/image82.png"
            alt="A screenshot of a computer"
            width={200}
            preview
          />
          <Paragraph>
            Tracking the latitude and longitude, it shows these photos were taken at KNOY building, and by the surroundings in the photo, we can see that it happened in the KNOY 421.
          </Paragraph>
          <Image
            src="images/image80.png"
            alt="A screenshot of a map"
            width={200}
            preview
          />
          <Paragraph>
            From the timestamp of photos above, we assume the exact time for the crime was around 2/23/2023 3:07 PM. And these pictures can be considered as evidence on the device(s) that can place Dr. Minion at the crime scene at the date and time.
          </Paragraph>
        </Panel>
        <Panel header="4. Is there evidence on the devices that can confirm that Dr. Minion was in possession of a Glock 19 G5 and 9mm ammunition (gun used to shoot Kremlin)?" key="4">
          <Paragraph>
            Yes. From the SM-G998U1 image, there is search history of ammo for Glock G43X.
          </Paragraph>
          <Image
            src="images/image85.png"
            alt="A screenshot of a computer"
            width={200}
            preview
          />
          <Paragraph>
            There are also two pictures of the 9mm ammunition taken by the same model of Dr. Minion’s mobile phone(SM-G998U1) at 2/22/2023 before the crime happened.
          </Paragraph>
          <Image
            src="images/image84.png"
            alt="A screenshot of a phone"
            width={200}
            preview
          />
          <Image
            src="images/image88.png"
            alt="A screenshot of a phone"
            width={200}
            preview
          />
          <Paragraph>
            There are also emails between Frank and Daniel Olivee, who we believed is an ammunition dealer, indicating Dr. Minion had plan to buy Glock 19 9mm, and they planned to meet at 2/22 1:00 PM at the Walmart parking lot.
          </Paragraph>
          <Image
            src="images/image86.png"
            alt="A screenshot of an email"
            width={200}
            preview
          />
          <Image
            src="images/image87.png"
            alt="A screenshot of an email"
            width={200}
            preview
          />
          <Image
            src="images/image89.png"
            alt="A screenshot of an email"
            width={200}
            preview
          />
          <Paragraph>
            There is a photo showing that they met at the Walmart parking lot at the scheduled time and highly indicating they had indeed completed the transaction.
          </Paragraph>
          <Image
            src="images/image90.png"
            alt="A screenshot of a computer"
            width={200}
            preview
          />
          <Paragraph>
            There is also email from Google Maps sent to Frank Minion for directions to Rural Kins Guns.
          </Paragraph>
          <Image
            src="images/image91.png"
            alt="A screenshot of a search engine"
            width={200}
            preview
          />
          <Paragraph>
            But from Natasha AXIOM, there is also a search record about ammo for a revolver.
          </Paragraph>
          <Image
            src="images/image92.png"
            alt="A screenshot of a computer"
            width={200}
            preview
          />
        </Panel>
        <Panel header="5. Is there evidence on the devices that can confirm or refute Dr. Minion’s claim that he was fearful for his life as the victim (Kremlin) had attempted to kill him by poisoning him?" key="5">
          <Paragraph>
            Yes. We found messages between Dr. Minion and Prof. Kremlin showing they planned to meet, and Prof. Kremlin would bring the coffee on 2/20/2023. Boris scarred Frank.
          </Paragraph>
          <Image
            src="images/image93.png"
            alt="A screenshot of a chat"
            width={200}
            preview
          />
          <Image
            src="images/image94.png"
            alt="Screens screenshot of a phone"
            width={200}
            preview
          />
          <Image
            src="images/image95.png"
            alt="A screenshot of a chat"
            width={200}
            preview
          />
          <Image
            src="images/image96.png"
            alt="A screenshot of a chat"
            width={200}
            preview
          />
          <Paragraph>
            From the email sent to Natasha from Boris, they treated Frank as a liability after they got the files they wanted, and a package has been delivered to Natasha to help her deal with Frank. Email shows Natasha received the package and would deal with Frank.
          </Paragraph>
          <Image
            src="images/image65.png"
            alt="A screenshot of an email"
            width={200}
            preview
          />
          <Image
            src="images/image66.png"
            alt="A screenshot of an email"
            width={200}
            preview
          />
          <Paragraph>
            From Natasha AXIOM, there is a photo of Starbucks coffee at 2/20/2023 3:29:03 PM.
          </Paragraph>
          <Image
            src="images/image67.png"
            alt="A close up of a cup"
            width={200}
            preview
          />
          <Paragraph>
            From Natasha AXIOM, there are messages from Natasha to Frank after the photo of Starbucks coffee. The message at 2/20/2023 3:56:17 PM shows Dr. Minion claimed he was having a heart attack, and suspected it was because Prof. Kremlin did something to him. We think it may be related to the coffee.
          </Paragraph>
          <Image
            src="images/image68.png"
            alt="A screenshot of a phone"
            width={200}
            preview
          />
          <Image
            src="images/image69.png"
            alt="A screenshot of a chat"
            width={200}
            preview
          />
          <Paragraph>
            From Frank Google, there is search history of VX poisoning, it was searched between the time Natasha bought them coffee and he claimed he had a heart attack.
          </Paragraph>
          <Image
            src="images/image70.png"
            alt="A screenshot of a computer"
            width={200}
            preview
          />
          <Paragraph>
            Natasha also sent an email to Boris that she had dealt with Frank just after she gave Frank the coffee. But later she found out Frank was still alive.
          </Paragraph>
          <Image
            src="images/image71.png"
            alt="A screenshot of an email"
            width={200}
            preview
          />
          <Image
            src="images/image72.png"
            alt="A screenshot of an email"
            width={200}
            preview
          />
          <Paragraph>
            From Frank FB, he also posted about food poisoning.
          </Paragraph>
          <Image
            src="images/image73.png"
            alt="A screenshot of a web page"
            width={200}
            preview
          />
          <Paragraph>
            From Natasha AXIOM, Dr. Minion thought someone was watching his house.
          </Paragraph>
          <Image
            src="images/image74.png"
            alt="Surveillance suspicion"
            width={200}
            preview
          />
          <Paragraph>
            From Natasha AXIOM, there is also an Apple Notes about Frank garage code.
          </Paragraph>
          <Image
            src="images/image11.png"
            alt="A screenshot of a computer"
            width={200}
            preview
          />
        </Panel>


        {/* Panel 6 */}
        <Panel header="6. Who was involved in the spying activities, and what roles did they play?" key="6">
          <Paragraph>
            Boris is the leader of the spying activities, giving instructions for action. Natasha, the organizer, executed Boris' orders, including abetting Frank's theft of classified documents, and poisoning him. Frank, driven by financial needs from gambling, participated actively, stealing crucial documents. Other possible participants include associates from Boris' network and various agents. Natasha wanted Boris' associate to hack Frank's home security camera, and coordinated with agents to secure files from Florida if Frank failed to comply.
          </Paragraph>
          <Paragraph>
            Google searches record of Natasha about spies meeting at university.
          </Paragraph>
          <Image
            src="images/image12.png"
            alt="A screenshot of a computer showing Google search records"
            width={200}
            preview
          />
          <Paragraph>
            Natasha also attempted to involve some GRAs in the activities.
          </Paragraph>
          <Image
            src="images/image13.png"
            alt="A screenshot of an email related to GRAs"
            width={200}
            preview
          />
          <Image
            src="images/image14.png"
            alt="A screenshot of a chat discussing GRAs"
            width={200}
            preview
          />
          <Image
            src="images/image15.png"
            alt="A screenshot of a phone showing messages"
            width={200}
            preview
          />
          <Paragraph>
            Frank requested the GRA contract form from Natasha, reflecting the depth of their collaborative planning.
          </Paragraph>
          <Image
            src="images/image16.png"
            alt="A screenshot of an email with the GRA contract form"
            width={200}
            preview
          />
          <Image
            src="images/image17.png"
            alt="A screenshot of a message discussing the GRA contract"
            width={200}
            preview
          />
          <Paragraph>
            This document facilitated the GRAs' involvement in the project, ensuring they had access to the necessary resources.
          </Paragraph>
          <Image
            src="images/image18.png"
            alt="A screenshot of a computer displaying the GRA document"
            width={200}
            preview
          />
          <Image
            src="images/image19.png"
            alt="A screenshot of an email sending the GRA hire form"
            width={200}
            preview
          />
          <Image
            src="images/image20.png"
            alt="A screenshot of a computer displaying further details on the GRA involvement"
            width={200}
            preview
          />
          <Paragraph>
            Although Frank initially hesitated over Natasha’s choices for GRAs, he eventually acquiesced and signed the form, indicating a complex network of coercion and manipulation within the spying activities.
          </Paragraph>
          <Image
            src="images/image1.png"
            alt="A screenshot of a chat showing Frank's final agreement"
            width={200}
            preview
          />
        </Panel>
                {/* Panel 7 */}
                <Panel header="7. What classified and export control information was compromised, and who was involved?" key="7">
          <Paragraph>
            The DoD research that Frank was working on and discussing with Natasha falls under national security and export control. The classified and export control information refers to the details related to this project. Various documents and communications were involved, which indicate extensive breaches of security protocols.
          </Paragraph>
          <Image
            src="images/image35.png"
            alt="A screenshot of an email discussing DoD research"
            width={200}
            preview
          />
          <Image
            src="images/image36.png"
            alt="A screenshot of a computer with classified information"
            width={200}
            preview
          />
          <Paragraph>
            Frank was deeply involved in Google searches and communications that contained sensitive information, potentially leading to severe security breaches.
          </Paragraph>
          <Image
            src="images/image37.png"
            alt="A screenshot of a search engine used by Frank"
            width={200}
            preview
          />
          <Image
            src="images/image38.png"
            alt="A screenshot of a search box with queries about classified topics"
            width={200}
            preview
          />
          <Image
            src="images/image39.png"
            alt="A screenshot showing search results related to export control"
            width={200}
            preview
          />
          <Paragraph>
            Frank also sent Natasha sensitive contact information from the base and was invited by Dr. Rogers to access a DoD research folder, indicating unauthorized access to restricted data.
          </Paragraph>
          <Image
            src="images/image41.png"
            alt="An email containing contact information from the base"
            width={200}
            preview
          />
          <Image
            src="images/image42.png"
            alt="A screenshot showing Frank's invitation to a DoD research folder"
            width={200}
            preview
          />
          <Paragraph>
            This situation represents a significant compromise of classified and export-controlled information, involving multiple individuals and potentially extensive networks.
          </Paragraph>
        </Panel>

        {/* Panel 8 */}
        <Panel header="8. Where and when did the classified and export control information exchange occur, and who was involved?" key="8">
          <Paragraph>
            The exchange of classified and export control information occurred in the lobby of the Hotel Rosen Shingle Creek at 9939 Universal Blvd, Orlando on February 15th at noon. Frank, Natasha, and Boris met there and exchanged hard copies of sensitive files.
          </Paragraph>
          <Image
            src="images/image22.png"
            alt="A screenshot of an email documenting the meeting"
            width={200}
            preview
          />
          <Paragraph>
            Natasha had other agents stay in Florida as a precaution in case Frank did not comply with the file transfer. This shows the level of planning and backup measures put into place for this operation.
          </Paragraph>
          <Image
            src="images/image57.png"
            alt="A screenshot of an email discussing agent arrangements in Florida"
            width={200}
            preview
          />
          <Image
            src="images/image58.png"
            alt="A screenshot of a phone displaying further coordination details"
            width={200}
            preview
          />
          <Paragraph>
            Evidence confirming their presence in Orlando includes various digital records, such as emails and location data from devices.
          </Paragraph>
          <Image
            src="images/image59.png"
            alt="A screenshot of a message confirming the location"
            width={200}
            preview
          />
          <Image
            src="images/image60.png"
            alt="A screenshot of computer records showing GPS locations"
            width={200}
            preview
          />
          <Paragraph>
            Additional location evidence from the Hotel Rosen Shingle Creek further confirms the meeting site, supported by GPS data and other digital footprints that tracked their movements to and from the venue.
          </Paragraph>
          <Image
            src="images/image61.png"
            alt="A picture of the hotel with GPS location data"
            width={200}
            preview
          />
          <Image
            src="images/image62.png"
            alt="A screenshot of a phone displaying GPS location"
            width={200}
            preview
          />
          <Image
            src="images/image63.png"
            alt="A screenshot of computer evidence detailing the meeting"
            width={200}
            preview
          />
          <Paragraph>
            The meticulous documentation and digital traces illustrate the extent and seriousness of this breach of classified and export-controlled information.
          </Paragraph>
        </Panel>

        {/* Panel 9 */}
        <Panel header="9. What was the motivation for Dr. Minion to engage in spying?" key="9">
        <Paragraph>
          Part of the reason is his colonel is not satisfied with his work. After the lunch
          with his colonel, he decided to dedicate more time to the “project” with Natasha.
        </Paragraph>
        <Image
          src="images/image54.png"
          alt="A screenshot of a chat"
          width={444}
          preview
        />
        <Image
          src="images/image55.png"
          alt="A screenshot of a chat"
          width={401}
          preview
        />
        <Paragraph>
          Frank’s commanding officer denied his promotion.
        </Paragraph>
        <Image
          src="images/image56.png"
          alt="A screenshot of an email"
          width={576}
          preview
        />
        <Paragraph>
          Another reason is he is addicted to gambling and he really needs money. He has to pay
          $50K to his bookie by the end of February and he is really eager to make some money.
        </Paragraph>
        <Image
          src="images/image47.png"
          alt="A screenshot of a chat"
          width={440}
          preview
        />
        <Image
          src="images/image48.png"
          alt="A white square with black text"
          width={291}
          preview
        />
        <Image
          src="images/image49.png"
          alt="A screenshot of a phone"
          width={401}
          preview
        />
        <Paragraph>
          We also found text messages, email, and search information about gambling websites to
          corroborate his gambling addiction.
        </Paragraph>
        <Image
          src="images/image52.png"
          alt="A yellow and black box with black text"
          width={437}
          preview
        />
        <Image
          src="images/image53.png"
          alt="A screenshot of a website"
          width={576}
          preview
        />
        <Paragraph>
          Moreover, we found Frank was active in a website about order brides, he may also need
          money to do that.
        </Paragraph>
        <Image
          src="images/image45.png"
          alt="A welcome email from Rose Brides"
          width={576}
          preview
        />
        <Image
          src="images/image46.png"
          alt="A screenshot of a website"
          width={576}
          preview
        />
        <Image
          src="images/image81.png"
          alt="A screenshot of a computer"
          width={576}
          preview
        />
      </Panel>
        <Panel header="10. What is the timeline of events?" key="10">
          <Paragraph>
            Check the timeline Tab
          </Paragraph>
        </Panel>
        <Panel header="11. Should the suspect(s) be charged with a crime?" key="11">
          <Paragraph>
            We do think there is enough evidence to support the charge. From the evidence, it appears that this case
            involves a complex set of offenses. In addition to murder, it involves treason, poisoning, invasion of a
            private home, illegal hacking, and so on. All these series of crimes are logically justified.
          </Paragraph>
          <Title level={5}>Evidence of Frank's Murder of Natasha</Title>
          <Paragraph>
            In the case of Frank's alleged murder of Natasha, Frank had sufficient motive and evidence to prove that he
            had been killed by Natasha's attempted VX poisoning between 3:00 and 4:00 p.m. on 2/20/2023. He experienced a
            heart attack soon after drinking the coffee that Natasha gave him, as evidenced by the text messages he sent
            to Natasha, the search logs regarding the poison, the emails sent to Dr. Rogers, and his Facebook post.
          </Paragraph>
          <Title level={5}>Natasha's Involvement</Title>
          <Paragraph>
            From Natasha's side, we also have a large number of records relating to her before and after the poisoning,
            including the package suspected to be related to the poison and instructions for poisoning sent by her uncle
            Boris, Natasha's consent to the operation, as well as the emails reporting back to Boris before and after
            the operation. In addition to the poisoning, there are also text message records surfacing his suspicions
            that someone had broken into his home as well as spying on him, etc.
          </Paragraph>
          <Title level={5}>Criminal Activity Relating to Treason</Title>
          <Paragraph>
            As for the criminal activity portion relating to treason, there is also enough evidence to charge the
            suspects. Boris, who himself identifies as both a former KGB agent and Natasha's uncle, worked with Natasha
            to abet Frank's use of his position to facilitate the provision of important documents relating to the DoD
            research project. Suggesting Frank hire GRAs for the project is a trap Natasha set up with Boris, aiming to
            get access to his project information.
          </Paragraph>
          <Paragraph>
            To summarize, this case contained a series of crimes. We believe that the evidence is sufficient to charge
            the main suspects, Frank, Natasha and Boris, with a number of crimes and to explain their motives, their
            specific course of action and the results of their crimes.
          </Paragraph>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Report;
