import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Tabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleCurrentIndex(currentIndex) {
    setCurrentTabIndex(currentIndex);
    onChange(currentIndex);
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent &&
          tabsContent.map((item, index) => (
            <div onClick={() => handleCurrentIndex(index)} key={item.label}>
              <span
                className={`label ${index === currentTabIndex ? "active" : ""}`}
              >
                {item.label}
              </span>
            </div>
          ))}
      </div>

      <div className="content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
