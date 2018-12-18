// @flow

import b64toBlobImported from 'b64-to-blob';
import MobileDetect from 'mobile-detect';

import {
  getBreakPointDesktop,
  getBreakPointTablet,
  getWindowHeight,
  getWindowWidth,
} from '../redux/getters/windowSize';
import { getStyleVariable } from '../redux/getters/system';
import { ImageForUpload } from '../components/Form/classes';
import type { State as StoreState } from '../types/redux/states';
import type
{
  Breadcrumb,
  BrowserStorageAction,
  DeviceWidth,
  EventHandler,
  LoggedInUser,
  NavigateFunction,
  RegisteredUser,
  UserRole,
} from '../types/general';

export const parseIntFromPixelDimension = (pixelDimension: string): number => {
  const attempt = parseInt(pixelDimension.replace('px', ''), 10);

  return (!Number.isNaN(attempt) && attempt) || 0;
};

export const capitalizeFirstLetter = (word: string): string => (
  word.charAt(0).toUpperCase() + word.slice(1)
);

export const climbEventTreeWithPathSupport = (
  event: MouseEvent,
  callBack: (element: EventTarget) => boolean,
): boolean => (
  event
    // $FlowFixMe
    .path
    .filter(element => callBack(element))
    .length > 0
);

export const climbEventTreeWithoutPathSupport = (
  event: MouseEvent,
  callBack: (element: EventTarget) => boolean,
): boolean => {
  let element = event.target;
  let count = 0; // protection against infinite loop
  // $FlowFixMe
  while (element.parentElement && count < 10000) {
    if (callBack(element)) {
      return true;
    }
    // $FlowFixMe
    element = element.parentElement;
    count += 1;
  }

  return false;
};

export const emptyOnClick: EventHandler = (event) => {
  event.preventDefault();
};

export const getDeviceWidth = (storeState: StoreState): DeviceWidth => {
  const breakPointDesktop = getBreakPointDesktop(storeState);
  const breakPointTablet = getBreakPointTablet(storeState);
  const windowWidth = getWindowWidth(storeState);

  if (
    windowWidth &&
    breakPointDesktop &&
    breakPointTablet
  ) {
    if (windowWidth < breakPointTablet) {
      return 'SMARTPHONE';
    } else if (
      windowWidth > breakPointTablet &&
      windowWidth < breakPointDesktop
    ) {
      return 'TABLET';
    }
  }

  return 'DESKTOP';
};

export const getFullPageHeight = (storeState: StoreState): number => {
  const windowHeight = getWindowHeight(storeState);

  if (windowHeight) {
    const deviceWidth = getDeviceWidth(storeState);
    let verticalMargin: number = 0;

    switch (deviceWidth) {
      case 'DESKTOP':
        verticalMargin = parseIntFromPixelDimension(getStyleVariable(
          storeState,
          'pageContentVerticalMarginDesktop',
        ) || '0');
        break;
      case 'SMARTPHONE':
        verticalMargin = parseIntFromPixelDimension(getStyleVariable(
          storeState,
          'pageContentVerticalMarginMobile',
        ) || '0');
        break;
      case 'TABLET':
        verticalMargin = parseIntFromPixelDimension(getStyleVariable(
          storeState,
          'pageContentVerticalMarginTablet',
        ) || '0');
        break;
      default:
    }

    const paddingBottom = parseIntFromPixelDimension(getStyleVariable(
      storeState,
      'pageContentPaddingBottom',
    ) || '0');

    return (
      windowHeight -
      verticalMargin -
      paddingBottom
    );
  }

  return 0;
};

export const isSuperAdmin = (user: LoggedInUser): boolean => {
  const result = user.zerpSession.userSuperAdmin;

  return !!result;
};

export const isSuperAdminRoute = (
  url: string,
  basePath: string,
): boolean => url.startsWith(`${basePath}/superadmin`);

const replaceAllOccurrences = (word: string, search: string, replace: string): string => (
  word.split(search).join(replace)
);

const getBreadcrumbLabel = (fragment: string): string => (
  replaceAllOccurrences(
    capitalizeFirstLetter(fragment),
    '-',
    ' ',
  )
);

export const objectToUrlencoded = (obj: Object): string => {
  if (obj) {
    return Object.keys(obj).reduce(
      (runningString, key, index) => {
        const concatSymbol = index > 0 ?
          '&' :
          '';
        return (
          runningString + // eslint-disable-line prefer-template
          concatSymbol +
          encodeURIComponent(key) +
          '=' +
          encodeURIComponent(obj[key])
        );
      },
      '',
    );
  }

  return '';
};

const removeBasePathFromUrl = (url: string, basePath: string): string => (
  url.replace(basePath, '')
);

export const getBreadcrumbs = (url: string, basePath?: ?string = null): Array<Breadcrumb> => {
  let cleanUrl = url;

  if (basePath) {
    cleanUrl = removeBasePathFromUrl(url, basePath);
  }

  const fragments = cleanUrl
    .split('/')
    .slice(1);

  if (!fragments || fragments.length === 0) {
    return [];
  }

  return fragments.map((fragment, index) => {
    const restOfpath = fragments
      .slice(0, index + 1)
      .join('/');
    const path = `/${restOfpath}`;

    return {
      label: getBreadcrumbLabel(fragment),
      path,
    };
  });
};

