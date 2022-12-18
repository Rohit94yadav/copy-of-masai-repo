import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import PinInput from "./PinInput";

const Pin = ({ length, maxLength, setPinInput }) => {
  const [inputBoxLength] = useState(new Array(length).fill(8));
  const [singleInputBoxValue] = useState(new Array(length).fill(""));

  const inputRef = useRef([]);
  // const onChnageHandler = (e, index) => {
  //   if (index < length - 1) {
  //     inputRef.current[index + 1].focus();
  //   }
  // };

  const onChnageHandler = (e, index) => {
    singleInputBoxValue[index] = e.target.value;
    if (e.target.value.length > 0 && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    setPinInput(singleInputBoxValue.join(""));
  };

  const backspaceHandler = (e, index) => {
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
    singleInputBoxValue[index] = e.target.value;
    setPinInput(singleInputBoxValue.join(""));
  };

  const handlePaste = (e) => {
    const data = e.clipboardData
      .getData("text")
      .split("")
      .filter((_, index) => index < length);

    console.log(data);
    data.forEach((el, index) => {
      singleInputBoxValue[index] = el;
      inputRef.current[index].value = el;
      if (index < length - 1) {
        inputRef.current[index + 1].focus();
      }
    });
  };

  return (
    <div onPaste={handlePaste}>
      {inputBoxLength.map((_, index) => {
        return (
          <PinInput
            ref={(inputElem) => {
              return (inputRef.current[index] = inputElem);
            }}
            key={index}
            maxLength={maxLength}
            onChangeFunc={(e) => onChnageHandler(e, index)}
            backspaceFunc={(e) => backspaceHandler(e, index)}
          />
        );
      })}
    </div>
  );
};

export default Pin;

Pin.propTypes = {
  length: PropTypes.number.isRequired,
  maxLength: PropTypes.number.isRequired
};
