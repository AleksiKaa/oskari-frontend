import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'oskari-ui';

const iconSize = '24px';
const mobileIconSize = '32px';
const defaultColor = '#ffffff';

const ShadowIconSvg = ({ fill = defaultColor, isMobile }) => (
    <svg width={isMobile ? mobileIconSize : iconSize} height={isMobile ? mobileIconSize : iconSize} viewBox="0 0 24 24">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path d="M12,19.7596899 C12.3248508,19.7596899 12.59332,20.0002863 12.635809,20.3124437 L12.6416667,20.3992248 L12.6416667,22.3604651 L12.635809,22.4472462 C12.59332,22.7594037 12.3248508,23 12,23 C11.6751492,23 11.40668,22.7594037 11.364191,22.4472462 L11.3583333,22.3604651 L11.3583333,20.3992248 L11.364191,20.3124437 C11.40668,20.0002863 11.6751492,19.7596899 12,19.7596899 Z M6.25399115,17.0989392 C6.47704061,17.3219887 6.49934555,17.6697648 6.32090599,17.9177596 L6.25399115,17.9964209 L4.75818835,19.4922237 L4.68701121,19.5536699 C4.43857072,19.7380082 4.08600914,19.7175262 3.86070666,19.4922237 C3.63765721,19.2691743 3.61535227,18.9213982 3.79379183,18.6734034 L3.86070666,18.594742 L5.35650947,17.0989392 L5.42768661,17.0374931 L5.51403905,16.9836329 C5.75290302,16.8602349 6.05372229,16.8986704 6.25399115,17.0989392 Z M18.1417523,17.0320244 L18.2204136,17.0989392 L19.5965522,18.4750778 L19.6579983,18.546255 C19.8423367,18.7946955 19.8218547,19.147257 19.5965522,19.3725595 C19.3735027,19.595609 19.0257266,19.6179139 18.7777319,19.4394743 L18.6990705,19.3725595 L17.3229319,17.9964209 L17.2614858,17.9252438 C17.0771474,17.6768033 17.0976294,17.3242417 17.3229319,17.0989392 C17.5459814,16.8758898 17.8937575,16.8535848 18.1417523,17.0320244 Z M12.1375,6.90958485 C14.9978748,6.90958485 17.3166667,9.22837675 17.3166667,12.0887515 C17.3166667,14.9491263 14.9978748,17.2679182 12.1375,17.2679182 C9.27712523,17.2679182 6.95833333,14.9491263 6.95833333,12.0887515 C6.95833333,9.22837675 9.27712523,6.90958485 12.1375,6.90958485 Z M10.7049503,8.36775922 L10.6700598,8.37994174 C9.19397824,8.96446091 8.15,10.4046891 8.15,12.0887515 C8.15,14.290987 9.93526456,16.0762515 12.1375,16.0762515 C13.7849523,16.0762515 15.1990568,15.0771703 15.806982,13.651839 L15.923469,13.6207248 C15.5515425,13.7275471 15.1598445,13.7845848 14.7548246,13.7845848 C12.4233593,13.7845848 10.5333333,11.8945588 10.5333333,9.56309362 C10.5333333,9.14792436 10.5932655,8.74675302 10.7049503,8.36775922 Z M22.3653846,11.3583333 L22.4514982,11.364191 C22.7612544,11.40668 23,11.6751492 23,12 C23,12.3248508 22.7612544,12.59332 22.4514982,12.635809 L22.3653846,12.6416667 L20.25,12.6416667 L20.1638865,12.635809 C19.8541302,12.59332 19.6153846,12.3248508 19.6153846,12 C19.6153846,11.6751492 19.8541302,11.40668 20.1638865,11.364191 L20.25,11.3583333 L22.3653846,11.3583333 Z M3.75,11.3583333 L3.83611355,11.364191 C4.14586979,11.40668 4.38461538,11.6751492 4.38461538,12 C4.38461538,12.3248508 4.14586979,12.59332 3.83611355,12.635809 L3.75,12.6416667 L1.63461538,12.6416667 L1.54850184,12.635809 C1.23874559,12.59332 1,12.3248508 1,12 C1,11.6751492 1.23874559,11.40668 1.54850184,11.364191 L1.63461538,11.3583333 L3.75,11.3583333 Z M4.97868755,3.86895971 L5.05734891,3.93587454 L6.55315172,5.43167735 L6.61459785,5.50285448 C6.79893624,5.75129498 6.77845419,6.10385656 6.55315172,6.32915903 C6.33010226,6.55220848 5.98232617,6.57451343 5.73433139,6.39607387 L5.65567003,6.32915903 L4.15986723,4.83335623 L4.0984211,4.76217909 C3.91408271,4.5137386 3.93456475,4.16117702 4.15986723,3.93587454 C4.38291668,3.71282509 4.73069277,3.69052015 4.97868755,3.86895971 Z M19.4170559,3.93587454 C19.6401053,4.15892399 19.6624102,4.50670009 19.4839707,4.75469487 L19.4170559,4.83335623 L17.921253,6.32915903 L17.8500759,6.39060516 C17.6016354,6.57494355 17.2490738,6.55446151 17.0237714,6.32915903 C16.8007219,6.10610958 16.778417,5.75833348 16.9568565,5.5103387 L17.0237714,5.43167735 L18.5195742,3.93587454 L18.5907513,3.87442841 C18.8391918,3.69009002 19.1917534,3.71057207 19.4170559,3.93587454 Z M12,1 C12.3248508,1 12.59332,1.24059633 12.635809,1.55275379 L12.6416667,1.63953488 L12.6416667,3.77131783 L12.635809,3.85809892 C12.59332,4.17025638 12.3248508,4.41085271 12,4.41085271 C11.6751492,4.41085271 11.40668,4.17025638 11.364191,3.85809892 L11.3583333,3.77131783 L11.3583333,1.63953488 L11.364191,1.55275379 C11.40668,1.24059633 11.6751492,1 12,1 Z" fill={fill}></path>
        </g>
    </svg>
);
ShadowIconSvg.propTypes = {
    fill: PropTypes.string,
    isMobile: PropTypes.bool
};

export const ShadowIcon = ({ fill, isMobile, ...rest }) => <Icon component={() => <ShadowIconSvg fill={fill} isMobile={isMobile}/>} {...rest} />;
ShadowIcon.propTypes = {
    fill: PropTypes.string,
    isMobile: PropTypes.bool
};
