/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1e4795f3.js');
const index$1 = require('./index-8c48e726.js');

const DATE_PICKER_TYPE = ['single', 'multi', 'range'];

const bqDatePickerCss = ".transform{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}::backdrop,:root{--bq-blue-100:#e7f0fd;--bq-blue-200:#d0e2fb;--bq-blue-300:#a1c5f7;--bq-blue-400:#73a8f3;--bq-blue-500:#448bef;--bq-blue-600:#156eeb;--bq-blue-700:#1158bc;--bq-blue-800:#0d428d;--bq-blue-900:#082c5e;--bq-blue-1000:#04162f;--bq-corai-100:#fff2f2;--bq-corai-200:#ffe6e6;--bq-corai-300:#ffccce;--bq-corai-400:#ffb3b5;--bq-corai-500:#ff999d;--bq-corai-600:#ff8084;--bq-corai-700:#cc666a;--bq-corai-800:#994d4f;--bq-corai-900:#663335;--bq-corai-1000:#331a1a;--bq-cyan-100:#e8f7fb;--bq-cyan-200:#d2f0f8;--bq-cyan-300:#a5e1f1;--bq-cyan-400:#78d1e9;--bq-cyan-500:#4bc2e2;--bq-cyan-600:#1eb3db;--bq-cyan-700:#188faf;--bq-cyan-800:#126b83;--bq-cyan-900:#0c4858;--bq-cyan-1000:#06242c;--bq-gold-100:#fbf4ec;--bq-gold-200:#f7e9da;--bq-gold-300:#f0d3b6;--bq-gold-400:#e8bc91;--bq-gold-500:#e1a66d;--bq-gold-600:#d99048;--bq-gold-700:#ae733a;--bq-gold-800:#82562b;--bq-gold-900:#573a1d;--bq-gold-1000:#2b1d0e;--bq-green-100:#e8f8ef;--bq-green-200:#d2f1e0;--bq-green-300:#a5e3c1;--bq-green-400:#78d5a1;--bq-green-500:#4bc782;--bq-green-600:#1eb963;--bq-green-700:#18944f;--bq-green-800:#126f3b;--bq-green-900:#0c4a28;--bq-green-1000:#062514;--bq-grey-100:#f1f2f4;--bq-grey-200:#e7e8eb;--bq-grey-300:#caccd2;--bq-grey-400:#a6aab3;--bq-grey-50:#f6f6f8;--bq-grey-500:#898e99;--bq-grey-600:#646a77;--bq-grey-700:#3f4350;--bq-grey-800:#2a2c35;--bq-grey-900:#1c1d23;--bq-grey-950:#15161a;--bq-grey-1000:#0d0e11;--bq-indigo-100:#edecfc;--bq-indigo-200:#dcdafa;--bq-indigo-300:#b9b5f5;--bq-indigo-400:#9590ef;--bq-indigo-500:#726bea;--bq-indigo-600:#4f46e5;--bq-indigo-700:#3f38b7;--bq-indigo-800:#2f2a89;--bq-indigo-900:#201c5c;--bq-indigo-1000:#100e2e;--bq-iris-100:#e9f0ff;--bq-iris-200:#d6e0ff;--bq-iris-300:#b2c0fe;--bq-iris-400:#8691f8;--bq-iris-500:#6061ee;--bq-iris-600:#4f46e5;--bq-iris-700:#413abd;--bq-iris-800:#332e95;--bq-iris-900:#26216d;--bq-iris-1000:#181545;--bq-lime-100:#f5fae8;--bq-lime-200:#ecf6d2;--bq-lime-300:#d9eda5;--bq-lime-400:#c5e379;--bq-lime-500:#b2da4c;--bq-lime-600:#9fd11f;--bq-lime-700:#7fa719;--bq-lime-800:#5f7d13;--bq-lime-900:#40540c;--bq-lime-1000:#202a06;--bq-magenta-100:#fce7f4;--bq-magenta-200:#f9cfea;--bq-magenta-300:#f39fd6;--bq-magenta-400:#ee6fbf;--bq-magenta-500:#e83fab;--bq-magenta-600:#de1395;--bq-magenta-700:#b20f77;--bq-magenta-800:#850c59;--bq-magenta-900:#58083c;--bq-magenta-1000:#2c041e;--bq-neutral-white:#fbfbfc;--bq-neutral-black:#060708;--bq-orange-100:#fbf0e9;--bq-orange-200:#f8e1d4;--bq-orange-300:#f1c2a8;--bq-orange-400:#eaa47d;--bq-orange-500:#e38551;--bq-orange-600:#dc6726;--bq-orange-700:#b0521e;--bq-orange-800:#843e17;--bq-orange-900:#58290f;--bq-orange-1000:#2c1508;--bq-purple-100:#efebf8;--bq-purple-200:#e0d7f2;--bq-purple-300:#c1afe5;--bq-purple-400:#a388d8;--bq-purple-500:#8460cb;--bq-purple-600:#6538be;--bq-purple-700:#512d98;--bq-purple-800:#3d2272;--bq-purple-900:#28164c;--bq-purple-1000:#140b26;--bq-red-100:#fce7ea;--bq-red-200:#f9d1d5;--bq-red-300:#f3a2ac;--bq-red-400:#ed7482;--bq-red-500:#e74559;--bq-red-600:#e1172f;--bq-red-700:#b41226;--bq-red-800:#870e1c;--bq-red-900:#5a0913;--bq-red-1000:#2d0509;--bq-sky-100:#eff4fb;--bq-sky-200:#dfeaf8;--bq-sky-300:#bfd5f1;--bq-sky-400:#9ec1e9;--bq-sky-500:#7eace2;--bq-sky-600:#5e97db;--bq-sky-700:#4b79af;--bq-sky-800:#385b83;--bq-sky-900:#263c58;--bq-sky-1000:#131e2c;--bq-teal-100:#e5f7f5;--bq-teal-200:#ccf0eb;--bq-teal-300:#99e1d8;--bq-teal-400:#66d2c4;--bq-teal-500:#33c3b1;--bq-teal-600:#00b49d;--bq-teal-700:#00907e;--bq-teal-800:#006c5e;--bq-teal-900:#00483f;--bq-teal-1000:#00241f;--bq-volcano-100:#feede7;--bq-volcano-200:#fddbd1;--bq-volcano-300:#fbb8a3;--bq-volcano-400:#fa9474;--bq-volcano-500:#f87146;--bq-volcano-600:#f64d18;--bq-volcano-700:#c53e13;--bq-volcano-800:#942e0e;--bq-volcano-900:#621f0a;--bq-volcano-1000:#310f05;--bq-yellow-100:#fefbe7;--bq-yellow-200:#fcf6d0;--bq-yellow-300:#faeea0;--bq-yellow-400:#f7e571;--bq-yellow-500:#f5dd41;--bq-yellow-600:#f2d412;--bq-yellow-700:#c2aa0e;--bq-yellow-800:#917f0b;--bq-yellow-900:#615507;--bq-yellow-1000:#302a04;--bq-endava-grey-50:#f7f7f8;--bq-endava-grey-100:#e4e6e7;--bq-endava-grey-200:#b5babe;--bq-endava-grey-300:#949ca1;--bq-endava-grey-400:#737d84;--bq-endava-grey-500:#525f67;--bq-endava-grey-600:#30404b;--bq-endava-grey-700:#2b3942;--bq-endava-grey-800:#263139;--bq-endava-grey-900:#192b37;--bq-endava-grey-950:#151b1e;--bq-endava-grey-1000:#0f1316;--bq-endava-neutral-white:#fafbfb;--bq-endava-neutral-black:#060708;--bq-endava-orange-100:#fef3f1;--bq-endava-orange-200:#fbd6d1;--bq-endava-orange-300:#fab7af;--bq-endava-orange-400:#fa988b;--bq-endava-orange-500:#fc7866;--bq-endava-orange-600:#ff5640;--bq-endava-orange-700:#ce4a39;--bq-endava-orange-800:#a03d30;--bq-endava-orange-900:#722e25;--bq-endava-orange-1000:#471e19;--bq-flypass-green-100:#e1ea80;--bq-flypass-green-200:#d9e560;--bq-flypass-green-300:#d1e040;--bq-flypass-green-400:#cada20;--bq-flypass-green-500:#c2d500;--bq-flypass-green-600:#afbf00;--bq-flypass-green-700:#9baa00;--bq-flypass-green-800:#889500;--bq-flypass-green-900:#738000;--bq-flypass-dark-grey-100:#bbb;--bq-flypass-dark-grey-200:#a4a4a4;--bq-flypass-dark-grey-300:#8d8d8d;--bq-flypass-dark-grey-400:#767676;--bq-flypass-dark-grey-500:#606060;--bq-flypass-dark-grey-600:#494949;--bq-flypass-dark-grey-700:#323232;--bq-flypass-dark-grey-800:#2c2c2c;--bq-flypass-dark-grey-900:#272727;--bq-flypass-sky-100:#a0e1f0;--bq-flypass-sky-200:#5fcde5;--bq-flypass-sky-300:#11b5d9;--bq-flypass-sky-400:#0f9ebd;--bq-flypass-sky-500:#0d87a2;--bq-flypass-sky-600:#0a6f86;--bq-flypass-sky-700:#085a6c;--bq-flypass-sky-800:#074553;--bq-flypass-sky-900:#05303a;--bq-flypass-blue-100:#cfe3f7;--bq-flypass-blue-200:#a0c8f0;--bq-flypass-blue-300:#70ace8;--bq-flypass-blue-400:#4191e1;--bq-flypass-blue-500:#1175d9;--bq-flypass-blue-600:#0e5eae;--bq-flypass-blue-700:#0a4682;--bq-flypass-blue-800:#072f57;--bq-flypass-blue-900:#03172b;--bq-flypass-orange-100:#ffddc7;--bq-flypass-orange-200:#ffccab;--bq-flypass-orange-300:#ffab74;--bq-flypass-orange-400:#ff812d;--bq-flypass-orange-500:#e17228;--bq-flypass-orange-600:#c16222;--bq-flypass-orange-700:#9f501c;--bq-flypass-orange-800:#804117;--bq-flypass-orange-900:#633211;--bq-flypass-violet-100:#e3cdff;--bq-flypass-violet-200:#b179ff;--bq-flypass-violet-300:#9747ff;--bq-flypass-violet-400:#7c3bd2;--bq-flypass-violet-500:#6a32b4;--bq-flypass-violet-600:#5b2b9b;--bq-flypass-violet-700:#4f2585;--bq-flypass-violet-800:#4f2585;--bq-flypass-violet-900:#391c62;--bq-flypass-yellow-100:#ffdf8e;--bq-flypass-yellow-200:#ffd773;--bq-flypass-yellow-300:#ffcf57;--bq-flypass-yellow-400:#ffc73a;--bq-flypass-yellow-500:#ffbf1f;--bq-flypass-yellow-600:#dfa61d;--bq-flypass-yellow-700:#bf8f18;--bq-flypass-yellow-800:#9f7713;--bq-flypass-yellow-900:#806010;--bq-flypass-red-100:#f9cccc;--bq-flypass-red-200:#f6adad;--bq-flypass-red-300:#ef8e8c;--bq-flypass-red-400:#ed6766;--bq-flypass-red-500:#e84241;--bq-flypass-red-600:#bc3535;--bq-flypass-red-700:#982c2b;--bq-flypass-red-800:#752121;--bq-flypass-red-900:#541718;--bq-flypass-blue-grey-100:#d3d7dd;--bq-flypass-blue-grey-200:#bcc2cb;--bq-flypass-blue-grey-300:#a5adbb;--bq-flypass-blue-grey-400:#8f98aa;--bq-flypass-blue-grey-500:#798499;--bq-flypass-blue-grey-600:#657189;--bq-flypass-blue-grey-700:#545e72;--bq-flypass-blue-grey-800:#434c5c;--bq-flypass-blue-grey-900:#343a47;--bq-flypass-grey-100:#fff;--bq-flypass-grey-200:#f5f5f5;--bq-flypass-grey-300:#efefef;--bq-flypass-grey-400:#e9e9e9;--bq-flypass-grey-500:#e3e3e3;--bq-flypass-grey-600:#dcdcdc;--bq-flypass-grey-700:#d6d6d6;--bq-flypass-grey-800:#d0d0d0;--bq-flypass-grey-900:#cacaca;--bq-flypass-light-100:#fff;--bq-flypass-light-200:#f5f5f5;--bq-flypass-light-300:#f4f7fa;--bq-flypass-light-400:#dde8f2;--bq-flypass-light-500:#d3d7dd;--bq-flypass-light-600:#657189;--bq-flypass-dart-100:#a1a1a1;--bq-flypass-dart-200:#515151;--bq-flypass-dart-300:#404040;--bq-flypass-dart-400:#2a2a2a;--bq-flypass-dart-500:#1b1b1b;--bq-flypass-dart-600:#0e100f}*,:after,:before{box-sizing:border-box}*{margin:0}[class^=bq-] *{font:inherit}ol[role=list],ul[role=list]{list-style-type:none}html:focus-within{scroll-behavior:smooth}[class^=bq-]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--bq-text--primary);font-family:var(--bq-font-family);font-size:var(--bq-font-size--m);letter-spacing:var(--bq-font-letter-spacing);line-height:var(--bq-font-line-height--regular);text-rendering:optimizeSpeed}a:not([class]){text-decoration-skip-ink:auto}canvas,img,picture,svg,video{display:block;max-width:100%}button,input,select,textarea{font:inherit}h1,h2,h3,h4,h5,h6,p{overflow-wrap:break-word}@media (prefers-reduced-motion:reduce){html:focus-within{scroll-behavior:auto}*,:after,:before{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto;transition-duration:.01ms!important}}:root{--bq-white:#fff;--bq-black:#060708;--bq-neutral-50:var(--bq-grey-50);--bq-neutral-100:var(--bq-grey-100);--bq-neutral-200:var(--bq-grey-200);--bq-neutral-300:var(--bq-grey-300);--bq-neutral-400:var(--bq-grey-400);--bq-neutral-500:var(--bq-grey-500);--bq-neutral-600:var(--bq-grey-600);--bq-neutral-700:var(--bq-grey-700);--bq-neutral-800:var(--bq-grey-800);--bq-neutral-900:var(--bq-grey-900);--bq-neutral-950:var(--bq-grey-950);--bq-neutral-1000:var(--bq-grey-1000);--bq-brand-light:var(--bq-iris-100);--bq-brand:var(--bq-iris-600);--bq-brand-dark:var(--bq-iris-1000);--bq-accent-light:var(--bq-purple-100);--bq-accent:var(--bq-purple-600);--bq-accent-dark:var(--bq-purple-1000);--bq-success-light:var(--bq-teal-100);--bq-success:var(--bq-teal-600);--bq-success-dark:var(--bq-teal-1000);--bq-danger-light:var(--bq-red-100);--bq-danger:var(--bq-red-600);--bq-danger-dark:var(--bq-red-1000);--bq-warning-light:var(--bq-gold-100);--bq-warning:var(--bq-gold-600);--bq-warning-dark:var(--bq-gold-1000);--bq-info-light:var(--bq-iris-100);--bq-info:var(--bq-iris-600);--bq-info-dark:var(--bq-iris-1000);--bq-focus:var(--bq-iris-600);--bq-data-01:var(--bq-brand);--bq-data-02:var(--bq-purple-600);--bq-data-03:var(--bq-magenta-600);--bq-data-04:var(--bq-cyan-600);--bq-data-05:var(--bq-teal-600);--bq-data-06:var(--bq-orange-600);--bq-data-07:var(--bq-yellow-600);--bq-data-08:var(--bq-red-600);--bq-data-09:var(--bq-blue-600);--bq-data-10:var(--bq-grey-600);--bq-data-11:var(--bq-black);--bq-data-12:var(--bq-white);--bq-radius--none:0;--bq-radius--xs2:0.125rem;--bq-radius--xs:0.313rem;--bq-radius--s:0.625rem;--bq-radius--m:0.75rem;--bq-radius--l:1.5rem;--bq-radius--full:9999px;--bq-box-shadow--xs:0 2px 0 rgba(0,0,0,.016);--bq-box-shadow--s:0 8px 24px rgba(0,0,0,.04);--bq-box-shadow--m:0 10px 48px -16px rgba(0,0,0,.12);--bq-box-shadow--l:0 20px 58px -16px rgba(0,0,0,.16);--bq-font-family:\"Outfit\",sans-serif;--bq-font-size--xs:0.75rem;--bq-font-size--s:0.875rem;--bq-font-size--m:1rem;--bq-font-size--l:1.125rem;--bq-font-size--xl:1.5rem;--bq-font-size--xxl:2rem;--bq-font-size--xxl2:2.5rem;--bq-font-size--xxl3:3rem;--bq-font-size--xxl4:3.5rem;--bq-font-size--xxl5:4rem;--bq-font-weight--thin:100;--bq-font-weight--light:300;--bq-font-weight--regular:400;--bq-font-weight--medium:500;--bq-font-weight--semibold:600;--bq-font-weight--bold:700;--bq-font-line-height--small:1.2;--bq-font-line-height--regular:1.5;--bq-font-line-height--large:1.5;--bq-spacing-xs3:0.125rem;--bq-spacing-xs2:0.25rem;--bq-spacing-xs:0.5rem;--bq-spacing-s:0.75rem;--bq-spacing-m:1rem;--bq-spacing-l:1.5rem;--bq-spacing-xl:2rem;--bq-spacing-xxl:2.5rem;--bq-spacing-xxl2:3.5rem;--bq-spacing-xxl3:4rem;--bq-spacing-xxl4:4.5rem;--bq-stroke-s:1px;--bq-stroke-m:2px;--bq-stroke-l:3px}.beeq.light,.light,:root,[bq-mode=light]{--bq-background--primary:var(--bq-white);--bq-background--secondary:var(--bq-neutral-100);--bq-background--tertiary:var(--bq-neutral-200);--bq-background--alt:var(--bq-neutral-300);--bq-background--inverse:var(--bq-neutral-900);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-800);--bq-icon--alt:var(--bq-white);--bq-icon--secondary:var(--bq-neutral-600);--bq-icon--inverse:var(--bq-neutral-50);--bq-icon--brand:var(--bq-brand);--bq-icon--info:var(--bq-brand);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-200);--bq-stroke--secondary:var(--bq-neutral-600);--bq-stroke--tertiary:var(--bq-neutral-900);--bq-stroke--inverse:var(--bq-white);--bq-stroke--brand:var(--bq-brand);--bq-stroke--alt:var(--bq-neutral-50);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-brand);--bq-text--primary:var(--bq-neutral-800);--bq-text--secondary:var(--bq-neutral-600);--bq-text--inverse:var(--bq-neutral-50);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-white);--bq-text--info:var(--bq-brand);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-white);--bq-ui--secondary:var(--bq-neutral-200);--bq-ui--tertiary:var(--bq-neutral-500);--bq-ui--inverse:var(--bq-neutral-900);--bq-ui--brand:var(--bq-brand);--bq-ui--brand-alt:var(--bq-brand-light);--bq-ui--alt:var(--bq-neutral-50);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-light);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-light);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-light);--bq-ui--info:var(--bq-brand);--bq-ui--info-alt:var(--bq-brand-light);--bq-hover:#bcbfc5;--bq-active:#444546}.beeq.dark,.dark,[bq-mode=dark]{--bq-background--primary:var(--bq-neutral-1000);--bq-background--secondary:var(--bq-neutral-950);--bq-background--tertiary:var(--bq-neutral-800);--bq-background--alt:var(--bq-neutral-700);--bq-background--inverse:var(--bq-neutral-600);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-100);--bq-icon--secondary:var(--bq-neutral-400);--bq-icon--inverse:var(--bq-neutral-800);--bq-icon--brand:var(--bq-brand);--bq-icon--alt:var(--bq-white);--bq-icon--info:var(--bq-brand);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-900);--bq-stroke--secondary:var(--bq-neutral-700);--bq-stroke--tertiary:var(--bq-neutral-400);--bq-stroke--inverse:var(--bq-neutral-950);--bq-stroke--brand:var(--bq-brand);--bq-stroke--alt:var(--bq-neutral-1000);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-brand);--bq-text--primary:var(--bq-neutral-100);--bq-text--secondary:var(--bq-neutral-400);--bq-text--inverse:var(--bq-neutral-800);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-white);--bq-text--info:var(--bq-brand);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-neutral-900);--bq-ui--secondary:var(--bq-neutral-800);--bq-ui--tertiary:var(--bq-neutral-700);--bq-ui--inverse:var(--bq-neutral-100);--bq-ui--brand:var(--bq-brand);--bq-ui--brand-alt:var(--bq-brand-dark);--bq-ui--alt:var(--bq-neutral-950);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-dark);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-dark);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-dark);--bq-ui--info:var(--bq-brand);--bq-ui--info-alt:var(--bq-brand-dark);--bq-hover:#444546;--bq-active:#1f2026}.endava,[bq-theme=endava]{--bq-font-family:\"Poppins\",sans-serif;--bq-white:#fafbfb;--bq-black:#030406;--bq-neutral-50:var(--bq-endava-grey-50);--bq-neutral-100:var(--bq-endava-grey-100);--bq-neutral-200:var(--bq-endava-grey-200);--bq-neutral-300:var(--bq-endava-grey-300);--bq-neutral-400:var(--bq-endava-grey-400);--bq-neutral-500:var(--bq-endava-grey-500);--bq-neutral-600:var(--bq-endava-grey-600);--bq-neutral-700:var(--bq-endava-grey-700);--bq-neutral-800:var(--bq-endava-grey-800);--bq-neutral-900:var(--bq-endava-grey-900);--bq-neutral-950:var(--bq-endava-grey-950);--bq-neutral-1000:var(--bq-endava-grey-1000);--bq-brand-light:var(--bq-endava-orange-100);--bq-brand:var(--bq-endava-orange-600);--bq-brand-dark:var(--bq-endava-orange-1000);--bq-accent-light:var(--bq-endava-orange-100);--bq-accent:var(--bq-endava-orange-600);--bq-accent-dark:var(--bq-endava-orange-1000);--bq-success-light:var(--bq-green-100);--bq-success:var(--bq-green-600);--bq-success-dark:var(--bq-green-1000);--bq-danger-light:var(--bq-corai-100);--bq-danger:var(--bq-corai-600);--bq-danger-dark:var(--bq-corai-1000);--bq-warning-light:var(--bq-yellow-100);--bq-warning:var(--bq-yellow-600);--bq-warning-dark:var(--bq-yellow-1000);--bq-info-light:var(--bq-blue-100);--bq-info:var(--bq-blue-600);--bq-info-dark:var(--bq-blue-1000);--bq-focus:var(--bq-endava-orange-600);--bq-data-01:var(--bq-brand);--bq-data-02:#af0cd8;--bq-data-03:#0ca8d8;--bq-data-04:var(--bq-teal-600);--bq-data-05:var(--bq-yellow-600);--bq-data-06:var(--bq-orange-600);--bq-data-07:var(--bq-blue-600);--bq-data-08:var(--bq-red-600);--bq-data-09:var(--bq-purple-600);--bq-data-10:#394b56;--bq-data-11:var(--bq-black);--bq-data-12:var(--bq-white)}.endava.light,[bq-theme=endava][bq-mode=light]{--bq-background--primary:var(--bq-white);--bq-background--secondary:var(--bq-neutral-100);--bq-background--tertiary:var(--bq-neutral-200);--bq-background--alt:var(--bq-neutral-300);--bq-background--inverse:var(--bq-neutral-900);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-800);--bq-icon--secondary:var(--bq-neutral-600);--bq-icon--inverse:var(--bq-neutral-50);--bq-icon--brand:var(--bq-brand);--bq-icon--alt:var(--bq-white);--bq-icon--info:var(--bq-info);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-200);--bq-stroke--secondary:var(--bq-neutral-600);--bq-stroke--tertiary:var(--bq-neutral-900);--bq-stroke--inverse:var(--bq-white);--bq-stroke--brand:var(--bq-brand);--bq-stroke--alt:var(--bq-neutral-50);--bq-stroke--brand-alt:var(--bq-brand-light);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-info);--bq-text--primary:var(--bq-neutral-800);--bq-text--secondary:var(--bq-neutral-600);--bq-text--inverse:var(--bq-neutral-50);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-white);--bq-text--info:var(--bq-info);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-white);--bq-ui--secondary:var(--bq-neutral-200);--bq-ui--tertiary:var(--bq-neutral-500);--bq-ui--inverse:var(--bq-neutral-900);--bq-ui--alt:var(--bq-neutral-50);--bq-ui--brand-alt:var(--bq-brand-light);--bq-ui--brand:var(--bq-brand);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-light);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-light);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-light);--bq-ui--info:var(--bq-info);--bq-ui--info-alt:var(--bq-info-light);--bq-hover:#444546;--bq-active:#1f2026}.endava.dark,[bq-theme=endava][bq-mode=dark]{--bq-background--primary:var(--bq-neutral-1000);--bq-background--secondary:var(--bq-neutral-900);--bq-background--tertiary:var(--bq-neutral-800);--bq-background--alt:var(--bq-neutral-700);--bq-background--inverse:var(--bq-neutral-600);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-100);--bq-icon--secondary:var(--bq-neutral-400);--bq-icon--inverse:var(--bq-neutral-800);--bq-icon--brand:var(--bq-brand);--bq-icon--alt:var(--bq-white);--bq-icon--info:var(--bq-info);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-900);--bq-stroke--secondary:var(--bq-neutral-700);--bq-stroke--tertiary:var(--bq-neutral-400);--bq-stroke--inverse:var(--bq-neutral-950);--bq-stroke--brand:var(--bq-brand);--bq-stroke--brand-alt:var(--bq-brand-dark);--bq-stroke--alt:var(--bq-neutral-1000);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-info);--bq-text--primary:var(--bq-neutral-100);--bq-text--secondary:var(--bq-neutral-400);--bq-text--inverse:var(--bq-neutral-800);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-neutral-white);--bq-text--info:var(--bq-info);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-neutral-900);--bq-ui--secondary:var(--bq-neutral-800);--bq-ui--tertiary:var(--bq-neutral-700);--bq-ui--inverse:var(--bq-neutral-100);--bq-ui--brand:var(--bq-brand);--bq-ui--brand-alt:var(--bq-brand-dark);--bq-ui--alt:var(--bq-neutral-950);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-dark);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-dark);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-dark);--bq-ui--info:var(--bq-info);--bq-ui--info-alt:var(--bq-info-dark);--bq-hover:#444546;--bq-active:#1f2026}.flypass,[bq-theme=flypass]{--bq-font-family:\"Inter\",sans-serif;--bq-white:#fff;--bq-black:#0e100f;--bq-neutral-50:var(--bq-flypass-dark-grey-100);--bq-neutral-100:var(--bq-flypass-dart-100);--bq-neutral-200:var(--bq-flypass-grey-200);--bq-neutral-300:var(--bq-flypass-dark-grey-300);--bq-neutral-400:var(--bq-flypass-dark-grey-400);--bq-neutral-500:var(--bq-flypass-dark-grey-500);--bq-neutral-600:var(--bq-flypass-dark-grey-600);--bq-neutral-700:var(--bq-flypass-dark-grey-700);--bq-neutral-800:var(--bq-flypass-dark-grey-800);--bq-neutral-900:var(--bq-flypass-dark-grey-900);--bq-neutral-950:var(--bq-flypass-dark-grey-900);--bq-neutral-1000:var(--bq-flypass-dark-grey-900);--bq-brand-light:var(--bq-flypass-green-200);--bq-brand:var(--bq-flypass-green-500);--bq-brand-dark:var(--bq-flypass-green-700);--bq-accent-light:var(--bq-flypass-green-300);--bq-accent:var(--bq-flypass-green-600);--bq-accent-dark:var(--bq-flypass-green-800);--bq-success-light:var(--bq-green-100);--bq-success:var(--bq-green-600);--bq-success-dark:var(--bq-green-1000);--bq-danger-light:var(--bq-corai-100);--bq-danger:var(--bq-corai-600);--bq-danger-dark:var(--bq-corai-1000);--bq-warning-light:var(--bq-yellow-100);--bq-warning:var(--bq-yellow-600);--bq-warning-dark:var(--bq-yellow-1000);--bq-info-light:var(--bq-blue-100);--bq-info:var(--bq-blue-600);--bq-info-dark:var(--bq-blue-1000);--bq-focus:var(--bq-flypass-green-500);--bq-data-01:var(--bq-brand);--bq-data-02:#af0cd8;--bq-data-03:#0ca8d8;--bq-data-04:var(--bq-teal-600);--bq-data-05:var(--bq-yellow-600);--bq-data-06:var(--bq-orange-600);--bq-data-07:var(--bq-blue-600);--bq-data-08:var(--bq-red-600);--bq-data-09:var(--bq-purple-600);--bq-data-10:#394b56;--bq-data-11:var(--bq-black);--bq-data-12:var(--bq-white)}.flypass.light,[bq-theme=flypass][bq-mode=light]{--bq-background--primary:var(--bq-white);--bq-background--secondary:var(--bq-neutral-100);--bq-background--tertiary:var(--bq-neutral-200);--bq-background--alt:var(--bq-neutral-300);--bq-background--inverse:var(--bq-neutral-900);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-800);--bq-icon--secondary:var(--bq-neutral-600);--bq-icon--inverse:var(--bq-neutral-50);--bq-icon--brand:var(--bq-brand);--bq-icon--alt:var(--bq-white);--bq-icon--info:var(--bq-info);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-200);--bq-stroke--secondary:var(--bq-neutral-600);--bq-stroke--tertiary:var(--bq-neutral-900);--bq-stroke--inverse:var(--bq-white);--bq-stroke--brand:var(--bq-brand);--bq-stroke--alt:var(--bq-neutral-50);--bq-stroke--brand-alt:var(--bq-brand-light);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-info);--bq-text--primary:var(--bq-neutral-700);--bq-text--secondary:var(--bq-neutral-600);--bq-text--inverse:var(--bq-neutral-50);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-neutral-700);--bq-text--info:var(--bq-info);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-white);--bq-ui--secondary:var(--bq-neutral-200);--bq-ui--tertiary:var(--bq-neutral-500);--bq-ui--inverse:var(--bq-neutral-900);--bq-ui--alt:var(--bq-neutral-50);--bq-ui--brand-alt:var(--bq-brand-light);--bq-ui--brand:var(--bq-brand);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-light);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-light);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-light);--bq-ui--info:var(--bq-info);--bq-ui--info-alt:var(--bq-info-light);--bq-hover:#444546;--bq-active:#1f2026}.flypass.dark,[bq-theme=flypass][bq-mode=dark]{--bq-background--primary:var(--bq-neutral-1000);--bq-background--secondary:var(--bq-neutral-900);--bq-background--tertiary:var(--bq-neutral-800);--bq-background--alt:var(--bq-neutral-700);--bq-background--inverse:var(--bq-neutral-600);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-100);--bq-icon--secondary:var(--bq-neutral-400);--bq-icon--inverse:var(--bq-neutral-800);--bq-icon--brand:var(--bq-brand);--bq-icon--alt:var(--bq-white);--bq-icon--info:var(--bq-info);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-900);--bq-stroke--secondary:var(--bq-neutral-700);--bq-stroke--tertiary:var(--bq-neutral-400);--bq-stroke--inverse:var(--bq-neutral-950);--bq-stroke--brand:var(--bq-brand);--bq-stroke--brand-alt:var(--bq-brand-dark);--bq-stroke--alt:var(--bq-neutral-1000);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-info);--bq-text--primary:var(--bq-neutral-100);--bq-text--secondary:var(--bq-neutral-400);--bq-text--inverse:var(--bq-neutral-800);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-neutral-white);--bq-text--info:var(--bq-info);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-neutral-900);--bq-ui--secondary:var(--bq-neutral-800);--bq-ui--tertiary:var(--bq-neutral-700);--bq-ui--inverse:var(--bq-neutral-100);--bq-ui--brand:var(--bq-brand);--bq-ui--brand-alt:var(--bq-brand-dark);--bq-ui--alt:var(--bq-neutral-950);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-dark);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-dark);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-dark);--bq-ui--info:var(--bq-info);--bq-ui--info-alt:var(--bq-info-dark);--bq-hover:#444546;--bq-active:#1f2026}.pointer-events-none{pointer-events:none}.me-\\[--bq-date-picker--gap\\]{margin-inline-end:var(--bq-date-picker--gap)}.ms-\\[--bq-date-picker--gap\\]{margin-inline-start:var(--bq-date-picker--gap)}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.size-\\[--bq-date-picker--day-size\\]{height:var(--bq-date-picker--day-size);width:var(--bq-date-picker--day-size)}.flex-auto{flex:1 1 auto}.flex-grow{flex-grow:1}.cursor-inherit{cursor:inherit}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.select-none{user-select:none}.appearance-none{appearance:none}.items-center{align-items:center}.justify-center{justify-content:center}.gap-\\[--bq-date-picker--gap\\]{gap:var(--bq-date-picker--gap)}.gap-s{gap:var(--bq-spacing-s)}.rounded-\\[--bq-date-picker--border-radius\\]{border-radius:var(--bq-date-picker--border-radius)}.rounded-none{border-radius:var(--bq-radius--none)}.rounded-s{border-radius:var(--bq-radius--s)}.rounded-xs{border-radius:var(--bq-radius--xs)}.rounded-ee-none{border-end-end-radius:var(--bq-radius--none)}.rounded-es-none{border-end-start-radius:var(--bq-radius--none)}.rounded-se-none{border-start-end-radius:var(--bq-radius--none)}.rounded-ss-none{border-start-start-radius:var(--bq-radius--none)}.border-0{border-width:0}.border-\\[length\\:--bq-date-picker--border-width\\]{border-width:var(--bq-date-picker--border-width)}.border-\\[length\\:--bq-date-picker--currentDate-border-width\\]{border-width:var(--bq-date-picker--currentDate-border-width)}.border-none{border-style:none}.border-\\[color\\:--bq-date-picker--border-color\\]{border-color:var(--bq-date-picker--border-color)}.border-\\[color\\:--bq-date-picker--currentDate-border-color\\]{border-color:var(--bq-date-picker--currentDate-border-color)}.border-\\[color\\:--bq-focus\\]{border-color:var(--bq-focus)}.border-danger{border-color:var(--bq-stroke--danger)}.border-success{border-color:var(--bq-stroke--success)}.border-warning{border-color:var(--bq-stroke--warning)}.bg-\\[--bq-date-picker--background-color\\]{background-color:var(--bq-date-picker--background-color)}.bg-\\[--bq-date-picker--range-background-color\\]{background-color:var(--bq-date-picker--range-background-color)}.bg-\\[--bq-date-picker--range-inner-background-color\\]{background-color:var(--bq-date-picker--range-inner-background-color)}.bg-inherit{background-color:inherit}.bg-transparent{background-color:transparent}.pe-\\[--bq-date-picker--padding-end\\]{padding-inline-end:var(--bq-date-picker--padding-end)}.ps-\\[--bq-date-picker--padding-start\\]{padding-inline-start:var(--bq-date-picker--padding-start)}.font-default{font-family:var(--bq-font-family)}.font-inherit{font-family:inherit}.text-\\[length\\:--bq-date-picker--label-text-size\\]{font-size:var(--bq-date-picker--label-text-size)}.text-\\[length\\:--bq-date-picker--text-size\\]{font-size:var(--bq-date-picker--text-size)}.text-\\[length\\:inherit\\]{font-size:inherit}.text-\\[color\\:--bq-date-picker--label-text-color\\]{color:var(--bq-date-picker--label-text-color)}.text-\\[color\\:--bq-date-picker--text-color\\]{color:var(--bq-date-picker--text-color)}.text-alt{color:var(--bq-text--alt)}.text-primary{color:var(--bq-text--primary)}.text-secondary{color:var(--bq-text--secondary)}.opacity-100{opacity:1}.opacity-60{opacity:.6}.transition-\\[border-color\\2c box-shadow\\]{transition-duration:.15s;transition-property:border-color,box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-200{transition-duration:.2s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.border-active-danger{border-color:color-mix(in srgb,var(--bq-stroke--danger),var(--bq-active) 20%)}.border-active-success{border-color:color-mix(in srgb,var(--bq-stroke--success),var(--bq-active) 20%)}.border-active-warning{border-color:color-mix(in srgb,var(--bq-stroke--warning),var(--bq-active) 20%)}.bs-auto{block-size:auto}.is-full{inline-size:100%}.min-bs-\\[--bq-date-picker--icon-size\\]{min-block-size:var(--bq-date-picker--icon-size)}.min-is-0{min-inline-size:0}.p-b-0{padding-block:0}.p-b-\\[--bq-date-picker--paddingY\\]{padding-block:var(--bq-date-picker--paddingY)}.p-b-xs2{padding-block:var(--bq-spacing-xs2)}.p-i-0{padding-inline:0}.p-i-xs{padding-inline:var(--bq-spacing-xs)}.m-b-0{margin-block:0}.m-be-\\[--bq-date-picker--label-margin-bottom\\]{margin-block-end:var(--bq-date-picker--label-margin-bottom)}.m-i-0{margin-inline:0}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.focus{outline:var(--bq-ring-width,2px) solid var(--bq-ring-color-focus,var(--bq-focus));outline-offset:var(--bq-ring-offset-width,1px)}@-webkit-keyframes fade-in{0%{opacity:0}}@keyframes fade-in{0%{opacity:0}}@-webkit-keyframes slide-in{0%{-webkit-transform:translateY(10px);transform:translateY(10px)}}@keyframes slide-in{0%{-webkit-transform:translateY(10px);transform:translateY(10px)}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}:host{--bq-date-picker--background-color:var(--bq-ui--primary);--bq-date-picker--border-color:var(--bq-stroke--tertiary);--bq-date-picker--border-radius:var(--bq-radius--s);--bq-date-picker--border-style:solid;--bq-date-picker--border-width:var(--bq-stroke-s);--bq-date-picker--currentDate-border-color:var(--bq-stroke--brand);--bq-date-picker--currentDate-border-width:var(--bq-stroke-m);--bq-date-picker--day-size:var(--bq-spacing-xl);--bq-date-picker--gap:var(--bq-spacing-xs);--bq-date-picker--icon-size:24px;--bq-date-picker--label-margin-bottom:var(--bq-spacing-xs);--bq-date-picker--label-text-color:var(--bq-text--primary);--bq-date-picker--label-text-size:var(--bq-font-size--s);--bq-date-picker--padding-end:var(--bq-spacing-m);--bq-date-picker--padding-start:var(--bq-spacing-m);--bq-date-picker--paddingY:var(--bq-spacing-s);--bq-date-picker--range-background-color:var(--bq-ui--brand);--bq-date-picker--range-inner-background-color:var(--bq-ui--brand-alt);--bq-date-picker--text-color:var(--bq-text--primary);--bq-date-picker--text-placeholder-color:var(--bq-text--secondary);--bq-date-picker--text-size:var(--bq-font-size--m);display:block;inline-size:100%}.bq-date-picker__label{align-items:center;color:var(--bq-date-picker--label-text-color);display:flex;flex-grow:1;font-size:var(--bq-date-picker--label-text-size);gap:var(--bq-date-picker--gap);margin-block-end:var(--bq-date-picker--label-margin-bottom)}.bq-date-picker__control{align-items:center;border-color:var(--bq-date-picker--border-color);border-radius:var(--bq-date-picker--border-radius);border-style:var(--bq-date-picker--border-style);border-width:var(--bq-date-picker--border-width);color:var(--bq-date-picker--text-color);display:flex;font-size:var(--bq-date-picker--text-size);inline-size:100%;padding-block:var(--bq-date-picker--paddingY);padding-inline-end:var(--bq-date-picker--padding-end);padding-inline-start:var(--bq-date-picker--padding-start);transition-duration:.15s;transition-property:border-color,box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1);user-select:none}.bq-date-picker__control::placeholder{color:var(--bq-date-picker--text-placeholder-color)}.bq-date-picker__control:hover:not(.disabled):not(:focus-within){border-color:color-mix(in srgb,var(--bq-stroke--brand),var(--bq-hover) 20%)}.bq-date-picker__control:not(.disabled):focus-within{--bq-ring-width:1px;--bq-ring-offset-width:0;border-color:var(--bq-focus);outline:var(--bq-ring-width,2px) solid var(--bq-ring-color-focus,var(--bq-focus));outline-offset:var(--bq-ring-offset-width,1px)}.bq-date-picker__control:not(.disabled):focus-within .bq-date-picker__control--clear,.bq-date-picker__control:not(.disabled):hover .bq-date-picker__control--clear{display:inline-block}.bq-date-picker__control.disabled{cursor:not-allowed;opacity:.6}.bq-date-picker__control.validation-error{border-color:var(--bq-stroke--danger)}.bq-date-picker__control.validation-error:hover:not(.disabled):not(:focus-within){border-color:color-mix(in srgb,var(--bq-stroke--danger),var(--bq-hover) 20%)}.bq-date-picker__control.validation-error:not(.disabled):focus-within{--bq-ring-color-focus:var(--bq-stroke--danger);border-color:color-mix(in srgb,var(--bq-stroke--danger),var(--bq-active) 20%)}.bq-date-picker__control.validation-success{border-color:var(--bq-stroke--success)}.bq-date-picker__control.validation-success:hover:not(.disabled):not(:focus-within){border-color:color-mix(in srgb,var(--bq-stroke--success),var(--bq-hover) 20%)}.bq-date-picker__control.validation-success:not(.disabled):focus-within{--bq-ring-color-focus:var(--bq-stroke--success);border-color:color-mix(in srgb,var(--bq-stroke--success),var(--bq-active) 20%)}.bq-date-picker__control.validation-warning{border-color:var(--bq-stroke--warning)}.bq-date-picker__control.validation-warning:hover:not(.disabled):not(:focus-within){border-color:color-mix(in srgb,var(--bq-stroke--warning),var(--bq-hover) 20%)}.bq-date-picker__control.validation-warning:not(.disabled):focus-within{--bq-ring-color-focus:var(--bq-stroke--warning);border-color:color-mix(in srgb,var(--bq-stroke--warning),var(--bq-active) 20%)}.bq-date-picker__control--input{appearance:none;background-color:inherit;border-style:none;color:inherit;cursor:inherit;flex:1 1 auto;font-family:inherit;font-size:inherit;margin-block:0;margin-inline:0;min-block-size:var(--bq-date-picker--icon-size);min-inline-size:0;padding-block:0;padding-inline:0;user-select:none}.bq-date-picker__control--input:focus{outline:2px solid transparent;outline-offset:2px}.bq-date-picker__control--input:focus-visible{outline:2px solid transparent;outline-offset:2px}.bq-date-picker__control--clear::part(button){--bq-ring-width:initial;--bq-ring-offset-width:initial;--bq-ring-color-focus:initial;block-size:auto;border-radius:var(--bq-radius--xs);border-style:none;padding-block:0;padding-inline:0}.bq-date-picker__control--prefix,.bq-date-picker__control--suffix{align-items:center;color:var(--bq-date-picker--text-color);display:flex;pointer-events:none}.bq-date-picker__control--prefix{margin-inline-end:var(--bq-date-picker--gap)}.bq-date-picker__control--suffix{margin-inline-start:var(--bq-date-picker--gap)}::slotted(bq-icon),bq-icon{--bq-icon--size:var(--bq-date-picker--icon-size)!important}calendar-date::part(header),calendar-multi::part(header),calendar-range::part(header){gap:var(--bq-spacing-s);justify-content:center}calendar-date::part(heading),calendar-multi::part(heading),calendar-range::part(heading){padding-block:var(--bq-spacing-xs2);padding-inline:var(--bq-spacing-xs)}calendar-date::part(button),calendar-multi::part(button),calendar-range::part(button){background-color:transparent;border-radius:var(--bq-radius--s);border-width:0;padding-block:var(--bq-spacing-xs2);padding-inline:var(--bq-spacing-xs2);transition-duration:.2s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}calendar-date::part(button):focus-visible,calendar-multi::part(button):focus-visible,calendar-range::part(button):focus-visible{outline:var(--bq-ring-width,2px) solid var(--bq-ring-color-focus,var(--bq-focus));outline-offset:var(--bq-ring-offset-width,1px)}calendar-date::part(button):hover,calendar-multi::part(button):hover,calendar-range::part(button):hover{background-color:color-mix(in srgb,var(--bq-ui--primary),var(--bq-hover) 20%)}calendar-date::part(container),calendar-multi::part(container),calendar-range::part(container){background-color:var(--bq-date-picker--background-color);padding-block:0;padding-inline:0}calendar-month{--color-accent:var(--bq-ui--brand)}calendar-month::part(button){align-items:center;background-color:transparent;border-radius:var(--bq-radius--s);color:var(--bq-text--primary);display:flex;font-family:var(--bq-font-family);height:var(--bq-date-picker--day-size);justify-content:center;padding-block:0;padding-inline:0;transition-duration:.2s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);width:var(--bq-date-picker--day-size)}calendar-month::part(button):focus-visible{outline:var(--bq-ring-width,2px) solid var(--bq-ring-color-focus,var(--bq-focus));outline-offset:var(--bq-ring-offset-width,1px)}calendar-month::part(button):hover:enabled{background-color:color-mix(in srgb,var(--bq-background--secondary),var(--bq-hover) 20%)}calendar-month::part(button):disabled{cursor:not-allowed}calendar-month::part(button day disallowed){background-color:transparent!important;cursor:not-allowed!important}calendar-month::part(button day selected){background-color:var(--bq-date-picker--range-background-color);border-radius:var(--bq-radius--s);color:var(--bq-text--alt)}calendar-month::part(button day selected):hover:enabled{background-color:color-mix(in srgb,var(--bq-ui--brand),var(--bq-hover) 20%)}calendar-month::part(button day selected range-inner){background-color:var(--bq-date-picker--range-inner-background-color);border-radius:var(--bq-radius--none);color:var(--bq-text--primary)}calendar-month::part(button day selected range-inner):hover{color:var(--bq-text--alt)}calendar-month::part(button day outside){color:var(--bq-text--secondary);cursor:pointer;opacity:1}calendar-month::part(today){border-color:var(--bq-date-picker--currentDate-border-color);border-radius:var(--bq-radius--s);border-style:var(--bq-date-picker--border-style);border-width:var(--bq-date-picker--currentDate-border-width)}calendar-month::part(today selected){color:var(--bq-text--alt)}calendar-month::part(today range-inner){border-radius:var(--bq-radius--none)}calendar-month::part(today range-start){border-end-start-radius:var(--bq-radius--none);border-radius:var(--bq-radius--s)}calendar-month::part(today range-end){border-end-end-radius:var(--bq-radius--none);border-radius:var(--bq-radius--s)}calendar-month::part(range-start){border-end-end-radius:var(--bq-radius--none);border-start-end-radius:var(--bq-radius--none)}calendar-month::part(range-end){border-end-start-radius:var(--bq-radius--none);border-start-start-radius:var(--bq-radius--none)}calendar-month::part(range-start range-end){border-radius:var(--bq-radius--s)}.focus-visible\\:focus:focus-visible{outline:var(--bq-ring-width,2px) solid var(--bq-ring-color-focus,var(--bq-focus));outline-offset:var(--bq-ring-offset-width,1px)}.placeholder\\:text-\\[color\\:--bq-date-picker--text-placeholder-color\\]::placeholder{color:var(--bq-date-picker--text-placeholder-color)}.hover\\:text-alt:hover{color:var(--bq-text--alt)}.hover\\:bg-hover-ui-primary:hover{background-color:color-mix(in srgb,var(--bq-ui--primary),var(--bq-hover) 20%)}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.enabled\\:hover\\:bg-hover-secondary:hover:enabled{background-color:color-mix(in srgb,var(--bq-background--secondary),var(--bq-hover) 20%)}.enabled\\:hover\\:bg-hover-ui-brand:hover:enabled{background-color:color-mix(in srgb,var(--bq-ui--brand),var(--bq-hover) 20%)}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.visible{visibility:visible}.static{position:static}.fixed{position:fixed}.table{display:table}.grid{display:grid}.\\!hidden{display:none!important}.hidden{display:none}.flex-wrap{flex-wrap:wrap}.gap-\\[--bq-spacing-m\\]{gap:var(--bq-spacing-m)}@media (min-width:640px){.sm\\:block{display:block}}.\\[\\&\\:\\:part\\(panel\\)\\]\\:p-m::part(panel){padding:var(--bq-spacing-m)}.\\[\\&\\:\\:part\\(panel\\)\\]\\:is-auto::part(panel){inline-size:auto}.absolute{position:absolute}.text-\\[color\\:--bq-icon--color\\]{color:var(--bq-icon--color)}.bs-\\[--bq-icon--size\\]{block-size:var(--bq-icon--size)}.is-\\[--bq-icon--size\\]{inline-size:var(--bq-icon--size)}.relative{position:relative}.inline{display:inline}";

