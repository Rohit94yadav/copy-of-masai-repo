import { forwardRef } from "react";

const PinInput = forwardRef(
  ({ maxLength, onChangeFunc, backspaceFunc }, ref) => {
    const handleKeyUp = (e) => {
      console.log(e);

      if (e.keyCode === 8 && !e.target.value) {
        backspaceFunc(e);
      } else {
        onChangeFunc(e);
      }
    };

    return <input ref={ref} maxLength={maxLength} onKeyUp={handleKeyUp} />;
  }
);
export default PinInput;
