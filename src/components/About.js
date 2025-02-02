import React from 'react';

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark'?'white':'#0d0926',
        backgroundColor: props.mode === 'dark'?'#0d0926':'white'
    }

  return (
    <div className="container" style={myStyle} >
            <h2>About Us</h2>
                    <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <strong>Analyze Your Text</strong>  
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle} >
                    TextUtils gives you a way to analyze your text  qucikly and efficiently. Be it word count, character count or copying a text or converting it to uppercase or lowercase. 
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                   <strong>Free To Use</strong> 
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle} >
                    TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of word and characters. Thus it is suitable for writing text with word/character limit. 
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                   <strong>Browser Compatible</strong> 
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle} >
                    Thus word counter software works in any web browser such as chrome, Firefox, Internet explorer, Safari, Opera. It suits to count character in facebook, Blog, Books, excel document, pdf document, essays, etc. 
                </div>
                </div>
            </div>
            </div>
         </div>
  )
}
