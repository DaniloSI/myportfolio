/* eslint-disable @typescript-eslint/no-explicit-any */
interface Theme {
  dark: any;
  light: any;
}

const theme: Theme = {
  dark: {
    background: '#1E1E1E',
    backgroundCard: '#000',
    highlight: '#1BB55C',
    text: '#FFFFFF90',
    backgroundSkill: '#FFFFFF50',
    textSkill: '#FFFFFF90',
  },
  light: {
    background: '#F2F2F4',
    backgroundCard: '#FFF',
    highlight: '#2667ff',
    text: '#31343a',
    backgroundSkill: '#eaf0ef',
    textSkill: '#535353',
  },
};

export default theme;
