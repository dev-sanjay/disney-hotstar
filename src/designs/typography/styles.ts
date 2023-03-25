import styled from 'styled-components';

type Title =
  | 'Montserrat/Bold/44px'
  | 'Montserrat/Bold/32px'
  | 'Montserrat/Bold/24px'
  | 'Montserrat/Bold/20px'
  | 'Montserrat/Bold/16px';

type Paragraph =
  | 'Montserrat/Normal/20px'
  | 'Montserrat/Normal/16px'
  | 'Montserrat/Normal/14px'
  | 'Montserrat/Normal/12px';

export type Typographies = Title | Paragraph;

type Styles = {
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing: string | number;
  margin: string;
};

export const typographies: Record<Typographies, Styles> = {
  'Montserrat/Bold/44px': {
    fontSize: '44px',
    fontWeight: 700,
    lineHeight: '52px',
    letterSpacing: 0,
    margin: '0',
  },
  'Montserrat/Bold/32px': {
    fontSize: '32px',
    fontWeight: 700,
    lineHeight: '38px',
    letterSpacing: 0,
    margin: '0',
  },
  'Montserrat/Bold/24px': {
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '28px',
    letterSpacing: 0,
    margin: '0',
  },
  'Montserrat/Bold/20px': {
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: '23px',
    letterSpacing: 0,
    margin: '0',
  },
  'Montserrat/Bold/16px': {
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '19px',
    letterSpacing: '0.14em',
    margin: '0',
  },
  'Montserrat/Normal/20px': {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '30px',
    letterSpacing: 0,
    margin: '0',
  },
  'Montserrat/Normal/16px': {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: 0,
    margin: '0',
  },
  'Montserrat/Normal/14px': {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '21px',
    letterSpacing: 0,
    margin: '0',
  },
  'Montserrat/Normal/12px': {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '14px',
    letterSpacing: 0,
    margin: '0',
  },
};

const StyledTypography = styled.p<{ typography: Typographies }>`
  ${({ typography }) => typographies[typography]}
`;

export default StyledTypography;
