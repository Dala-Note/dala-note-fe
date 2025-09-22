import Tesseract from "tesseract.js";
import Header from "../components/header";
import { useState } from "react";

const OCRScan = () => {
  const [image, setImage] = useState(null)
    const [text, setText] = useState("")
    const [loading, setLoading] = useState(false)

        const handleImageChange = (e)=>{
        const file = e.target.files[0]

        // if file exist
        if(file){
            setImage(URL.createObjectURL(file))
        }
    }
 // function to extract the text using tesaract.js
    const extractText = ()=>{
        if(!image) return
        setLoading(true)
        setText("")
        Tesseract.recognize(image, 'eng',{
            logger: (m)=> console.log(m)
            
        })

        .then(({data:{text}})=>{
            setText(text);
            setLoading(false)
        })
    }
   

  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <div className="p-6">
      <h1 className="text-xl font-bold mb-2">Image to Text Extractor</h1>

      <input type="file" accept="image/*" onChange={handleImageChange} />

      {image && (
        <div className="my-4">
          <img
            src={image}
            alt="Preview"
            className="max-w-sm rounded border"
          />
          
        </div>
      )}

      <button
        onClick={extractText}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Extracting..." : "Extract "}
      </button>

      {text && (
        <div className="mt-4">
          <h2 className="font-semibold">Extracted Text:</h2>


<textarea
            value={text}
            onChange={e => setText(e.target.value)}
            rows={10}
            style={{
              width: '100%',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid ',
              fontSize: '1rem',
              background: '#fafbfc',
              color: '#222',
              resize: 'vertical',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}
            />
            <button
            className="mt-2 bg-green-600 text-white px-4 py-2 rounded"
            onClick={() => alert('Sent successful')}
            type="button"
          >
            Send
          </button>
          
        </div>
      )}
        
      </div>
    </div>
  );
};

export default OCRScan;