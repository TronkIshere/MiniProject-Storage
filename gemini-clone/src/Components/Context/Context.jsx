import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData(prev=>prev + newxtWord)
    }, 75 * index)
  }

  const onSent = async (prompt) => {
    setResultData("")
    setLoading(true)
    setShowResult(true)
    setRecentPrompt(input)
    const response = await run(input);
    let responseArray = response.split("**")
    let newResponse
    for(let i = 0; i < responseArray.length; i++){
      if(i === 0 || i%2 !== 1) {
        newResponse += responseArray[i];
      }
      else{
        newResponse += "<b>" + responseArray[i] + "</b>"
      }
    }
    let newResponse2 = newResponse.split("*").john("</br>")
    let newResponseArray = newResponse2.split(" ");
    for(let i = 0; i < newResponseArray.length; i++){
      const newxtWord = newResponseArray[i]
      delayPara(i, newxtWord + " ")
    }
    setResultData(newResponse)
    setLoading(false)
    setInput("")
  };

  const contextVault = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput
  };

  return (
    <Context.Provider value={contextVault}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
