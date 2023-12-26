function ImageUploader({ imagePreview, handleImageChange }){
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2 cursor-pointer">
        {imagePreview ? (
          <img src={imagePreview} alt="Selected" className="w-full h-40 mb-2" />
        ) : (
          <div className="border-dashed border-2 border-gray-400 p-6 text-center">
            <span className="text-gray-500">Click to upload image</span>
          </div>
        )}
        <input
          onChange={handleImageChange}
          className="hidden"
          id="image"
          type="file"
          accept="image/*"
        />
      </label>
    </div>
  );
};

export default ImageUploader;
