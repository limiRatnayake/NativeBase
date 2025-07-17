import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getSortedProps, calculatePaddingProps } from './utils';
import { useTheme } from './../useTheme';

export function useSafeArea(props: any) {
  const insets = useSafeAreaInsets();
  const sizes = useTheme().sizes;
  const { safeAreaProps, paddingProps, sansPaddingProps } = getSortedProps(
    props
  );
  if (!Object.keys(safeAreaProps).length) {
    return props;
  }
  const calcualtedPaddingProps = calculatePaddingProps(
    safeAreaProps,
    paddingProps,
    insets,
    sizes
  );
  return { ...sansPaddingProps, ...paddingProps, ...calcualtedPaddingProps };
}
