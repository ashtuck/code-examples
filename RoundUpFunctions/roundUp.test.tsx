import { Decimal } from 'decimal.js';
import {
  roundUp,
  contributionToPotValue,
  calculateTotalDonationForMonth,
} from './roundUpFunctions';

type BankInput = {
    id: string,
    name?: string | null,
    provider?: string | null,
    country?: string | null,
    identifier?: string | null,
    logoUri?: string | null,
    fullLogoUri?: string | null,
    supportedTransferDestinationTypes?: Array< string | null > | null,
    supportsAppless?: boolean | null,
    supportsInformation?: boolean | null,
    requiresExternalAuth?: boolean | null,
    supportsSendPayment?: boolean | null,
    supportsReceivePayment?: boolean | null,
    supportsGuestCheckout?: boolean | null,
    supportsBalance?: boolean | null,
    supportsLinkingUri?: boolean | null,
    supportsAisGuestCheckout?: boolean | null,
    supportsTransactionsDateFilter?: boolean | null,
  };
  

 type UserPreference = {
    id: string,
    donationGoal?: string | null,
    maxRoundUp?: string | null,
    shouldRoundUpDonation?: boolean | null,
    pauseRoundupDate?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    accessBank?: BankInput | null,
    hasConfirmed?: boolean | null,
    acceptedTerms?: boolean | null,
    userSettingCurrentCharityId?: string | null,
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

describe('Round Up Functions Tests', () => {
  describe('calculateTotalDonationForMonth function tests', () => {
    it('goes through the users transaction and totals the amount needed to donate', () => {
      const transactions: Transaction[] = [
        {
          id: '15045',
          type: 'DEBIT',
          status: 'SUCCESS',
          amount: { currency: 'USD', value: '0.2' },
          description: '<redacted>',
          createdAt: '2019-12-03T07:29:29.719Z',
          metadata: { key: '<redacted>', value: '<redacted>' },
          __typename: 'Transaction',
          updatedAt: '2019-12-03T07:29:29.719Z',
        },
        {
          id: '1332',
          type: 'DEBIT',
          status: 'SUCCESS',
          amount: { currency: 'USD', value: '0.2' },
          description: '<redacted>',
          createdAt: '2019-12-04T07:29:29.719Z',
          metadata: { key: '<redacted>', value: '<redacted>' },
          __typename: 'Transaction',
          updatedAt: '2019-12-03T07:29:29.719Z',
        },
      ];

      const userPreferences: UserPreference = {
        maxRoundUp: '0.9',
        donationGoal: '100',
        shouldRoundUpDonation: false,
        pauseRoundupDate: '2019-12-09T07:29:29.719Z',
      };

      expect(
        calculateTotalDonationForMonth(transactions, userPreferences),
      ).toEqual({
        totalForMonth: '1.60',
        totalToDonate: '1.60',
      });
    });

    it('handles just one transaction being passed into the function', () => {
      const transactions: Transaction[] = [
        {
          __typename: 'Transaction',
          id: '15045',
          type: 'DEBIT',
          status: 'SUCCESS',
          amount: { currency: 'USD', value: '0.4' },
          description: '<redacted>',
          createdAt: '2019-12-03T07:29:29.719Z',
          updatedAt: '2019-12-03T07:29:29.719Z',
          metadata: { key: '<redacted>', value: '<redacted>' },
        },
      ];

      const userPreferences: UserPreference = {
        maxRoundUp: '0.9',
        donationGoal: '100',
        shouldRoundUpDonation: false,
        pauseRoundupDate: '2019-12-03T07:29:29.719Z',
      };

      expect(
        calculateTotalDonationForMonth(transactions, userPreferences),
      ).toEqual({
        totalForMonth: '0.60',
        totalToDonate: '0.60',
      });
    });

    it('should allow number type as well as decimal type for value', () => {
      const transactions: Transaction[] = [
        {
          id: '15045',
          type: 'DEBIT',
          status: 'SUCCESS',
          amount: { currency: 'USD', value: 0.4 },
          description: '<redacted>',
          createdAt: '2019-12-03T07:29:29.719Z',
          metadata: { key: '<redacted>', value: '<redacted>' },
          __typename: 'Transaction',
          updatedAt: '2019-12-03T07:29:29.719Z',
        },
        {
          id: '1332',
          type: 'DEBIT',
          status: 'SUCCESS',
          amount: { currency: 'USD', value: 0.8 },
          description: '<redacted>',
          createdAt: '2019-12-09T07:29:29.719Z',
          metadata: { key: '<redacted>', value: '<redacted>' },
          __typename: 'Transaction',
          updatedAt: '2019-12-03T07:29:29.719Z',
        },
      ];

      const userPreferences: UserPreference = {
        maxRoundUp: '0.9',
        donationGoal: '100',
        shouldRoundUpDonation: false,
      };

      expect(
        calculateTotalDonationForMonth(transactions, userPreferences),
      ).toEqual({
        totalForMonth: '0.80',
        totalToDonate: '0.80',
      });
    });

    it('should allow string type as well as decimal type for value', () => {
      const transactions: Transaction[] = [
        {
          id: '15045',
          type: 'DEBIT',
          status: 'SUCCESS',
          amount: { currency: 'USD', value: '0.4' },
          description: '<redacted>',
          createdAt: '2019-12-03T07:29:29.719Z',
          metadata: { key: '<redacted>', value: '<redacted>' },
          __typename: 'Transaction',
          updatedAt: '2019-12-03T07:29:29.719Z',
        },
        {
          id: '1332',
          type: 'DEBIT',
          status: 'SUCCESS',
          amount: { currency: 'USD', value: '0.8' },
          description: '<redacted>',
          createdAt: '2019-12-09T07:29:29.719Z',
          metadata: { key: '<redacted>', value: '<redacted>' },
          __typename: 'Transaction',
          updatedAt: '2019-12-03T07:29:29.719Z',
        },
      ];

      const userPreferences: UserPreference = {
        maxRoundUp: '0.9',
        donationGoal: '100',
        shouldRoundUpDonation: false,
      };

      expect(
        calculateTotalDonationForMonth(transactions, userPreferences),
      ).toEqual({
        totalForMonth: '0.80',
        totalToDonate: '0.80',
      });
    });

    it('should round up the value if shouldRoundupDonation is true', () => {
      const transactions: Transaction[] = [
        {
          id: '15045',
          type: 'DEBIT',
          status: 'SUCCESS',
          amount: { currency: 'USD', value: '0.4' },
          description: '<redacted>',
          createdAt: '2019-12-03T07:29:29.719Z',
          metadata: { key: '<redacted>', value: '<redacted>' },
          __typename: 'Transaction',
          updatedAt: '2019-12-03T07:29:29.719Z',
        },
        {
          id: '1332',
          type: 'DEBIT',
          status: 'SUCCESS',
          amount: { currency: 'USD', value: '0.8' },
          description: '<redacted>',
          createdAt: '2019-12-09T07:29:29.719Z',
          metadata: { key: '<redacted>', value: '<redacted>' },
          __typename: 'Transaction',
          updatedAt: '2019-12-03T07:29:29.719Z',
        },
      ];

      const userPreferences: UserPreference = {
        maxRoundUp: '0.9',
        donationGoal: '100',
        shouldRoundUpDonation: true,
      };

      expect(
        calculateTotalDonationForMonth(transactions, userPreferences),
      ).toEqual({
        totalForMonth: '0.80',
        totalToDonate: '1.00',
      });
    });

    it('only caculates values that are before the date set in the users preferences', () => {
      const transactions: Transaction[] = [
        {
          id: '15045',
          type: 'DEBIT',
          status: 'SUCCESS',
          amount: { currency: 'USD', value: '0.4' },
          description: '<redacted>',
          createdAt: '2019-12-16T07:29:29.719Z',
          metadata: { key: '<redacted>', value: '<redacted>' },
          __typename: 'Transaction',
          updatedAt: '2019-12-03T07:29:29.719Z',
        },
        {
          id: '1332',
          type: 'DEBIT',
          status: 'SUCCESS',
          amount: { currency: 'USD', value: '0.4' },
          description: '<redacted>',
          createdAt: '2019-12-08T07:29:29.719Z',
          metadata: { key: '<redacted>', value: '<redacted>' },
          __typename: 'Transaction',
          updatedAt: '2019-12-03T07:29:29.719Z',
        },
      ];

      const userPreferences: UserPreference = {
        maxRoundUp: '0.9',
        donationGoal: '100',
        shouldRoundUpDonation: false,
        pauseRoundupDate: '2019-12-19T07:29:29.719Z',
      };

      expect(
        calculateTotalDonationForMonth(transactions, userPreferences),
      ).toEqual({
        totalForMonth: '1.20',
        totalToDonate: '1.20',
      });
    });

    it('should exclude a transaction if the transaction has isExcluded to true', () => {
      const transactions: Transaction[] = [
        {
          id: '15045',
          type: 'DEBIT',
          status: 'SUCCESS',
          amount: { currency: 'USD', value: '0.4' },
          description: '<redacted>',
          createdAt: '2019-12-08T07:29:29.719Z',
          metadata: { key: '<redacted>', value: '<redacted>' },
          isExcluded: false,
          __typename: 'Transaction',
          updatedAt: '2019-12-03T07:29:29.719Z',
        },
        {
          id: '1332',
          type: 'DEBIT',
          status: 'SUCCESS',
          amount: { currency: 'USD', value: '0.4' },
          description: '<redacted>',
          createdAt: '2019-12-08T07:29:29.719Z',
          metadata: { key: '<redacted>', value: '<redacted>' },
          isExcluded: false,
          __typename: 'Transaction',
          updatedAt: '2019-12-03T07:29:29.719Z',
        },
        {
          id: '1332',
          type: 'DEBIT',
          status: 'SUCCESS',
          amount: { currency: 'USD', value: '0.4' },
          description: '<redacted>',
          createdAt: '2019-12-08T07:29:29.719Z',
          metadata: { key: '<redacted>', value: '<redacted>' },
          isExcluded: true,
          __typename: 'Transaction',
          updatedAt: '2019-12-03T07:29:29.719Z',
        },
      ];

      const userPreferences: UserPreference = {
        maxRoundUp: '0.9',
        donationGoal: '100',
        shouldRoundUpDonation: false,
      };

      expect(
        calculateTotalDonationForMonth(transactions, userPreferences),
      ).toEqual({
        totalForMonth: '1.20',
        totalToDonate: '1.20',
      });
    });
  });

  describe('roundUp Function Tests', () => {
    it('correctly rounds up to the nearest whole number (testing roundUp Function)', () => {
      const value = 2.32;
      const userPreferences: UserPreference = {
        maxRoundUp: '0.4',
        donationGoal: '100',
        shouldRoundUpDonation: true,
      };

      expect(roundUp(value, userPreferences)).toEqual('3.00');
    });
  });

  describe('conributionToPotValue Tests', () => {
    it('should exclude a transaction if that transaction has isExcluded to true', () => {
      const valueTrue: Transaction = {
        id: '15045',
        type: 'DEBIT',
        status: 'SUCCESS',
        amount: { currency: 'USD', value: '0.4' },
        description: '<redacted>',
        createdAt: '2019-12-03T07:29:29.719Z',
        metadata: { key: '<redacted>', value: '<redacted>' },
        isExcluded: true,
      };
      const userPreferences: UserPreference = {
        maxRoundUp: '0.9',
        donationGoal: '100',
        shouldRoundUpDonation: false,
        pauseRoundupDate: '2019-12-19T07:29:29.719Z',
      };

      expect(contributionToPotValue(valueTrue, userPreferences)).toEqual(
        '0.00',
      );
    });

    it('Should round up a value when passed into the function', () => {
      const value: Transaction = {
        id: '15045',
        type: 'DEBIT',
        status: 'SUCCESS',
        amount: { currency: 'USD', value: '0.63' },
        description: '<redacted>',
        createdAt: '2019-12-03T07:29:29.719Z',
        metadata: { key: '<redacted>', value: '<redacted>' },
        isExcluded: false,
      };
      const preferences = {
        maxDonation: 100,
        maxRoundUp: 0.9,
        balanceLimit: 100,
        canRoundUp: false,
        shouldRoundUpDonation: false,
      };

      expect(contributionToPotValue(value, preferences)).toEqual('0.37');
    });

    it('should not round up if the maxroundup is greater than the roundedup transaction minus the max round up', () => {
      const value: Transaction = {
        id: '15045',
        type: 'DEBIT',
        status: 'SUCCESS',
        amount: { currency: 'USD', value: '0.63' },
        description: '<redacted>',
        createdAt: '2019-12-03T07:29:29.719Z',
        metadata: { key: '<redacted>', value: '<redacted>' },
        isExcluded: false,
      };
      const preferences = {
        maxDonation: 100,
        maxRoundUp: 0.34,
        balanceLimit: 100,
        canRoundUp: false,
        shouldRoundUpDonation: false,
      };

      expect(contributionToPotValue(value, preferences)).toEqual('0.00');
    });

    it('should round up if the maxroundup is less than or equal to the roundedup transaction minus the max round up', () => {
      const value: Transaction = {
        id: '15045',
        type: 'DEBIT',
        status: 'SUCCESS',
        amount: { currency: 'USD', value: '0.63' },
        description: '<redacted>',
        createdAt: '2019-12-03T07:29:29.719Z',
        metadata: { key: '<redacted>', value: '<redacted>' },
        isExcluded: false,
      };
      const preferences = {
        maxDonation: 100,
        maxRoundUp: 0.38,
        balanceLimit: 100,
        canRoundUp: false,
        shouldRoundUpDonation: false,
      };

      expect(contributionToPotValue(value, preferences)).toEqual('0.37');
    });

    it('should return a value if pauseRoundupDate is set to null', () => {
      const valueTrue: Transaction = {
        id: '15045',
        type: 'DEBIT',
        status: 'SUCCESS',
        amount: { currency: 'USD', value: '0.4' },
        description: '<redacted>',
        createdAt: '2019-12-03T07:29:29.719Z',
        metadata: { key: '<redacted>', value: '<redacted>' },
        isExcluded: false,
      };
      const userPreferences: UserPreference = {
        maxRoundUp: '0.9',
        donationGoal: '100',
        shouldRoundUpDonation: false,
        pauseRoundupDate: null,
      };

      expect(contributionToPotValue(valueTrue, userPreferences)).toEqual(
        '0.60',
      );
    });

    it('should allow number type as well as decimal type for the value ', () => {
      const value: Transaction = {
        id: '15045',
        type: 'DEBIT',
        status: 'SUCCESS',
        amount: { currency: 'USD', value: 0.32 },
        description: '<redacted>',
        createdAt: '2019-12-03T07:29:29.719Z',
        metadata: { key: '<redacted>', value: '<redacted>' },
      };
      const userPreferences: UserPreference = {
        maxRoundUp: '0.99',
        donationGoal: '100',
        shouldRoundUpDonation: false,
      };

      expect(contributionToPotValue(value, userPreferences)).toEqual('0.68');
    });

    it('should allow string type as well as decimal type for the value', () => {
      const value: Transaction = {
        id: '15045',
        type: 'DEBIT',
        status: 'SUCCESS',
        amount: { currency: 'USD', value: '0.32' },
        description: '<redacted>',
        createdAt: '2019-12-03T07:29:29.719Z',
        metadata: { key: '<redacted>', value: '<redacted>' },
      };
      const userPreferences: UserPreference = {
        maxRoundUp: '0.99',
        donationGoal: '100',
        shouldRoundUpDonation: false,
      };

      expect(contributionToPotValue(value, userPreferences)).toEqual('0.68');
    });
  });
});

describe('Error Handling for Round Up Functions', () => {
  describe('RoundUp Function', () => {
    it('should throw an error if no value is passed into the RoundUp function', () => {
      let thrownError;

      try {
        roundUp();
      } catch (error) {
        thrownError = error;
      }
      expect(thrownError).toEqual(new Error('There is no TransAction Value'));
    });
  });

  describe('calculateTotalDonationForMonth Function', () => {
    it('should throw an error if no values are passed into it', () => {
      let thrownError;

      try {
        calculateTotalDonationForMonth();
      } catch (error) {
        thrownError = error;
      }
      expect(thrownError).toEqual(new Error('No transactions'));
    });
  });
});
