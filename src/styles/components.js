import { styled } from "@material-ui/core/styles";
import { Button as CoreButton } from "@material-ui/core";

export const Button = styled(CoreButton)(({ theme }) => ({
  fontWeight: "400",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  textAlign: "justify",
  color: theme.palette.primary.light,
  border: "1px solid",
  borderColor: theme.palette.primary.light
}));
