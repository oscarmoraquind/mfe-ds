/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './index2.js';
import { m as isNil, q as getTextContent } from './index3.js';
import { d as defineCustomElement$2 } from './bq-icon2.js';

const bqSwitchCss = ".transform{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}::backdrop,:root{--bq-blue-100:#e7f0fd;--bq-blue-200:#d0e2fb;--bq-blue-300:#a1c5f7;--bq-blue-400:#73a8f3;--bq-blue-500:#448bef;--bq-blue-600:#156eeb;--bq-blue-700:#1158bc;--bq-blue-800:#0d428d;--bq-blue-900:#082c5e;--bq-blue-1000:#04162f;--bq-corai-100:#fff2f2;--bq-corai-200:#ffe6e6;--bq-corai-300:#ffccce;--bq-corai-400:#ffb3b5;--bq-corai-500:#ff999d;--bq-corai-600:#ff8084;--bq-corai-700:#cc666a;--bq-corai-800:#994d4f;--bq-corai-900:#663335;--bq-corai-1000:#331a1a;--bq-cyan-100:#e8f7fb;--bq-cyan-200:#d2f0f8;--bq-cyan-300:#a5e1f1;--bq-cyan-400:#78d1e9;--bq-cyan-500:#4bc2e2;--bq-cyan-600:#1eb3db;--bq-cyan-700:#188faf;--bq-cyan-800:#126b83;--bq-cyan-900:#0c4858;--bq-cyan-1000:#06242c;--bq-gold-100:#fbf4ec;--bq-gold-200:#f7e9da;--bq-gold-300:#f0d3b6;--bq-gold-400:#e8bc91;--bq-gold-500:#e1a66d;--bq-gold-600:#d99048;--bq-gold-700:#ae733a;--bq-gold-800:#82562b;--bq-gold-900:#573a1d;--bq-gold-1000:#2b1d0e;--bq-green-100:#e8f8ef;--bq-green-200:#d2f1e0;--bq-green-300:#a5e3c1;--bq-green-400:#78d5a1;--bq-green-500:#4bc782;--bq-green-600:#1eb963;--bq-green-700:#18944f;--bq-green-800:#126f3b;--bq-green-900:#0c4a28;--bq-green-1000:#062514;--bq-grey-100:#f1f2f4;--bq-grey-200:#e7e8eb;--bq-grey-300:#caccd2;--bq-grey-400:#a6aab3;--bq-grey-50:#f6f6f8;--bq-grey-500:#898e99;--bq-grey-600:#646a77;--bq-grey-700:#3f4350;--bq-grey-800:#2a2c35;--bq-grey-900:#1c1d23;--bq-grey-950:#15161a;--bq-grey-1000:#0d0e11;--bq-indigo-100:#edecfc;--bq-indigo-200:#dcdafa;--bq-indigo-300:#b9b5f5;--bq-indigo-400:#9590ef;--bq-indigo-500:#726bea;--bq-indigo-600:#4f46e5;--bq-indigo-700:#3f38b7;--bq-indigo-800:#2f2a89;--bq-indigo-900:#201c5c;--bq-indigo-1000:#100e2e;--bq-iris-100:#e9f0ff;--bq-iris-200:#d6e0ff;--bq-iris-300:#b2c0fe;--bq-iris-400:#8691f8;--bq-iris-500:#6061ee;--bq-iris-600:#4f46e5;--bq-iris-700:#413abd;--bq-iris-800:#332e95;--bq-iris-900:#26216d;--bq-iris-1000:#181545;--bq-lime-100:#f5fae8;--bq-lime-200:#ecf6d2;--bq-lime-300:#d9eda5;--bq-lime-400:#c5e379;--bq-lime-500:#b2da4c;--bq-lime-600:#9fd11f;--bq-lime-700:#7fa719;--bq-lime-800:#5f7d13;--bq-lime-900:#40540c;--bq-lime-1000:#202a06;--bq-magenta-100:#fce7f4;--bq-magenta-200:#f9cfea;--bq-magenta-300:#f39fd6;--bq-magenta-400:#ee6fbf;--bq-magenta-500:#e83fab;--bq-magenta-600:#de1395;--bq-magenta-700:#b20f77;--bq-magenta-800:#850c59;--bq-magenta-900:#58083c;--bq-magenta-1000:#2c041e;--bq-neutral-white:#fbfbfc;--bq-neutral-black:#060708;--bq-orange-100:#fbf0e9;--bq-orange-200:#f8e1d4;--bq-orange-300:#f1c2a8;--bq-orange-400:#eaa47d;--bq-orange-500:#e38551;--bq-orange-600:#dc6726;--bq-orange-700:#b0521e;--bq-orange-800:#843e17;--bq-orange-900:#58290f;--bq-orange-1000:#2c1508;--bq-purple-100:#efebf8;--bq-purple-200:#e0d7f2;--bq-purple-300:#c1afe5;--bq-purple-400:#a388d8;--bq-purple-500:#8460cb;--bq-purple-600:#6538be;--bq-purple-700:#512d98;--bq-purple-800:#3d2272;--bq-purple-900:#28164c;--bq-purple-1000:#140b26;--bq-red-100:#fce7ea;--bq-red-200:#f9d1d5;--bq-red-300:#f3a2ac;--bq-red-400:#ed7482;--bq-red-500:#e74559;--bq-red-600:#e1172f;--bq-red-700:#b41226;--bq-red-800:#870e1c;--bq-red-900:#5a0913;--bq-red-1000:#2d0509;--bq-sky-100:#eff4fb;--bq-sky-200:#dfeaf8;--bq-sky-300:#bfd5f1;--bq-sky-400:#9ec1e9;--bq-sky-500:#7eace2;--bq-sky-600:#5e97db;--bq-sky-700:#4b79af;--bq-sky-800:#385b83;--bq-sky-900:#263c58;--bq-sky-1000:#131e2c;--bq-teal-100:#e5f7f5;--bq-teal-200:#ccf0eb;--bq-teal-300:#99e1d8;--bq-teal-400:#66d2c4;--bq-teal-500:#33c3b1;--bq-teal-600:#00b49d;--bq-teal-700:#00907e;--bq-teal-800:#006c5e;--bq-teal-900:#00483f;--bq-teal-1000:#00241f;--bq-volcano-100:#feede7;--bq-volcano-200:#fddbd1;--bq-volcano-300:#fbb8a3;--bq-volcano-400:#fa9474;--bq-volcano-500:#f87146;--bq-volcano-600:#f64d18;--bq-volcano-700:#c53e13;--bq-volcano-800:#942e0e;--bq-volcano-900:#621f0a;--bq-volcano-1000:#310f05;--bq-yellow-100:#fefbe7;--bq-yellow-200:#fcf6d0;--bq-yellow-300:#faeea0;--bq-yellow-400:#f7e571;--bq-yellow-500:#f5dd41;--bq-yellow-600:#f2d412;--bq-yellow-700:#c2aa0e;--bq-yellow-800:#917f0b;--bq-yellow-900:#615507;--bq-yellow-1000:#302a04;--bq-endava-grey-50:#f7f7f8;--bq-endava-grey-100:#e4e6e7;--bq-endava-grey-200:#b5babe;--bq-endava-grey-300:#949ca1;--bq-endava-grey-400:#737d84;--bq-endava-grey-500:#525f67;--bq-endava-grey-600:#30404b;--bq-endava-grey-700:#2b3942;--bq-endava-grey-800:#263139;--bq-endava-grey-900:#192b37;--bq-endava-grey-950:#151b1e;--bq-endava-grey-1000:#0f1316;--bq-endava-neutral-white:#fafbfb;--bq-endava-neutral-black:#060708;--bq-endava-orange-100:#fef3f1;--bq-endava-orange-200:#fbd6d1;--bq-endava-orange-300:#fab7af;--bq-endava-orange-400:#fa988b;--bq-endava-orange-500:#fc7866;--bq-endava-orange-600:#ff5640;--bq-endava-orange-700:#ce4a39;--bq-endava-orange-800:#a03d30;--bq-endava-orange-900:#722e25;--bq-endava-orange-1000:#471e19;--bq-flypass-green-100:#e1ea80;--bq-flypass-green-200:#d9e560;--bq-flypass-green-300:#d1e040;--bq-flypass-green-400:#cada20;--bq-flypass-green-500:#c2d500;--bq-flypass-green-600:#afbf00;--bq-flypass-green-700:#9baa00;--bq-flypass-green-800:#889500;--bq-flypass-green-900:#738000;--bq-flypass-dark-grey-100:#bbb;--bq-flypass-dark-grey-200:#a4a4a4;--bq-flypass-dark-grey-300:#8d8d8d;--bq-flypass-dark-grey-400:#767676;--bq-flypass-dark-grey-500:#606060;--bq-flypass-dark-grey-600:#494949;--bq-flypass-dark-grey-700:#323232;--bq-flypass-dark-grey-800:#2c2c2c;--bq-flypass-dark-grey-900:#272727;--bq-flypass-sky-100:#a0e1f0;--bq-flypass-sky-200:#5fcde5;--bq-flypass-sky-300:#11b5d9;--bq-flypass-sky-400:#0f9ebd;--bq-flypass-sky-500:#0d87a2;--bq-flypass-sky-600:#0a6f86;--bq-flypass-sky-700:#085a6c;--bq-flypass-sky-800:#074553;--bq-flypass-sky-900:#05303a;--bq-flypass-blue-100:#cfe3f7;--bq-flypass-blue-200:#a0c8f0;--bq-flypass-blue-300:#70ace8;--bq-flypass-blue-400:#4191e1;--bq-flypass-blue-500:#1175d9;--bq-flypass-blue-600:#0e5eae;--bq-flypass-blue-700:#0a4682;--bq-flypass-blue-800:#072f57;--bq-flypass-blue-900:#03172b;--bq-flypass-orange-100:#ffddc7;--bq-flypass-orange-200:#ffccab;--bq-flypass-orange-300:#ffab74;--bq-flypass-orange-400:#ff812d;--bq-flypass-orange-500:#e17228;--bq-flypass-orange-600:#c16222;--bq-flypass-orange-700:#9f501c;--bq-flypass-orange-800:#804117;--bq-flypass-orange-900:#633211;--bq-flypass-violet-100:#e3cdff;--bq-flypass-violet-200:#b179ff;--bq-flypass-violet-300:#9747ff;--bq-flypass-violet-400:#7c3bd2;--bq-flypass-violet-500:#6a32b4;--bq-flypass-violet-600:#5b2b9b;--bq-flypass-violet-700:#4f2585;--bq-flypass-violet-800:#4f2585;--bq-flypass-violet-900:#391c62;--bq-flypass-yellow-100:#ffdf8e;--bq-flypass-yellow-200:#ffd773;--bq-flypass-yellow-300:#ffcf57;--bq-flypass-yellow-400:#ffc73a;--bq-flypass-yellow-500:#ffbf1f;--bq-flypass-yellow-600:#dfa61d;--bq-flypass-yellow-700:#bf8f18;--bq-flypass-yellow-800:#9f7713;--bq-flypass-yellow-900:#806010;--bq-flypass-red-100:#f9cccc;--bq-flypass-red-200:#f6adad;--bq-flypass-red-300:#ef8e8c;--bq-flypass-red-400:#ed6766;--bq-flypass-red-500:#e84241;--bq-flypass-red-600:#bc3535;--bq-flypass-red-700:#982c2b;--bq-flypass-red-800:#752121;--bq-flypass-red-900:#541718;--bq-flypass-blue-grey-100:#d3d7dd;--bq-flypass-blue-grey-200:#bcc2cb;--bq-flypass-blue-grey-300:#a5adbb;--bq-flypass-blue-grey-400:#8f98aa;--bq-flypass-blue-grey-500:#798499;--bq-flypass-blue-grey-600:#657189;--bq-flypass-blue-grey-700:#545e72;--bq-flypass-blue-grey-800:#434c5c;--bq-flypass-blue-grey-900:#343a47;--bq-flypass-grey-100:#fff;--bq-flypass-grey-200:#f5f5f5;--bq-flypass-grey-300:#efefef;--bq-flypass-grey-400:#e9e9e9;--bq-flypass-grey-500:#e3e3e3;--bq-flypass-grey-600:#dcdcdc;--bq-flypass-grey-700:#d6d6d6;--bq-flypass-grey-800:#d0d0d0;--bq-flypass-grey-900:#cacaca;--bq-flypass-light-100:#fff;--bq-flypass-light-200:#f5f5f5;--bq-flypass-light-300:#f4f7fa;--bq-flypass-light-400:#dde8f2;--bq-flypass-light-500:#d3d7dd;--bq-flypass-light-600:#657189;--bq-flypass-dart-100:#a1a1a1;--bq-flypass-dart-200:#515151;--bq-flypass-dart-300:#404040;--bq-flypass-dart-400:#2a2a2a;--bq-flypass-dart-500:#1b1b1b;--bq-flypass-dart-600:#0e100f}*,:after,:before{box-sizing:border-box}*{margin:0}[class^=bq-] *{font:inherit}ol[role=list],ul[role=list]{list-style-type:none}html:focus-within{scroll-behavior:smooth}[class^=bq-]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--bq-text--primary);font-family:var(--bq-font-family);font-size:var(--bq-font-size--m);letter-spacing:var(--bq-font-letter-spacing);line-height:var(--bq-font-line-height--regular);text-rendering:optimizeSpeed}a:not([class]){text-decoration-skip-ink:auto}canvas,img,picture,svg,video{display:block;max-width:100%}button,input,select,textarea{font:inherit}h1,h2,h3,h4,h5,h6,p{overflow-wrap:break-word}@media (prefers-reduced-motion:reduce){html:focus-within{scroll-behavior:auto}*,:after,:before{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto;transition-duration:.01ms!important}}:root{--bq-white:#fff;--bq-black:#060708;--bq-neutral-50:var(--bq-grey-50);--bq-neutral-100:var(--bq-grey-100);--bq-neutral-200:var(--bq-grey-200);--bq-neutral-300:var(--bq-grey-300);--bq-neutral-400:var(--bq-grey-400);--bq-neutral-500:var(--bq-grey-500);--bq-neutral-600:var(--bq-grey-600);--bq-neutral-700:var(--bq-grey-700);--bq-neutral-800:var(--bq-grey-800);--bq-neutral-900:var(--bq-grey-900);--bq-neutral-950:var(--bq-grey-950);--bq-neutral-1000:var(--bq-grey-1000);--bq-brand-light:var(--bq-iris-100);--bq-brand:var(--bq-iris-600);--bq-brand-dark:var(--bq-iris-1000);--bq-accent-light:var(--bq-purple-100);--bq-accent:var(--bq-purple-600);--bq-accent-dark:var(--bq-purple-1000);--bq-success-light:var(--bq-teal-100);--bq-success:var(--bq-teal-600);--bq-success-dark:var(--bq-teal-1000);--bq-danger-light:var(--bq-red-100);--bq-danger:var(--bq-red-600);--bq-danger-dark:var(--bq-red-1000);--bq-warning-light:var(--bq-gold-100);--bq-warning:var(--bq-gold-600);--bq-warning-dark:var(--bq-gold-1000);--bq-info-light:var(--bq-iris-100);--bq-info:var(--bq-iris-600);--bq-info-dark:var(--bq-iris-1000);--bq-focus:var(--bq-iris-600);--bq-data-01:var(--bq-brand);--bq-data-02:var(--bq-purple-600);--bq-data-03:var(--bq-magenta-600);--bq-data-04:var(--bq-cyan-600);--bq-data-05:var(--bq-teal-600);--bq-data-06:var(--bq-orange-600);--bq-data-07:var(--bq-yellow-600);--bq-data-08:var(--bq-red-600);--bq-data-09:var(--bq-blue-600);--bq-data-10:var(--bq-grey-600);--bq-data-11:var(--bq-black);--bq-data-12:var(--bq-white);--bq-radius--none:0;--bq-radius--xs2:0.125rem;--bq-radius--xs:0.313rem;--bq-radius--s:0.625rem;--bq-radius--m:0.75rem;--bq-radius--l:1.5rem;--bq-radius--full:9999px;--bq-box-shadow--xs:0 2px 0 rgba(0,0,0,.016);--bq-box-shadow--s:0 8px 24px rgba(0,0,0,.04);--bq-box-shadow--m:0 10px 48px -16px rgba(0,0,0,.12);--bq-box-shadow--l:0 20px 58px -16px rgba(0,0,0,.16);--bq-font-family:\"Outfit\",sans-serif;--bq-font-size--xs:0.75rem;--bq-font-size--s:0.875rem;--bq-font-size--m:1rem;--bq-font-size--l:1.125rem;--bq-font-size--xl:1.5rem;--bq-font-size--xxl:2rem;--bq-font-size--xxl2:2.5rem;--bq-font-size--xxl3:3rem;--bq-font-size--xxl4:3.5rem;--bq-font-size--xxl5:4rem;--bq-font-weight--thin:100;--bq-font-weight--light:300;--bq-font-weight--regular:400;--bq-font-weight--medium:500;--bq-font-weight--semibold:600;--bq-font-weight--bold:700;--bq-font-line-height--small:1.2;--bq-font-line-height--regular:1.5;--bq-font-line-height--large:1.5;--bq-spacing-xs3:0.125rem;--bq-spacing-xs2:0.25rem;--bq-spacing-xs:0.5rem;--bq-spacing-s:0.75rem;--bq-spacing-m:1rem;--bq-spacing-l:1.5rem;--bq-spacing-xl:2rem;--bq-spacing-xxl:2.5rem;--bq-spacing-xxl2:3.5rem;--bq-spacing-xxl3:4rem;--bq-spacing-xxl4:4.5rem;--bq-stroke-s:1px;--bq-stroke-m:2px;--bq-stroke-l:3px}.beeq.light,.light,:root,[bq-mode=light]{--bq-background--primary:var(--bq-white);--bq-background--secondary:var(--bq-neutral-100);--bq-background--tertiary:var(--bq-neutral-200);--bq-background--alt:var(--bq-neutral-300);--bq-background--inverse:var(--bq-neutral-900);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-800);--bq-icon--alt:var(--bq-white);--bq-icon--secondary:var(--bq-neutral-600);--bq-icon--inverse:var(--bq-neutral-50);--bq-icon--brand:var(--bq-brand);--bq-icon--info:var(--bq-brand);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-200);--bq-stroke--secondary:var(--bq-neutral-600);--bq-stroke--tertiary:var(--bq-neutral-900);--bq-stroke--inverse:var(--bq-white);--bq-stroke--brand:var(--bq-brand);--bq-stroke--alt:var(--bq-neutral-50);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-brand);--bq-text--primary:var(--bq-neutral-800);--bq-text--secondary:var(--bq-neutral-600);--bq-text--inverse:var(--bq-neutral-50);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-white);--bq-text--info:var(--bq-brand);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-white);--bq-ui--secondary:var(--bq-neutral-200);--bq-ui--tertiary:var(--bq-neutral-500);--bq-ui--inverse:var(--bq-neutral-900);--bq-ui--brand:var(--bq-brand);--bq-ui--brand-alt:var(--bq-brand-light);--bq-ui--alt:var(--bq-neutral-50);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-light);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-light);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-light);--bq-ui--info:var(--bq-brand);--bq-ui--info-alt:var(--bq-brand-light);--bq-hover:#bcbfc5;--bq-active:#444546}.beeq.dark,.dark,[bq-mode=dark]{--bq-background--primary:var(--bq-neutral-1000);--bq-background--secondary:var(--bq-neutral-950);--bq-background--tertiary:var(--bq-neutral-800);--bq-background--alt:var(--bq-neutral-700);--bq-background--inverse:var(--bq-neutral-600);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-100);--bq-icon--secondary:var(--bq-neutral-400);--bq-icon--inverse:var(--bq-neutral-800);--bq-icon--brand:var(--bq-brand);--bq-icon--alt:var(--bq-white);--bq-icon--info:var(--bq-brand);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-900);--bq-stroke--secondary:var(--bq-neutral-700);--bq-stroke--tertiary:var(--bq-neutral-400);--bq-stroke--inverse:var(--bq-neutral-950);--bq-stroke--brand:var(--bq-brand);--bq-stroke--alt:var(--bq-neutral-1000);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-brand);--bq-text--primary:var(--bq-neutral-100);--bq-text--secondary:var(--bq-neutral-400);--bq-text--inverse:var(--bq-neutral-800);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-white);--bq-text--info:var(--bq-brand);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-neutral-900);--bq-ui--secondary:var(--bq-neutral-800);--bq-ui--tertiary:var(--bq-neutral-700);--bq-ui--inverse:var(--bq-neutral-100);--bq-ui--brand:var(--bq-brand);--bq-ui--brand-alt:var(--bq-brand-dark);--bq-ui--alt:var(--bq-neutral-950);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-dark);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-dark);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-dark);--bq-ui--info:var(--bq-brand);--bq-ui--info-alt:var(--bq-brand-dark);--bq-hover:#444546;--bq-active:#1f2026}.endava,[bq-theme=endava]{--bq-font-family:\"Poppins\",sans-serif;--bq-white:#fafbfb;--bq-black:#030406;--bq-neutral-50:var(--bq-endava-grey-50);--bq-neutral-100:var(--bq-endava-grey-100);--bq-neutral-200:var(--bq-endava-grey-200);--bq-neutral-300:var(--bq-endava-grey-300);--bq-neutral-400:var(--bq-endava-grey-400);--bq-neutral-500:var(--bq-endava-grey-500);--bq-neutral-600:var(--bq-endava-grey-600);--bq-neutral-700:var(--bq-endava-grey-700);--bq-neutral-800:var(--bq-endava-grey-800);--bq-neutral-900:var(--bq-endava-grey-900);--bq-neutral-950:var(--bq-endava-grey-950);--bq-neutral-1000:var(--bq-endava-grey-1000);--bq-brand-light:var(--bq-endava-orange-100);--bq-brand:var(--bq-endava-orange-600);--bq-brand-dark:var(--bq-endava-orange-1000);--bq-accent-light:var(--bq-endava-orange-100);--bq-accent:var(--bq-endava-orange-600);--bq-accent-dark:var(--bq-endava-orange-1000);--bq-success-light:var(--bq-green-100);--bq-success:var(--bq-green-600);--bq-success-dark:var(--bq-green-1000);--bq-danger-light:var(--bq-corai-100);--bq-danger:var(--bq-corai-600);--bq-danger-dark:var(--bq-corai-1000);--bq-warning-light:var(--bq-yellow-100);--bq-warning:var(--bq-yellow-600);--bq-warning-dark:var(--bq-yellow-1000);--bq-info-light:var(--bq-blue-100);--bq-info:var(--bq-blue-600);--bq-info-dark:var(--bq-blue-1000);--bq-focus:var(--bq-endava-orange-600);--bq-data-01:var(--bq-brand);--bq-data-02:#af0cd8;--bq-data-03:#0ca8d8;--bq-data-04:var(--bq-teal-600);--bq-data-05:var(--bq-yellow-600);--bq-data-06:var(--bq-orange-600);--bq-data-07:var(--bq-blue-600);--bq-data-08:var(--bq-red-600);--bq-data-09:var(--bq-purple-600);--bq-data-10:#394b56;--bq-data-11:var(--bq-black);--bq-data-12:var(--bq-white)}.endava.light,[bq-theme=endava][bq-mode=light]{--bq-background--primary:var(--bq-white);--bq-background--secondary:var(--bq-neutral-100);--bq-background--tertiary:var(--bq-neutral-200);--bq-background--alt:var(--bq-neutral-300);--bq-background--inverse:var(--bq-neutral-900);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-800);--bq-icon--secondary:var(--bq-neutral-600);--bq-icon--inverse:var(--bq-neutral-50);--bq-icon--brand:var(--bq-brand);--bq-icon--alt:var(--bq-white);--bq-icon--info:var(--bq-info);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-200);--bq-stroke--secondary:var(--bq-neutral-600);--bq-stroke--tertiary:var(--bq-neutral-900);--bq-stroke--inverse:var(--bq-white);--bq-stroke--brand:var(--bq-brand);--bq-stroke--alt:var(--bq-neutral-50);--bq-stroke--brand-alt:var(--bq-brand-light);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-info);--bq-text--primary:var(--bq-neutral-800);--bq-text--secondary:var(--bq-neutral-600);--bq-text--inverse:var(--bq-neutral-50);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-white);--bq-text--info:var(--bq-info);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-white);--bq-ui--secondary:var(--bq-neutral-200);--bq-ui--tertiary:var(--bq-neutral-500);--bq-ui--inverse:var(--bq-neutral-900);--bq-ui--alt:var(--bq-neutral-50);--bq-ui--brand-alt:var(--bq-brand-light);--bq-ui--brand:var(--bq-brand);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-light);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-light);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-light);--bq-ui--info:var(--bq-info);--bq-ui--info-alt:var(--bq-info-light);--bq-hover:#444546;--bq-active:#1f2026}.endava.dark,[bq-theme=endava][bq-mode=dark]{--bq-background--primary:var(--bq-neutral-1000);--bq-background--secondary:var(--bq-neutral-900);--bq-background--tertiary:var(--bq-neutral-800);--bq-background--alt:var(--bq-neutral-700);--bq-background--inverse:var(--bq-neutral-600);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-100);--bq-icon--secondary:var(--bq-neutral-400);--bq-icon--inverse:var(--bq-neutral-800);--bq-icon--brand:var(--bq-brand);--bq-icon--alt:var(--bq-white);--bq-icon--info:var(--bq-info);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-900);--bq-stroke--secondary:var(--bq-neutral-700);--bq-stroke--tertiary:var(--bq-neutral-400);--bq-stroke--inverse:var(--bq-neutral-950);--bq-stroke--brand:var(--bq-brand);--bq-stroke--brand-alt:var(--bq-brand-dark);--bq-stroke--alt:var(--bq-neutral-1000);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-info);--bq-text--primary:var(--bq-neutral-100);--bq-text--secondary:var(--bq-neutral-400);--bq-text--inverse:var(--bq-neutral-800);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-neutral-white);--bq-text--info:var(--bq-info);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-neutral-900);--bq-ui--secondary:var(--bq-neutral-800);--bq-ui--tertiary:var(--bq-neutral-700);--bq-ui--inverse:var(--bq-neutral-100);--bq-ui--brand:var(--bq-brand);--bq-ui--brand-alt:var(--bq-brand-dark);--bq-ui--alt:var(--bq-neutral-950);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-dark);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-dark);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-dark);--bq-ui--info:var(--bq-info);--bq-ui--info-alt:var(--bq-info-dark);--bq-hover:#444546;--bq-active:#1f2026}.flypass,[bq-theme=flypass]{--bq-font-family:\"Inter\",sans-serif;--bq-white:#fff;--bq-black:#0e100f;--bq-neutral-50:var(--bq-flypass-dark-grey-100);--bq-neutral-100:var(--bq-flypass-dart-100);--bq-neutral-200:var(--bq-flypass-grey-200);--bq-neutral-300:var(--bq-flypass-dark-grey-300);--bq-neutral-400:var(--bq-flypass-dark-grey-400);--bq-neutral-500:var(--bq-flypass-dark-grey-500);--bq-neutral-600:var(--bq-flypass-dark-grey-600);--bq-neutral-700:var(--bq-flypass-dark-grey-700);--bq-neutral-800:var(--bq-flypass-dark-grey-800);--bq-neutral-900:var(--bq-flypass-dark-grey-900);--bq-neutral-950:var(--bq-flypass-dark-grey-900);--bq-neutral-1000:var(--bq-flypass-dark-grey-900);--bq-brand-light:var(--bq-flypass-green-200);--bq-brand:var(--bq-flypass-green-500);--bq-brand-dark:var(--bq-flypass-green-700);--bq-accent-light:var(--bq-flypass-green-300);--bq-accent:var(--bq-flypass-green-600);--bq-accent-dark:var(--bq-flypass-green-800);--bq-success-light:var(--bq-green-100);--bq-success:var(--bq-green-600);--bq-success-dark:var(--bq-green-1000);--bq-danger-light:var(--bq-corai-100);--bq-danger:var(--bq-corai-600);--bq-danger-dark:var(--bq-corai-1000);--bq-warning-light:var(--bq-yellow-100);--bq-warning:var(--bq-yellow-600);--bq-warning-dark:var(--bq-yellow-1000);--bq-info-light:var(--bq-blue-100);--bq-info:var(--bq-blue-600);--bq-info-dark:var(--bq-blue-1000);--bq-focus:var(--bq-flypass-green-500);--bq-data-01:var(--bq-brand);--bq-data-02:#af0cd8;--bq-data-03:#0ca8d8;--bq-data-04:var(--bq-teal-600);--bq-data-05:var(--bq-yellow-600);--bq-data-06:var(--bq-orange-600);--bq-data-07:var(--bq-blue-600);--bq-data-08:var(--bq-red-600);--bq-data-09:var(--bq-purple-600);--bq-data-10:#394b56;--bq-data-11:var(--bq-black);--bq-data-12:var(--bq-white)}.flypass.light,[bq-theme=flypass][bq-mode=light]{--bq-background--primary:var(--bq-white);--bq-background--secondary:var(--bq-neutral-100);--bq-background--tertiary:var(--bq-neutral-200);--bq-background--alt:var(--bq-neutral-300);--bq-background--inverse:var(--bq-neutral-900);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-800);--bq-icon--secondary:var(--bq-neutral-600);--bq-icon--inverse:var(--bq-neutral-50);--bq-icon--brand:var(--bq-brand);--bq-icon--alt:var(--bq-white);--bq-icon--info:var(--bq-info);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-200);--bq-stroke--secondary:var(--bq-neutral-600);--bq-stroke--tertiary:var(--bq-neutral-900);--bq-stroke--inverse:var(--bq-white);--bq-stroke--brand:var(--bq-brand);--bq-stroke--alt:var(--bq-neutral-50);--bq-stroke--brand-alt:var(--bq-brand-light);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-info);--bq-text--primary:var(--bq-neutral-700);--bq-text--secondary:var(--bq-neutral-600);--bq-text--inverse:var(--bq-neutral-50);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-neutral-700);--bq-text--info:var(--bq-info);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-white);--bq-ui--secondary:var(--bq-neutral-200);--bq-ui--tertiary:var(--bq-neutral-500);--bq-ui--inverse:var(--bq-neutral-900);--bq-ui--alt:var(--bq-neutral-50);--bq-ui--brand-alt:var(--bq-brand-light);--bq-ui--brand:var(--bq-brand);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-light);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-light);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-light);--bq-ui--info:var(--bq-info);--bq-ui--info-alt:var(--bq-info-light);--bq-hover:#444546;--bq-active:#1f2026}.flypass.dark,[bq-theme=flypass][bq-mode=dark]{--bq-background--primary:var(--bq-neutral-1000);--bq-background--secondary:var(--bq-neutral-900);--bq-background--tertiary:var(--bq-neutral-800);--bq-background--alt:var(--bq-neutral-700);--bq-background--inverse:var(--bq-neutral-600);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-100);--bq-icon--secondary:var(--bq-neutral-400);--bq-icon--inverse:var(--bq-neutral-800);--bq-icon--brand:var(--bq-brand);--bq-icon--alt:var(--bq-white);--bq-icon--info:var(--bq-info);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-900);--bq-stroke--secondary:var(--bq-neutral-700);--bq-stroke--tertiary:var(--bq-neutral-400);--bq-stroke--inverse:var(--bq-neutral-950);--bq-stroke--brand:var(--bq-brand);--bq-stroke--brand-alt:var(--bq-brand-dark);--bq-stroke--alt:var(--bq-neutral-1000);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-info);--bq-text--primary:var(--bq-neutral-100);--bq-text--secondary:var(--bq-neutral-400);--bq-text--inverse:var(--bq-neutral-800);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-neutral-white);--bq-text--info:var(--bq-info);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-neutral-900);--bq-ui--secondary:var(--bq-neutral-800);--bq-ui--tertiary:var(--bq-neutral-700);--bq-ui--inverse:var(--bq-neutral-100);--bq-ui--brand:var(--bq-brand);--bq-ui--brand-alt:var(--bq-brand-dark);--bq-ui--alt:var(--bq-neutral-950);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-dark);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-dark);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-dark);--bq-ui--info:var(--bq-info);--bq-ui--info-alt:var(--bq-info-dark);--bq-hover:#444546;--bq-active:#1f2026}.absolute{position:absolute}.start-xs2{inset-inline-start:var(--bq-spacing-xs2)}.inline-block{display:inline-block}.flex{display:flex}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.select-none{user-select:none}.items-center{align-items:center}.rounded-full{border-radius:var(--bq-radius--full)}.rounded-s{border-radius:var(--bq-radius--s)}.bg-ui-primary{background-color:var(--bq-ui--primary)}.opacity-60{opacity:.6}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.bg-hover-ui-primary{background-color:color-mix(in srgb,var(--bq-ui--primary),var(--bq-hover) 20%)}.bs-\\[--bq-switch--dot-size\\]{block-size:var(--bq-switch--dot-size)}.is-\\[--bq-switch--dot-size\\]{inline-size:var(--bq-switch--dot-size)}.is-full{inline-size:100%}.p-b-2{padding-block:.5rem}.focus{outline:var(--bq-ring-width,2px) solid var(--bq-ring-color-focus,var(--bq-focus));outline-offset:var(--bq-ring-offset-width,1px)}@-webkit-keyframes fade-in{0%{opacity:0}}@keyframes fade-in{0%{opacity:0}}@-webkit-keyframes slide-in{0%{-webkit-transform:translateY(10px);transform:translateY(10px)}}@keyframes slide-in{0%{-webkit-transform:translateY(10px);transform:translateY(10px)}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}:host{--bq-switch--height:24px;--bq-switch--justify-content:\"start\";--bq-switch--width:44px;--bq-switch--dot-size:calc(var(--bq-switch--height) - var(--bq-spacing-xs2)*2);display:inline-block}:host(.full-width){inline-size:100%}.bq-switch{-webkit-box-pack:var(--bq-switch--justify-content);-ms-flex-pack:var(--bq-switch--justify-content);align-items:center;border-radius:var(--bq-radius--s);cursor:pointer;display:flex;justify-content:var(--bq-switch--justify-content);padding-block:.5rem;padding-inline:.5rem;transition-duration:.3s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);user-select:none}.bq-switch.has-background:not(.is-disabled):hover{background-color:color-mix(in srgb,var(--bq-ui--primary),var(--bq-hover) 20%)}.bq-switch.is-disabled{cursor:not-allowed;opacity:.6}.bq-switch--input:not(:disabled):focus-visible~.bq-switch--control,.bq-switch--input:not(:disabled):focus~.bq-switch--control{outline:var(--bq-ring-width,2px) solid var(--bq-ring-color-focus,var(--bq-focus));outline-offset:var(--bq-ring-offset-width,1px)}.bq-switch--control__dot{background-color:var(--bq-ui--primary);block-size:var(--bq-switch--dot-size);border-radius:var(--bq-radius--full);inline-size:var(--bq-switch--dot-size);inset-inline-start:var(--bq-spacing-xs2);position:absolute;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.group.is-checked .bq-switch--control__dot{background-color:var(--bq-icon--alt);inset-inline-start:calc(100% - var(--bq-switch--dot-size) - var(--bq-spacing-xs2))}.bq-switch--control__icon{--bq-icon--size:var(--bq-switch--dot-size)!important}.bq-switch--control__icon::part(base){display:flex}.group.is-checked .group-\\[\\&\\.is-checked\\]\\:start-\\[calc\\(100\\%_-_var\\(--bq-switch--dot-size\\)_-_var\\(--bq-spacing-xs2\\)\\)\\]{inset-inline-start:calc(100% - var(--bq-switch--dot-size) - var(--bq-spacing-xs2))}.group.is-checked .group-\\[\\&\\.is-checked\\]\\:bg-\\[--bq-icon--alt\\]{background-color:var(--bq-icon--alt)}.blur{--tw-blur:blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.static{position:static}.relative{position:relative}.me-s{margin-inline-end:var(--bq-spacing-s)}.ms-s{margin-inline-start:var(--bq-spacing-s)}.box-border{box-sizing:border-box}.flex-row-reverse{flex-direction:row-reverse}.justify-between{justify-content:space-between}.bg-ui-tertiary{background-color:var(--bq-ui--tertiary)}.text-m{font-size:var(--bq-font-size--m)}.font-medium{font-weight:var(--bq-font-weight--medium)}.leading-regular{line-height:var(--bq-font-line-height--regular)}.text-primary{color:var(--bq-text--primary)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.\\!bs-\\[--bq-switch--dot-size\\]{block-size:var(--bq-switch--dot-size)!important}.\\!is-\\[--bq-switch--width\\]{inline-size:var(--bq-switch--width)!important}.bs-\\[--bq-switch--height\\]{block-size:var(--bq-switch--height)}.is-\\[--bq-switch--width\\]{inline-size:var(--bq-switch--width)}.p-b-xs2{padding-block:var(--bq-spacing-xs2)}.p-i-xs2{padding-inline:var(--bq-spacing-xs2)}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.group.is-checked .group-\\[\\&\\.is-checked\\]\\:bg-ui-brand{background-color:var(--bq-ui--brand)}.peer:checked~.peer-checked\\:invisible{visibility:hidden}.text-\\[color\\:--bq-icon--color\\]{color:var(--bq-icon--color)}.bs-\\[--bq-icon--size\\]{block-size:var(--bq-icon--size)}.is-\\[--bq-icon--size\\]{inline-size:var(--bq-icon--size)}";

