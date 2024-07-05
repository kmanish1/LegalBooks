import React, { useState } from "react";

interface Section {
  id: string;
  label: string;
  subOptions: string[];
}

const Checkboxes: React.FC = () => {
  const [activeSections, setActiveSections] = useState<{ [key: string]: boolean }>({});

  const toggleSpecializations = (section: string) => {
    setActiveSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sections: Section[] = [
    {
      id: "adoption",
      label: "Adoption",
      subOptions: ["Adoption in Hindus", "Adoption in other religions"],
    },
    {
      id: "appeals",
      label: "Appeals",
      subOptions: ["Introduction to Appeals", "Supreme Court Appeals", "High Court Appeals"],
    },
    {
      id: "banking",
      label: "Banking & Insurance",
      subOptions: ["Insurance", "Securitization Act 2002"],
    },
    {
      id: "business",
      label: "Business & Commercial Law",
      subOptions: [
        "Contract",
        "Dishonor of Cheque",
        "Partnership",
        "Shares",
        "Foreign Exchange Management Act (FEMA)",
        "Carriage of Goods",
        "Sale of Goods",
      ],
    },
    {
      id: "constitution",
      label: "Constitution & Law Procedure",
      subOptions: [
        "Suits",
        "Suit Procedure",
        "Civil Procedure Code Relief",
        "Civil Procedure Code Jurisdiction",
        "Public Interest Litigation",
      ],
    },
    {
      id: "consumer",
      label: "Consumer Rights",
      subOptions: [
        "Food Adulteration",
        "Monopolistic and Restrictive Trade Practice (MRTP)",
        "Consumer Protection Act",
        "Medical Negligence",
        "Standard Weight and Measures",
      ],
    },
    {
      id: "corporate",
      label: "Corporate Law",
      subOptions: [
        "Arbitration",
        "Society Act",
        "Incorporation of a Private Company",
        "Winding up of Company",
        "Litigation against Company",
        "Trust and Society",
      ],
    },
    {
      id: "criminal",
      label: "Criminal Law",
      subOptions: [
        "Anticipatory Bail",
        "Arrest and Warrants",
        "Bail and Anticipatory Bail",
        "Summons",
        "FIR",
        "Investigation",
        "Adultery",
        "Adulteration of Drugs",
        "Adulteration of food or drink intended for sale",
        "Causing death by negligence",
        "Cheating and dishonestly inducing delivery of property",
        "Concealment of former marriage",
        "Criminal Misappropriation of property",
        "Defamation",
        "Defense of Property",
        "Dowry death",
        "Extortion",
        "Forgery",
        "Husband or relative subjecting the woman to cruelty",
        "Kidnapping",
        "Marrying again during the lifetime of husband or wife",
        "Nuisance",
        "Obscene Acts and Songs",
        "Rape",
        "Rash driving or riding on a public way",
        "Right of Private Defense",
        "Right of Private Defense against deadly assault when there is risk of harm to innocent person",
        "Right of Private Defense against the act of a person of unsound mind",
        "Right of Private Defense of the body and of property",
        "Sale etc. of obscene books",
        "Selling goods marked with counterfeit Property Mark",
        "Theft",
        "When the right of private defense of the body extends to causing death",
      ],
    },
    {
      id: "divorce",
      label: "Divorce Laws in India",
      subOptions: [
        "India Divorce",
        "Divorce Laws in India",
        "Pre-Divorce Preparation",
        "Filing for Divorce in India",
        "Divorce Procedure in India",
        "Mutual Divorce in India",
        "Grounds for Divorce in India",
        "Divorce Lawyers in India",
        "Divorce rate in India",
        "Divorce rate in Urban India",
        "Alimony in India",
        "NRI Divorce",
        "Child Support",
        "Dealing with Divorce",
        "Advice on Divorce",
        "Divorce Depression",
        "Adultery Divorce",
      ],
    },
    {
      id: "environmental",
      label: "Environmental Law",
      subOptions: ["Air Pollution", "Wild Life Protection", "Environment Protection"],
    },
    {
      id: "government",
      label: "Government Policies",
      subOptions: ["Foreign Trade Policy 2005", "Dual Citizenship"],
    },
    {
      id: "inheritance",
      label: "Inheritance",
      subOptions: [
        "Hindu Succession Act",
        "Inheritance and I.S.A",
        "Inheritance in Muslims",
        "Wills in Muslims",
        "Wills under Indian Succession Act",
        "Probate of Wills",
      ],
    },
    {
      id: "intellectual",
      label: "Intellectual Property",
      subOptions: [
        "Intellectual Property Rights",
        "Copyright Laws in India",
        "Patent Laws in India",
        "Trademark Laws in India",
        "Information Technology Act",
        "Service Marks",
      ],
    },
    {
      id: "labor",
      label: "Labor Law",
      subOptions: [
        "Child Labor Laws",
        "Employees State Insurance Act",
        "Workmen's Compensation",
        "Provident Fund",
        "Maternity Benefits",
        "Payment of Bonus",
        "Sexual harassment at workplace",
        "Trade Unions",
      ],
    },
    {
      id: "marriage",
      label: "Marriage Law",
      subOptions: [
        "Divorce under Hindu Marriage Act",
        "Divorce in Muslims",
        "Dowry",
        "Family Courts",
        "Muslim Women's right to maintenance",
        "Hindu Marriage Act",
        "Maintenance U/S 125",
        "Maintenance in Hindus",
        "Registered Marriage",
        "Marriage in Muslims",
      ],
    },
    {
      id: "personal",
      label: "Personal Law",
      subOptions: ["Gifts under Hindu Law"],
    },
    {
      id: "property",
      label: "Property & Real Estate",
      subOptions: ["Sale of Property", "Lease", "Mortgage", "Hire Purchase"],
    },
    {
      id: "tax",
      label: "Tax Laws",
      subOptions: [
        "Central Excise",
        "Custom Duty",
        "Income Tax",
        "Laws of anti dumping in India",
        "Service Tax",
        "GST",
      ],
    },
  ];

{/* <div className="mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((section) => (
          <div key={section.id}>
            <label className="font-bold">
              <input
                type="checkbox"
                onClick={() => toggleSpecializations(section.id)}
              />{" "}
              {section.label}
            </label>

              <div id={section.id} className="ml-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.subOptions.map((subOption, index) => (
                  <label key={index}>
                    <input type="checkbox" /> {subOption}
                  </label>
                ))}
              </div>

          </div>
        ))}
      </div> */}

  return (
    <div className="popup-content text-sm">
        <div className="mb-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sections.map((section)=>(
                <div className="text-left">
                    <label className="font-bold">
                        <input className="mr-2 rounded-full cursor-pointer bg-red-100 border-red-300 text-red-600 focus:ring-red-200" type="checkbox"></input>
                        {section.label}
                    </label>
                    <div className="grid grid-cols-1 gap-2 mt-3">
                        {section.subOptions.map((subOption,index)=>(
                            <label key={index} className="ml-4">
                                <input type="checkbox" className="mr-2 rounded-full cursor-pointer bg-red-100 border-red-300 text-red-600 focus:ring-red-200"></input>
                                {subOption}
                            </label>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Checkboxes;
