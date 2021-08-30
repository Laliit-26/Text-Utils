import React from 'react'

function About(props) {
    return (
      <div className='container mt-5'>
        <div className='accordion' id='accordionExample'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingOne'>
              <button
                className='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseOne'
                aria-expanded='true'
                aria-controls='collapseOne'
                style={{
                  backgroundColor: props.mode === 'light' ? 'white' : 'gray',
                  color: props.mode === 'light' ? 'black' : 'white',
                }}
              >
                Analyze your text.
              </button>
            </h2>
            <div
              id='collapseOne'
              className='accordion-collapse collapse show'
              aria-labelledby='headingOne'
              data-bs-parent='#accordionExample'
            >
              <div
                className='accordion-body'
                style={{
                  backgroundColor: props.mode === 'light' ? 'white' : '#183c59',
                  color: props.mode === 'light' ? 'black' : 'white',
                }}
              >
                <strong>
                  Tetutils gives you a way to analyze your text quickly and
                  efficiently .Be it word count,charactor count and text
                  manipulation.
                </strong>
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingTwo'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseTwo'
                aria-expanded='false'
                aria-controls='collapseTwo'
                style={{
                  backgroundColor: props.mode === 'light' ? 'white' : 'gray',
                  color: props.mode === 'light' ? 'black' : 'white',
                }}
              >
                Free to use
              </button>
            </h2>
            <div
              id='collapseTwo'
              className='accordion-collapse collapse'
              aria-labelledby='headingTwo'
              data-bs-parent='#accordionExample'
            >
              <div
                className='accordion-body'
                style={{
                  backgroundColor: props.mode === 'light' ? 'white' : '#183c59',
                  color: props.mode === 'light' ? 'black' : 'white',
                }}
              >
                <strong>
                  textutils is a free character count tools that provides
                  instant character count and word count statics for a given
                  text .textutils reports the number of words and characters
                  does it is suitable for writing text with word/character limit
                </strong>
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingThree'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseThree'
                aria-expanded='false'
                aria-controls='collapseThree'
                style={{
                  backgroundColor: props.mode === 'light' ? 'white' : 'gray',
                  color: props.mode === 'light' ? 'black' : 'white',
                }}
              >
                Browser Compitable
              </button>
            </h2>
            <div
              id='collapseThree'
              className='accordion-collapse collapse'
              aria-labelledby='headingThree'
              data-bs-parent='#accordionExample'
            >
              <div
                className='accordion-body'
                style={{
                  backgroundColor: props.mode === 'light' ? 'white' : '#183c59',
                  color: props.mode === 'light' ? 'black' : 'white',
                }}
              >
                <strong>
                  This word counter software works in any browser such as
                  Chrome, Firefox ,Internet Explorer, Safari, Opera.it suits to
                  count character in Facebook, blog,books, Excel document, PDF
                  document essays etc.
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default About
