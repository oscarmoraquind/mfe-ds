/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './index2.js';
import { d as debounce, v as validatePropValue, m as isNil, l as isHTMLElement, e as getNextElement } from './index3.js';
import { T as TAB_SIZE, a as TAB_ORIENTATION, b as TAB_PLACEMENT } from './bq-tab.types.js';

const bqTabGroupCss = "::backdrop,:root{--bq-blue-100:#e7f0fd;--bq-blue-200:#d0e2fb;--bq-blue-300:#a1c5f7;--bq-blue-400:#73a8f3;--bq-blue-500:#448bef;--bq-blue-600:#156eeb;--bq-blue-700:#1158bc;--bq-blue-800:#0d428d;--bq-blue-900:#082c5e;--bq-blue-1000:#04162f;--bq-corai-100:#fff2f2;--bq-corai-200:#ffe6e6;--bq-corai-300:#ffccce;--bq-corai-400:#ffb3b5;--bq-corai-500:#ff999d;--bq-corai-600:#ff8084;--bq-corai-700:#cc666a;--bq-corai-800:#994d4f;--bq-corai-900:#663335;--bq-corai-1000:#331a1a;--bq-cyan-100:#e8f7fb;--bq-cyan-200:#d2f0f8;--bq-cyan-300:#a5e1f1;--bq-cyan-400:#78d1e9;--bq-cyan-500:#4bc2e2;--bq-cyan-600:#1eb3db;--bq-cyan-700:#188faf;--bq-cyan-800:#126b83;--bq-cyan-900:#0c4858;--bq-cyan-1000:#06242c;--bq-gold-100:#fbf4ec;--bq-gold-200:#f7e9da;--bq-gold-300:#f0d3b6;--bq-gold-400:#e8bc91;--bq-gold-500:#e1a66d;--bq-gold-600:#d99048;--bq-gold-700:#ae733a;--bq-gold-800:#82562b;--bq-gold-900:#573a1d;--bq-gold-1000:#2b1d0e;--bq-green-100:#e8f8ef;--bq-green-200:#d2f1e0;--bq-green-300:#a5e3c1;--bq-green-400:#78d5a1;--bq-green-500:#4bc782;--bq-green-600:#1eb963;--bq-green-700:#18944f;--bq-green-800:#126f3b;--bq-green-900:#0c4a28;--bq-green-1000:#062514;--bq-grey-100:#f1f2f4;--bq-grey-200:#e7e8eb;--bq-grey-300:#caccd2;--bq-grey-400:#a6aab3;--bq-grey-50:#f6f6f8;--bq-grey-500:#898e99;--bq-grey-600:#646a77;--bq-grey-700:#3f4350;--bq-grey-800:#2a2c35;--bq-grey-900:#1c1d23;--bq-grey-950:#15161a;--bq-grey-1000:#0d0e11;--bq-indigo-100:#edecfc;--bq-indigo-200:#dcdafa;--bq-indigo-300:#b9b5f5;--bq-indigo-400:#9590ef;--bq-indigo-500:#726bea;--bq-indigo-600:#4f46e5;--bq-indigo-700:#3f38b7;--bq-indigo-800:#2f2a89;--bq-indigo-900:#201c5c;--bq-indigo-1000:#100e2e;--bq-iris-100:#e9f0ff;--bq-iris-200:#d6e0ff;--bq-iris-300:#b2c0fe;--bq-iris-400:#8691f8;--bq-iris-500:#6061ee;--bq-iris-600:#4f46e5;--bq-iris-700:#413abd;--bq-iris-800:#332e95;--bq-iris-900:#26216d;--bq-iris-1000:#181545;--bq-lime-100:#f5fae8;--bq-lime-200:#ecf6d2;--bq-lime-300:#d9eda5;--bq-lime-400:#c5e379;--bq-lime-500:#b2da4c;--bq-lime-600:#9fd11f;--bq-lime-700:#7fa719;--bq-lime-800:#5f7d13;--bq-lime-900:#40540c;--bq-lime-1000:#202a06;--bq-magenta-100:#fce7f4;--bq-magenta-200:#f9cfea;--bq-magenta-300:#f39fd6;--bq-magenta-400:#ee6fbf;--bq-magenta-500:#e83fab;--bq-magenta-600:#de1395;--bq-magenta-700:#b20f77;--bq-magenta-800:#850c59;--bq-magenta-900:#58083c;--bq-magenta-1000:#2c041e;--bq-neutral-white:#fbfbfc;--bq-neutral-black:#060708;--bq-orange-100:#fbf0e9;--bq-orange-200:#f8e1d4;--bq-orange-300:#f1c2a8;--bq-orange-400:#eaa47d;--bq-orange-500:#e38551;--bq-orange-600:#dc6726;--bq-orange-700:#b0521e;--bq-orange-800:#843e17;--bq-orange-900:#58290f;--bq-orange-1000:#2c1508;--bq-purple-100:#efebf8;--bq-purple-200:#e0d7f2;--bq-purple-300:#c1afe5;--bq-purple-400:#a388d8;--bq-purple-500:#8460cb;--bq-purple-600:#6538be;--bq-purple-700:#512d98;--bq-purple-800:#3d2272;--bq-purple-900:#28164c;--bq-purple-1000:#140b26;--bq-red-100:#fce7ea;--bq-red-200:#f9d1d5;--bq-red-300:#f3a2ac;--bq-red-400:#ed7482;--bq-red-500:#e74559;--bq-red-600:#e1172f;--bq-red-700:#b41226;--bq-red-800:#870e1c;--bq-red-900:#5a0913;--bq-red-1000:#2d0509;--bq-sky-100:#eff4fb;--bq-sky-200:#dfeaf8;--bq-sky-300:#bfd5f1;--bq-sky-400:#9ec1e9;--bq-sky-500:#7eace2;--bq-sky-600:#5e97db;--bq-sky-700:#4b79af;--bq-sky-800:#385b83;--bq-sky-900:#263c58;--bq-sky-1000:#131e2c;--bq-teal-100:#e5f7f5;--bq-teal-200:#ccf0eb;--bq-teal-300:#99e1d8;--bq-teal-400:#66d2c4;--bq-teal-500:#33c3b1;--bq-teal-600:#00b49d;--bq-teal-700:#00907e;--bq-teal-800:#006c5e;--bq-teal-900:#00483f;--bq-teal-1000:#00241f;--bq-volcano-100:#feede7;--bq-volcano-200:#fddbd1;--bq-volcano-300:#fbb8a3;--bq-volcano-400:#fa9474;--bq-volcano-500:#f87146;--bq-volcano-600:#f64d18;--bq-volcano-700:#c53e13;--bq-volcano-800:#942e0e;--bq-volcano-900:#621f0a;--bq-volcano-1000:#310f05;--bq-yellow-100:#fefbe7;--bq-yellow-200:#fcf6d0;--bq-yellow-300:#faeea0;--bq-yellow-400:#f7e571;--bq-yellow-500:#f5dd41;--bq-yellow-600:#f2d412;--bq-yellow-700:#c2aa0e;--bq-yellow-800:#917f0b;--bq-yellow-900:#615507;--bq-yellow-1000:#302a04;--bq-endava-grey-50:#f7f7f8;--bq-endava-grey-100:#e4e6e7;--bq-endava-grey-200:#b5babe;--bq-endava-grey-300:#949ca1;--bq-endava-grey-400:#737d84;--bq-endava-grey-500:#525f67;--bq-endava-grey-600:#30404b;--bq-endava-grey-700:#2b3942;--bq-endava-grey-800:#263139;--bq-endava-grey-900:#192b37;--bq-endava-grey-950:#151b1e;--bq-endava-grey-1000:#0f1316;--bq-endava-neutral-white:#fafbfb;--bq-endava-neutral-black:#060708;--bq-endava-orange-100:#fef3f1;--bq-endava-orange-200:#fbd6d1;--bq-endava-orange-300:#fab7af;--bq-endava-orange-400:#fa988b;--bq-endava-orange-500:#fc7866;--bq-endava-orange-600:#ff5640;--bq-endava-orange-700:#ce4a39;--bq-endava-orange-800:#a03d30;--bq-endava-orange-900:#722e25;--bq-endava-orange-1000:#471e19;--bq-flypass-green-100:#e1ea80;--bq-flypass-green-200:#d9e560;--bq-flypass-green-300:#d1e040;--bq-flypass-green-400:#cada20;--bq-flypass-green-500:#c2d500;--bq-flypass-green-600:#afbf00;--bq-flypass-green-700:#9baa00;--bq-flypass-green-800:#889500;--bq-flypass-green-900:#738000;--bq-flypass-dark-grey-100:#bbb;--bq-flypass-dark-grey-200:#a4a4a4;--bq-flypass-dark-grey-300:#8d8d8d;--bq-flypass-dark-grey-400:#767676;--bq-flypass-dark-grey-500:#606060;--bq-flypass-dark-grey-600:#494949;--bq-flypass-dark-grey-700:#323232;--bq-flypass-dark-grey-800:#2c2c2c;--bq-flypass-dark-grey-900:#272727;--bq-flypass-sky-100:#a0e1f0;--bq-flypass-sky-200:#5fcde5;--bq-flypass-sky-300:#11b5d9;--bq-flypass-sky-400:#0f9ebd;--bq-flypass-sky-500:#0d87a2;--bq-flypass-sky-600:#0a6f86;--bq-flypass-sky-700:#085a6c;--bq-flypass-sky-800:#074553;--bq-flypass-sky-900:#05303a;--bq-flypass-blue-100:#cfe3f7;--bq-flypass-blue-200:#a0c8f0;--bq-flypass-blue-300:#70ace8;--bq-flypass-blue-400:#4191e1;--bq-flypass-blue-500:#1175d9;--bq-flypass-blue-600:#0e5eae;--bq-flypass-blue-700:#0a4682;--bq-flypass-blue-800:#072f57;--bq-flypass-blue-900:#03172b;--bq-flypass-orange-100:#ffddc7;--bq-flypass-orange-200:#ffccab;--bq-flypass-orange-300:#ffab74;--bq-flypass-orange-400:#ff812d;--bq-flypass-orange-500:#e17228;--bq-flypass-orange-600:#c16222;--bq-flypass-orange-700:#9f501c;--bq-flypass-orange-800:#804117;--bq-flypass-orange-900:#633211;--bq-flypass-violet-100:#e3cdff;--bq-flypass-violet-200:#b179ff;--bq-flypass-violet-300:#9747ff;--bq-flypass-violet-400:#7c3bd2;--bq-flypass-violet-500:#6a32b4;--bq-flypass-violet-600:#5b2b9b;--bq-flypass-violet-700:#4f2585;--bq-flypass-violet-800:#4f2585;--bq-flypass-violet-900:#391c62;--bq-flypass-yellow-100:#ffdf8e;--bq-flypass-yellow-200:#ffd773;--bq-flypass-yellow-300:#ffcf57;--bq-flypass-yellow-400:#ffc73a;--bq-flypass-yellow-500:#ffbf1f;--bq-flypass-yellow-600:#dfa61d;--bq-flypass-yellow-700:#bf8f18;--bq-flypass-yellow-800:#9f7713;--bq-flypass-yellow-900:#806010;--bq-flypass-red-100:#f9cccc;--bq-flypass-red-200:#f6adad;--bq-flypass-red-300:#ef8e8c;--bq-flypass-red-400:#ed6766;--bq-flypass-red-500:#e84241;--bq-flypass-red-600:#bc3535;--bq-flypass-red-700:#982c2b;--bq-flypass-red-800:#752121;--bq-flypass-red-900:#541718;--bq-flypass-blue-grey-100:#d3d7dd;--bq-flypass-blue-grey-200:#bcc2cb;--bq-flypass-blue-grey-300:#a5adbb;--bq-flypass-blue-grey-400:#8f98aa;--bq-flypass-blue-grey-500:#798499;--bq-flypass-blue-grey-600:#657189;--bq-flypass-blue-grey-700:#545e72;--bq-flypass-blue-grey-800:#434c5c;--bq-flypass-blue-grey-900:#343a47;--bq-flypass-grey-100:#fff;--bq-flypass-grey-200:#f5f5f5;--bq-flypass-grey-300:#efefef;--bq-flypass-grey-400:#e9e9e9;--bq-flypass-grey-500:#e3e3e3;--bq-flypass-grey-600:#dcdcdc;--bq-flypass-grey-700:#d6d6d6;--bq-flypass-grey-800:#d0d0d0;--bq-flypass-grey-900:#cacaca;--bq-flypass-light-100:#fff;--bq-flypass-light-200:#f5f5f5;--bq-flypass-light-300:#f4f7fa;--bq-flypass-light-400:#dde8f2;--bq-flypass-light-500:#d3d7dd;--bq-flypass-light-600:#657189;--bq-flypass-dart-100:#a1a1a1;--bq-flypass-dart-200:#515151;--bq-flypass-dart-300:#404040;--bq-flypass-dart-400:#2a2a2a;--bq-flypass-dart-500:#1b1b1b;--bq-flypass-dart-600:#0e100f}*,:after,:before{box-sizing:border-box}*{margin:0}[class^=bq-] *{font:inherit}ol[role=list],ul[role=list]{list-style-type:none}html:focus-within{scroll-behavior:smooth}[class^=bq-]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--bq-text--primary);font-family:var(--bq-font-family);font-size:var(--bq-font-size--m);letter-spacing:var(--bq-font-letter-spacing);line-height:var(--bq-font-line-height--regular);text-rendering:optimizeSpeed}a:not([class]){text-decoration-skip-ink:auto}canvas,img,picture,svg,video{display:block;max-width:100%}button,input,select,textarea{font:inherit}h1,h2,h3,h4,h5,h6,p{overflow-wrap:break-word}@media (prefers-reduced-motion:reduce){html:focus-within{scroll-behavior:auto}*,:after,:before{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto;transition-duration:.01ms!important}}:root{--bq-white:#fff;--bq-black:#060708;--bq-neutral-50:var(--bq-grey-50);--bq-neutral-100:var(--bq-grey-100);--bq-neutral-200:var(--bq-grey-200);--bq-neutral-300:var(--bq-grey-300);--bq-neutral-400:var(--bq-grey-400);--bq-neutral-500:var(--bq-grey-500);--bq-neutral-600:var(--bq-grey-600);--bq-neutral-700:var(--bq-grey-700);--bq-neutral-800:var(--bq-grey-800);--bq-neutral-900:var(--bq-grey-900);--bq-neutral-950:var(--bq-grey-950);--bq-neutral-1000:var(--bq-grey-1000);--bq-brand-light:var(--bq-iris-100);--bq-brand:var(--bq-iris-600);--bq-brand-dark:var(--bq-iris-1000);--bq-accent-light:var(--bq-purple-100);--bq-accent:var(--bq-purple-600);--bq-accent-dark:var(--bq-purple-1000);--bq-success-light:var(--bq-teal-100);--bq-success:var(--bq-teal-600);--bq-success-dark:var(--bq-teal-1000);--bq-danger-light:var(--bq-red-100);--bq-danger:var(--bq-red-600);--bq-danger-dark:var(--bq-red-1000);--bq-warning-light:var(--bq-gold-100);--bq-warning:var(--bq-gold-600);--bq-warning-dark:var(--bq-gold-1000);--bq-info-light:var(--bq-iris-100);--bq-info:var(--bq-iris-600);--bq-info-dark:var(--bq-iris-1000);--bq-focus:var(--bq-iris-600);--bq-data-01:var(--bq-brand);--bq-data-02:var(--bq-purple-600);--bq-data-03:var(--bq-magenta-600);--bq-data-04:var(--bq-cyan-600);--bq-data-05:var(--bq-teal-600);--bq-data-06:var(--bq-orange-600);--bq-data-07:var(--bq-yellow-600);--bq-data-08:var(--bq-red-600);--bq-data-09:var(--bq-blue-600);--bq-data-10:var(--bq-grey-600);--bq-data-11:var(--bq-black);--bq-data-12:var(--bq-white);--bq-radius--none:0;--bq-radius--xs2:0.125rem;--bq-radius--xs:0.313rem;--bq-radius--s:0.625rem;--bq-radius--m:0.75rem;--bq-radius--l:1.5rem;--bq-radius--full:9999px;--bq-box-shadow--xs:0 2px 0 rgba(0,0,0,.016);--bq-box-shadow--s:0 8px 24px rgba(0,0,0,.04);--bq-box-shadow--m:0 10px 48px -16px rgba(0,0,0,.12);--bq-box-shadow--l:0 20px 58px -16px rgba(0,0,0,.16);--bq-font-family:\"Outfit\",sans-serif;--bq-font-size--xs:0.75rem;--bq-font-size--s:0.875rem;--bq-font-size--m:1rem;--bq-font-size--l:1.125rem;--bq-font-size--xl:1.5rem;--bq-font-size--xxl:2rem;--bq-font-size--xxl2:2.5rem;--bq-font-size--xxl3:3rem;--bq-font-size--xxl4:3.5rem;--bq-font-size--xxl5:4rem;--bq-font-weight--thin:100;--bq-font-weight--light:300;--bq-font-weight--regular:400;--bq-font-weight--medium:500;--bq-font-weight--semibold:600;--bq-font-weight--bold:700;--bq-font-line-height--small:1.2;--bq-font-line-height--regular:1.5;--bq-font-line-height--large:1.5;--bq-spacing-xs3:0.125rem;--bq-spacing-xs2:0.25rem;--bq-spacing-xs:0.5rem;--bq-spacing-s:0.75rem;--bq-spacing-m:1rem;--bq-spacing-l:1.5rem;--bq-spacing-xl:2rem;--bq-spacing-xxl:2.5rem;--bq-spacing-xxl2:3.5rem;--bq-spacing-xxl3:4rem;--bq-spacing-xxl4:4.5rem;--bq-stroke-s:1px;--bq-stroke-m:2px;--bq-stroke-l:3px}.beeq.light,.light,:root,[bq-mode=light]{--bq-background--primary:var(--bq-white);--bq-background--secondary:var(--bq-neutral-100);--bq-background--tertiary:var(--bq-neutral-200);--bq-background--alt:var(--bq-neutral-300);--bq-background--inverse:var(--bq-neutral-900);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-800);--bq-icon--alt:var(--bq-white);--bq-icon--secondary:var(--bq-neutral-600);--bq-icon--inverse:var(--bq-neutral-50);--bq-icon--brand:var(--bq-brand);--bq-icon--info:var(--bq-brand);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-200);--bq-stroke--secondary:var(--bq-neutral-600);--bq-stroke--tertiary:var(--bq-neutral-900);--bq-stroke--inverse:var(--bq-white);--bq-stroke--brand:var(--bq-brand);--bq-stroke--alt:var(--bq-neutral-50);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-brand);--bq-text--primary:var(--bq-neutral-800);--bq-text--secondary:var(--bq-neutral-600);--bq-text--inverse:var(--bq-neutral-50);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-white);--bq-text--info:var(--bq-brand);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-white);--bq-ui--secondary:var(--bq-neutral-200);--bq-ui--tertiary:var(--bq-neutral-500);--bq-ui--inverse:var(--bq-neutral-900);--bq-ui--brand:var(--bq-brand);--bq-ui--brand-alt:var(--bq-brand-light);--bq-ui--alt:var(--bq-neutral-50);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-light);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-light);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-light);--bq-ui--info:var(--bq-brand);--bq-ui--info-alt:var(--bq-brand-light);--bq-hover:#bcbfc5;--bq-active:#444546}.beeq.dark,.dark,[bq-mode=dark]{--bq-background--primary:var(--bq-neutral-1000);--bq-background--secondary:var(--bq-neutral-950);--bq-background--tertiary:var(--bq-neutral-800);--bq-background--alt:var(--bq-neutral-700);--bq-background--inverse:var(--bq-neutral-600);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-100);--bq-icon--secondary:var(--bq-neutral-400);--bq-icon--inverse:var(--bq-neutral-800);--bq-icon--brand:var(--bq-brand);--bq-icon--alt:var(--bq-white);--bq-icon--info:var(--bq-brand);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-900);--bq-stroke--secondary:var(--bq-neutral-700);--bq-stroke--tertiary:var(--bq-neutral-400);--bq-stroke--inverse:var(--bq-neutral-950);--bq-stroke--brand:var(--bq-brand);--bq-stroke--alt:var(--bq-neutral-1000);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-brand);--bq-text--primary:var(--bq-neutral-100);--bq-text--secondary:var(--bq-neutral-400);--bq-text--inverse:var(--bq-neutral-800);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-white);--bq-text--info:var(--bq-brand);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-neutral-900);--bq-ui--secondary:var(--bq-neutral-800);--bq-ui--tertiary:var(--bq-neutral-700);--bq-ui--inverse:var(--bq-neutral-100);--bq-ui--brand:var(--bq-brand);--bq-ui--brand-alt:var(--bq-brand-dark);--bq-ui--alt:var(--bq-neutral-950);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-dark);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-dark);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-dark);--bq-ui--info:var(--bq-brand);--bq-ui--info-alt:var(--bq-brand-dark);--bq-hover:#444546;--bq-active:#1f2026}.endava,[bq-theme=endava]{--bq-font-family:\"Poppins\",sans-serif;--bq-white:#fafbfb;--bq-black:#030406;--bq-neutral-50:var(--bq-endava-grey-50);--bq-neutral-100:var(--bq-endava-grey-100);--bq-neutral-200:var(--bq-endava-grey-200);--bq-neutral-300:var(--bq-endava-grey-300);--bq-neutral-400:var(--bq-endava-grey-400);--bq-neutral-500:var(--bq-endava-grey-500);--bq-neutral-600:var(--bq-endava-grey-600);--bq-neutral-700:var(--bq-endava-grey-700);--bq-neutral-800:var(--bq-endava-grey-800);--bq-neutral-900:var(--bq-endava-grey-900);--bq-neutral-950:var(--bq-endava-grey-950);--bq-neutral-1000:var(--bq-endava-grey-1000);--bq-brand-light:var(--bq-endava-orange-100);--bq-brand:var(--bq-endava-orange-600);--bq-brand-dark:var(--bq-endava-orange-1000);--bq-accent-light:var(--bq-endava-orange-100);--bq-accent:var(--bq-endava-orange-600);--bq-accent-dark:var(--bq-endava-orange-1000);--bq-success-light:var(--bq-green-100);--bq-success:var(--bq-green-600);--bq-success-dark:var(--bq-green-1000);--bq-danger-light:var(--bq-corai-100);--bq-danger:var(--bq-corai-600);--bq-danger-dark:var(--bq-corai-1000);--bq-warning-light:var(--bq-yellow-100);--bq-warning:var(--bq-yellow-600);--bq-warning-dark:var(--bq-yellow-1000);--bq-info-light:var(--bq-blue-100);--bq-info:var(--bq-blue-600);--bq-info-dark:var(--bq-blue-1000);--bq-focus:var(--bq-endava-orange-600);--bq-data-01:var(--bq-brand);--bq-data-02:#af0cd8;--bq-data-03:#0ca8d8;--bq-data-04:var(--bq-teal-600);--bq-data-05:var(--bq-yellow-600);--bq-data-06:var(--bq-orange-600);--bq-data-07:var(--bq-blue-600);--bq-data-08:var(--bq-red-600);--bq-data-09:var(--bq-purple-600);--bq-data-10:#394b56;--bq-data-11:var(--bq-black);--bq-data-12:var(--bq-white)}.endava.light,[bq-theme=endava][bq-mode=light]{--bq-background--primary:var(--bq-white);--bq-background--secondary:var(--bq-neutral-100);--bq-background--tertiary:var(--bq-neutral-200);--bq-background--alt:var(--bq-neutral-300);--bq-background--inverse:var(--bq-neutral-900);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-800);--bq-icon--secondary:var(--bq-neutral-600);--bq-icon--inverse:var(--bq-neutral-50);--bq-icon--brand:var(--bq-brand);--bq-icon--alt:var(--bq-white);--bq-icon--info:var(--bq-info);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-200);--bq-stroke--secondary:var(--bq-neutral-600);--bq-stroke--tertiary:var(--bq-neutral-900);--bq-stroke--inverse:var(--bq-white);--bq-stroke--brand:var(--bq-brand);--bq-stroke--alt:var(--bq-neutral-50);--bq-stroke--brand-alt:var(--bq-brand-light);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-info);--bq-text--primary:var(--bq-neutral-800);--bq-text--secondary:var(--bq-neutral-600);--bq-text--inverse:var(--bq-neutral-50);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-white);--bq-text--info:var(--bq-info);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-white);--bq-ui--secondary:var(--bq-neutral-200);--bq-ui--tertiary:var(--bq-neutral-500);--bq-ui--inverse:var(--bq-neutral-900);--bq-ui--alt:var(--bq-neutral-50);--bq-ui--brand-alt:var(--bq-brand-light);--bq-ui--brand:var(--bq-brand);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-light);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-light);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-light);--bq-ui--info:var(--bq-info);--bq-ui--info-alt:var(--bq-info-light);--bq-hover:#444546;--bq-active:#1f2026}.endava.dark,[bq-theme=endava][bq-mode=dark]{--bq-background--primary:var(--bq-neutral-1000);--bq-background--secondary:var(--bq-neutral-900);--bq-background--tertiary:var(--bq-neutral-800);--bq-background--alt:var(--bq-neutral-700);--bq-background--inverse:var(--bq-neutral-600);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-100);--bq-icon--secondary:var(--bq-neutral-400);--bq-icon--inverse:var(--bq-neutral-800);--bq-icon--brand:var(--bq-brand);--bq-icon--alt:var(--bq-white);--bq-icon--info:var(--bq-info);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-900);--bq-stroke--secondary:var(--bq-neutral-700);--bq-stroke--tertiary:var(--bq-neutral-400);--bq-stroke--inverse:var(--bq-neutral-950);--bq-stroke--brand:var(--bq-brand);--bq-stroke--brand-alt:var(--bq-brand-dark);--bq-stroke--alt:var(--bq-neutral-1000);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-info);--bq-text--primary:var(--bq-neutral-100);--bq-text--secondary:var(--bq-neutral-400);--bq-text--inverse:var(--bq-neutral-800);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-neutral-white);--bq-text--info:var(--bq-info);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-neutral-900);--bq-ui--secondary:var(--bq-neutral-800);--bq-ui--tertiary:var(--bq-neutral-700);--bq-ui--inverse:var(--bq-neutral-100);--bq-ui--brand:var(--bq-brand);--bq-ui--brand-alt:var(--bq-brand-dark);--bq-ui--alt:var(--bq-neutral-950);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-dark);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-dark);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-dark);--bq-ui--info:var(--bq-info);--bq-ui--info-alt:var(--bq-info-dark);--bq-hover:#444546;--bq-active:#1f2026}.flypass,[bq-theme=flypass]{--bq-font-family:\"Inter\",sans-serif;--bq-white:#fff;--bq-black:#0e100f;--bq-neutral-50:var(--bq-flypass-dark-grey-100);--bq-neutral-100:var(--bq-flypass-dart-100);--bq-neutral-200:var(--bq-flypass-grey-200);--bq-neutral-300:var(--bq-flypass-dark-grey-300);--bq-neutral-400:var(--bq-flypass-dark-grey-400);--bq-neutral-500:var(--bq-flypass-dark-grey-500);--bq-neutral-600:var(--bq-flypass-dark-grey-600);--bq-neutral-700:var(--bq-flypass-dark-grey-700);--bq-neutral-800:var(--bq-flypass-dark-grey-800);--bq-neutral-900:var(--bq-flypass-dark-grey-900);--bq-neutral-950:var(--bq-flypass-dark-grey-900);--bq-neutral-1000:var(--bq-flypass-dark-grey-900);--bq-brand-light:var(--bq-flypass-green-200);--bq-brand:var(--bq-flypass-green-500);--bq-brand-dark:var(--bq-flypass-green-700);--bq-accent-light:var(--bq-flypass-green-300);--bq-accent:var(--bq-flypass-green-600);--bq-accent-dark:var(--bq-flypass-green-800);--bq-success-light:var(--bq-green-100);--bq-success:var(--bq-green-600);--bq-success-dark:var(--bq-green-1000);--bq-danger-light:var(--bq-corai-100);--bq-danger:var(--bq-corai-600);--bq-danger-dark:var(--bq-corai-1000);--bq-warning-light:var(--bq-yellow-100);--bq-warning:var(--bq-yellow-600);--bq-warning-dark:var(--bq-yellow-1000);--bq-info-light:var(--bq-blue-100);--bq-info:var(--bq-blue-600);--bq-info-dark:var(--bq-blue-1000);--bq-focus:var(--bq-flypass-green-500);--bq-data-01:var(--bq-brand);--bq-data-02:#af0cd8;--bq-data-03:#0ca8d8;--bq-data-04:var(--bq-teal-600);--bq-data-05:var(--bq-yellow-600);--bq-data-06:var(--bq-orange-600);--bq-data-07:var(--bq-blue-600);--bq-data-08:var(--bq-red-600);--bq-data-09:var(--bq-purple-600);--bq-data-10:#394b56;--bq-data-11:var(--bq-black);--bq-data-12:var(--bq-white)}.flypass.light,[bq-theme=flypass][bq-mode=light]{--bq-background--primary:var(--bq-white);--bq-background--secondary:var(--bq-neutral-100);--bq-background--tertiary:var(--bq-neutral-200);--bq-background--alt:var(--bq-neutral-300);--bq-background--inverse:var(--bq-neutral-900);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-800);--bq-icon--secondary:var(--bq-neutral-600);--bq-icon--inverse:var(--bq-neutral-50);--bq-icon--brand:var(--bq-brand);--bq-icon--alt:var(--bq-white);--bq-icon--info:var(--bq-info);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-200);--bq-stroke--secondary:var(--bq-neutral-600);--bq-stroke--tertiary:var(--bq-neutral-900);--bq-stroke--inverse:var(--bq-white);--bq-stroke--brand:var(--bq-brand);--bq-stroke--alt:var(--bq-neutral-50);--bq-stroke--brand-alt:var(--bq-brand-light);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-info);--bq-text--primary:var(--bq-neutral-700);--bq-text--secondary:var(--bq-neutral-600);--bq-text--inverse:var(--bq-neutral-50);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-neutral-700);--bq-text--info:var(--bq-info);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-white);--bq-ui--secondary:var(--bq-neutral-200);--bq-ui--tertiary:var(--bq-neutral-500);--bq-ui--inverse:var(--bq-neutral-900);--bq-ui--alt:var(--bq-neutral-50);--bq-ui--brand-alt:var(--bq-brand-light);--bq-ui--brand:var(--bq-brand);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-light);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-light);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-light);--bq-ui--info:var(--bq-info);--bq-ui--info-alt:var(--bq-info-light);--bq-hover:#444546;--bq-active:#1f2026}.flypass.dark,[bq-theme=flypass][bq-mode=dark]{--bq-background--primary:var(--bq-neutral-1000);--bq-background--secondary:var(--bq-neutral-900);--bq-background--tertiary:var(--bq-neutral-800);--bq-background--alt:var(--bq-neutral-700);--bq-background--inverse:var(--bq-neutral-600);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-100);--bq-icon--secondary:var(--bq-neutral-400);--bq-icon--inverse:var(--bq-neutral-800);--bq-icon--brand:var(--bq-brand);--bq-icon--alt:var(--bq-white);--bq-icon--info:var(--bq-info);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-900);--bq-stroke--secondary:var(--bq-neutral-700);--bq-stroke--tertiary:var(--bq-neutral-400);--bq-stroke--inverse:var(--bq-neutral-950);--bq-stroke--brand:var(--bq-brand);--bq-stroke--brand-alt:var(--bq-brand-dark);--bq-stroke--alt:var(--bq-neutral-1000);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-info);--bq-text--primary:var(--bq-neutral-100);--bq-text--secondary:var(--bq-neutral-400);--bq-text--inverse:var(--bq-neutral-800);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-neutral-white);--bq-text--info:var(--bq-info);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-neutral-900);--bq-ui--secondary:var(--bq-neutral-800);--bq-ui--tertiary:var(--bq-neutral-700);--bq-ui--inverse:var(--bq-neutral-100);--bq-ui--brand:var(--bq-brand);--bq-ui--brand-alt:var(--bq-brand-dark);--bq-ui--alt:var(--bq-neutral-950);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-dark);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-dark);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-dark);--bq-ui--info:var(--bq-info);--bq-ui--info-alt:var(--bq-info-dark);--bq-hover:#444546;--bq-active:#1f2026}.absolute{position:absolute}.relative{position:relative}.end-0{inset-inline-end:0}.start-0{inset-inline-start:0}.block{display:block}.flex{display:flex}.hidden{display:none}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.gap-xs2{gap:var(--bq-spacing-xs2)}.border-0{border-width:0}.border-solid{border-style:solid}.border-primary{border-color:var(--bq-stroke--primary)}.p-xs2{padding:var(--bq-spacing-xs2)}.content-empty{--tw-content:\"\";content:var(--tw-content)}.content-none{--tw-content:none;content:var(--tw-content)}.bs-full{block-size:100%}.is-0{inline-size:0}.is-full{inline-size:100%}.inset-be-0{inset-block-end:0}.\\[border-block-end-width\\:--bq-stroke-s\\]{border-block-end-width:var(--bq-stroke-s)}.\\[border-block-end-width\\:0px\\]{border-block-end-width:0}.\\[border-inline-end-width\\:--bq-stroke-s\\]{border-inline-end-width:var(--bq-stroke-s)}.\\[border-inline-start-width\\:--bq-stroke-s\\]{border-inline-start-width:var(--bq-stroke-s)}@-webkit-keyframes fade-in{0%{opacity:0}}@keyframes fade-in{0%{opacity:0}}@-webkit-keyframes slide-in{0%{-webkit-transform:translateY(10px);transform:translateY(10px)}}@keyframes slide-in{0%{-webkit-transform:translateY(10px);transform:translateY(10px)}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}:host{display:block}.bq-tab-group{position:relative}.bq-tab-group:after{--tw-content:\"\";border-color:var(--bq-stroke--primary);border-style:solid;border-width:0;content:var(--tw-content);display:flex;position:absolute}.bq-tab-group--horizontal-end:after,.bq-tab-group--horizontal-start:after{border-block-end-width:var(--bq-stroke-s);inline-size:100%;inset-block-end:0}.bq-tab-group--horizontal-start{justify-content:flex-start}.bq-tab-group--horizontal-end{justify-content:flex-end}.bq-tab-group--vertical-start:after{block-size:100%;border-block-end-width:0;border-inline-end-width:var(--bq-stroke-s);inline-size:0;inset-inline-end:0}.bq-tab-group--vertical-end:after{block-size:100%;border-block-end-width:0;border-inline-start-width:var(--bq-stroke-s);inline-size:0;inset-inline-start:0}.bq-tab-group.no-divider:after{--tw-content:none;content:var(--tw-content)}.bq-tab-group--container{-ms-overflow-style:none;gap:var(--bq-spacing-xs2);padding:var(--bq-spacing-xs2);scrollbar-width:none}.bq-tab-group--container::-webkit-scrollbar{display:none}.static{position:static}.inline-block{display:inline-block}.flex-col{flex-direction:column}.overflow-x-auto{overflow-x:auto}.underline{text-decoration-line:underline}.blur{--tw-blur:blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.ms-\\[--bq-tab--label-icon-gap\\]{margin-inline-start:var(--bq-tab--label-icon-gap)}.line-clamp-1{-webkit-box-orient:vertical;-webkit-line-clamp:1;display:-webkit-box;overflow:hidden}.items-center{align-items:center}.justify-center{justify-content:center}.text-brand{color:var(--bq-text--brand)}.text-primary{color:var(--bq-text--primary)}.focus{outline:var(--bq-ring-width,2px) solid var(--bq-ring-color-focus,var(--bq-focus));outline-offset:var(--bq-ring-offset-width,1px)}";

