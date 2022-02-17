import { styled } from "../react-stitches";

export const Dl = styled("dl", {
  m: 0,
});

export const Dd = styled("dd", {
  fontSize: "$body-1",
  lineHeight: "$body-short-1",
  margin: 0,
  ml: "$4",
});

export const Dt = styled("dt", {
  fontSize: "$heading-1",
  lineHeight: "$heading-1",
  color: "$neutral800",
  fontWeight: "bold",
  mb: "$2",
  "&::before": {
    content: "''",
    mr: "$3",
    display: "inline-block",
    width: "$1",
    height: "1em",
    bgc: "$neutral300",
  },
});
