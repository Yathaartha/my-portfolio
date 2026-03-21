import Layout from "./Layout";
import {
  HeaderDiamond,
  HobbiesGrid,
  HobbiesPanel,
  HobbiesWrapper,
  HobbyCard,
  HobbyDescription,
  HobbyIconWrap,
  HobbyInfo,
  HobbyLevel,
  HobbyName,
  IntroText,
  PanelDivider,
  PanelHeader,
  QuoteAuthor,
  QuoteBlock,
  QuoteSection,
} from "./Hobbies.css";

interface Hobby {
  icon: string;
  name: string;
  rarity: 3 | 4 | 5;
  stars: string;
  description: string;
}

const HOBBIES: Hobby[] = [
  {
    icon: "🎮",
    name: "Gaming",
    rarity: 5,
    stars: "★★★★★",
    description:
      "From open-world adventures to competitive multiplayer — gaming is my main way to unwind. Genshin Impact, as you might have guessed, holds a special place.",
  },
  {
    icon: "💻",
    name: "Side Projects",
    rarity: 5,
    stars: "★★★★★",
    description:
      "Building things outside of work keeps me sharp. From parking apps to streaming clones, I'm always cooking up something new on GitHub.",
  },
  {
    icon: "🎵",
    name: "Music",
    rarity: 4,
    stars: "★★★★",
    description:
      "Whether it's lo-fi beats while coding, game OSTs, or discovering new artists — music is the background thread that keeps everything running smoothly.",
  },
  {
    icon: "📺",
    name: "Anime & Manga",
    rarity: 4,
    stars: "★★★★",
    description:
      "Great stories, incredible art, and characters that stick with you. Always on the lookout for the next series to binge.",
  },
  {
    icon: "🏋️",
    name: "Fitness",
    rarity: 4,
    stars: "★★★★",
    description:
      "Balancing screen time with physical activity. Hitting the gym is a reset button for both body and mind.",
  },
  {
    icon: "🍳",
    name: "Cooking",
    rarity: 3,
    stars: "★★★",
    description:
      "Experimenting with recipes from different cuisines. It's like debugging — follow the steps, adjust, and taste-test until it's just right.",
  },
  {
    icon: "✈️",
    name: "Exploring",
    rarity: 4,
    stars: "★★★★",
    description:
      "From Nepal to the UK to the US — I've always been drawn to new places, cultures, and the perspective shifts that come with them.",
  },
  {
    icon: "📖",
    name: "Learning",
    rarity: 3,
    stars: "★★★",
    description:
      "Tech blogs, documentation deep-dives, and the occasional rabbit hole on YouTube. There's always something new to pick up.",
  },
];

function Hobbies() {
  return (
    <Layout pageName="Hobbies">
      <HobbiesWrapper>
        <HobbiesPanel>
          <PanelHeader>
            <HeaderDiamond>◆</HeaderDiamond>
            Passive Talents
            <HeaderDiamond>◆</HeaderDiamond>
          </PanelHeader>
          <PanelDivider />

          <IntroText>
            Not all abilities are unlocked through work. These are the passive
            talents gained from life outside the terminal.
          </IntroText>

          <HobbiesGrid>
            {HOBBIES.map((hobby) => (
              <HobbyCard key={hobby.name} $rarity={hobby.rarity}>
                <HobbyIconWrap $rarity={hobby.rarity}>
                  {hobby.icon}
                </HobbyIconWrap>
                <HobbyInfo>
                  <HobbyName>{hobby.name}</HobbyName>
                  <HobbyLevel $rarity={hobby.rarity}>{hobby.stars}</HobbyLevel>
                  <HobbyDescription>{hobby.description}</HobbyDescription>
                </HobbyInfo>
              </HobbyCard>
            ))}
          </HobbiesGrid>

          <PanelDivider />

          <QuoteSection>
            <QuoteBlock>
              "We don't stop playing because we grow old; we grow old because we
              stop playing."
              <QuoteAuthor>— George Bernard Shaw</QuoteAuthor>
            </QuoteBlock>
          </QuoteSection>
        </HobbiesPanel>
      </HobbiesWrapper>
    </Layout>
  );
}

export default Hobbies;
