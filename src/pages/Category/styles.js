import { styled } from "@material-ui/styles";
import { Grid, Paper as CorePaper } from "@material-ui/core";
import { Link } from "react-router-dom";

export const ContentButton = styled(Grid)(({ theme }) => ({
  textAlign: "right",
  padding: theme.spacing(1)
}));

export const LabelButton = styled("span")(({ theme }) => ({
  paddingRight: theme.spacing(1)
}));

export const Paper = styled(CorePaper)(({ theme }) => ({
  padding: `${theme.spacing(3)}px ${theme.spacing(2)}px`
}));

export const ContentIcon = styled("div")({
  textAlign: "right",
  width: "100%"
});

export const LinkIcon = styled(Link)(({ theme }) => ({
  padding: theme.spacing(1),
  color: "black"
}));
