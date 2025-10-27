import { InfoPageTemplate } from "../components/InfoPageTemplate";
import { getImagePath } from "../utils/imageDiscovery";

export default function AboutRoute() {
  const image = getImagePath("profile");
  
  return (
    <InfoPageTemplate
      image={image}
      title="Hi, i'm George"
      subtitle="aka SnackOverflowGeorge"
      sections={[
        {
          heading: "About Me",
          content: "I'm a software engineer & creator."
        },
        {
          heading: "Moreso,",
          content: "I don't know what to write here but follow my socials for more stuff LOL"
        }
      ]}
    />
  );
}