const BqSwitch$1 = /*@__PURE__*/ proxyCustomElement(class BqSwitch extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.bqChange = createEvent(this, "bqChange", 7);
        this.bqFocus = createEvent(this, "bqFocus", 7);
        this.bqBlur = createEvent(this, "bqBlur", 7);
        this.internals = this.attachInternals();
    }
    // Own Properties
    // ====================
    labelElem;
    inputElem;
    prevCheckedValue;
    // Reference to host HTML element
    // ===================================
    internals;
    get el() { return this; }
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    hasLabel = false;
    // Public Property API
    // ========================
    /** If true, a background will be displayed on hover */
    backgroundOnHover = false;
    /** It indicates whether if the switch is `ON` by default (when the page loads) */
    checked = false;
    /** If true, the switch control will be disabled and no interaction will be allowed */
    disabled = false;
    /** The native form validation message */
    formValidationMessage;
    /** If true, the component will take the full width space available on the parent container */
    fullWidth = false;
    /** It indicates how to to display the on/off marks inside the control, with icons or none (default)  */
    innerLabel = 'default';
    /**
     * It defines how to distribute the space between and around the control and the label text
     * (https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
     */
    justifyContent = 'start';
    /** Name of the form control. Submitted with the form as part of a name/value pair */
    name;
    /** If `true`, it will indicate that the user must switch `ON` the element before the owning form can be submitted */
    required = false;
    /** If true, the order of the control and the label text will be changed  */
    reverseOrder = false;
    /** The input control's value, submitted as a name/value pair with form data. */
    value;
    // Prop lifecycle events
    // =======================
    handleRequiredChange() {
        this.updateFormValidity();
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Handler to be called when the switch state changes */
    bqChange;
    /** Handler to be called when the switch gets focus */
    bqFocus;
    /** Handler to be called when the switch loses focus */
    bqBlur;
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    componentWillLoad() {
        this.prevCheckedValue = this.checked;
    }
    componentDidLoad() {
        this.handleSlotChange();
    }
    componentDidUpdate() {
        /**
         * We need to trigger the `bqChange` immediately after the first update happens
         * so the checked attribute get applied, otherwise, a delay will happen
         * between the event emits and when the checked attribute value gets reflected in the element host.
         */
        if (this.checked !== this.prevCheckedValue) {
            this.bqChange.emit({ checked: this.checked });
            this.prevCheckedValue = this.checked;
        }
    }
    formAssociatedCallback() {
        this.setFormValue(this.checked);
        this.updateFormValidity();
    }
    formResetCallback() {
        // Reset the form value and validity state
        this.checked = false;
        this.inputElem.removeAttribute('checked');
        this.internals?.setFormValue(undefined);
        this.updateFormValidity();
    }
    // Listeners
    // ==============
    // Public methods API
    // These methods are exposed on the host element.
    // Always use two lines.
    // Public Methods must be async.
    // Requires JSDocs for public API documentation.
    // ===============================================
    /**
     * Simulate a click event on the native `<input>` HTML element used under the hood.
     * Use this method instead of the global `element.click()`.
     */
    async vClick() {
        this.inputElem?.click();
    }
    /**
     * Sets focus on the native `<input>` HTML element used under the hood.
     * Use this method instead of the global `element.focus()`.
     */
    async vFocus() {
        this.inputElem?.focus();
    }
    /**
     * Remove focus from the native `<input>` HTML element used under the hood.
     * Use this method instead of the global `element.blur()`.
     */
    async vBlur() {
        this.inputElem?.blur();
    }
    // Local methods
    // Internal business logic.
    // These methods cannot be called from the host element.
    // =======================================================
    handleChange = () => {
        this.checked = !this.checked;
        this.inputElem.setAttribute('checked', `${this.checked}`);
        this.setFormValue(this.checked);
        this.updateFormValidity();
    };
    handleOnFocus = () => {
        this.bqFocus.emit(this.el);
    };
    handleOnBlur = () => {
        this.bqBlur.emit(this.el);
    };
    handleSlotChange = () => {
        const slot = this.labelElem?.querySelector('slot') ?? null;
        if (isNil(slot))
            return;
        this.hasLabel = !!getTextContent(slot, { recurse: true }).length;
    };
    setFormValue = (checked) => {
        const value = checked ? 'on' : undefined;
        // Set form value based on the checked state
        // Here we also pass the state of the component (2nd argument) as the state of the form control
        // Details: https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/setFormValue
        this.internals?.setFormValue(value, `${this.checked}`);
    };
    updateFormValidity = () => {
        const { formValidationMessage, internals, required, checked, inputElem } = this;
        // Clear the validity state
        internals?.states.clear();
        if (!(required && !checked)) {
            // If the switch component is not required or is checked, set the validity state to valid
            internals?.states.add('valid');
            internals?.setValidity({});
            return;
        }
        // Set validity state based on the required property and checked state
        internals?.states.add('invalid');
        internals?.setValidity({ valueMissing: true }, formValidationMessage, inputElem);
    };
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        const hostStyle = {
            ...(this.justifyContent && { '--bq-switch--justify-content': this.justifyContent }),
        };
        const labelCssClasses = {
            'has-background': this.backgroundOnHover,
            'is-checked': this.checked,
            'is-disabled': this.disabled,
            'flex-row-reverse': this.reverseOrder,
        };
        return (h(Host, { key: '8295fa546abc07b5bebf8d29fab21463a6561be5', class: { 'full-width': this.fullWidth }, style: hostStyle }, h("label", { key: '3faea35d773b3cbdb79179903273271cd7d28be0', class: { 'bq-switch group': true, ...labelCssClasses }, part: "base" }, h("input", { key: '30d6ffea7a3800469bbb6a90c31a379925b2233b', class: "bq-switch--input peer sr-only !bs-[--bq-switch--dot-size] !is-[--bq-switch--width] peer-checked:invisible", type: "checkbox", checked: this.checked, disabled: this.disabled, required: this.required, name: !isNil(this.name) ? this.name : undefined, "aria-label": this.name, "aria-checked": this.checked ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false', onBlur: this.handleOnBlur, onChange: this.handleChange, onFocus: this.handleOnFocus, ref: (input) => (this.inputElem = input), role: "switch", value: this.value }), h("div", { key: '97495408b935f71ff3f923003b9b7ba5032f4f53', class: "bq-switch--control relative box-border flex justify-between rounded-full bg-ui-tertiary transition duration-300 bs-[--bq-switch--height] is-[--bq-switch--width] p-b-xs2 p-i-xs2 group-[&.is-checked]:bg-ui-brand", part: "control" }, this.innerLabel === 'icon' && (h("bq-icon", { key: 'eb39886fd1be8959cfc1a707bff44f4a5ddfe02c', class: "bq-switch--control__icon on", name: "check", color: "icon--alt", role: "img", title: "On", part: "icon-on" })), this.innerLabel === 'icon' && (h("bq-icon", { key: 'cf4db5387f312c5388ddc913fc3544fd02f90d6e', class: "bq-switch--control__icon off", name: "x", color: "icon--inverse", role: "img", title: "Off", part: "icon-off" })), h("div", { key: '505272e0cb05c2d195666c15e130c509eb0dbca4', class: "bq-switch--control__dot", part: "dot" })), h("span", { key: 'db897aa5e4488eec93ebf34080c165ada3d0f2ef', class: {
                'bq-switch--label text-m font-medium leading-regular text-primary transition-colors duration-300': true,
                'ms-s': this.hasLabel && !this.reverseOrder,
                'me-s': this.hasLabel && this.reverseOrder,
            }, ref: (span) => (this.labelElem = span), part: "label" }, h("slot", { key: '807d4d881be9187e55135ceb1f01cb01f9e1b46d', onSlotchange: this.handleSlotChange })))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "required": ["handleRequiredChange"]
    }; }
    static get style() { return bqSwitchCss; }
}, [81, "bq-switch", {
        "backgroundOnHover": [516, "background-on-hover"],
        "checked": [1540],
        "disabled": [516],
        "formValidationMessage": [1025, "form-validation-message"],
        "fullWidth": [516, "full-width"],
        "innerLabel": [513, "inner-label"],
        "justifyContent": [513, "justify-content"],
        "name": [513],
        "required": [516],
        "reverseOrder": [516, "reverse-order"],
        "value": [513],
        "hasLabel": [32],
        "vClick": [64],
        "vFocus": [64],
        "vBlur": [64]
    }, undefined, {
        "required": ["handleRequiredChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bq-switch", "bq-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "bq-switch":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BqSwitch$1);
            }
            break;
        case "bq-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const BqSwitch = BqSwitch$1;
const defineCustomElement = defineCustomElement$1;

export { BqSwitch, defineCustomElement };

//# sourceMappingURL=bq-switch.js.map