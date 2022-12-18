import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {useThrottle} from "use-throttle";

const Searchbar = ({ suggestions, queryHandler }) => {
  const [inputText, setInputText] = useState("");
  const [active, setActive] = useState(0);
  const scrollRef = useRef();

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleActiveSuggestions = (e) => {
    switch(e.keyCode){
      case 38:
        if(active === 1){
          scrollRef.current.scrollTop = suggestions.length * 38.667;
          setActive(suggestions.length)
        }
         else if(active <= suggestions.length - 3){
            scrollRef.current.scrollTop -= 38.667;
            
          }
          if(active > 1){

            setActive((prev) => prev-1)
             }
        break;


      case 40:

      if(active === suggestions.length){
        scrollRef.current.scrollTop = 0;
        setActive(0)
      }

       else if(active >= 4){
          scrollRef.current.scrollTop += 38.667;
        }

        setActive((prev) => prev+1)
        // if(active < suggestions.length && active !== suggestions.length){

        // }

        break;

      default:
        return;
    }
  }

  const throttledText = useThrottle(inputText, 1000);


  useEffect(() => {
    queryHandler(throttledText);
  }, [throttledText, queryHandler]);

  return (
    <Wrapper onKeyUp = {handleActiveSuggestions} >
      <SearchbarWrapper>
        <Input value={inputText} onChange={handleInputChange} />
      </SearchbarWrapper>
      <SuggestionsBox len={5} active={active} ref = {scrollRef} >
        {suggestions.map((el, index) => {
          return (
            <div key={index} onMouseOver={() => setActive(index + 1)}>
              {el}
            </div>
          );
        })}
      </SuggestionsBox>
    </Wrapper>
  );
};

const SuggestionsBox = styled.div`
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  /* max-height: 200px; */
  max-height: ${({ len }) => `${len * 38.667}px`};
  border-top-color: ${({ len }) => (len ? "transparent" : "black")};
  margin: auto;
  overflow: auto;

  /* padding:10px; */

  & * {
    flex: 1;
    text-align: left;
    padding: 10px;
    padding-left: 30px;
  }

  & :nth-child(${({ active }) => active}) {
    background: rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }
`;

const SearchbarWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  padding: 5px 10px;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 20px;
  flex: 1;
`;

const Wrapper = styled.div`
  max-width: 400px;
  margin: auto;
`;

export default Searchbar;
