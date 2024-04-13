"use client";

import { DropDownTopic } from "./DropDownTopic";
import { DropDownSideBarItem } from "./DropDownSideBarItem";
import { useState } from "react";
import { topicData } from "@/lib/data";
import { Button } from "./ui/button";

interface DrawerComponentProps {
  title: string;
}

export const DrawerComponent = ({ title }: DrawerComponentProps) => {
  // state of topic and each item in topic list
  const [isTopicOpen, setIsTopicOpen] = useState(false);
  const [isOpenList, setIsOpenList] = useState<boolean[]>(
    Array(topicData.length).fill(false),
  );

  // toggle method for topic only
  const toggleTopicOpenStatus = () => {
    setIsTopicOpen(!isTopicOpen);
  };

  //  toggle method for each item in the topic drop down
  const toggleOpenStatus = (index: number) => {
    const updatedIsOpenList = [...isOpenList];
    updatedIsOpenList[index] = !updatedIsOpenList[index];
    setIsOpenList(updatedIsOpenList);
  };

  return (
    <section>
      <DropDownTopic
        isTopicOpen={isTopicOpen}
        toggleTopicOpenStatus={toggleTopicOpenStatus}
        title={title}
      />
      {isTopicOpen &&
        isOpenList.map((isOpen, index) => {
          const { title, family, size, iconStyles, href } = topicData[index];
          return (
            <DropDownSideBarItem
              key={index}
              title={title}
              family={family}
              size={size}
              iconStyles={iconStyles}
              isOpen={isOpen}
              toggleOpenStatus={() => toggleOpenStatus(index)}
            />
          );
        })}
    </section>
  );
};
