import { exportWithFormatterWhenDefined } from '../export-utilities';
import { Formatter, Column } from '../../interfaces/index';

describe('Export Utilities', () => {
  let mockItem;
  let mockColumn: Column;
  const myBoldHtmlFormatter: Formatter = (row, cell, value, columnDef, dataContext) => value !== null ? { text: value ? `<b>${value}</b>` : '' } : null;
  const myUppercaseFormatter: Formatter = (row, cell, value, columnDef, dataContext) => value ? { text: value.toUpperCase() } : null;

  beforeEach(() => {
    mockItem = { firstName: 'John', lastName: 'Doe', age: 45, address: { zip: 12345 } };
    mockColumn = { id: 'firstName', name: 'First Name', field: 'firstName', formatter: myUppercaseFormatter };
  });

  describe('exportWithFormatterWhenDefined method', () => {
    it('should NOT enable exportWithFormatter and expect the firstName to returned', () => {
      const output = exportWithFormatterWhenDefined(1, 1, mockItem, mockColumn, {}, { exportWithFormatter: false });
      expect(output).toBe('John');
    });

    it('should provide a column definition field defined with a dot (.) notation and expect a complex object result', () => {
      const output = exportWithFormatterWhenDefined(1, 1, mockItem, { ...mockColumn, field: 'address.zip' }, {}, {});
      expect(output).toEqual({ zip: 12345 });
    });

    it('should provide a exportCustomFormatter in the column definition and expect the output to be formatted', () => {
      const output = exportWithFormatterWhenDefined(1, 1, mockItem, { ...mockColumn, exportCustomFormatter: myBoldHtmlFormatter }, {}, { exportWithFormatter: true });
      expect(output).toBe('<b>John</b>');
    });

    it('should provide a exportCustomFormatter in the column definition and expect empty string when associated item property is null', () => {
      const output = exportWithFormatterWhenDefined(1, 1, { ...mockItem, firstName: null }, { ...mockColumn, exportCustomFormatter: myBoldHtmlFormatter }, {}, { exportWithFormatter: true });
      expect(output).toBe('');
    });

    it('should provide a exportCustomFormatter in the column definition and expect empty string when associated item property is undefined', () => {
      const output = exportWithFormatterWhenDefined(1, 1, { ...mockItem, firstName: undefined }, { ...mockColumn, exportCustomFormatter: myBoldHtmlFormatter }, {}, { exportWithFormatter: true });
      expect(output).toBe('');
    });

    it('should enable exportWithFormatter as an exportOption and expect the firstName to be formatted', () => {
      const output = exportWithFormatterWhenDefined(1, 1, mockItem, mockColumn, {}, { exportWithFormatter: true });
      expect(output).toBe('JOHN');
    });

    it('should enable exportWithFormatter as a grid option and expect the firstName to be formatted', () => {
      mockColumn.exportWithFormatter = true;
      const output = exportWithFormatterWhenDefined(1, 1, mockItem, mockColumn, {}, { exportWithFormatter: true });
      expect(output).toBe('JOHN');
    });

    it('should enable exportWithFormatter as a grid option and expect empty string when associated item property is null', () => {
      mockColumn.exportWithFormatter = true;
      const output = exportWithFormatterWhenDefined(1, 1, { ...mockItem, firstName: null }, mockColumn, {}, { exportWithFormatter: true });
      expect(output).toBe('');
    });

    it('should enable exportWithFormatter as a grid option and expect empty string when associated item property is undefined', () => {
      mockColumn.exportWithFormatter = true;
      const output = exportWithFormatterWhenDefined(1, 1, { ...mockItem, firstName: undefined }, mockColumn, {}, { exportWithFormatter: true });
      expect(output).toBe('');
    });

    it('should expect empty string when associated item property is undefined and has no formatter defined', () => {
      const output = exportWithFormatterWhenDefined(1, 1, { ...mockItem, firstName: undefined }, mockColumn, {}, {});
      expect(output).toBe('');
    });
  });
});