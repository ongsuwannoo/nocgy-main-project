import Box from "./Box";

const Stack = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <span className="my-8 font-bold text-5xl">
        TEC
        <span className="underline underline-offset-[1rem] decoration-[#FD014E]">
          H ST
        </span>
        ACK
      </span>
      <div className="grid grid-cols-7 gap-4">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
};
export default Stack;
