import ProjectCard from "@/components/project_card";
const MainPage = () => {
  return (
    <div className="flex flex-col space-y-20">
      <ProjectCard
        Title={"My Uncle Roger"}
        Description={
          "My uncle Roger was a charismatic and mysterious man. His life was full of adventure and exploration, always bringing us endless surprises. He was an artist who loved music, and the guitar in his hand could always play exciting melodies. He is also an independent traveler who has left his footprints all over the world. However, beneath his energetic exterior lies an affectionate heart."
        }
        Image={"/images/Myuncleroger.png"}
        Author={"Jason,Martin"}
        Staking={"100/200"}
        Proposals={"12"}
        Process={"1/4"}
      ></ProjectCard>
      <ProjectCard
        Title={"To The Moon"}
        Description={
          "This is a story about brave pursuit of dreams and endless exploration.  His determination and perseverance inspired respect and encouragement from those around him. His friends, and even the entire town, began to support and help him realize his dream. The story not only showcases Al's adventurous spirit and perseverance, but also depicts a community of unity, camaraderie and encouragement of dreams."
        }
        Image={"/images/Tothemoon.png"}
        Author={"Alex,John"}
        Staking={"114/200"}
        Proposals={"24"}
        Process={"2/4"}
      ></ProjectCard>
    </div>
  );
};

export default MainPage;
