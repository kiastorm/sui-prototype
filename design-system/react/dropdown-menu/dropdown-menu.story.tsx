import { Button } from "../button";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { Container } from "../layout";
import { DropdownMenu } from "./dropdown-menu";

export default {
  title: "Design System/Overlay/DropdownMenu",
  decorators: [(Story: Function) => <Container>{Story()}</Container>],
};
export const BasicUsage = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Hello</DropdownMenuItem>
        <DropdownMenuItem>Goodbye</DropdownMenuItem>
        <DropdownMenuItem>Au revoir!</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
