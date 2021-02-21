import { Decimal } from 'decimal.js';

type BankInput = {
  id: string;
  name?: string | null;
  provider?: string | null;
  country?: string | null;
  identifier?: string | null;
  logoUri?: string | null;
  fullLogoUri?: string | null;
  supportedTransferDestinationTypes?: Array<string | null> | null;
  supportsAppless?: boolean | null;
  supportsInformation?: boolean | null;
  requiresExternalAuth?: boolean | null;
  supportsSendPayment?: boolean | null;
  supportsReceivePayment?: boolean | null;
  supportsGuestCheckout?: boolean | null;
  supportsBalance?: boolean | null;
  supportsLinkingUri?: boolean | null;
  supportsAisGuestCheckout?: boolean | null;
  supportsTransactionsDateFilter?: boolean | null;
};

type UpdateUserSettingInput = {
  id: string;
  donationGoal?: string | null;
  maxRoundUp?: string | null | undefined | Decimal;
  shouldRoundUpDonation?: boolean | null;
  pauseRoundupDate?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  accessBank?: BankInput | null;
  hasConfirmed?: boolean | null;
  acceptedTerms?: boolean | null;
  userSettingCurrentCharityId?: string | null;
};

type MetaData = {
  id?: string;
  __typename?: string;
  key: string;
  value: Decimal | number | string;
};

type Amount = {
  id?: string;
  __typename?: string;
  currency: string;
  value: Decimal | number | string;
};

interface CalculateTotalDonationForMonthReturn {
  totalForMonth: string;
  totalToDonate: string;
}

interface Transaction {
  __typename: 'Transaction';
  id: string;
  type?: string;
  status?: string;
  amount: Amount;
  description: string;
  createdAt: string;
  updatedAt: string;
  metadata: MetaData;
  isExcluded?: boolean;
}


// Some exampples of functions that were created for a banking application. The purpose of these functions was to round up purchases
// so that the remainder of that was left over from the purchase was then donated to a charity. The user could choose a MaxRoundUp 
// where it wouldn't donate to charity if the amount to donate was more than the specified MaxRoundUp amount.

// There were a few problems that I had to solve. Math calculations for banking needed to be very precise, more precise than normal decimal
// values, so I had to find a module that allowed us to make consistently accurate calculations.

// As we were also dealing with money and peoples finances, I had to make sure the calculations were always accurate as well as dealing with dates
// to make sure the calculations took into account if the user paused their donations.


export const contributionToPotValue = (
  transaction: Transaction,
  userPreferences: UpdateUserSettingInput,
): string => {
  if (!transaction || !userPreferences) {
    return new Decimal(0.0).toFixed(2).toString();
  }
  const transactionValue = new Decimal(transaction.amount.value);
  const pauseRoundupDate = userPreferences?.pauseRoundupDate;
  const maxRoundUp = userPreferences?.maxRoundUp;

  const roundedUpValue = transactionValue.ceil();
  const roundedUpCalc = roundedUpValue.minus(transactionValue);

  const transactionDate = new Date(transaction.createdAt);

  if (transaction.isExcluded) {
    return new Decimal(0).toFixed(2).toString();
  }

  if (roundedUpCalc.lessThanOrEqualTo(maxRoundUp)) {
    if (pauseRoundupDate) {
      const convertedPausedDate = new Date(pauseRoundupDate);

      if (transactionDate <= convertedPausedDate) {
        return new Decimal(roundedUpValue)
          .minus(transactionValue)
          .toFixed(2)
          .toString();
      }
    }

    return new Decimal(roundedUpValue)
      .minus(transactionValue)
      .toFixed(2)
      .toString();
  }

  return new Decimal(0.0).toFixed(2).toString();
};

export const calculateTotalDonationForMonth = (
  transactions: Transaction[],
  userPreferences: UpdateUserSettingInput,
): CalculateTotalDonationForMonthReturn => {
  if (transactions === undefined) {
    throw new Error('No transactions');
  }

  if (transactions.length === 0) {
    return {
      totalForMonth: '0.00',
      totalToDonate: '0.00',
    };
  }

  const { shouldRoundUpDonation } = userPreferences;

  const totalsArray: Decimal[] | string[] | number[] = transactions.map(
    transaction => {
      const { pauseRoundupDate } = userPreferences;

      const transactionDate = new Date(transaction.createdAt);

      if (pauseRoundupDate) {
        const convertedDate = new Date(pauseRoundupDate);
        if (transactionDate <= convertedDate && !transaction.isExcluded) {
          return contributionToPotValue(transaction, userPreferences);
        }

        return new Decimal(0).toFixed(2).toString();
      }

      return contributionToPotValue(transaction, userPreferences);
    },
  );

  if (totalsArray.length > 1) {
    const fullAmountForMonth = totalsArray.reduce(
      (a: Decimal | string | number, b: Decimal | string | number) =>
        Decimal.add(a, b),
    );

    return {
      totalForMonth: fullAmountForMonth.toFixed(2).toString(),
      totalToDonate: shouldRoundUpDonation
        ? fullAmountForMonth
            .ceil()
            .toFixed(2)
            .toString()
        : fullAmountForMonth.toFixed(2).toString(),
    };
  }

  return {
    totalForMonth: totalsArray[0],
    totalToDonate: shouldRoundUpDonation
      ? new Decimal(totalsArray[0])
          .ceil()
          .toFixed(2)
          .toString()
      : new Decimal(totalsArray[0]).toFixed(2).toString(),
  };
};

// Transaction functions
export const roundUp = (
  transactionValue: Decimal | number | string,
): string => {
  if (!transactionValue) {
    throw new Error('There is no TransAction Value');
  }

  const value = new Decimal(transactionValue).ceil().toFixed(2);

  return value.toString();
};
