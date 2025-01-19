/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1cbd3f9e.js');
const debounce = require('./debounce-1f7e1176.js');
const isDefined = require('./isDefined-5f750401.js');
const isHTMLElement = require('./isHTMLElement-729e6be0.js');
const isNil = require('./isNil-f93429a2.js');
const isString = require('./isString-f8847c11.js');
const slot = require('./slot-2fee189a.js');

const bqSelectCss = ".transform{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}::backdrop,:root{--bq-blue-100:#e7f0fd;--bq-blue-200:#d0e2fb;--bq-blue-300:#a1c5f7;--bq-blue-400:#73a8f3;--bq-blue-500:#448bef;--bq-blue-600:#156eeb;--bq-blue-700:#1158bc;--bq-blue-800:#0d428d;--bq-blue-900:#082c5e;--bq-blue-1000:#04162f;--bq-corai-100:#fff2f2;--bq-corai-200:#ffe6e6;--bq-corai-300:#ffccce;--bq-corai-400:#ffb3b5;--bq-corai-500:#ff999d;--bq-corai-600:#ff8084;--bq-corai-700:#cc666a;--bq-corai-800:#994d4f;--bq-corai-900:#663335;--bq-corai-1000:#331a1a;--bq-cyan-100:#e8f7fb;--bq-cyan-200:#d2f0f8;--bq-cyan-300:#a5e1f1;--bq-cyan-400:#78d1e9;--bq-cyan-500:#4bc2e2;--bq-cyan-600:#1eb3db;--bq-cyan-700:#188faf;--bq-cyan-800:#126b83;--bq-cyan-900:#0c4858;--bq-cyan-1000:#06242c;--bq-gold-100:#fbf4ec;--bq-gold-200:#f7e9da;--bq-gold-300:#f0d3b6;--bq-gold-400:#e8bc91;--bq-gold-500:#e1a66d;--bq-gold-600:#d99048;--bq-gold-700:#ae733a;--bq-gold-800:#82562b;--bq-gold-900:#573a1d;--bq-gold-1000:#2b1d0e;--bq-green-100:#e8f8ef;--bq-green-200:#d2f1e0;--bq-green-300:#a5e3c1;--bq-green-400:#78d5a1;--bq-green-500:#4bc782;--bq-green-600:#1eb963;--bq-green-700:#18944f;--bq-green-800:#126f3b;--bq-green-900:#0c4a28;--bq-green-1000:#062514;--bq-grey-100:#f1f2f4;--bq-grey-200:#e7e8eb;--bq-grey-300:#caccd2;--bq-grey-400:#a6aab3;--bq-grey-50:#f6f6f8;--bq-grey-500:#898e99;--bq-grey-600:#646a77;--bq-grey-700:#3f4350;--bq-grey-800:#2a2c35;--bq-grey-900:#1c1d23;--bq-grey-950:#15161a;--bq-grey-1000:#0d0e11;--bq-indigo-100:#edecfc;--bq-indigo-200:#dcdafa;--bq-indigo-300:#b9b5f5;--bq-indigo-400:#9590ef;--bq-indigo-500:#726bea;--bq-indigo-600:#4f46e5;--bq-indigo-700:#3f38b7;--bq-indigo-800:#2f2a89;--bq-indigo-900:#201c5c;--bq-indigo-1000:#100e2e;--bq-iris-100:#e9f0ff;--bq-iris-200:#d6e0ff;--bq-iris-300:#b2c0fe;--bq-iris-400:#8691f8;--bq-iris-500:#6061ee;--bq-iris-600:#4f46e5;--bq-iris-700:#413abd;--bq-iris-800:#332e95;--bq-iris-900:#26216d;--bq-iris-1000:#181545;--bq-lime-100:#f5fae8;--bq-lime-200:#ecf6d2;--bq-lime-300:#d9eda5;--bq-lime-400:#c5e379;--bq-lime-500:#b2da4c;--bq-lime-600:#9fd11f;--bq-lime-700:#7fa719;--bq-lime-800:#5f7d13;--bq-lime-900:#40540c;--bq-lime-1000:#202a06;--bq-magenta-100:#fce7f4;--bq-magenta-200:#f9cfea;--bq-magenta-300:#f39fd6;--bq-magenta-400:#ee6fbf;--bq-magenta-500:#e83fab;--bq-magenta-600:#de1395;--bq-magenta-700:#b20f77;--bq-magenta-800:#850c59;--bq-magenta-900:#58083c;--bq-magenta-1000:#2c041e;--bq-neutral-white:#fbfbfc;--bq-neutral-black:#060708;--bq-orange-100:#fbf0e9;--bq-orange-200:#f8e1d4;--bq-orange-300:#f1c2a8;--bq-orange-400:#eaa47d;--bq-orange-500:#e38551;--bq-orange-600:#dc6726;--bq-orange-700:#b0521e;--bq-orange-800:#843e17;--bq-orange-900:#58290f;--bq-orange-1000:#2c1508;--bq-purple-100:#efebf8;--bq-purple-200:#e0d7f2;--bq-purple-300:#c1afe5;--bq-purple-400:#a388d8;--bq-purple-500:#8460cb;--bq-purple-600:#6538be;--bq-purple-700:#512d98;--bq-purple-800:#3d2272;--bq-purple-900:#28164c;--bq-purple-1000:#140b26;--bq-red-100:#fce7ea;--bq-red-200:#f9d1d5;--bq-red-300:#f3a2ac;--bq-red-400:#ed7482;--bq-red-500:#e74559;--bq-red-600:#e1172f;--bq-red-700:#b41226;--bq-red-800:#870e1c;--bq-red-900:#5a0913;--bq-red-1000:#2d0509;--bq-sky-100:#eff4fb;--bq-sky-200:#dfeaf8;--bq-sky-300:#bfd5f1;--bq-sky-400:#9ec1e9;--bq-sky-500:#7eace2;--bq-sky-600:#5e97db;--bq-sky-700:#4b79af;--bq-sky-800:#385b83;--bq-sky-900:#263c58;--bq-sky-1000:#131e2c;--bq-teal-100:#e5f7f5;--bq-teal-200:#ccf0eb;--bq-teal-300:#99e1d8;--bq-teal-400:#66d2c4;--bq-teal-500:#33c3b1;--bq-teal-600:#00b49d;--bq-teal-700:#00907e;--bq-teal-800:#006c5e;--bq-teal-900:#00483f;--bq-teal-1000:#00241f;--bq-volcano-100:#feede7;--bq-volcano-200:#fddbd1;--bq-volcano-300:#fbb8a3;--bq-volcano-400:#fa9474;--bq-volcano-500:#f87146;--bq-volcano-600:#f64d18;--bq-volcano-700:#c53e13;--bq-volcano-800:#942e0e;--bq-volcano-900:#621f0a;--bq-volcano-1000:#310f05;--bq-yellow-100:#fefbe7;--bq-yellow-200:#fcf6d0;--bq-yellow-300:#faeea0;--bq-yellow-400:#f7e571;--bq-yellow-500:#f5dd41;--bq-yellow-600:#f2d412;--bq-yellow-700:#c2aa0e;--bq-yellow-800:#917f0b;--bq-yellow-900:#615507;--bq-yellow-1000:#302a04;--bq-endava-grey-50:#f7f7f8;--bq-endava-grey-100:#e4e6e7;--bq-endava-grey-200:#b5babe;--bq-endava-grey-300:#949ca1;--bq-endava-grey-400:#737d84;--bq-endava-grey-500:#525f67;--bq-endava-grey-600:#30404b;--bq-endava-grey-700:#2b3942;--bq-endava-grey-800:#263139;--bq-endava-grey-900:#192b37;--bq-endava-grey-950:#151b1e;--bq-endava-grey-1000:#0f1316;--bq-endava-neutral-white:#fafbfb;--bq-endava-neutral-black:#060708;--bq-endava-orange-100:#fef3f1;--bq-endava-orange-200:#fbd6d1;--bq-endava-orange-300:#fab7af;--bq-endava-orange-400:#fa988b;--bq-endava-orange-500:#fc7866;--bq-endava-orange-600:#ff5640;--bq-endava-orange-700:#ce4a39;--bq-endava-orange-800:#a03d30;--bq-endava-orange-900:#722e25;--bq-endava-orange-1000:#471e19;--bq-flypass-green-100:#e1ea80;--bq-flypass-green-200:#d9e560;--bq-flypass-green-300:#d1e040;--bq-flypass-green-400:#cada20;--bq-flypass-green-500:#c2d500;--bq-flypass-green-600:#afbf00;--bq-flypass-green-700:#9baa00;--bq-flypass-green-800:#889500;--bq-flypass-green-900:#738000;--bq-flypass-dark-grey-100:#bbb;--bq-flypass-dark-grey-200:#a4a4a4;--bq-flypass-dark-grey-300:#8d8d8d;--bq-flypass-dark-grey-400:#767676;--bq-flypass-dark-grey-500:#606060;--bq-flypass-dark-grey-600:#494949;--bq-flypass-dark-grey-700:#323232;--bq-flypass-dark-grey-800:#2c2c2c;--bq-flypass-dark-grey-900:#272727;--bq-flypass-sky-100:#a0e1f0;--bq-flypass-sky-200:#5fcde5;--bq-flypass-sky-300:#11b5d9;--bq-flypass-sky-400:#0f9ebd;--bq-flypass-sky-500:#0d87a2;--bq-flypass-sky-600:#0a6f86;--bq-flypass-sky-700:#085a6c;--bq-flypass-sky-800:#074553;--bq-flypass-sky-900:#05303a;--bq-flypass-blue-100:#cfe3f7;--bq-flypass-blue-200:#a0c8f0;--bq-flypass-blue-300:#70ace8;--bq-flypass-blue-400:#4191e1;--bq-flypass-blue-500:#1175d9;--bq-flypass-blue-600:#0e5eae;--bq-flypass-blue-700:#0a4682;--bq-flypass-blue-800:#072f57;--bq-flypass-blue-900:#03172b;--bq-flypass-orange-100:#ffddc7;--bq-flypass-orange-200:#ffccab;--bq-flypass-orange-300:#ffab74;--bq-flypass-orange-400:#ff812d;--bq-flypass-orange-500:#e17228;--bq-flypass-orange-600:#c16222;--bq-flypass-orange-700:#9f501c;--bq-flypass-orange-800:#804117;--bq-flypass-orange-900:#633211;--bq-flypass-violet-100:#e3cdff;--bq-flypass-violet-200:#b179ff;--bq-flypass-violet-300:#9747ff;--bq-flypass-violet-400:#7c3bd2;--bq-flypass-violet-500:#6a32b4;--bq-flypass-violet-600:#5b2b9b;--bq-flypass-violet-700:#4f2585;--bq-flypass-violet-800:#4f2585;--bq-flypass-violet-900:#391c62;--bq-flypass-yellow-100:#ffdf8e;--bq-flypass-yellow-200:#ffd773;--bq-flypass-yellow-300:#ffcf57;--bq-flypass-yellow-400:#ffc73a;--bq-flypass-yellow-500:#ffbf1f;--bq-flypass-yellow-600:#dfa61d;--bq-flypass-yellow-700:#bf8f18;--bq-flypass-yellow-800:#9f7713;--bq-flypass-yellow-900:#806010;--bq-flypass-red-100:#f9cccc;--bq-flypass-red-200:#f6adad;--bq-flypass-red-300:#ef8e8c;--bq-flypass-red-400:#ed6766;--bq-flypass-red-500:#e84241;--bq-flypass-red-600:#bc3535;--bq-flypass-red-700:#982c2b;--bq-flypass-red-800:#752121;--bq-flypass-red-900:#541718;--bq-flypass-blue-grey-100:#d3d7dd;--bq-flypass-blue-grey-200:#bcc2cb;--bq-flypass-blue-grey-300:#a5adbb;--bq-flypass-blue-grey-400:#8f98aa;--bq-flypass-blue-grey-500:#798499;--bq-flypass-blue-grey-600:#657189;--bq-flypass-blue-grey-700:#545e72;--bq-flypass-blue-grey-800:#434c5c;--bq-flypass-blue-grey-900:#343a47;--bq-flypass-grey-100:#fff;--bq-flypass-grey-200:#f5f5f5;--bq-flypass-grey-300:#efefef;--bq-flypass-grey-400:#e9e9e9;--bq-flypass-grey-500:#e3e3e3;--bq-flypass-grey-600:#dcdcdc;--bq-flypass-grey-700:#d6d6d6;--bq-flypass-grey-800:#d0d0d0;--bq-flypass-grey-900:#cacaca;--bq-flypass-light-100:#fff;--bq-flypass-light-200:#f5f5f5;--bq-flypass-light-300:#f4f7fa;--bq-flypass-light-400:#dde8f2;--bq-flypass-light-500:#d3d7dd;--bq-flypass-light-600:#657189;--bq-flypass-dart-100:#a1a1a1;--bq-flypass-dart-200:#515151;--bq-flypass-dart-300:#404040;--bq-flypass-dart-400:#2a2a2a;--bq-flypass-dart-500:#1b1b1b;--bq-flypass-dart-600:#0e100f}*,:after,:before{box-sizing:border-box}*{margin:0}[class^=bq-] *{font:inherit}ol[role=list],ul[role=list]{list-style-type:none}html:focus-within{scroll-behavior:smooth}[class^=bq-]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--bq-text--primary);font-family:var(--bq-font-family);font-size:var(--bq-font-size--m);letter-spacing:var(--bq-font-letter-spacing);line-height:var(--bq-font-line-height--regular);text-rendering:optimizeSpeed}a:not([class]){text-decoration-skip-ink:auto}canvas,img,picture,svg,video{display:block;max-width:100%}button,input,select,textarea{font:inherit}h1,h2,h3,h4,h5,h6,p{overflow-wrap:break-word}@media (prefers-reduced-motion:reduce){html:focus-within{scroll-behavior:auto}*,:after,:before{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto;transition-duration:.01ms!important}}:root{--bq-white:#fff;--bq-black:#060708;--bq-neutral-50:var(--bq-grey-50);--bq-neutral-100:var(--bq-grey-100);--bq-neutral-200:var(--bq-grey-200);--bq-neutral-300:var(--bq-grey-300);--bq-neutral-400:var(--bq-grey-400);--bq-neutral-500:var(--bq-grey-500);--bq-neutral-600:var(--bq-grey-600);--bq-neutral-700:var(--bq-grey-700);--bq-neutral-800:var(--bq-grey-800);--bq-neutral-900:var(--bq-grey-900);--bq-neutral-950:var(--bq-grey-950);--bq-neutral-1000:var(--bq-grey-1000);--bq-brand-light:var(--bq-iris-100);--bq-brand:var(--bq-iris-600);--bq-brand-dark:var(--bq-iris-1000);--bq-accent-light:var(--bq-purple-100);--bq-accent:var(--bq-purple-600);--bq-accent-dark:var(--bq-purple-1000);--bq-success-light:var(--bq-teal-100);--bq-success:var(--bq-teal-600);--bq-success-dark:var(--bq-teal-1000);--bq-danger-light:var(--bq-red-100);--bq-danger:var(--bq-red-600);--bq-danger-dark:var(--bq-red-1000);--bq-warning-light:var(--bq-gold-100);--bq-warning:var(--bq-gold-600);--bq-warning-dark:var(--bq-gold-1000);--bq-info-light:var(--bq-iris-100);--bq-info:var(--bq-iris-600);--bq-info-dark:var(--bq-iris-1000);--bq-focus:var(--bq-iris-600);--bq-data-01:var(--bq-brand);--bq-data-02:var(--bq-purple-600);--bq-data-03:var(--bq-magenta-600);--bq-data-04:var(--bq-cyan-600);--bq-data-05:var(--bq-teal-600);--bq-data-06:var(--bq-orange-600);--bq-data-07:var(--bq-yellow-600);--bq-data-08:var(--bq-red-600);--bq-data-09:var(--bq-blue-600);--bq-data-10:var(--bq-grey-600);--bq-data-11:var(--bq-black);--bq-data-12:var(--bq-white);--bq-radius--none:0;--bq-radius--xs2:0.125rem;--bq-radius--xs:0.313rem;--bq-radius--s:0.625rem;--bq-radius--m:0.75rem;--bq-radius--l:1.5rem;--bq-radius--full:9999px;--bq-box-shadow--xs:0 2px 0 rgba(0,0,0,.016);--bq-box-shadow--s:0 8px 24px rgba(0,0,0,.04);--bq-box-shadow--m:0 10px 48px -16px rgba(0,0,0,.12);--bq-box-shadow--l:0 20px 58px -16px rgba(0,0,0,.16);--bq-font-family:\"Outfit\",sans-serif;--bq-font-size--xs:0.75rem;--bq-font-size--s:0.875rem;--bq-font-size--m:1rem;--bq-font-size--l:1.125rem;--bq-font-size--xl:1.5rem;--bq-font-size--xxl:2rem;--bq-font-size--xxl2:2.5rem;--bq-font-size--xxl3:3rem;--bq-font-size--xxl4:3.5rem;--bq-font-size--xxl5:4rem;--bq-font-weight--thin:100;--bq-font-weight--light:300;--bq-font-weight--regular:400;--bq-font-weight--medium:500;--bq-font-weight--semibold:600;--bq-font-weight--bold:700;--bq-font-line-height--small:1.2;--bq-font-line-height--regular:1.5;--bq-font-line-height--large:1.5;--bq-spacing-xs3:0.125rem;--bq-spacing-xs2:0.25rem;--bq-spacing-xs:0.5rem;--bq-spacing-s:0.75rem;--bq-spacing-m:1rem;--bq-spacing-l:1.5rem;--bq-spacing-xl:2rem;--bq-spacing-xxl:2.5rem;--bq-spacing-xxl2:3.5rem;--bq-spacing-xxl3:4rem;--bq-spacing-xxl4:4.5rem;--bq-stroke-s:1px;--bq-stroke-m:2px;--bq-stroke-l:3px}.beeq.light,.light,:root,[bq-mode=light]{--bq-background--primary:var(--bq-white);--bq-background--secondary:var(--bq-neutral-100);--bq-background--tertiary:var(--bq-neutral-200);--bq-background--alt:var(--bq-neutral-300);--bq-background--inverse:var(--bq-neutral-900);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-800);--bq-icon--alt:var(--bq-white);--bq-icon--secondary:var(--bq-neutral-600);--bq-icon--inverse:var(--bq-neutral-50);--bq-icon--brand:var(--bq-brand);--bq-icon--info:var(--bq-brand);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-200);--bq-stroke--secondary:var(--bq-neutral-600);--bq-stroke--tertiary:var(--bq-neutral-900);--bq-stroke--inverse:var(--bq-white);--bq-stroke--brand:var(--bq-brand);--bq-stroke--alt:var(--bq-neutral-50);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-brand);--bq-text--primary:var(--bq-neutral-800);--bq-text--secondary:var(--bq-neutral-600);--bq-text--inverse:var(--bq-neutral-50);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-white);--bq-text--info:var(--bq-brand);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-white);--bq-ui--secondary:var(--bq-neutral-200);--bq-ui--tertiary:var(--bq-neutral-500);--bq-ui--inverse:var(--bq-neutral-900);--bq-ui--brand:var(--bq-brand);--bq-ui--brand-alt:var(--bq-brand-light);--bq-ui--alt:var(--bq-neutral-50);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-light);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-light);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-light);--bq-ui--info:var(--bq-brand);--bq-ui--info-alt:var(--bq-brand-light);--bq-hover:#bcbfc5;--bq-active:#444546}.beeq.dark,.dark,[bq-mode=dark]{--bq-background--primary:var(--bq-neutral-1000);--bq-background--secondary:var(--bq-neutral-950);--bq-background--tertiary:var(--bq-neutral-800);--bq-background--alt:var(--bq-neutral-700);--bq-background--inverse:var(--bq-neutral-600);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-100);--bq-icon--secondary:var(--bq-neutral-400);--bq-icon--inverse:var(--bq-neutral-800);--bq-icon--brand:var(--bq-brand);--bq-icon--alt:var(--bq-white);--bq-icon--info:var(--bq-brand);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-900);--bq-stroke--secondary:var(--bq-neutral-700);--bq-stroke--tertiary:var(--bq-neutral-400);--bq-stroke--inverse:var(--bq-neutral-950);--bq-stroke--brand:var(--bq-brand);--bq-stroke--alt:var(--bq-neutral-1000);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-brand);--bq-text--primary:var(--bq-neutral-100);--bq-text--secondary:var(--bq-neutral-400);--bq-text--inverse:var(--bq-neutral-800);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-white);--bq-text--info:var(--bq-brand);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-neutral-900);--bq-ui--secondary:var(--bq-neutral-800);--bq-ui--tertiary:var(--bq-neutral-700);--bq-ui--inverse:var(--bq-neutral-100);--bq-ui--brand:var(--bq-brand);--bq-ui--brand-alt:var(--bq-brand-dark);--bq-ui--alt:var(--bq-neutral-950);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-dark);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-dark);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-dark);--bq-ui--info:var(--bq-brand);--bq-ui--info-alt:var(--bq-brand-dark);--bq-hover:#444546;--bq-active:#1f2026}.endava,[bq-theme=endava]{--bq-font-family:\"Poppins\",sans-serif;--bq-white:#fafbfb;--bq-black:#030406;--bq-neutral-50:var(--bq-endava-grey-50);--bq-neutral-100:var(--bq-endava-grey-100);--bq-neutral-200:var(--bq-endava-grey-200);--bq-neutral-300:var(--bq-endava-grey-300);--bq-neutral-400:var(--bq-endava-grey-400);--bq-neutral-500:var(--bq-endava-grey-500);--bq-neutral-600:var(--bq-endava-grey-600);--bq-neutral-700:var(--bq-endava-grey-700);--bq-neutral-800:var(--bq-endava-grey-800);--bq-neutral-900:var(--bq-endava-grey-900);--bq-neutral-950:var(--bq-endava-grey-950);--bq-neutral-1000:var(--bq-endava-grey-1000);--bq-brand-light:var(--bq-endava-orange-100);--bq-brand:var(--bq-endava-orange-600);--bq-brand-dark:var(--bq-endava-orange-1000);--bq-accent-light:var(--bq-endava-orange-100);--bq-accent:var(--bq-endava-orange-600);--bq-accent-dark:var(--bq-endava-orange-1000);--bq-success-light:var(--bq-green-100);--bq-success:var(--bq-green-600);--bq-success-dark:var(--bq-green-1000);--bq-danger-light:var(--bq-corai-100);--bq-danger:var(--bq-corai-600);--bq-danger-dark:var(--bq-corai-1000);--bq-warning-light:var(--bq-yellow-100);--bq-warning:var(--bq-yellow-600);--bq-warning-dark:var(--bq-yellow-1000);--bq-info-light:var(--bq-blue-100);--bq-info:var(--bq-blue-600);--bq-info-dark:var(--bq-blue-1000);--bq-focus:var(--bq-endava-orange-600);--bq-data-01:var(--bq-brand);--bq-data-02:#af0cd8;--bq-data-03:#0ca8d8;--bq-data-04:var(--bq-teal-600);--bq-data-05:var(--bq-yellow-600);--bq-data-06:var(--bq-orange-600);--bq-data-07:var(--bq-blue-600);--bq-data-08:var(--bq-red-600);--bq-data-09:var(--bq-purple-600);--bq-data-10:#394b56;--bq-data-11:var(--bq-black);--bq-data-12:var(--bq-white)}.endava.light,[bq-theme=endava][bq-mode=light]{--bq-background--primary:var(--bq-white);--bq-background--secondary:var(--bq-neutral-100);--bq-background--tertiary:var(--bq-neutral-200);--bq-background--alt:var(--bq-neutral-300);--bq-background--inverse:var(--bq-neutral-900);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-800);--bq-icon--secondary:var(--bq-neutral-600);--bq-icon--inverse:var(--bq-neutral-50);--bq-icon--brand:var(--bq-brand);--bq-icon--alt:var(--bq-white);--bq-icon--info:var(--bq-info);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-200);--bq-stroke--secondary:var(--bq-neutral-600);--bq-stroke--tertiary:var(--bq-neutral-900);--bq-stroke--inverse:var(--bq-white);--bq-stroke--brand:var(--bq-brand);--bq-stroke--alt:var(--bq-neutral-50);--bq-stroke--brand-alt:var(--bq-brand-light);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-info);--bq-text--primary:var(--bq-neutral-800);--bq-text--secondary:var(--bq-neutral-600);--bq-text--inverse:var(--bq-neutral-50);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-white);--bq-text--info:var(--bq-info);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-white);--bq-ui--secondary:var(--bq-neutral-200);--bq-ui--tertiary:var(--bq-neutral-500);--bq-ui--inverse:var(--bq-neutral-900);--bq-ui--alt:var(--bq-neutral-50);--bq-ui--brand-alt:var(--bq-brand-light);--bq-ui--brand:var(--bq-brand);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-light);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-light);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-light);--bq-ui--info:var(--bq-info);--bq-ui--info-alt:var(--bq-info-light);--bq-hover:#444546;--bq-active:#1f2026}.endava.dark,[bq-theme=endava][bq-mode=dark]{--bq-background--primary:var(--bq-neutral-1000);--bq-background--secondary:var(--bq-neutral-900);--bq-background--tertiary:var(--bq-neutral-800);--bq-background--alt:var(--bq-neutral-700);--bq-background--inverse:var(--bq-neutral-600);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-100);--bq-icon--secondary:var(--bq-neutral-400);--bq-icon--inverse:var(--bq-neutral-800);--bq-icon--brand:var(--bq-brand);--bq-icon--alt:var(--bq-white);--bq-icon--info:var(--bq-info);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-900);--bq-stroke--secondary:var(--bq-neutral-700);--bq-stroke--tertiary:var(--bq-neutral-400);--bq-stroke--inverse:var(--bq-neutral-950);--bq-stroke--brand:var(--bq-brand);--bq-stroke--brand-alt:var(--bq-brand-dark);--bq-stroke--alt:var(--bq-neutral-1000);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-info);--bq-text--primary:var(--bq-neutral-100);--bq-text--secondary:var(--bq-neutral-400);--bq-text--inverse:var(--bq-neutral-800);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-neutral-white);--bq-text--info:var(--bq-info);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-neutral-900);--bq-ui--secondary:var(--bq-neutral-800);--bq-ui--tertiary:var(--bq-neutral-700);--bq-ui--inverse:var(--bq-neutral-100);--bq-ui--brand:var(--bq-brand);--bq-ui--brand-alt:var(--bq-brand-dark);--bq-ui--alt:var(--bq-neutral-950);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-dark);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-dark);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-dark);--bq-ui--info:var(--bq-info);--bq-ui--info-alt:var(--bq-info-dark);--bq-hover:#444546;--bq-active:#1f2026}.flypass,[bq-theme=flypass]{--bq-font-family:\"Inter\",sans-serif;--bq-white:#fff;--bq-black:#0e100f;--bq-neutral-50:var(--bq-flypass-dark-grey-100);--bq-neutral-100:var(--bq-flypass-dart-100);--bq-neutral-200:var(--bq-flypass-grey-200);--bq-neutral-300:var(--bq-flypass-dark-grey-300);--bq-neutral-400:var(--bq-flypass-dark-grey-400);--bq-neutral-500:var(--bq-flypass-dark-grey-500);--bq-neutral-600:var(--bq-flypass-dark-grey-600);--bq-neutral-700:var(--bq-flypass-dark-grey-700);--bq-neutral-800:var(--bq-flypass-dark-grey-800);--bq-neutral-900:var(--bq-flypass-dark-grey-900);--bq-neutral-950:var(--bq-flypass-dark-grey-900);--bq-neutral-1000:var(--bq-flypass-dark-grey-900);--bq-brand-light:var(--bq-flypass-green-200);--bq-brand:var(--bq-flypass-green-500);--bq-brand-dark:var(--bq-flypass-green-700);--bq-accent-light:var(--bq-flypass-green-300);--bq-accent:var(--bq-flypass-green-600);--bq-accent-dark:var(--bq-flypass-green-800);--bq-success-light:var(--bq-green-100);--bq-success:var(--bq-green-600);--bq-success-dark:var(--bq-green-1000);--bq-danger-light:var(--bq-corai-100);--bq-danger:var(--bq-corai-600);--bq-danger-dark:var(--bq-corai-1000);--bq-warning-light:var(--bq-yellow-100);--bq-warning:var(--bq-yellow-600);--bq-warning-dark:var(--bq-yellow-1000);--bq-info-light:var(--bq-blue-100);--bq-info:var(--bq-blue-600);--bq-info-dark:var(--bq-blue-1000);--bq-focus:var(--bq-flypass-green-500);--bq-data-01:var(--bq-brand);--bq-data-02:#af0cd8;--bq-data-03:#0ca8d8;--bq-data-04:var(--bq-teal-600);--bq-data-05:var(--bq-yellow-600);--bq-data-06:var(--bq-orange-600);--bq-data-07:var(--bq-blue-600);--bq-data-08:var(--bq-red-600);--bq-data-09:var(--bq-purple-600);--bq-data-10:#394b56;--bq-data-11:var(--bq-black);--bq-data-12:var(--bq-white)}.flypass.light,[bq-theme=flypass][bq-mode=light]{--bq-background--primary:var(--bq-white);--bq-background--secondary:var(--bq-neutral-100);--bq-background--tertiary:var(--bq-neutral-200);--bq-background--alt:var(--bq-neutral-300);--bq-background--inverse:var(--bq-neutral-900);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-800);--bq-icon--secondary:var(--bq-neutral-600);--bq-icon--inverse:var(--bq-neutral-50);--bq-icon--brand:var(--bq-brand);--bq-icon--alt:var(--bq-white);--bq-icon--info:var(--bq-info);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-200);--bq-stroke--secondary:var(--bq-neutral-600);--bq-stroke--tertiary:var(--bq-neutral-900);--bq-stroke--inverse:var(--bq-white);--bq-stroke--brand:var(--bq-brand);--bq-stroke--alt:var(--bq-neutral-50);--bq-stroke--brand-alt:var(--bq-brand-light);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-info);--bq-text--primary:var(--bq-neutral-700);--bq-text--secondary:var(--bq-neutral-600);--bq-text--inverse:var(--bq-neutral-50);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-neutral-700);--bq-text--info:var(--bq-info);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-white);--bq-ui--secondary:var(--bq-neutral-200);--bq-ui--tertiary:var(--bq-neutral-500);--bq-ui--inverse:var(--bq-neutral-900);--bq-ui--alt:var(--bq-neutral-50);--bq-ui--brand-alt:var(--bq-brand-light);--bq-ui--brand:var(--bq-brand);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-light);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-light);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-light);--bq-ui--info:var(--bq-info);--bq-ui--info-alt:var(--bq-info-light);--bq-hover:#444546;--bq-active:#1f2026}.flypass.dark,[bq-theme=flypass][bq-mode=dark]{--bq-background--primary:var(--bq-neutral-1000);--bq-background--secondary:var(--bq-neutral-900);--bq-background--tertiary:var(--bq-neutral-800);--bq-background--alt:var(--bq-neutral-700);--bq-background--inverse:var(--bq-neutral-600);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-100);--bq-icon--secondary:var(--bq-neutral-400);--bq-icon--inverse:var(--bq-neutral-800);--bq-icon--brand:var(--bq-brand);--bq-icon--alt:var(--bq-white);--bq-icon--info:var(--bq-info);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-900);--bq-stroke--secondary:var(--bq-neutral-700);--bq-stroke--tertiary:var(--bq-neutral-400);--bq-stroke--inverse:var(--bq-neutral-950);--bq-stroke--brand:var(--bq-brand);--bq-stroke--brand-alt:var(--bq-brand-dark);--bq-stroke--alt:var(--bq-neutral-1000);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-info);--bq-text--primary:var(--bq-neutral-100);--bq-text--secondary:var(--bq-neutral-400);--bq-text--inverse:var(--bq-neutral-800);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-neutral-white);--bq-text--info:var(--bq-info);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-neutral-900);--bq-ui--secondary:var(--bq-neutral-800);--bq-ui--tertiary:var(--bq-neutral-700);--bq-ui--inverse:var(--bq-neutral-100);--bq-ui--brand:var(--bq-brand);--bq-ui--brand-alt:var(--bq-brand-dark);--bq-ui--alt:var(--bq-neutral-950);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-dark);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-dark);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-dark);--bq-ui--info:var(--bq-info);--bq-ui--info-alt:var(--bq-info-dark);--bq-hover:#444546;--bq-active:#1f2026}.pointer-events-none{pointer-events:none}.m-0{margin:0}.me-\\[--bq-select--gap\\]{margin-inline-end:var(--bq-select--gap)}.me-xs2{margin-inline-end:var(--bq-spacing-xs2)}.ms-\\[--bq-select--gap\\]{margin-inline-start:var(--bq-select--gap)}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.w-full{width:100%}.flex-1{flex:1 1 0%}.flex-auto{flex:1 1 auto}.cursor-inherit{cursor:inherit}.cursor-not-allowed{cursor:not-allowed}.select-none{user-select:none}.appearance-none{appearance:none}.items-center{align-items:center}.gap-xs2{gap:var(--bq-spacing-xs2)}.text-nowrap{text-wrap:nowrap}.rounded-\\[--bq-select--border-radius\\]{border-radius:var(--bq-select--border-radius)}.rounded-xs{border-radius:var(--bq-radius--xs)}.border-\\[length\\:--bq-select--border-width\\]{border-width:var(--bq-select--border-width)}.border-none{border-style:none}.border-\\[color\\:--bq-select--border-color-focus\\]{border-color:var(--bq-select--border-color-focus)}.border-\\[color\\:--bq-select--border-color\\]{border-color:var(--bq-select--border-color)}.border-danger{border-color:var(--bq-stroke--danger)}.border-success{border-color:var(--bq-stroke--success)}.border-warning{border-color:var(--bq-stroke--warning)}.bg-\\[--bq-select--background-color\\]{background-color:var(--bq-select--background-color)}.bg-inherit{background-color:inherit}.p-0{padding:0}.pe-\\[--bq-select--padding-end\\]{padding-inline-end:var(--bq-select--padding-end)}.ps-\\[--bq-select--padding-start\\]{padding-inline-start:var(--bq-select--padding-start)}.font-inherit{font-family:inherit}.text-\\[length\\:--bq-select--helper-text-size\\]{font-size:var(--bq-select--helper-text-size)}.text-\\[length\\:--bq-select--label-text-size\\]{font-size:var(--bq-select--label-text-size)}.text-\\[length\\:--bq-select--text-size\\]{font-size:var(--bq-select--text-size)}.text-\\[length\\:inherit\\]{font-size:inherit}.leading-small{line-height:var(--bq-font-line-height--small)}.text-\\[color\\:--bq-select--helper-text-color\\]{color:var(--bq-select--helper-text-color)}.text-\\[color\\:--bq-select--label-text-color\\]{color:var(--bq-select--label-text-color)}.text-\\[color\\:--bq-select--text-color\\],.text-\\[color\\:var\\(--bq-select--text-color\\)\\]{color:var(--bq-select--text-color)}.text-danger{color:var(--bq-text--danger)}.text-success{color:var(--bq-text--success)}.text-warning{color:var(--bq-text--warning)}.opacity-60{opacity:.6}.transition-\\[border-color\\2c box-shadow\\]{transition-duration:.15s;transition-property:border-color,box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.border-active-danger{border-color:color-mix(in srgb,var(--bq-stroke--danger),var(--bq-active) 20%)}.border-active-success{border-color:color-mix(in srgb,var(--bq-stroke--success),var(--bq-active) 20%)}.border-active-warning{border-color:color-mix(in srgb,var(--bq-stroke--warning),var(--bq-active) 20%)}.bs-auto{block-size:auto}.min-bs-\\[var\\(--bq-select--icon-size\\)\\]{min-block-size:var(--bq-select--icon-size)}.min-is-0{min-inline-size:0}.p-b-\\[var\\(--bq-select--paddingY\\)\\]{padding-block:var(--bq-select--paddingY)}.m-be-\\[--bq-select--label-margin-bottom\\]{margin-block-end:var(--bq-select--label-margin-bottom)}.m-bs-\\[--bq-select--helper-margin-top\\]{margin-block-start:var(--bq-select--helper-margin-top)}.focus{outline:var(--bq-ring-width,2px) solid var(--bq-ring-color-focus,var(--bq-focus));outline-offset:var(--bq-ring-offset-width,1px)}@-webkit-keyframes fade-in{0%{opacity:0}}@keyframes fade-in{0%{opacity:0}}@-webkit-keyframes slide-in{0%{-webkit-transform:translateY(10px);transform:translateY(10px)}}@keyframes slide-in{0%{-webkit-transform:translateY(10px);transform:translateY(10px)}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}:host{--bq-select--background-color:var(--bq-ui--primary);--bq-select--border-color:transparent;--bq-select--border-color-focus:var(--bq-stroke--alt);--bq-select--border-radius:var(--bq-radius--s);--bq-select--border-width:var(--bq-stroke-s);--bq-select--border-style:solid;--bq-select--gap:var(--bq-spacing-xs);--bq-select--helper-margin-top:var(--bq-spacing-xs);--bq-select--helper-text-size:var(--bq-font-size--s);--bq-select--helper-text-color:var(--bq-text--primary);--bq-select--icon-size:24px;--bq-select--label-margin-bottom:var(--bq-spacing-xs);--bq-select--label-text-size:var(--bq-font-size--s);--bq-select--label-text-color:var(--bq-text--primary);--bq-select--padding-start:calc(var(--bq-spacing-m) - var(--bq-select--border-width));--bq-select--padding-end:calc(var(--bq-spacing-m) - var(--bq-select--border-width));--bq-select--paddingY:calc(var(--bq-spacing-s) - var(--bq-select--border-width));--bq-select--text-color:var(--bq-text--primary);--bq-select--text-size:var(--bq-font-size--m);--bq-select--text-placeholder-color:var(--bq-text--secondary);display:block;width:100%}.bq-select__label{align-items:center;color:var(--bq-select--label-text-color);display:flex;font-size:var(--bq-select--label-text-size);margin-block-end:var(--bq-select--label-margin-bottom)}.bq-select__helper-text{color:var(--bq-select--helper-text-color);font-size:var(--bq-select--helper-text-size);margin-block-start:var(--bq-select--helper-margin-top)}.bq-select__helper-text.validation-error{color:var(--bq-text--danger)}.bq-select__helper-text.validation-success{color:var(--bq-text--success)}.bq-select__helper-text.validation-warning{color:var(--bq-text--warning)}.bq-select__dropdown:has(:focus-within,:focus-visible) .bq-select__control{--bq-ring-width:1px;--bq-ring-offset-width:0;--bq-ring-color-focus:var(--bq-select--border-color-focus);border-color:var(--bq-select--border-color-focus);outline:var(--bq-ring-width,2px) solid var(--bq-ring-color-focus,var(--bq-focus));outline-offset:var(--bq-ring-offset-width,1px)}.bq-select__control{align-items:center;background-color:var(--bq-select--background-color);border-color:var(--bq-select--border-color);border-radius:var(--bq-select--border-radius);border-style:var(--bq-select--border-style);border-width:var(--bq-select--border-width);color:var(--bq-select--text-color);display:flex;font-size:var(--bq-select--text-size);inline-size:100%;padding-block:var(--bq-select--paddingY);padding-inline-end:var(--bq-select--padding-end);padding-inline-start:var(--bq-select--padding-start);transition-duration:.15s;transition-property:border-color,box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1);user-select:none}.bq-select__control::placeholder{color:var(--bq-select--text-placeholder-color)}.bq-select__control:hover:not(.disabled):not(:focus-within){border-color:color-mix(in srgb,var(--bq-stroke--brand),var(--bq-hover) 20%)}.bq-select__control:not(.disabled):focus-within .bq-select__control--clear,.bq-select__control:not(.disabled):hover .bq-select__control--clear{display:inline-block}.bq-select__control.disabled{cursor:not-allowed;opacity:.6}.bq-select__control.validation-error{border-color:var(--bq-stroke--danger)}.bq-select__control.validation-error:hover:not(.disabled):not(:focus-within){border-color:color-mix(in srgb,var(--bq-stroke--danger),var(--bq-hover) 20%)}.bq-select__control.validation-error:not(.disabled):focus-within{--bq-ring-color-focus:var(--bq-stroke--danger);border-color:color-mix(in srgb,var(--bq-stroke--danger),var(--bq-active) 20%)}.bq-select__control.validation-success{border-color:var(--bq-stroke--success)}.bq-select__control.validation-success:hover:not(.disabled):not(:focus-within){border-color:color-mix(in srgb,var(--bq-stroke--success),var(--bq-hover) 20%)}.bq-select__control.validation-success:not(.disabled):focus-within{--bq-ring-color-focus:var(--bq-stroke--success);border-color:color-mix(in srgb,var(--bq-stroke--success),var(--bq-active) 20%)}.bq-select__control.validation-warning{border-color:var(--bq-stroke--warning)}.bq-select__control.validation-warning:hover:not(.disabled):not(:focus-within){border-color:color-mix(in srgb,var(--bq-stroke--warning),var(--bq-hover) 20%)}.bq-select__control.validation-warning:not(.disabled):focus-within{--bq-ring-color-focus:var(--bq-stroke--warning);border-color:color-mix(in srgb,var(--bq-stroke--warning),var(--bq-active) 20%)}.bq-select__control--input{appearance:none;background-color:inherit;border-style:none;-webkit-box-shadow:none;box-shadow:none;color:inherit;cursor:inherit;flex:1 1 auto;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;min-block-size:var(--bq-select--icon-size);min-inline-size:0;padding:0;user-select:none}.bq-select__control--input:focus{outline:2px solid transparent;outline-offset:2px}.bq-select__control--input:focus-visible{outline:2px solid transparent;outline-offset:2px}.bq-select__control--clear::part(button){--bq-ring-width:initial;--bq-ring-offset-width:initial;--bq-ring-color-focus:initial;block-size:auto;border-radius:var(--bq-radius--xs);border-style:none;padding:0}.bq-select__control--prefix,.bq-select__control--suffix{align-items:center;color:var(--bq-select--text-color);display:flex;pointer-events:none}.bq-select__control--prefix{margin-inline-end:var(--bq-select--gap)}.bq-select__control--suffix{margin-inline-start:var(--bq-select--gap);transition-duration:.3s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.bq-select__tags{display:flex;flex:1 1 0%;gap:var(--bq-spacing-xs2);margin-inline-end:var(--bq-spacing-xs2)}.bq-select__tags ::slotted(bq-tag),.bq-select__tags bq-tag{display:inline-flex}.bq-select__tags bq-tag::part(text){text-wrap:nowrap;line-height:var(--bq-font-line-height--small)}::slotted(bq-icon),bq-icon{--bq-icon--size:var(--bq-select--icon-size)!important}.placeholder\\:text-\\[color\\:--bq-select--text-placeholder-color\\]::placeholder{color:var(--bq-select--text-placeholder-color)}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.rotate-0,.rotate-180{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.blur,.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.visible{visibility:visible}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.\\!hidden{display:none!important}.hidden{display:none}.flex-grow{flex-grow:1}.rotate-0{--tw-rotate:0deg}.rotate-180{--tw-rotate:180deg}.overflow-x-auto{overflow-x:auto}.outline{outline-style:solid}.blur{--tw-blur:blur(8px)}.is-full{inline-size:100%}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.relative{position:relative}.inline{display:inline}.text-\\[color\\:--bq-icon--color\\]{color:var(--bq-icon--color)}.bs-\\[--bq-icon--size\\]{block-size:var(--bq-icon--size)}.is-\\[--bq-icon--size\\]{inline-size:var(--bq-icon--size)}.text-m{font-size:var(--bq-font-size--m)}.text-s{font-size:var(--bq-font-size--s)}.text-xs{font-size:var(--bq-font-size--xs)}.flex-col{flex-direction:column}.gap-y-\\[--bq-option-group--gapY-list\\]{row-gap:var(--bq-option-group--gapY-list)}";
const BqSelectStyle0 = bqSelectCss;

