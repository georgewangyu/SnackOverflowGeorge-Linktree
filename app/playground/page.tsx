import { InfoPageTemplate } from "../components/InfoPageTemplate";
import { getImagePath } from "../utils/imageDiscovery";

export default function PlaygroundRoute() {
  const image = getImagePath("feature", "png");
  
  return (
    <InfoPageTemplate
      image={image}
      title="My Playground"
      subtitle="where I experiment & learn"
      sections={[
        {
          heading: "What This Is",
          content: "This is my space for experiments, prototypes, and learning projects. You'll find things that didn't quite fit in my main work, but are still interesting enough to share."
        },
        {
          heading: "Currently Experimenting With,",
          content: "Building creative tools, exploring new frameworks, and experimenting with different design patterns. Check back often for new additions!"
        }
      ]}
    />
  );
}

