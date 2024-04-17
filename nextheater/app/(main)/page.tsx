import ProjectCard from "@/components/project_card";
const ProjectsPage = () => {
  return (
    <div className="flex flex-col space-y-20">
      <ProjectCard
        Title={"My Uncle Roger"}
        Description={
          "我的叔叔罗杰是一个极具魅力和神秘的人。他的生活充满了冒险和探索，总是带给我们无尽的惊奇。他曾是一位热爱音乐的艺术家，手中的吉他总能弹出令人动心的旋律。他也是一位独立的旅行家，曾在世界各地留下过他的足迹。然而，在他充满活力的外表下，却隐藏着一个深情的内心。他热爱大自然，喜欢独自在森林中漫步，尽情享受自然带来的宁静。然而，最让我难忘的，是他和我一同度过的那些岁月。我们一起在湖边垂钓，一起分享生活中的小确幸。他不仅是我的叔叔，更是我的朋友，我的导师。这个故事就是关于我和我的叔叔罗杰的故事，是关于音乐、旅行、友情和家庭的故事。"
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
          "这是一个关于勇敢追梦和无尽探索的故事。故事的主人公，小男孩阿尔，自小就对月亮充满了无尽的好奇和热爱。他每天晚上都会凝视着月亮，幻想着它那神秘的世界。阿尔的梦想是成为一名宇航员，他决定要亲自登上月球，探索那个他一直向往的世界。在他的旅程中，阿尔遇到了各种挑战和困难，但他从未放弃。他的决心和毅力激发了周围人的尊重和鼓励。他的朋友们，甚至整个小镇的居民，都开始支持并帮助他实现梦想。这个故事不仅展示了阿尔的冒险精神和坚韧不拔，也描绘了一个团结、友爱和鼓励梦想的社区。"
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

export default ProjectsPage;
