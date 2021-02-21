import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

type Alignments = 'left' | 'center' | 'right';

interface Props {
  children: React.ReactNode;
  align?: Alignments;
  color?: string;
  opacity?: number;
  onPress?: () => void;
}

const Body: React.FC<Props> = ({
  align = 'left',
  color,
  children,
  onPress,
  opacity,
}) => {
  return (
    <Text
      style={[
        styles.bodyText,
        align && { textAlign: align },
        color && { color },
        opacity && { opacity },
      ]}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

const BodyEmphasized: React.FC<Props> = ({
  align = 'left',
  color,
  children,
  onPress,
  opacity,
}) => {
  return (
    <Text
      style={[
        styles.bodyEmphasizedText,
        align && { textAlign: align },
        color && { color },
        opacity && { opacity },
      ]}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

const Title: React.FC<Props> = ({
  align = 'left',
  color,
  children,
  onPress,
  opacity,
}) => {
  return (
    <Text
      style={[
        styles.titleText,
        align && { textAlign: align },
        color && { color },
        opacity && { opacity },
      ]}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};
const LargeTitle: React.FC<Props> = ({
  align = 'left',
  color,
  children,
  onPress,
  opacity,
}) => {
  return (
    <Text
      style={[
        styles.largeTitleText,
        align && { textAlign: align },
        color && { color },
        opacity && { opacity },
      ]}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

const SettingsTitle: React.FC<Props> = ({
  align = 'left',
  color,
  children,
  onPress,
  opacity,
}) => {
  return (
    <Text
      style={[
        styles.settingsTitleText,
        align && { textAlign: align },
        color && { color },
        opacity && { opacity },
      ]}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

const SettingsTitleEmphasized: React.FC<Props> = ({
  align = 'left',
  color,
  children,
  onPress,
  opacity,
}) => {
  return (
    <Text
      style={[
        styles.settingsTitleTextEmphasized,
        align && { textAlign: align },
        color && { color },
        opacity && { opacity },
      ]}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

const SubheadEmphasized: React.FC<Props> = ({
  align = 'left',
  color,
  children,
  onPress,
  opacity,
}) => {
  return (
    <Text
      style={[
        styles.subheadEmphasizedText,
        align && { textAlign: align },
        color && { color },
        opacity && { opacity },
      ]}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

const Subhead: React.FC<Props> = ({
  align = 'left',
  color,
  children,
  onPress,
  opacity,
}) => {
  return (
    <Text
      style={[
        styles.subheadText,
        align && { textAlign: align },
        color && { color },
        opacity && { opacity },
      ]}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

const Statement: React.FC<Props> = ({
  align = 'left',
  color,
  children,
  onPress,
  opacity,
}) => {
  return (
    <Text
      style={[
        styles.statementText,
        align && { textAlign: align },
        color && { color },
        opacity && { opacity },
      ]}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

const StatementHighlight: React.FC<Props> = ({
  align = 'left',
  color,
  children,
  onPress,
  opacity,
}) => {
  return (
    <Text
      style={[
        styles.statementHighlightText,
        align && { textAlign: align },
        color && { color },
        opacity && { opacity },
      ]}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

const ButtonLabel: React.FC<Props> = ({
  align = 'left',
  color,
  children,
  onPress,
  opacity,
}) => {
  return (
    <Text
      style={[
        styles.buttonLabelText,
        align && { textAlign: align },
        color && { color },
        opacity && { opacity },
      ]}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

const RockerSwitchInputValue: React.FC<Props> = ({
  align = 'left',
  color,
  children,
  onPress,
  opacity,
}) => {
  return (
    <Text
      style={[
        styles.rockerSwitchInputValueText,
        align && { textAlign: align },
        color && { color },
        opacity && { opacity },
      ]}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

const Footnote: React.FC<Props> = ({
  align = 'left',
  color,
  children,
  onPress,
  opacity,
}) => {
  return (
    <Text
      style={[
        styles.footnoteText,
        align && { textAlign: align },
        color && { color },
        opacity && { opacity },
      ]}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

const FootnoteEmphasized: React.FC<Props> = ({
  align = 'left',
  color,
  children,
  onPress,
  opacity,
}) => {
  return (
    <Text
      style={[
        styles.footnoteEmphasizedText,
        align && { textAlign: align },
        color && { color },
        opacity && { opacity },
      ]}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

const Label: React.FC<Props> = ({
  align = 'left',
  color,
  children,
  onPress,
  opacity,
}) => {
  return (
    <Text
      style={[
        styles.labelText,
        align && { textAlign: align },
        color && { color },
        opacity && { opacity },
      ]}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

const Value: React.FC<Props> = ({
  align = 'left',
  color,
  children,
  onPress,
  opacity,
}) => {
  return (
    <Text
      style={[
        styles.valueText,
        align && { textAlign: align },
        color && { color },
        opacity && { opacity },
      ]}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

const BigAmount: React.FC<Props> = ({
  align = 'left',
  color,
  children,
  onPress,
  opacity,
}) => {
  return (
    <Text
      style={[
        styles.bigAmountText,
        align && { textAlign: align },
        color && { color },
        opacity && { opacity },
      ]}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

const BigAmountCurrency: React.FC<Props> = ({
  align = 'left',
  color,
  children,
  onPress,
  opacity,
}) => {
  return (
    <Text
      style={[
        styles.bigAmountCurrencyText,
        align && { textAlign: align },
        color && { color },
        opacity && { opacity },
      ]}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

export {
  Body,
  Title,
  LargeTitle,
  SubheadEmphasized,
  Subhead,
  BodyEmphasized,
  Statement,
  StatementHighlight,
  ButtonLabel,
  RockerSwitchInputValue,
  Footnote,
  FootnoteEmphasized,
  Label,
  Value,
  BigAmount,
  BigAmountCurrency,
  SettingsTitle,
  SettingsTitleEmphasized,
};
