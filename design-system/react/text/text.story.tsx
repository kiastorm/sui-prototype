import {
  Deleted,
  Em,
  // Heading,
  Ins,
  Link,
  ListItem,
  Mark,
  Paragraph,
  Quote,
  Small,
  Strong,
  Text,
} from ".";
import { Container, InlineFlex } from "../layout";

export default {
  title: "Typography/Text",
  decorators: [(Story: Function) => <Container>{Story()}</Container>],
};

export const TextElements = () => (
  <InlineFlex gap={4}>
    <Text>Text (span)</Text>
    <Ins>Ins</Ins>
    <Em>Em</Em>
    <Strong>Strong</Strong>
    <Quote>Quote</Quote>
    <Paragraph>Paragraph</Paragraph>
    <ListItem>ListItem</ListItem>
    <Small>Small</Small>
    <Deleted>Deleted</Deleted>
    <Mark>Mark</Mark>
    <Link href="javascript:;">Link</Link>
  </InlineFlex>
);
