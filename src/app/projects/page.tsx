import React from "react";
import EmpyreanUISection from "@broot/projects/EmpyreanUISection";
import EmpyreanUI_NPM_Section from "@broot/projects/EmpyreanUI_NPM_Section";

function Page() {
  return (
    <div className="container mx-auto flex flex-col gap-6 p-4 md:p-8 lg:justify-center items-center h-dvh mt-20 lg:mt-0">
      <section className="w-full">
        <EmpyreanUISection />
      </section>
      <section className="w-full">
        <EmpyreanUI_NPM_Section />
      </section>
    </div>
  );
}

export default Page;
