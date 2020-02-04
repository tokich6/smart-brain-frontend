import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onImageSubmit }) => {
    return (
        <div>
            <p className='f3 pa3'>
                {'Upload an image and this smart app can detect a face. Give it a try!'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input type='text' className='f4 pa2 w-70 center' 
                    placeholder='paste URL here' onChange={onInputChange}/>
                    <button className='center w-30 grow f5 link ph3 pv2 dib white bg-dark-blue' onClick={onImageSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;