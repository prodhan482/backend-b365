import { IMAGE_URL } from "../../Utils/Api";
function TableImage({ img }) {
    return (
        <img className="h-[56px] w-[66px]" src={`${IMAGE_URL}${img}`} alt="" />
    );
}

export default TableImage;