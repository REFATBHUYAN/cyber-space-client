import React from "react";

import Container from "../../components/Container";
import LatestUpdate from "./LatestUpdate";
import PopularPost from "./PopularPost";
import RecentComments from "./RecentComments";
import EditorsChoice from "./EditorsChoice";
import Banner2 from "./Banner2";
import BusinessSection from "./BusinessSection";
import EssentialSoft from "./EssentialSoft";
import Benifits from "./Benifits";
import LatestUpdate2 from "./LatestUpdate2";
import EditorChoice2 from "./EditorChoice2";
import BusinessSection2 from "./BusinessSection2";
import Benifits2 from "./Benifits2";

const Home = () => {
  return (
    <>
      <div>
        <>
          <div className="bg-no-repeat bg-cover mx-auto" style={{
        backgroundImage: "url(https://i.ibb.co/HYxjFfs/hero-bg.png)",
      }}>
            <Banner2></Banner2>
          </div>
          <div className="w-full bg-slate-50 dark:bg-gray-900 py-8">
            <Container>
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="md:w-2/3">
                  {/* <LatestUpdate></LatestUpdate> */}
                  <LatestUpdate2></LatestUpdate2>
                </div>
                <div className="md:w-1/3 flex flex-col gap-5">
                  <PopularPost></PopularPost>
                  {/* <NeedWebsite></NeedWebsite>
                  <AllCatagory></AllCatagory>
                  <EssentialPost></EssentialPost> */}
                  <RecentComments></RecentComments>
                </div>
              </div>
            </Container>
          </div>
          {/* <EditorsChoice></EditorsChoice> */}
          <EditorChoice2></EditorChoice2>
          {/* <BusinessSection></BusinessSection> */}
          <BusinessSection2></BusinessSection2>
          <EssentialSoft></EssentialSoft>
          {/* <Benifits></Benifits> */}
          <Benifits2></Benifits2>
          {/* <TreadingNow></TreadingNow>
          <HelpUs></HelpUs>
          <Features></Features> */}
        </>
      </div>
    </>
  );
};

export default Home;