const BqSelect = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bqBlur = index.createEvent(this, "bqBlur", 7);
        this.bqClear = index.createEvent(this, "bqClear", 7);
        this.bqFocus = index.createEvent(this, "bqFocus", 7);
        this.bqSelect = index.createEvent(this, "bqSelect", 7);
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
    }
    // Own Properties
    // ====================
    helperTextElem;
    inputElem;
    labelElem;
    prefixElem;
    suffixElem;
    debounceQuery;
    fallbackInputId = 'select';
    get el() { return index.getElement(this); }
    internals;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    displayValue;
    hasHelperText = false;
    selectedOptions = [];
    hasLabel = false;
    hasPrefix = false;
    hasSuffix = false;
    hasValue = false;
    // Public Property API
    // ========================
    /** If true, the Select input will be focused on component render */
    autofocus;
    /** The clear button aria label */
    clearButtonLabel = 'Clear value';
    /**
     * The amount of time, in milliseconds, to wait before emitting the `bqInput` event after the input value changes.
     * A value of 0 means no debouncing will occur.
     */
    debounceTime = 0;
    /**
     * Indicates whether the Select input is disabled or not.
     * If `true`, the Select is disabled and cannot be interacted with.
     */
    disabled = false;
    /** If true, the clear button won't be displayed */
    disableClear = false;
    /** Represents the distance (gutter or margin) between the Select panel and the input element. */
    distance = 8;
    /** The ID of the form that the Select input belongs to. */
    form;
    /** If true, the Select panel will remain open after a selection is made. */
    keepOpenOnSelect = false;
    /** The Select input name. */
    name;
    /** The maximum number of tags to display when multiple selection is enabled */
    maxTagsVisible = 2;
    /** If true, the Select input will allow multiple selections. */
    multiple = false;
    /** If true, the Select panel will be visible. */
    open = false;
    /** When set, it will override the height of the Select panel. */
    panelHeight;
    /** The Select input placeholder text value */
    placeholder;
    /** Position of the Select panel */
    placement = 'bottom';
    /** If true, the list of options cannot be filtered (searching won't be available) */
    readonly;
    /** Indicates whether or not the Select input is required to be filled out before submitting the form. */
    required;
    /** Whether the panel should have the Select same width as the input element */
    sameWidth = true;
    /**  Represents the skidding between the Select panel and the input element. */
    skidding = 0;
    /** Defines the strategy to position the Select panel */
    strategy = 'fixed';
    /**
     * The validation status of the Select input.
     *
     * @remarks
     * This property is used to indicate the validation status of the select input. It can be set to one of the following values:
     * - `'none'`: No validation status is set.
     * - `'error'`: The input has a validation error.
     * - `'warning'`: The input has a validation warning.
     * - `'success'`: The input has passed validation.
     */
    validationStatus = 'none';
    /** The select input value, it can be used to reset the field to a previous value */
    value;
    // Prop lifecycle events
    // =======================
    handleValueChange() {
        if (this.multiple && isString.isString(this.value)) {
            // NOTE: we ensure that value is an array, changing the value will trigger Watch to execute thus the return
            this.value = Array.from(JSON.parse(String(this.value)));
            this.internals.setFormValue(this.value.join(','));
            return;
        }
        this.syncItemsFromValue();
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Callback handler emitted when the Select input loses focus */
    bqBlur;
    /** Callback handler emitted when the selected value has been cleared */
    bqClear;
    /** Callback handler emitted when the Select input has received focus */
    bqFocus;
    /** Callback handler emitted when the selected value has changed */
    bqSelect;
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    connectedCallback() {
        this.initMultipleValue();
    }
    componentWillLoad() {
        this.initMultipleValue();
    }
    componentDidLoad() {
        if (this.multiple && Array.isArray(this.value)) {
            this.selectedOptions = this.options.filter((item) => this.value.includes(item.value));
        }
        this.handleValueChange();
    }
    formAssociatedCallback() {
        this.internals.role = 'combobox';
        this.internals.ariaExpanded = this.open ? 'true' : 'false';
    }
    async formResetCallback() {
        if (isNil.isNil(this.value))
            return;
        this.internals.setValidity({});
        this.clear();
    }
    // Listeners
    // ==============
    handleOpenChange(ev) {
        if (!ev.composedPath().includes(this.el))
            return;
        this.open = ev.detail.open;
    }
    stopOptionFocusBlurPropagation(ev) {
        // Stop propagation of focus and blur events coming from the `bq-option` elements
        if (isHTMLElement.isHTMLElement(ev.target, 'bq-select'))
            return;
        ev.stopPropagation();
    }
    // Public methods API
    // These methods are exposed on the host element.
    // Always use two lines.
    // Public Methods must be async.
    // Requires JSDocs for public API documentation.
    // ===============================================
    /**
     * Clears the selected value.
     *
     * @return {Promise<void>}
     * @memberof BqSelect
     */
    async clear() {
        if (this.disabled)
            return;
        const { multiple, inputElem, bqClear, el } = this;
        // Clear value and selected options
        this.value = undefined;
        this.selectedOptions = [];
        // Clear display value and input element if not multiple
        if (!multiple) {
            this.displayValue = undefined;
            inputElem.value = undefined;
        }
        // Update form value and reset options visibility
        this.resetOptionsVisibility();
        // Emit clear event
        bqClear.emit(el);
    }
    // Local methods
    // Internal business logic.
    // These methods cannot be called from the host element.
    // =======================================================
    initMultipleValue = () => {
        if (!this.multiple)
            return;
        this.value = Array.isArray(this.value) ? this.value : Array.from(JSON.parse(String(this.value)));
    };
    handleBlur = () => {
        if (this.disabled)
            return;
        this.bqBlur.emit(this.el);
    };
    handleFocus = () => {
        if (this.disabled)
            return;
        this.bqFocus.emit(this.el);
    };
    handleSelect = (ev) => {
        if (this.disabled)
            return;
        if (this.multiple) {
            ev.stopPropagation();
        }
        const { value, item } = ev.detail;
        if (this.multiple) {
            this.handleMultipleSelection(item);
            // Clear the input value after selecting an item
            this.inputElem.value = '';
            // If multiple selection is enabled, emit the selected items array instead of relying on
            // the option list to emit the value of the selected item
            this.bqSelect.emit({ value: this.value, item });
        }
        else {
            this.value = value;
        }
        this.resetOptionsVisibility();
        this.inputElem.focus();
    };
    handleMultipleSelection = (item) => {
        // Set has O(1) complexity for insertion, deletion, and search operations, compared to an Array's O(n)
        const selectedOptionsSet = new Set(this.selectedOptions);
        if (selectedOptionsSet.has(item)) {
            selectedOptionsSet.delete(item);
        }
        else {
            selectedOptionsSet.add(item);
        }
        this.selectedOptions = Array.from(selectedOptionsSet);
        this.value = this.selectedOptions.map((item) => item.value);
    };
    handleSearchFilter = (ev) => {
        if (this.disabled)
            return;
        this.debounceQuery?.cancel();
        const query = ev.target.value?.toLowerCase().trim();
        if (!isDefined.isDefined(query)) {
            this.clear();
        }
        else {
            this.debounceQuery = debounce.debounce(() => {
                this.options.forEach((item) => {
                    const itemLabel = this.getOptionLabel(item).toLowerCase();
                    item.hidden = !itemLabel.includes(query);
                });
            }, this.debounceTime);
            this.debounceQuery();
        }
        // The panel will close once a selection is made
        // so we need to make sure it's open when the user is typing and the query is not empty
        this.open = true;
    };
    handleClearClick = (ev) => {
        (async () => {
            await this.clear();
        })();
        this.inputElem.focus();
        ev.stopPropagation();
    };
    handleTagRemove = (item) => {
        if (this.disabled)
            return;
        this.handleMultipleSelection(item);
        this.bqSelect.emit({ value: this.value, item });
    };
    handleLabelSlotChange = () => {
        this.hasLabel = slot.hasSlotContent(this.labelElem);
    };
    handlePrefixSlotChange = () => {
        this.hasPrefix = slot.hasSlotContent(this.prefixElem);
    };
    handleSuffixSlotChange = () => {
        this.hasSuffix = slot.hasSlotContent(this.suffixElem);
    };
    handleHelperTextSlotChange = () => {
        this.hasHelperText = slot.hasSlotContent(this.helperTextElem);
    };
    resetOptionsVisibility = () => {
        this.options.forEach((item) => (item.hidden = false));
    };
    syncItemsFromValue = () => {
        const { internals, options, value } = this;
        if (!options.length)
            return;
        // Sync selected state of the BqOption elements
        this.syncSelectedOptionsState();
        if (this.multiple) {
            // Sync selected options for multiple selection mode
            this.selectedOptions = options.filter((option) => this.value?.includes(option.value));
        }
        else {
            // Sync display label for single selection mode
            this.updateDisplayLabel();
        }
        internals.setFormValue(!isNil.isNil(value) ? `${value}` : undefined);
    };
    /**
     * Syncs the selected state of the BqOption elements which value is included in the `value` property.
     * Notice that value can be a string or an array of strings.
     *
     * @private
     * @memberof BqSelect
     */
    syncSelectedOptionsState = () => {
        const { options, multiple, value } = this;
        const lowerCaseValue = String(value).toLowerCase();
        options.forEach((option) => {
            if (multiple && Array.isArray(value)) {
                option.selected = value.includes(option.value);
            }
            else {
                option.selected = option.value.toLowerCase() === lowerCaseValue;
            }
        });
    };
    /**
     * Updates the display value of the input element based on the selected option.
     *
     * @private
     * @memberof BqSelect
     */
    updateDisplayLabel = () => {
        const { value, options, inputElem } = this;
        const checkedItem = options.find((item) => item.value === value);
        const displayValue = checkedItem ? this.getOptionLabel(checkedItem) : '';
        inputElem.value = displayValue;
        this.displayValue = displayValue;
    };
    getOptionLabel = (item) => {
        if (!item)
            return;
        return item.innerText.trim() ?? '';
    };
    get options() {
        return Array.from(this.el.querySelectorAll('bq-option'));
    }
    get displayPlaceholder() {
        // Hide the placeholder when multiple selection is enabled and there are selected items
        return this.multiple && this.selectedOptions.length !== 0 ? undefined : this.placeholder;
    }
    get displayTags() {
        return this.selectedOptions.map((item, index$1) => {
            if (index$1 < this.maxTagsVisible || this.maxTagsVisible < 0) {
                return (index.h("bq-tag", { key: item.value, removable: true, size: "xsmall", variant: "filled", onBqClose: (event) => {
                        // NOTE: prevents triggering bqClose on parent
                        event.stopPropagation();
                        this.handleTagRemove(item);
                    },
                    // Prevent the tag from closing the panel when clicked
                    onClick: (ev) => ev.stopPropagation(), exportparts: "wrapper:tag__base,prefix:tag__prefix,text:tag__text,btn-close:tag__btn-close", part: "tag" }, this.getOptionLabel(item)));
            }
            else if (index$1 === this.maxTagsVisible) {
                return (index.h("bq-tag", { key: "more", size: "xsmall", variant: "filled", exportparts: "wrapper:tag__base,prefix:tag__prefix,text:tag__text,btn-close:tag__btn-close", part: "tag" }, "+", this.selectedOptions.length - index$1));
            }
            return null;
        });
    }
    get hasClearIcon() {
        if (this.disableClear || this.disabled) {
            return false;
        }
        if (this.multiple) {
            return this.selectedOptions.length > 0;
        }
        return isDefined.isDefined(this.displayValue);
    }
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        const labelId = `bq-select__label-${this.name || this.fallbackInputId}`;
        return (index.h("div", { key: 'e6594936339459af78d12f65c5e9f95d20fe5812', class: "bq-select", part: "base" }, index.h("label", { key: 'f73f9b34d1d0e15b90e1706e79a4d87b78767b9e', id: labelId, class: { 'bq-select__label': true, '!hidden': !this.hasLabel }, "aria-label": this.name || this.fallbackInputId, htmlFor: this.name || this.fallbackInputId, ref: (labelElem) => (this.labelElem = labelElem), part: "label" }, index.h("slot", { key: '2b3077bbc8785f8372a74f28478bcb9ea3077cfc', name: "label", onSlotchange: this.handleLabelSlotChange })), index.h("bq-dropdown", { key: '9b2afa55ffb3bc888e20795a141ae3ddb9ea2796', class: "bq-select__dropdown w-full", disabled: this.disabled, distance: this.distance, keepOpenOnSelect: this.keepOpenOnSelect, open: this.open, panelHeight: this.panelHeight, placement: this.placement, sameWidth: this.sameWidth, skidding: this.skidding, strategy: this.strategy, exportparts: "panel" }, index.h("div", { key: '9603169c243e9785d7f4ccc442de047028ea34ee', class: {
                'bq-select__control': true,
                [`validation-${this.validationStatus}`]: true,
                disabled: this.disabled,
            }, part: "control", slot: "trigger" }, index.h("span", { key: 'a1696621c9097a651d993a3064f0b8f0d411673f', class: { 'bq-select__control--prefix': true, '!hidden': !this.hasPrefix }, ref: (spanElem) => (this.prefixElem = spanElem), part: "prefix" }, index.h("slot", { key: 'f67dc4452f3472007f5e364ea8d6a2b03f5fd836', name: "prefix", onSlotchange: this.handlePrefixSlotChange })), index.h("div", { key: '69512207e2c41b179bfe6715c0c8fa106dc034ee', class: "flex flex-1 overflow-x-auto", part: "input-outline" }, this.multiple && (index.h("span", { key: '788a387d2d96bf7ee9edd01aef9b13b00f49122c', class: "bq-select__tags", part: "tags" }, index.h("slot", { key: '7811cf73e127e74cdad099d3573615b25b318910', name: "tags" }, this.displayTags))), index.h("input", { key: '4b7780e8e5891dda3fa6634fc8ea67f05154566a', id: this.name || this.fallbackInputId, class: "bq-select__control--input flex-grow is-full", autoComplete: "off", autoCapitalize: "off", "aria-disabled": this.disabled ? 'true' : 'false', "aria-controls": `bq-options-${this.name}`, "aria-expanded": this.open ? 'true' : 'false', "aria-haspopup": "listbox", disabled: this.disabled, form: this.form, name: this.name, placeholder: this.displayPlaceholder, ref: (inputElem) => (this.inputElem = inputElem), readOnly: this.readonly, required: this.required, role: "combobox", spellcheck: false, type: "text", value: this.displayValue, part: "input",
            // Events
            onBlur: this.handleBlur, onFocus: this.handleFocus, onInput: this.handleSearchFilter })), this.hasClearIcon && (
        // The clear button will be visible as long as the input has a value
        // and the parent group is hovered or has focus-within
        index.h("bq-button", { key: '1a49969395e818e1aa690ef7f6f3341298a5525e', class: "bq-select__control--clear ms-[--bq-select--gap]", appearance: "text", "aria-label": this.clearButtonLabel, size: "small", onBqClick: this.handleClearClick, part: "clear-btn", exportparts: "button", tabIndex: -1 }, index.h("slot", { key: '77cc72468f4586c0099143e67f802f07e2a9c7e8', name: "clear-icon" }, index.h("bq-icon", { key: '489421c4e84cee9ded157fd9cd230c2d3f279c59', name: "x-circle", class: "flex" })))), index.h("span", { key: '0c0fcf860875c355a84ddf5918536f9ce08848e8', class: { 'bq-select__control--suffix': true, 'rotate-180': this.open, 'rotate-0': !this.open }, ref: (spanElem) => (this.suffixElem = spanElem), part: "suffix" }, index.h("slot", { key: 'a1d929c69b5b7db4fb02f0b7fd2e7409fd971b36', name: "suffix", onSlotchange: this.handleSuffixSlotChange }, index.h("bq-icon", { key: '8d20019ffa6354c3e5aad8131e74fd6802b65e01', name: "caret-down", class: "flex" })))), index.h("bq-option-list", { key: 'd0f740cf75a6f8d400211dabafd06c2248fed03c', id: `bq-options-${this.name}`, onBqSelect: this.handleSelect, "aria-expanded": this.open ? 'true' : 'false', exportparts: "base:option-list", role: "listbox" }, index.h("slot", { key: '338ab1d438ff3af454cf013940d72bb1ca1f7979' }))), index.h("div", { key: '27d16b1f70a68cb54d7babc622d83d920b60b0b3', class: {
                [`bq-select__helper-text validation-${this.validationStatus}`]: true,
                '!hidden': !this.hasHelperText,
            }, ref: (divElem) => (this.helperTextElem = divElem), part: "helper-text" }, index.h("slot", { key: 'fc326c6dcf8de3dca5b2ef6bcd7f07f23c57891f', name: "helper-text", onSlotchange: this.handleHelperTextSlotChange }))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "value": ["handleValueChange"]
    }; }
};
BqSelect.style = BqSelectStyle0;

exports.bq_select = BqSelect;

//# sourceMappingURL=bq-select.cjs.entry.js.map