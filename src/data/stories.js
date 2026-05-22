import story01 from "../images/story-01.jpg";
import story02 from "../images/story-02.jpg";
import story03 from "../images/story-03.jpg";
import story04 from "../images/story-04.jpg";
import story05 from "../images/story-05.jpg";
import story06 from "../images/story-06.jpg";
import story07 from "../images/story-07.jpg";

const localImagesByName = {
  "story-01.jpg": story01,
  "story-02.jpg": story02,
  "story-03.jpg": story03,
  "story-04.jpg": story04,
  "story-05.jpg": story05,
  "story-06.jpg": story06,
  "story-07.jpg": story07,
};

const storySeed = [
  {
    title: "小学生散步",
    localFile: "story-05.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
    text: "小学生第一次在黑大一起散步，忘了牵没牵小手手",
  },
  {
    title: "送机",
    localFile: "story-01.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    text: "梦想的行囊我背井离乡",
  },
  {
    title: "大石头我爬爬爬",
    localFile: "story-04.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    text: "不知名公园的大石头，撅起来就是爬",
  },
  {
    title: "绳网登顶",
    localFile: "story-03.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80",
    text: "依旧技术流",
  },
  {
    title: "我和我的面瘫小宝宝",
    localFile: "story-07.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    text: "王小玥嘴都张累了，我依旧面瘫",
  },
  {
    title: "温泉合照",
    localFile: "story-06.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1200&q=80",
    text: "哥帅吗？",
  },
  {
    title: "啊？",
    localFile: "story-02.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1200&q=80",
    text: "干啥呢",
  },
];

const sharedStoryImage = localImagesByName["story-01.jpg"];

export const stories = storySeed.map((story) => {
  const localByName = story.localFile ? localImagesByName[story.localFile] : undefined;

  return {
    title: story.title,
    image: localByName || sharedStoryImage || story.fallbackImage,
    text: story.text,
  };
});
