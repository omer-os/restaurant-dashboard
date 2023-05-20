import ServerLayoutWrapper from "@components/blocks/layout/ServerLayoutWrapper";
import ClinetLayoutWrapper from "@components/blocks/layout/ClinetLayoutWrapper";

export default {
  title: "Blocks/Layout",
  component: ServerLayoutWrapper,
};

export const ServerLayout = () => (
  <ClinetLayoutWrapper>
    <ServerLayoutWrapper>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolores
      earum, officiis dolorem amet iste voluptatum similique ut aliquam
      temporibus! Eius ipsa, ullam veritatis magni molestiae possimus laudantium
      esse ex.
    </ServerLayoutWrapper>
  </ClinetLayoutWrapper>
);
