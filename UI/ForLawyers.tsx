import ForlawCards from "@/components/ForlawCards";

export default function ForLawyers() {
  return (
    <div className="bg-white py-8">
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="text-center mx-auto space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold">For Lawyers</h3>
          <p className="text-xl md:text-2xl">
            Case Management System built for India
          </p>
          <p className="text-[#1e3a8a] font-bold text-lg">
            Add-Assign-Track-Record
          </p>
        </div>
        <div className="flex justify-evenly items-center flex-wrap my-6">
          <div className="grid md:grid-cols-1 grid-cols-2 gap-6">
            <ForlawCards name={"DOCS"} img={"/forlawyers/ic1Doc.png"} />
            <ForlawCards name={"TimeSheets"} img={"/forlawyers/ic2Doc.png"} />
            <ForlawCards name={"Dashboard"} img={"/forlawyers/ic3Doc.png"} />
            <ForlawCards name={"Lists"} img={"/forlawyers/ic4Doc.png"} />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src="/forlawyers dashboard.png"
              className="w-full h-auto rounded-lg shadow-lg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
