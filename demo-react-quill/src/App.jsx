import { useState } from 'react';
import './App.css';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";

function App() {
  const [value, setValue] = useState('');

  var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
  ];

  const module = {
    toolbar: toolbarOptions,
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {/* Column for editor */}
      <div style={{ flex: 1 }}>
        <ReactQuill 
          modules={module} 
          theme='snow' 
          value={value} 
          onChange={setValue} 
          style={{ height: '400px' }} 
        />
      </div>
      
      {/* Column for displaying result */}
      <div style={{ flex: 1, padding: '20px', border: '1px solid #ccc', height: '400px', overflowY: 'auto' }}>
        <h3>Preview</h3>
        <div dangerouslySetInnerHTML={{ __html: value }} />
      </div>
    </div>
  );
}

export default App;
