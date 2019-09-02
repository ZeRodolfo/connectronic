import { styled } from "@material-ui/styles";
import { Grid as CoreGrid, Typography as CoreTypography, TextField as CoreTextField } from '@material-ui/core';

export const Row = styled(('div'))(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    paddingTop: '.75rem',
    fontWeight: '400'
}));

export const Title = styled((CoreTypography))(({ theme }) => ({
    fontWeight: '400'
}));

export const CircleField = styled(('div'))(({ theme }) => ({
    display: 'inline-flex',
    borderRadius: '50%',
    background: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1)
}));

export const ContainerForm = styled('form')(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%'
}));

export const ContentField = styled((CoreGrid))(({ theme }) => ({
    padding: `0px ${theme.spacing(1)}px`
}));

export const TextField = styled((CoreTextField))(({ theme }) => ({
    width: '100%'
}));
