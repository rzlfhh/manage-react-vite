import React from "react";
import Button from "./Button";

function About() {
  const feature = [
    {
      id: "01",
      head: "Track company-wide progress",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe reiciendis nemo officiis dignissimos consectetur blanditiis perspiciatis, beatae iusto. Perferendis, eligendi.",
    },
    {
      id: "02",
      head: "Advanced built-in reports",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe reiciendis nemo officiis dignissimos consectetur blanditiis perspiciatis, beatae iusto. Perferendis, eligendi.",
    },
    {
      id: "03",
      head: "Everything you need in one place",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe reiciendis nemo officiis dignissimos consectetur blanditiis perspiciatis, beatae iusto. Perferendis, eligendi.",
    },
  ];
  return (
    <section className="border">
      <div className="text-center">
        <h2 className="text-[1.65rem] font-bold text-dark-blue mb-4 w-[60%] mx-auto">
          What's different about Manage?
        </h2>
        <p className="text-sm text-dark-gray-blue leading-relaxed mb-12 px-10">
          Manage provides all all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>

      <div>
        <ul className="flex flex-col gap-10">
          {feature.map((item) => (
            <li key={item.id}>
              <div className="flex items-center ms-4">
                <Button size="sm" type="label" position="start">
                  {item.id}
                </Button>
                <div className="bg-vp-red py-[6px] ps-7 -ms-4 -z-10 w-full">
                  <h3 className="text-sm text-dark-blue font-bold leading-relaxed">
                    {item.head}
                  </h3>
                </div>
              </div>

              <div className="px-4">
                <p className="text-sm text-dark-gray-blue leading-relaxed mt-4">
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
          <li></li>
        </ul>
      </div>
    </section>
  );
}

export default About;
