const Card = () => {
  return (
    <div className="flex flex-col items-center  border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 bg-card h-96">
      <img
        className="m-12 object-cover w-20 rounded-t-lg h-96 md:h-auto md:w-[30rem] md:rounded-none md:rounded-lg"
        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        alt=""
      />
      <div className="flex flex-col justify-between p-4 px-10 leading-normal items-center bg-card">
        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 text-accent text-center bg-card">
          Project 1
        </h5>
        <p className="mb-3 text-xl dark:text-gray-400 bg-card">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className="flex gap-4 bg-card">
          <div className="badge badge-lg badge-accent">React.js</div>
          <div className="badge badge-lg badge-accent">React.js</div>
          <div className="badge badge-lg badge-accent">React.js</div>
        </div>
      </div>
    </div>
  );
};
export default Card;
