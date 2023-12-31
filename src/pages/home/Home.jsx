import React from "react";

import Container from "../../components/Container";

import TrandingNow from "./TrandingNow";
import RecentComments from "./RecentComments";

import Banner2 from "./Banner2";

import EssentialSoft from "./EssentialSoft";
import Benifits from "./Benifits";
import LatestUpdate2 from "./LatestUpdate2";
import EditorChoice2 from "./EditorChoice2";
import BusinessSection2 from "./BusinessSection2";
import EditorChoice from "./EditorChoice";

const Home = () => {
  return (
    <>
      <div className="max-w-full mx-auto">
        <>
          <div
            className="bg-no-repeat bg-cover mx-auto w-full"
            style={{
              backgroundImage: "url(https://i.ibb.co/HYxjFfs/hero-bg.png)",
            }}
          >
            <Container>
              <Banner2></Banner2>
            </Container>
          </div>
          <div className="w-full bg-slate-50 dark:bg-slate-900 py-8">
            <Container>
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="md:w-2/3">
                  <LatestUpdate2></LatestUpdate2>
                </div>
                <div className="md:w-1/3 flex flex-col gap-5">
                  <TrandingNow></TrandingNow>

                  <RecentComments></RecentComments>
                </div>
              </div>
            </Container>
          </div>
          <EditorChoice></EditorChoice>
          {/* <EditorChoice2></EditorChoice2> */}

          <BusinessSection2></BusinessSection2>
          <div className="bg-slate-100 dark:bg-slate-950">
            <EssentialSoft></EssentialSoft>
          </div>
          <Benifits></Benifits>
        </>
      </div>
    </>
  );
};

export default Home;
