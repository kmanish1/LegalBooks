
// update the links
const data = [
  [
    { text: "About Us", link: "#" },
    { text: "Reviews", link: "#" },
    { text: "Pricing", link: "#" },
  ],
  [
    { text: "Help Docs", link: "#" },
    { text: "Contact Us", link: "#" },
  ],
  [
    { text: "Document Generation", link: "#" },
    { text: "Free Legal Consultation", link: "#" },
    { text: "Lawyers Directory", link: "#" },
    { text: "Legal Forum", link: "#" },
  ],
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h4 className="font-bold mb-4">LegalBooks</h4>
            <ul>
              {data[0].map((item, idx) => (
                <li>
                  <a href={item.link} key={idx}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul>
              {data[1].map((item, idx) => (
                <li>
                  <a href={item.link} key={idx}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Features</h4>
            <ul>
              {data[2].map((item, idx) => (
                <li>
                  <a href={item.link} key={idx}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Coming Soon</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Case Management System
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Legal AI Research
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contect Us</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  +91 923415xxxx
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  legalBooks@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className="mt-8 text-center">
          &copy; 2024 LegalBooks. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
