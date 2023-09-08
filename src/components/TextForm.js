import React,{ useState } from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('');
    const handleClick=()=>{
        // console.log("updarcase" +  text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upperCase","success");
    }
    const toLowerCase=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowerCase","success");
    }
    const onchangeHandler=(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    const handleCopy=()=>{
        var text= document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copied","info")
    }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.title}</h1>
    <div className="mb-3">   
        <textarea style={{backgroundColor:props.mode==='dark'?'grey':'white',
        color: props.mode==='dark'?'white':'black'}} className="form-control" value={text} onChange={onchangeHandler} id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={toLowerCase}>Convert to Lowercase</button>
    <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>your text summary</h1>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
