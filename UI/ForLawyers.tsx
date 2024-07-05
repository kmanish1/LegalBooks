import ForlawCards from "@/components/ForlawCards";

export default function ForLawyers() {
  return (
    <div>
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
      <section className="text-center py-8 bg-white my-4">
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <h1 className="text-3xl font-bold mb-6">
            Manage Cases Efficiently & Boost Productivity
          </h1>
          <h3 className="text-xl mb-10">All in One Place</h3>
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6">
            <div className="md:w-1/2 text-left space-y-4">
              <p className="case-m-p">
                Assign Case to your Team, Plan Unique Team for every case,
                Centralize Case Monitoring, Record Audit Trail of every Case with
                individual dashboards
              </p>
              <div className="flex flex-wrap gap-4 mb-4">
                <button className="px-4 py-2 bg-gray-800 text-white rounded-md">
                  Create tasks
                </button>
                <button className="px-4 py-2 bg-gray-800 text-white rounded-md">
                  Generate Documents
                </button>
                <button className="px-4 py-2 bg-gray-800 text-white rounded-md">
                  Assign Cases
                </button>
                <button className="px-4 py-2 bg-gray-800 text-white rounded-md">
                  Maintain Case History
                </button>
              </div>
              <p className="case-m-p-bold">
                Automated Dashboards with actionable insights
              </p>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img
                src="/forlawyers dashboard.png"
                alt="Case Management Dashboard"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
