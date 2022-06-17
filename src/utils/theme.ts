/* eslint-disable @typescript-eslint/no-explicit-any */
interface Theme {
  dark: any;
  light: any;
}

const theme: Theme = {
  dark: {
    background: '#242528',
    backgroundCard: '#131415',
    highlight: '#1dcd67',
    text: '#b3b3b3',
    backgroundSkill: '#b8b8b84f',
    textSkill: '#e3e7e2',
  },
  light: {
    background: '#F2F2F4',
    backgroundCard: '#FFF',
    highlight: '#083fd5',
    text: '#4d5159',
    backgroundSkill: '#eaf0ef',
    textSkill: '#454655',
  },
};

export default theme;
