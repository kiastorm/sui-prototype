import { Heading, text } from ".";
import { Container, InlineFlex } from "../layout";

export default {
  title: "Typography/Heading",
  decorators: [(Story: Function) => <Container>{Story()}</Container>],
};

export const HeadingComponent = () => (
  <InlineFlex direction="column" gap={4}>
    <Heading as="h1" size="3">
      I'm rendering a h1 with heading size 3
    </Heading>
    <Heading as="h3" size="2">
      I'm rendering a h3 with heading size 1
    </Heading>
    <Heading as="h6" size="6">
      I'm rendering a h6 with heading size 6
    </Heading>
  </InlineFlex>
);

export const TextStyleVariants = () => (
  <InlineFlex direction="column" gap={4}>
    <h3 className={text({ variant: "heading-1" })}>heading-1 (h1)</h3>
    <p className={text({ variant: "heading-2" })}>heading-2 (h2)</p>
    <h3 className={text({ variant: "heading-3" })}>heading-3 (h3)</h3>
    <h4 className={text({ variant: "heading-4" })}>heading-4 (h4)</h4>
    <h5 className={text({ variant: "heading-5" })}>heading-5 (h5)</h5>
    <h6 className={text({ variant: "heading-6" })}>heading-6 (h6)</h6>
  </InlineFlex>
);
