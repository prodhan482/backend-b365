import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles for the editor

function TextEditorDescriptionField({ value, onChange, required }) {
  return (
    <div className="mb-4">
      <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
        Description
      </label>
      
      <ReactQuill
        id="description"
        value={value}
        onChange={onChange}
        placeholder="Start typing here...."
        required={required}
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean'],
          ],
        }}
        formats={[
          'header',
          'bold', 'italic', 'underline', 'strike', 'blockquote',
          'list', 'bullet',
          'link', 'image',
        ]}
      />
     
    </div>
  );
}

export default TextEditorDescriptionField;
