import EventSG1 from "./EventSG1";
import EventSG2 from "./EventSG2";
import EventSG3 from "./EventSG3";

function EventS() {
  return (
    <div className="m-2 flex justify-center">
      <div className="w-4/5 bg-gray-200 p-5 flex">
        <EventSG1 />
        <EventSG2 />
        <EventSG3 />
      </div>
    </div>
  );
}

export default EventS;
