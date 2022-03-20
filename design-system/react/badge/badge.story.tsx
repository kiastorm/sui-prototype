import { Container } from "../layout";
import { Badge } from "./badge";

export default {
  title: "Data Display/Badge",
  decorators: [(Story: Function) => <Container>{Story()}</Container>],
};

export const Variants = () => {
  return <Badge variant="indigo">Indigo</Badge>;
};
