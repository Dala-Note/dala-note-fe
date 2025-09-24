import Tiptap from './components/tiptapeditor';
import './components/styles/index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Dala Note Editor - List Feature Test
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Rich Text Editor with Fixed List Functionality
          </h2>
          
          <div className="border rounded-lg p-4">
            <Tiptap />
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Test Instructions:</h3>
            <ul className="text-blue-800 space-y-1 list-disc list-inside">
              <li>Click the bullet list icon to create unordered lists</li>
              <li>Click the numbered list icon to create ordered lists</li>
              <li>Press Enter to create new list items</li>
              <li>Press Tab to indent list items (if supported)</li>
              <li>Press Shift+Tab to outdent list items (if supported)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;