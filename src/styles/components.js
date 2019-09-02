import { styled } from "@material-ui/core/styles";
import { Button as CoreButton } from "@material-ui/core";
import { Link } from "react-router-dom";

export const Button = styled(CoreButton)(({ theme }) => ({
  fontWeight: "400",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  textAlign: "justify",
  color: theme.palette.primary.light,
  border: "1px solid",
  borderColor: theme.palette.primary.light
}));

export const LinkButton = styled(Link)(({ theme }) => ({
  fontWeight: "400",
  padding: `${theme.spacing(0.5)}px ${theme.spacing(2)}px`,
  textAlign: "justify",
  color: theme.palette.primary.light,
  border: "1px solid",
  borderColor: theme.palette.primary.light,
  borderRadius: "5px",
  textTransform: "uppercase",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center"
}));
