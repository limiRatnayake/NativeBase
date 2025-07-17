import React from 'react';
import { render } from '@testing-library/react-native';
import { NativeBaseProvider } from '../../../../core/NativeBaseProvider';

import Switch from '../index';

jest.useFakeTimers();
describe('Switch', () => {
  it('can be default checked', () => {
    const { getAllByRole } = render(
      <NativeBaseProvider
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <Switch defaultIsChecked />
      </NativeBaseProvider>
    );
    const switches = getAllByRole('switch');
    expect(switches[0].props.value).toBe(true);
  });

  it('can be disabled', () => {
    const { getAllByRole } = render(
      <NativeBaseProvider
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <Switch isDisabled />
      </NativeBaseProvider>
    );
    const switches = getAllByRole('switch');
    expect(switches[0].props.disabled).toBe(true);
  });
});