export const performLocalStorageAction = (
  action: BrowserStorageAction,
  key?: string,
  value?: string,
): ?string => {
  switch (action) {
    case ('CLEAR'):
      window.localStorage.clear();
      return null;
    case ('GET'):
      if (key) {
        return window.localStorage.getItem(key);
      }
      return null;
    case ('REMOVE'):
      if (key) {
        window.localStorage.removeItem(key);
      }
      return null;
    case ('SET'):
      if (key && value) {
        window.localStorage.setItem(key, value);
      }
      return null;
    default:
      (action: empty);
      return null;
  }
};

export const performSessionStorageAction = (
  action: BrowserStorageAction,
  key?: string,
  value?: string,
): ?string => {
  switch (action) {
    case ('CLEAR'):
      window.sessionStorage.clear();
      return null;
    case ('GET'):
      if (key) {
        return window.sessionStorage.getItem(key);
      }
      return null;
    case ('REMOVE'):
      if (key) {
        window.sessionStorage.removeItem(key);
      }
      return null;
    case ('SET'):
      if (key && value) {
        window.sessionStorage.setItem(key, value);
      }
      return null;
    default:
      return null;
  }
};

export const redirectNotAuthorizedToLogin = (
  statusCode: number,
  basePath?: ?string = null,
): ?string => {
  let result = null;

  if (
    statusCode === 401 ||
    statusCode === 403
  ) {
    window.location = `${basePath || ''}/login`;
    result = 'redirected';
  }

  return result;
};

export const stringToBoolean = (word: ?string): boolean => {
  if (!word) {
    return false;
  }

  switch (word) {
    case 'true':
      return true;
    default:
      return false;
  }
};

export const debounce = (func: Function, delay: number) => {
  let inDebounce;

  return (...args: Array<any>): void => {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(this, args), delay);
  };
};

export const throttle = (func: Function, wait: number): Function => {
  let timeOut;
  let lastCall;

  return (...args: Array<any>): void => {
    if (!lastCall) {
      func.apply(this, args);
      lastCall = Date.now();
    } else {
      clearTimeout(timeOut);
      timeOut = setTimeout(() => {
        if ((Date.now() - lastCall) >= wait) {
          func.apply(this, args);
          lastCall = Date.now();
        }
      }, wait - (Date.now() - lastCall));
    }
  };
};

export const getObjectPropertyFromDottedPath = (sourceObject: Object, dottedPath: string): any => {
  if (!dottedPath.includes('.')) {
    return '';
  }

  const splitProps = dottedPath.split('.');
  const splitPropsLength = splitProps.length;
  let result: any = sourceObject;
  let level = 0;

  while (level < splitPropsLength) {
    if (result) {
      result = result[splitProps[level]];
    } else {
      break;
    }

    level += 1;
  }

  return result || '';
};

export const getLoggedInUserRole = (loggedInUser: ?LoggedInUser): UserRole => {
  if (!loggedInUser) {
    return 'REGULAR';
  }

  if (isSuperAdmin(loggedInUser)) {
    return 'SUPERADMIN';
  }

  return 'REGULAR';
};

export const getUserRole = (user: RegisteredUser): UserRole => {
  if (user.roleName === 'SuperAdmin') {
    return 'SUPERADMIN';
  }

  return 'REGULAR';
};

export const getUserRoleScenario = (userRole: UserRole, superAdminRoute: boolean): UserRole => {
  if (
    userRole === 'SUPERADMIN' &&
    superAdminRoute
  ) {
    return 'SUPERADMIN';
  }

  return 'REGULAR';
};

export const navigate: NavigateFunction = (
  storeState: StoreState,
  history,
  url,
  isExternal = false,
  basePath = null,
): void => {
  if (!url) {
    return;
  }

  if (isExternal) {
    window.open(url);
  }

  const navigationBlockersList = storeState.router.navigation.blockersList.data;
  const navigationBlockersIdsList = navigationBlockersList.map(item => item.id);
  const navigationBlockersListLength = navigationBlockersList.length;
  const navigationIsBlocked = navigationBlockersListLength > 0;
  const pushableUrl = (basePath && url.startsWith(basePath)) ?
    url :
    `${basePath || ''}${url}`;
  const urlAfterUnblocked = (navigationBlockersListLength > 0) ? pushableUrl : null;

  history.push(
    pushableUrl,
    {
      navigation: {
        blockersIdsList: navigationBlockersIdsList,
        isBlocked: navigationIsBlocked,
        urlAfterUnblocked,
      },
    },
  );
};

export const parseDate = (value: string): Date => {
  const millisec = Date.parse(value);

  return new Date(millisec);
};

