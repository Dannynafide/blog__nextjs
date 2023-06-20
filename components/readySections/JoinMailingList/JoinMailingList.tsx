import notify from 'components/notification/notification';

export default function JoinMailingList() {
  return (
    <div className="my-10">
      <p className="mb-2 text-lg font-bold">Join our mailing list</p>
      <div className="flex flex-wrap gap-5  ">
        <input
          className="focus:ring-2 focus:ring-teal-500 focus:outline-none appearance-none w-80 text-sm bg-transparent rounded ring-1 ring-white p-2 pl-2 "
          type="text"
          aria-label="Your email"
          placeholder="Your email..."></input>
        <button
          onClick={notify}
          className="rounded p-2 px-5 bg-teal-500 text-white font-bold">
          JOIN
        </button>
      </div>
    </div>
  );
}
