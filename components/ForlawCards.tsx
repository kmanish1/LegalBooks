const ForlawCards = ({ img, name }: { img: string; name: string }) => {
  return (
    <div className="group hover:bg-[#1e3a8a] shadow-md p-4 rounded-md flex flex-col items-center transition duration-300">
      <div className="mb-4">
        <img src={img} alt={name} width={30} className="" />
      </div>
      <div className="text-lg font-medium text-black group-hover:text-white text-center cursor-pointer">
        {name}
      </div>
    </div>
  );
};

export default ForlawCards;
