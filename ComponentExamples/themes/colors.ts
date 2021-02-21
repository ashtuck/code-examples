const palette = {
  navy: '#213B47',
  coolNavy: '#294957',
  darkNavy: '#1B303B',
  midBlue: '#618392',
  fadedBlue: '#607d8b',
  frostedBlue: '#2b4d5c',
  blueSilver: '#99B1BC',
  paleBlue: '#eef5fe',
  lightSky: '#f4f8fa',
  whiteSky: '#c9e9f7',
  lightBlue: '#ecf3f6',
  offWhite: '#FBFBFB',
  midWhite: '#F4F4F4',
  midGrey: '#a0aec0',
  darkGrey: '#979797',
  darkerGrey: '#626262',
  white: '#fff',
  soot: '#282828',
  green: '#48BB78',
  yellow: '#FFCB05',
  darkYellow: '#6B5400',
  orangeYellow: '#FFBC05',
  red: '#FF483D',
  lightRed: '#FF7068',
  darkRed: '#E3372D',
  darkerNavy: '#0d2836',
};

const colors = {
  // Components
  entryListRow: {
    background: palette.white,
    titleText: palette.navy,
    subTitleText: palette.fadedBlue,
    valueText: palette.navy,
    rightLabelText: palette.blueSilver,
    valueDiffText: palette.green,
    valueDiffDisabledText: palette.midGrey,

    underlay: palette.offWhite,
    chevronIconTint: palette.fadedBlue,
    rowSeperator: palette.paleBlue,
  },
  menuListRow: {
    background: palette.coolNavy,
    titleText: palette.white,
    chevronIconTint: palette.white,
  },
  accordian: {
    underlay: palette.offWhite,
  },
  button: {
    backgroundPrimary: palette.yellow,
    backgroundPrimaryUnderlay: palette.orangeYellow,
    labelPrimaryText: palette.darkYellow,

    backgroundSecondary: palette.lightBlue,
    backgroundSecondaryUnderlay: palette.paleBlue,
    labelSecondaryText: palette.midBlue,

    backgroundWarning: palette.red,
    backgroundWarningUnderlay: palette.darkRed,
    labelWarningText: palette.white,
  },
  iconButton: {
    background: palette.navy,
    underlay: palette.darkNavy,
  },
  thumbnail: {
    shadow: palette.navy,
  },
  rockerSwitchInput: {
    background: palette.frostedBlue,
    valueText: palette.white,
  },
  inputTitleDescription: {
    titleText: palette.white,
    descriptionText: palette.blueSilver,
  },
  progressBar: {
    track: palette.frostedBlue,
    fill: palette.yellow,
    fillComplete: palette.green,
  },
  transactionPreview: {
    background: palette.white,
    closeIconTint: palette.midBlue,
    roundUpValueText: palette.green,
    roundUpValueTextDisabled: palette.midGrey,
  },
  pincode: {
    background: palette.frostedBlue,
    numbers: palette.white,
    overlay: palette.yellow,
    errorText: palette.error,
  },
  input: {
    background: palette.frostedBlue,
    label: palette.lightSky,
    validationText: palette.lightRed,
    infoText: palette.whiteSky,
  },
  switchColor: {
    thumb: palette.white,
    trackFalse: palette.darkerNavy,
    trackTrue: palette.green,
  },
  // Scenes
  homeScene: {
    background: palette.darkerNavy,
    upperBackground: palette.navy,
    charityHolderBackground: palette.darkerNavy,
    changeCharityTitleText: palette.blueSilver,
    changeCharitySubtitleText: palette.fadedBlue,
  },
  onboarding: {
    lightBackground: palette.white,
  },
  settingsScene: { background: palette.navy },

  changeRoundUpScene: {
    background: palette.navy,
    divider: palette.frostedBlue,
  },
  faqScene: {
    background: palette.white,
  },

  // Shared
  error: 'red',
  placeHolderTextColor: 'rgba(0,0,0,0.1)',
  defaultNavBar: palette.navy,

  // Typography
  typography: {
    settingsTitleText: palette.whiteSky,
    settingsTitleTextEmphasized: palette.yellow,
    titleText: palette.coolNavy,
    largeTitleText: palette.coolNavy,
    subheadEmphasizedText: palette.coolNavy,
    subheadText: palette.fadedBlue,
    bodyEmphasizedText: palette.navy,
    bodyText: palette.coolNavy,
    footnoteText: palette.coolNavy,
    labelText: palette.fadedBlue,
    valueText: palette.navy,
    statementText: palette.midBlue,
    statementHighlightText: palette.blueSilver,
    bigAmountText: palette.yellow,
  },

  // Debbug
  debug: {
    one: { background: 'red' },
    two: { background: 'blue' },
    three: { background: 'green' },
    four: { background: 'yellow' },
  },
  palette: { ...palette },
};

export default colors;
