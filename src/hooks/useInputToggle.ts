import { useState } from "react";

type UseToggle = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
  React.FocusEventHandler,
  React.FocusEventHandler
];

function useInputToggle(intialValue: boolean): UseToggle {
  const [toggle, setToggle] = useState(intialValue);

  const handleFocus: React.FocusEventHandler = (e: React.FocusEvent) => {
    setToggle(true);
  };
  const handleBlur: React.FocusEventHandler = (e: React.FocusEvent) => {
    setToggle(false);
  };

  return [toggle, setToggle, handleFocus, handleBlur];
}

export default useInputToggle;