const BqDatePicker = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bqBlur = index.createEvent(this, "bqBlur", 7);
        this.bqChange = index.createEvent(this, "bqChange", 7);
        this.bqClear = index.createEvent(this, "bqClear", 7);
        this.bqFocus = index.createEvent(this, "bqFocus", 7);
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
    callyElem;
    inputElem;
    labelElem;
    prefixElem;
    suffixElem;
    fallbackInputId = 'date-picker';
    // Export parts of the calendar-month component
    COMMON_EXPORT_PARTS = 'calendar__heading,calendar__table,calendar__tr,calendar__head,calendar__week,calendar__th,calendar__td';
    BUTTON_EXPORT_PARTS = 'calendar__button,calendar__day,calendar__selected,calendar__today,calendar__disallowed,calendar__outside,calendar__range-start,calendar__range-end,calendar__range-inner';
    // Reference to host HTML element
    // ===================================
    internals;
    get el() { return index.getElement(this); }
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    focusedDate;
    displayDate;
    hasLabel = false;
    hasPrefix = false;
    hasRangeEnd = false;
    hasSuffix = false;
    hasValue = false;
    // Public Property API
    // ========================
    /** If `true`, the Date picker input will be focused on component render */
    autofocus;
    /** The clear button aria label */
    clearButtonLabel = 'Clear value';
    /** If `true`, the clear button won't be displayed */
    disableClear = false;
    /**
     * Indicates whether the Date picker input is disabled or not.
     * If `true`, the Date picker is disabled and cannot be interacted with.
     */
    disabled = false;
    /** Represents the distance (gutter or margin) between the Date picker panel and the input element. */
    distance = 8;
    /** The first day of the week, where Sunday is 0, Monday is 1, etc */
    firstDayOfWeek = 1;
    /** The options to use when formatting the displayed value.
     * Details: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options
     */
    formatOptions = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    };
    /** The ID of the form that the Date picker input belongs to. */
    form;
    /** The native form validation message (mandatory if `required` is set) */
    formValidationMessage;
    /** A function that takes a date and returns true if the date should not be selectable */
    isDateDisallowed;
    /** The locale for formatting dates. If not set, will use the browser's locale.
     * Details: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
     */
    locale = 'en-GB';
    /** The latest date that can be selected */
    max;
    /** The earliest date that can be selected */
    min;
    /** Number of months to show when range is `true` */
    months;
    /**
     * Specifies how the next/previous buttons should navigate the calendar.
     * - single: The buttons will navigate by a single month at a time.
     * - months: The buttons will navigate by the number of months displayed per view.
     */
    monthsPerView = 'single';
    /** The Date picker input name. */
    name;
    /** If `true`, the Date picker panel will be visible. */
    open = false;
    /** When set, it will override the height of the Date picker panel. */
    panelHeight = 'auto';
    /** The Date picker input placeholder text value */
    placeholder;
    /** Position of the Date picker panel */
    placement = 'bottom-end';
    /** Indicates whether or not the Date picker input is required to be filled out before submitting the form. */
    required;
    /** Represents the skidding between the Date picker panel and the input element. */
    skidding = 0;
    /** Whether to show days outside the month */
    showOutsideDays = false;
    /** Defines the strategy to position the Date picker panel */
    strategy = 'fixed';
    /** The date that is tentatively selected e.g. the start of a range selection  */
    tentative;
    /** It defines how the calendar will behave, allowing single date selection, range selection, or multiple date selection */
    type = 'single';
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
    /** The select input value represents the currently selected date or range and can be used to reset the field to a previous value.
     * All dates are expected in ISO-8601 format (YYYY-MM-DD). */
    value;
    // Prop lifecycle events
    // =======================
    handleValueChange() {
        const { formatDisplayValue, internals, value } = this;
        internals.setFormValue(!index$1.isNil(value) ? `${value}` : undefined);
        this.updateFormValidity();
        if (Array.isArray(value)) {
            this.hasValue = value.some((val) => val.length > 0);
            return;
        }
        this.hasValue = index$1.isDefined(value);
        this.displayDate = formatDisplayValue(value);
        this.setFocusedDate();
    }
    checkPropValues() {
        index$1.validatePropValue(DATE_PICKER_TYPE, 'single', this.el, 'type');
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Callback handler emitted when the input loses focus */
    bqBlur;
    /**
     * Callback handler emitted when the input value has changed and the input loses focus.
     * This handler is called whenever the user finishes typing or pasting text into the input field and then clicks outside of the input field.
     */
    bqChange;
    /** Callback handler emitted when the input value has been cleared */
    bqClear;
    /** Callback handler emitted when the input has received focus */
    bqFocus;
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    async connectedCallback() {
        if (!index$1.isClient())
            return;
        await Promise.resolve().then(function () { return require('./cally-1bde2e82.js'); });
    }
    componentWillLoad() {
        this.handleValueChange();
    }
    formAssociatedCallback() {
        this.updateFormValidity();
    }
    formResetCallback() {
        if (index$1.isNil(this.value))
            return;
        this.clear();
    }
    // Listeners
    // ==============
    handleOpenChange(ev) {
        if (!ev.composedPath().includes(this.el))
            return;
        this.open = ev.detail.open;
        this.setFocusedDate();
    }
    handleClickOutside(ev) {
        const { open, type, hasRangeEnd } = this;
        if (!open || type !== 'range' || ev.button !== 0)
            return;
        if (index$1.isEventTargetChildOfElement(ev, this.el) || hasRangeEnd)
            return;
        if (index$1.isEventTargetChildOfElement(ev, this.el))
            return;
        if (!hasRangeEnd) {
            this.tentative = undefined;
            this.hasRangeEnd = false;
        }
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
     * @memberof BqInput
     */
    async clear() {
        if (this.disabled)
            return;
        this.value = undefined;
        this.internals.setFormValue(undefined);
        this.bqClear.emit(this.el);
    }
    // Local methods
    // Internal business logic.
    // These methods cannot be called from the host element.
    // =======================================================
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
    setFocusedDate = () => {
        if (!this.callyElem)
            return;
        // We need to set the focused date in the calendar component via a ref
        // because it doesn't work when passed as a prop (the Cally element does not re-render)
        this.focusedDate = this.value ? this.formatFocusedDate(this.value) : new Date().toLocaleDateString('fr-CA');
        this.callyElem.focusedDate = this.focusedDate;
    };
    handleChange = (ev) => {
        if (this.disabled)
            return;
        if (!index$1.isHTMLElement(ev.target, 'input'))
            return;
        const dateValue = new Date(ev.target.value);
        if (!isNaN(dateValue.getTime())) {
            // We need to force the value to respect the format: yyyy-mm-dd, hence the hardcoded locale
            this.value = dateValue.toLocaleDateString('fr-CA');
            this.displayDate = this.formatDisplayValue(this.value);
            this.internals.setFormValue(`${this.value}`);
            this.bqChange.emit({ value: this.value, el: this.el });
        }
    };
    handleCalendarChange = (ev) => {
        const { value } = ev.target;
        this.value = value;
        this.displayDate = this.formatDisplayValue(this.value);
        this.inputElem.value = this.displayDate;
        this.inputElem.focus();
        this.internals.setFormValue(`${this.value}`);
        this.bqChange.emit({ value: this.value, el: this.el });
        this.open = this.type === 'multi';
    };
    handleCalendarRangeStart = (ev) => {
        this.hasRangeEnd = false;
        this.tentative = new Date(ev.detail).toLocaleDateString('fr-CA');
    };
    handleCalendarRangeEnd = () => {
        this.hasRangeEnd = true;
    };
    handleClearClick = (ev) => {
        if (this.disabled)
            return;
        this.inputElem.value = '';
        this.value = this.inputElem.value;
        this.hasRangeEnd = false;
        this.bqClear.emit(this.el);
        this.bqChange.emit({ value: this.value, el: this.el });
        this.internals.setFormValue(undefined);
        this.inputElem.focus();
        ev.stopPropagation();
    };
    handleLabelSlotChange = () => {
        this.hasLabel = index$1.hasSlotContent(this.labelElem);
    };
    handlePrefixSlotChange = () => {
        this.hasPrefix = index$1.hasSlotContent(this.prefixElem);
    };
    handleSuffixSlotChange = () => {
        this.hasSuffix = index$1.hasSlotContent(this.suffixElem);
    };
    generateCalendarMonth = (offset, className = '') => {
        return (index.h("calendar-month", { offset: offset, class: className, exportparts: `${this.COMMON_EXPORT_PARTS},${this.BUTTON_EXPORT_PARTS}` }));
    };
    /**
     * Generates an array of JSX.Element representing calendar months.
     *
     * If the type of the date picker is 'range' or 'multi' and the number of months is specified,
     * it generates an array of calendar months with the specified length. Each month will have an offset
     * and a class name based on its position in the array. The offset is used to determine the month to display,
     * and the class name is used for responsive design.
     *
     * If the type of the date picker is not 'range' or 'multi', or if the number of months is not specified,
     * it generates an array with a single calendar month.
     *
     * @returns {JSX.Element[]} An array of JSX.Element representing calendar months.
     */
    generateCalendarMonths = () => {
        if (this.type === 'range' || (this.type === 'multi' && this.months)) {
            return Array.from({ length: this.months }, (_, i) => {
                const offset = i > 0 ? i : undefined;
                const className = offset ? 'hidden sm:block' : '';
                return this.generateCalendarMonth(offset, className);
            });
        }
        return [this.generateCalendarMonth()];
    };
    /**
     * Extracts and returns the first date part from a given string.
     * When the type of the date picker is 'range' or 'multi', the first or initial date part of the value
     * should be the focused date in the calendar.
     *
     * @param value - The value to be processed, can be a string.
     * @returns The extracted last date portion of the value.
     */
    formatFocusedDate = (value) => {
        if (!value)
            return;
        const dateRegex = /\b\d{4}-\d{2}-\d{2}\b/;
        const match = dateRegex.exec(value);
        return match ? match[0] : null;
    };
    formatDisplayValue = (value) => {
        if (!value)
            return;
        const dateFormatter = new Intl.DateTimeFormat(this.locale, this.formatOptions);
        if (this.type === 'range') {
            const [start, end] = value.split('/').map((dateStr) => new Date(dateStr));
            return dateFormatter.formatRange(start, end);
        }
        if (this.type === 'multi') {
            const dates = value.split(' ').map((dateStr) => new Date(dateStr));
            return dates.map((date) => dateFormatter.format(date)).join(', ');
        }
        return dateFormatter.format(new Date(value));
    };
    updateFormValidity = () => {
        const { formValidationMessage, internals, required, value, inputElem } = this;
        // Clear the validity state
        internals?.states.clear();
        if (required && (!value || value.toString().trim() === '')) {
            // Set validity state to invalid
            internals?.states.add('invalid');
            internals?.setValidity({ valueMissing: true }, formValidationMessage, inputElem);
            return;
        }
        // Set validity state to valid if textarea has value or is not required
        internals?.states.add('valid');
        internals?.setValidity({});
    };
    get CalendarType() {
        const componentTypes = {
            single: 'calendar-date',
            multi: 'calendar-multi',
            range: 'calendar-range',
        };
        // Return the corresponding component type, based on the type prop value
        return componentTypes[this.type] || componentTypes.single;
    }
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        const CallyCalendar = this.CalendarType;
        const labelId = `bq-date-picker__label-${this.name || this.fallbackInputId}`;
        return (index.h("div", { key: 'ee2bd9be02ae56302e2fae534043a9eaafdf8080', class: "bq-date-picker", part: "base" }, index.h("label", { key: 'bc8a35cd158e180823bcaa50c90db713badae9f7', id: labelId, class: { 'bq-date-picker__label': true, '!hidden': !this.hasLabel }, "aria-label": this.name || this.fallbackInputId, htmlFor: this.name || this.fallbackInputId, ref: (labelElem) => (this.labelElem = labelElem), part: "label" }, index.h("slot", { key: 'a3e881a3e9266078a95b83a1a9a7cf1341930fa7', name: "label", onSlotchange: this.handleLabelSlotChange })), index.h("bq-dropdown", { key: '49398d2c24dfaf0275f69008a238a7904e4053c3', class: "bq-date-picker__dropdown is-full [&::part(panel)]:p-m [&::part(panel)]:is-auto", disabled: this.disabled, distance: this.distance, open: this.open, panelHeight: this.panelHeight, placement: this.placement, skidding: this.skidding, strategy: this.strategy, exportparts: "panel" }, index.h("div", { key: '13f203d8075d499ae699e3d2a92b91cbe6f42a7b', class: {
                'bq-date-picker__control': true,
                [`validation-${this.validationStatus}`]: true,
                disabled: this.disabled,
            }, part: "control", slot: "trigger" }, index.h("span", { key: '8e024740a1535727c7d2cc2bd35f79260a1c4146', class: { 'bq-date-picker__control--prefix': true, '!hidden': !this.hasPrefix }, ref: (spanElem) => (this.prefixElem = spanElem), part: "prefix" }, index.h("slot", { key: '2fb3ec6832f365406d8ff68c0c5a45c5f45fdd7d', name: "prefix", onSlotchange: this.handlePrefixSlotChange })), index.h("input", { key: 'd0990e0d912aa255b2ffd119e3609912c1684fcc', id: this.name || this.fallbackInputId, class: "bq-date-picker__control--input", autoComplete: "off", autoCapitalize: "off", "aria-disabled": this.disabled ? 'true' : 'false', "aria-controls": `${this.name}`, "aria-haspopup": "dialog", disabled: this.disabled, form: this.form, name: this.name, placeholder: this.placeholder, readonly: this.type !== 'single', ref: (inputElem) => (this.inputElem = inputElem), required: this.required, spellcheck: false, type: "text", value: this.displayDate, part: "input",
            // Events
            onBlur: this.handleBlur, onFocus: this.handleFocus, onChange: this.handleChange }), this.hasValue && !this.disabled && !this.disableClear && (
        // The clear button will be visible as long as the input has a value
        // and the parent group is hovered or has focus-within
        index.h("bq-button", { key: '878c0f97cb5cbdb0ef542ef5dc078f5fbd262114', class: "bq-date-picker__control--clear ms-[--bq-date-picker--gap] hidden", appearance: "text", "aria-label": this.clearButtonLabel, size: "small", onBqClick: this.handleClearClick, part: "clear-btn", exportparts: "button" }, index.h("slot", { key: 'f076cafb429bd58548ac6341eba5877e4e5190ea', name: "clear-icon" }, index.h("bq-icon", { key: '31ce521c5304e47d401eb12bf62e0bdc1e1f24e2', name: "x-circle", class: "flex" })))), index.h("span", { key: 'b5a5fc5e8a78f9e89fbf62c13a659177c2d5d487', class: "bq-date-picker__control--suffix", ref: (spanElem) => (this.suffixElem = spanElem), part: "suffix" }, index.h("slot", { key: '6d089ca853b12c4e25c160df340f3466d083533b', name: "suffix", onSlotchange: this.handleSuffixSlotChange }, index.h("bq-icon", { key: '631d7daad09410243bfd47098177e7274a283a04', name: "calendar-blank", class: "flex" })))), index.h(CallyCalendar, { key: '72a864a8d0a3c4e2941589ebeac8de40bf82e14d', isDateDisallowed: this.isDateDisallowed, locale: this.locale, value: this.value, min: this.min, max: this.max, months: this.months, tentative: this.tentative, pageBy: this.monthsPerView, firstDayOfWeek: this.firstDayOfWeek, showOutsideDays: this.showOutsideDays, onChange: this.handleCalendarChange, onRangestart: this.handleCalendarRangeStart, onRangeend: this.handleCalendarRangeEnd, exportparts: "container:calendar__container,header:calendar__header,button:calendar__button,previous:calendar__previous,next:calendar__next,disabled:calendar__disabled,heading:calendar__heading", ref: (elem) => (this.callyElem = elem) }, index.h("bq-icon", { key: '5df13a4e7a5c59a4ca02a37e46ead7368ecd5615', color: "text--primary", slot: "previous", name: "caret-left", label: "Previous" }), index.h("bq-icon", { key: '5966b9ae3f07f96c45cdec894d6cb9fb39c65a3e', color: "text--primary", slot: "next", name: "caret-right", label: "Next" }), index.h("div", { key: '4677b63562fcb18211626154cbc0f1347c6805c8', class: "flex flex-wrap justify-center gap-[--bq-spacing-m]" }, this.generateCalendarMonths())))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "value": ["handleValueChange"],
        "type": ["checkPropValues"]
    }; }
};
BqDatePicker.style = bqDatePickerCss;

exports.bq_date_picker = BqDatePicker;

//# sourceMappingURL=bq-date-picker.cjs.entry.js.map