const BqTabGroup$1 = /*@__PURE__*/ proxyCustomElement(class BqTabGroup extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.bqChange = createEvent(this, "bqChange", 7);
    }
    // Own Properties
    // ====================
    debouncedBqChange;
    get el() { return this; }
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    // Public Property API
    // ========================
    /** A number representing the delay value applied to bqChange event handler */
    debounceTime = 0;
    /** If true, the underline divider below the tabs won't be shown  */
    disableDivider = false;
    /** The direction that tab should be render */
    orientation = 'horizontal';
    /** The placement that tab should be render */
    placement = 'start';
    /** The size of the tab */
    size = 'medium';
    /** A string representing the id of the selected tab. */
    value;
    // Prop lifecycle events
    // =======================
    checkDebounceChange() {
        if (this.debounceTime < 0) {
            this.debounceTime = Math.max(0, this.debounceTime);
        }
        if (this.debouncedBqChange) {
            this.debouncedBqChange.cancel();
        }
        this.debouncedBqChange = debounce((event) => {
            this.bqChange.emit(event);
        }, this.debounceTime);
    }
    checkPropValues() {
        validatePropValue(TAB_SIZE, 'medium', this.el, 'size');
        validatePropValue(TAB_ORIENTATION, 'horizontal', this.el, 'orientation');
        validatePropValue(TAB_PLACEMENT, 'start', this.el, 'placement');
        this.bqTabElements.forEach((bqTabElement) => {
            bqTabElement.size = this.size;
            bqTabElement.orientation = this.orientation;
            bqTabElement.placement = this.placement;
            bqTabElement.active = !isNil(this.value) ? bqTabElement.tabId === this.value : false;
        });
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Handler to be called when the tab value changes */
    bqChange;
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    componentWillLoad() {
        this.checkDebounceChange();
        this.checkPropValues();
    }
    componentDidLoad() {
        this.checkPropValues();
    }
    // Listeners
    // ==============
    onKeyUp(event) {
        const { target } = event;
        if (!isHTMLElement(target, 'bq-tab'))
            return;
        this.makeTabsFocusable();
    }
    onBqClick(event) {
        const { detail: target } = event;
        this.bqTabElements.forEach((bqTabElement) => (bqTabElement.active = bqTabElement === target));
        this.debouncedBqChange({ value: target.tabId, target });
        this.selectTab(target);
    }
    async onBqKeyDown(event) {
        const { target } = event;
        // NOTE: ensures the target is an HTML element with the tag name 'bq-tab'
        if (!isHTMLElement(target, 'bq-tab'))
            return;
        const keyActions = {
            ArrowDown: 'forward',
            ArrowRight: 'forward',
            ArrowUp: 'backward',
            ArrowLeft: 'backward',
        };
        // NOTE: gets the direction based on key pressed
        const direction = keyActions[event.detail.key];
        if (!direction)
            return;
        await this.focusTabSibling(target, direction);
    }
    onBqBlur() {
        this.restoreTabsFocus();
    }
    // Public methods API
    // These methods are exposed on the host element.
    // Always use two lines.
    // Public Methods must be async.
    // Requires JSDocs for public API documentation.
    // ===============================================
    // Local methods
    // Internal business logic.
    // These methods cannot be called from the host element.
    // =======================================================
    focusTabSibling = async (currentTarget, direction) => {
        let target = null;
        this.bqTabElements.forEach((bqTabElement, index, elements) => {
            bqTabElement.active = false;
            if (bqTabElement === currentTarget) {
                target = getNextElement(elements, index, direction);
            }
        });
        if (target) {
            await target.vFocus();
            this.selectTab(target);
        }
    };
    makeTabsFocusable = () => {
        this.bqTabElements.forEach((bqTabElement) => {
            if (bqTabElement.disabled)
                return;
            /**
             * This is a "fire and forget" operation. The callback itself doesn't do anything special
             * with the asynchronous code (doesn't await it or do anything with the result)
             * Details: https://stackoverflow.com/a/63488201
             */
            (async () => {
                await bqTabElement.enableFocus(true);
            })();
        });
    };
    restoreTabsFocus = () => {
        this.bqTabElements.forEach((bqTabElement) => {
            if (bqTabElement.disabled || bqTabElement.active)
                return;
            /** @See line #173 */
            (async () => {
                await bqTabElement.enableFocus(false);
            })();
        });
    };
    get bqTabElements() {
        return Array.from(this.el.querySelectorAll('bq-tab'));
    }
    selectTab = (target) => {
        const { tabId } = target;
        target.active = true;
        this.value = tabId;
        this.debouncedBqChange({ value: tabId, target });
    };
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        return (h(Host, { key: 'd9a0a66efe6184e314a1a34905463c2884704c70', class: { 'inline-block': this.orientation === 'vertical' } }, h("div", { key: '5b83f1843322861cf8a3916fd3d40a8d0954e4c6', class: {
                [`bq-tab-group bq-tab-group--${this.orientation}-${this.placement} flex is-full`]: true,
                'no-divider': this.disableDivider,
            }, part: "base" }, h("div", { key: '818859120417fe54104893d18c084f409e6770e1', class: {
                'bq-tab-group--container flex overflow-x-auto': true,
                'flex-col': this.orientation !== 'horizontal',
            }, role: "tablist", part: "tabs" }, h("slot", { key: 'c5b78305a7f9645c4c806cdf6cc63a3d48e34236' })))));
    }
    static get watchers() { return {
        "debounceTime": ["checkDebounceChange"],
        "size": ["checkPropValues"],
        "value": ["checkPropValues"],
        "orientation": ["checkPropValues"],
        "placement": ["checkPropValues"]
    }; }
    static get style() { return bqTabGroupCss; }
}, [1, "bq-tab-group", {
        "debounceTime": [1538, "debounce-time"],
        "disableDivider": [516, "disable-divider"],
        "orientation": [513],
        "placement": [513],
        "size": [513],
        "value": [1537]
    }, [[19, "keyup", "onKeyUp"], [1, "bqClick", "onBqClick"], [1, "bqKeyDown", "onBqKeyDown"], [3, "bqBlur", "onBqBlur"]], {
        "debounceTime": ["checkDebounceChange"],
        "size": ["checkPropValues"],
        "value": ["checkPropValues"],
        "orientation": ["checkPropValues"],
        "placement": ["checkPropValues"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bq-tab-group"];
    components.forEach(tagName => { switch (tagName) {
        case "bq-tab-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BqTabGroup$1);
            }
            break;
    } });
}

const BqTabGroup = BqTabGroup$1;
const defineCustomElement = defineCustomElement$1;

export { BqTabGroup, defineCustomElement };

//# sourceMappingURL=bq-tab-group.js.map