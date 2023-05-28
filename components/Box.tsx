import Image from "next/image";

const Box = () => {
  return (
    <div className="flex flex-col justify-center items-center h-36 w-36 rounded-3xl bg-card">
      <Image
        className="bg-card"
        src="/images/icons8-nodejs-240.png"
        alt="me"
        width="64"
        height="64"
      />
      <p className="bg-card text-2xl">Node.js</p>
    </div>
  );
};
export default Box;
