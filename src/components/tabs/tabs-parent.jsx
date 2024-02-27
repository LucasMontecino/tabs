import Tabs from "./tabs";
import "./tabs.css";

export default function TabsParent() {
  function RandomContent() {
    return <h1>Random Content</h1>;
  }

  const tabs = [
    {
      label: "Tab 1",
      content: <div>Content for tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>Content for tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomContent />,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
