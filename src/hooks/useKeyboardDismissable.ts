import React from 'react';
import { useEffect } from 'react';
import { BackHandler } from 'react-native';

type IParams = {
  enabled?: boolean;
  callback: () => any;
};

let keyboardDismissHandlers: Array<() => any> = [];
export const keyboardDismissHandlerManager = {
  push: (handler: () => any) => {
    keyboardDismissHandlers.push(handler);
    return () => {
      keyboardDismissHandlers = keyboardDismissHandlers.filter(
        (h) => h !== handler
      );
    };
  },
  length: () => keyboardDismissHandlers.length,
  pop: () => {
    return keyboardDismissHandlers.pop();
  },
};

/**
 * Handles attaching callback for Escape key listener on web and Back button listener on Android
 */
export const useKeyboardDismissable = ({ enabled, callback }: IParams) => {
  React.useEffect(() => {
    let cleanupFn = () => { };
    if (enabled) {
      cleanupFn = keyboardDismissHandlerManager.push(callback);
    } else {
      cleanupFn();
    }
    return () => {
      cleanupFn();
    };
  }, [enabled, callback]);

  useBackHandler({ enabled, callback });
};

export function useBackHandler({ enabled, callback }: IParams) {
  useEffect(() => {
    let subscription: { remove: () => void } | null = null;

    const backHandler = () => {
      callback();
      return true;
    };

    if (enabled) {
      subscription = BackHandler.addEventListener('hardwareBackPress', backHandler);
    }

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, [enabled, callback]);
}