const deepCopyRecursive = (source: Object, target: Object): Object => {
  const keysList = Object.keys(source);
  const keysListLength = keysList.length;
  for (let i = 0; i < keysListLength; i++) { // eslint-disable-line no-plusplus
    const key = keysList[i];
    const value = source[key];
    if (
      typeof value === 'object' &&
      value !== null &&
      Object.keys(value).length > 0
    ) {
      const subTarget = {};
      target[key] = deepCopyRecursive(value, subTarget); // eslint-disable-line no-param-reassign
    } else {
      target[key] = source[key]; // eslint-disable-line no-param-reassign
    }
  }

  return target;
};

export const getDeepCopy = (source: Object): Object | Error => {
  try {
    const target = {};

    return deepCopyRecursive(source, target);
  } catch (error) {
    const message = 'COULD NOT PERFORM DEEP COPY OF AN OBJECT WITH THE FOLLOWING KEYS:';
    const keysList = Object.keys(source).reduce((accumulator, key) => `${accumulator}\n${key}`);

    return new Error(`${message}\n${keysList})`);
  }
};
export const getQuickDeepCopy = (object: Object): Object => JSON.parse(JSON.stringify(object));

export const b64toBlob = (b64Data: string, contentType?: string): Blob =>
  b64toBlobImported(b64Data, contentType);

export const getEncodedImageInfo = (value: string): ?{
  contentType: string,
  encodedContent: string,
} => {
  const splitResult = value.split(',');
  if (splitResult.length === 2) {
    const [rest, encodedContent] = splitResult;
    const splitRest = rest.split(';');

    if (splitRest.length === 2) {
      const firstPartOfRest = splitRest[0];
      const splitFirstPartOfRest = firstPartOfRest.split(':');

      if (splitFirstPartOfRest.length === 2) {
        const contentType = splitFirstPartOfRest[1];

        return { contentType, encodedContent };
      }
    }
  }

  return null;
};

export const encodeImage = (
  files: Array<Object>,
  afterEncodingCallback: (image: ImageForUpload) => void,
): void => {
  const reader = new FileReader(); // eslint-disable-line no-undef
  reader.onloadend = (): void => {
    const result = reader.result.toString();
    const encodedInfo = getEncodedImageInfo(result);

    if (encodedInfo) {
      const { contentType, encodedContent } = encodedInfo;
      const file = files[0];
      const fileName: string = file.name;
      const filePath: string = result;
      const encodedImage = {
        contentType,
        encodedContent,
        fileName,
        filePath,
      };

      const imageToUpload: ImageForUpload = new ImageForUpload(encodedImage, file);
      afterEncodingCallback(imageToUpload);
    }
  };

  reader.readAsDataURL(files[0]);
};

const buildObjectTreeRecursively = (object: Object, result: Object): void => {
  Object.keys(object).forEach((key) => {
    if (typeof object[key] === 'object' && !Array.isArray(object[key])) {
      const nestedResult = {};
      buildObjectTreeRecursively(object[key], nestedResult);
      result[key] = nestedResult; // eslint-disable-line no-param-reassign
    }

    const afterSplit = key.split('.');
    const { length } = afterSplit;
    if (afterSplit.length > 1) {
      let index = 0;
      let branch = result;
      while (index <= length - 1) {
        const prop = afterSplit[index];
        if (prop !== '') {
          if (index === length - 1) {
            branch[prop] = object[key]; // eslint-disable-line no-param-reassign
          } else if (!branch[prop]) {
            branch[prop] = {}; // eslint-disable-line no-param-reassign
            branch = branch[prop];
          } else {
            branch = branch[prop];
          }
        }
        index += 1;
      }
    } else {
      result[key] = object[key]; // eslint-disable-line no-param-reassign
    }
  });
};

export const transformDotttedPropsIntoTrees = (object: Object): Object => {
  const result = {};
  buildObjectTreeRecursively(object, result);

  return result;
};

const mergeObjectsRecursively = (source: Object, result: Object): void => {
  Object.keys(source).forEach((key) => {
    if (
      typeof source[key] === 'object' &&
      result[key] &&
      typeof result[key] === 'object'
    ) {
      mergeObjectsRecursively(source[key], result[key]);
    } else {
      result[key] = source[key]; // eslint-disable-line no-param-reassign
    }
  });
};

export const deepMerge = (source: Object, target: Object): Object => {
  const result = { ...target };
  mergeObjectsRecursively(source, result);

  return result;
};

export const getUniqueId = (): string => {
  const now = Date.now();
  const random = Math.round(Math.random() * 1000000);

  return (now + random).toString();
};

export const isMobileDevice = (): boolean => {
  const detector = new MobileDetect(window.navigator.userAgent);

  return !!detector.mobile();
};

export const getModalBodyMaxHeight = (storeState: StoreState): number => {
  const windowHeight = getWindowHeight(storeState);
  const modalBodyMaxHeight = (
    windowHeight &&
    (
      windowHeight -
      (2 * parseIntFromPixelDimension(getStyleVariable(storeState, 'modalMarginVertical') || '0')) -
      parseIntFromPixelDimension(getStyleVariable(storeState, 'modalHeaderMaxHeight') || '0')
    )
  ) || 200;

  return modalBodyMaxHeight;
};
