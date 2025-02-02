import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }

    const handleLoClick = () =>{
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowercase!","success");
  }

  const handleFirstWordCapital = () => {
    let words = text.split(" ");
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    let newText = words.join(" ");
    setText(newText);
    props.showAlert("Done capitalized!","success");
  };
  

  const handleClearClick = () =>{
    let newText = ("");
    setText(newText)
    props.showAlert("Text cleared","danger");
}

    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');

  const handleCopy = () =>{
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard!", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed!","success");
  }
  
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#0d0926'}}> 
            <h1 className='mb-3 mx-1'>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#111945':'white',color:props.mode==='dark'?'white':'#0d0926'}} id="myBox" rows="5"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy to clipboard</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleFirstWordCapital}>Capitalize the text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#0d0926'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} character</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview here"}</p>
    </div>
    </>
  )
}
