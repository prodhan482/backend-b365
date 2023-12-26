import AvaterImg from "../assets/avater.jpg"
function Avater() {
  return (<div>
    <div className="w-10 h-10">
      <img
        src={AvaterImg}

        className="object-cover w-full h-full rounded-full"
      />
    </div>
  </div>);
}

export default Avater;
