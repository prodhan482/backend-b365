import Cross from "../../../Components/Icons/Cross"
export default function ViewRequirement({ items, onClose }) {
  return (
    <div className="fixed  inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full ">
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative flex flex-col bg-white p-8 w-1/2">
          <h1 className="text-2xl font-bold mb-4">Slider Details</h1>
          <hr className="mb-4 border-1" />
          <div className="flex gap-2">
            <p className="font-semibold">Precedence: </p>
            <p>{items.precedence}</p>
          </div>
          <Cross className="cursor-pointer absolute top-4 right-4  h-5 w-5" onClick={onClose} />
        </div>
      </div>
    </div>
  );
}