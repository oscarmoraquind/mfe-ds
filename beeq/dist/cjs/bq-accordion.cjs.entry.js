/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1e4795f3.js');
const index$1 = require('./index-8c48e726.js');

const ACCORDION_SIZE = ['small', 'medium'];
const ACCORDION_APPEARANCE = ['filled', 'ghost'];

/* -------------------------------------------------------------------------------------- */
/*   💡 Credits: https://css-tricks.com/how-to-animate-the-details-element-using-waapi    */
/* -------------------------------------------------------------------------------------- */
class Accordion {
    el;
    header;
    panel;
    animation;
    isClosing;
    isExpanding;
    animationOptions = {
        duration: 200,
        easing: 'ease-in-out',
    };
    constructor(el) {
        // Store the <details> element
        this.el = el;
        // Store the <summary> header element
        this.header = el.querySelector('summary');
        // Store the <div class="content"> element
        this.panel = el.querySelector('.bq-accordion__body');
        // Store the animation object (so we can cancel it, if needed)
        this.animation = null;
        // Store if the element is closing
        this.isClosing = false;
        // Store if the element is expanding
        this.isExpanding = false;
    }
    open() {
        // Check if the element is being closed or is already closed
        if (!this.isClosing && this.el.open)
            return;
        // Apply a fixed height on the element
        this.el.style.height = `${this.el.offsetHeight}px`;
        // Force the [open] attribute on the details element
        this.el.open = true;
        // Wait for the next frame to call the expand function
        window.requestAnimationFrame(() => this.expand());
    }
    close() {
        // Check if the element is being opened or is already open
        if (!this.isExpanding && !this.el.open)
            return;
        // Set the element as "being closed"
        this.isClosing = true;
        // Store the current height of the element
        const startHeight = `${this.el.offsetHeight}px`;
        // Calculate the height of the <summary> header
        const endHeight = `${this.header.offsetHeight}px`;
        // If there is already an animation running
        if (this.animation) {
            // Cancel the current animation
            this.animation.cancel();
        }
        // Start a WAAPI animation
        this.animation = this.el.animate({ height: [startHeight, endHeight] }, this.animationOptions);
        // When the animation is complete, call onAnimationFinish()
        this.animation.onfinish = () => this.onAnimationFinish(false);
        // If the animation is cancelled, isClosing variable is set to false
        this.animation.oncancel = () => (this.isClosing = false);
    }
    // Expands the accordion
    expand() {
        // Set the element as "being expanding"
        this.isExpanding = true;
        // Get the current fixed height of the element
        const startHeight = `${this.el.offsetHeight}px`;
        // Calculate the open height of the element (summary header height + panel body height)
        const endHeight = `${this.header.offsetHeight + this.panel.offsetHeight}px`;
        // If there is already an animation running
        if (this.animation) {
            // Cancel the current animation
            this.animation.cancel();
        }
        // Start a WAAPI animation
        this.animation = this.el.animate({ height: [startHeight, endHeight] }, this.animationOptions);
        // When the animation is complete, call onAnimationFinish()
        this.animation.onfinish = () => this.onAnimationFinish(true);
        // If the animation is cancelled, isExpanding variable is set to false
        this.animation.oncancel = () => (this.isExpanding = false);
    }
    // Handles the end of the animation
    onAnimationFinish(open) {
        // Set the open attribute based on the parameter
        this.el.open = open;
        // Clear the stored animation
        this.animation = null;
        // Reset isClosing & isExpanding
        this.isClosing = false;
        this.isExpanding = false;
        // Remove the overflow hidden and the fixed height
        this.el.removeAttribute('style');
        // Dispatch a custom event based on the open parameter
        const endEvent = new Event('accordionTransitionEnd', { bubbles: false, composed: true });
        this.el.dispatchEvent(endEvent);
    }
}

const bqAccordionCss = ".transform{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}::backdrop,:root{--bq-blue-100:#e7f0fd;--bq-blue-200:#d0e2fb;--bq-blue-300:#a1c5f7;--bq-blue-400:#73a8f3;--bq-blue-500:#448bef;--bq-blue-600:#156eeb;--bq-blue-700:#1158bc;--bq-blue-800:#0d428d;--bq-blue-900:#082c5e;--bq-blue-1000:#04162f;--bq-corai-100:#fff2f2;--bq-corai-200:#ffe6e6;--bq-corai-300:#ffccce;--bq-corai-400:#ffb3b5;--bq-corai-500:#ff999d;--bq-corai-600:#ff8084;--bq-corai-700:#cc666a;--bq-corai-800:#994d4f;--bq-corai-900:#663335;--bq-corai-1000:#331a1a;--bq-cyan-100:#e8f7fb;--bq-cyan-200:#d2f0f8;--bq-cyan-300:#a5e1f1;--bq-cyan-400:#78d1e9;--bq-cyan-500:#4bc2e2;--bq-cyan-600:#1eb3db;--bq-cyan-700:#188faf;--bq-cyan-800:#126b83;--bq-cyan-900:#0c4858;--bq-cyan-1000:#06242c;--bq-gold-100:#fbf4ec;--bq-gold-200:#f7e9da;--bq-gold-300:#f0d3b6;--bq-gold-400:#e8bc91;--bq-gold-500:#e1a66d;--bq-gold-600:#d99048;--bq-gold-700:#ae733a;--bq-gold-800:#82562b;--bq-gold-900:#573a1d;--bq-gold-1000:#2b1d0e;--bq-green-100:#e8f8ef;--bq-green-200:#d2f1e0;--bq-green-300:#a5e3c1;--bq-green-400:#78d5a1;--bq-green-500:#4bc782;--bq-green-600:#1eb963;--bq-green-700:#18944f;--bq-green-800:#126f3b;--bq-green-900:#0c4a28;--bq-green-1000:#062514;--bq-grey-100:#f1f2f4;--bq-grey-200:#e7e8eb;--bq-grey-300:#caccd2;--bq-grey-400:#a6aab3;--bq-grey-50:#f6f6f8;--bq-grey-500:#898e99;--bq-grey-600:#646a77;--bq-grey-700:#3f4350;--bq-grey-800:#2a2c35;--bq-grey-900:#1c1d23;--bq-grey-950:#15161a;--bq-grey-1000:#0d0e11;--bq-indigo-100:#edecfc;--bq-indigo-200:#dcdafa;--bq-indigo-300:#b9b5f5;--bq-indigo-400:#9590ef;--bq-indigo-500:#726bea;--bq-indigo-600:#4f46e5;--bq-indigo-700:#3f38b7;--bq-indigo-800:#2f2a89;--bq-indigo-900:#201c5c;--bq-indigo-1000:#100e2e;--bq-iris-100:#e9f0ff;--bq-iris-200:#d6e0ff;--bq-iris-300:#b2c0fe;--bq-iris-400:#8691f8;--bq-iris-500:#6061ee;--bq-iris-600:#4f46e5;--bq-iris-700:#413abd;--bq-iris-800:#332e95;--bq-iris-900:#26216d;--bq-iris-1000:#181545;--bq-lime-100:#f5fae8;--bq-lime-200:#ecf6d2;--bq-lime-300:#d9eda5;--bq-lime-400:#c5e379;--bq-lime-500:#b2da4c;--bq-lime-600:#9fd11f;--bq-lime-700:#7fa719;--bq-lime-800:#5f7d13;--bq-lime-900:#40540c;--bq-lime-1000:#202a06;--bq-magenta-100:#fce7f4;--bq-magenta-200:#f9cfea;--bq-magenta-300:#f39fd6;--bq-magenta-400:#ee6fbf;--bq-magenta-500:#e83fab;--bq-magenta-600:#de1395;--bq-magenta-700:#b20f77;--bq-magenta-800:#850c59;--bq-magenta-900:#58083c;--bq-magenta-1000:#2c041e;--bq-neutral-white:#fbfbfc;--bq-neutral-black:#060708;--bq-orange-100:#fbf0e9;--bq-orange-200:#f8e1d4;--bq-orange-300:#f1c2a8;--bq-orange-400:#eaa47d;--bq-orange-500:#e38551;--bq-orange-600:#dc6726;--bq-orange-700:#b0521e;--bq-orange-800:#843e17;--bq-orange-900:#58290f;--bq-orange-1000:#2c1508;--bq-purple-100:#efebf8;--bq-purple-200:#e0d7f2;--bq-purple-300:#c1afe5;--bq-purple-400:#a388d8;--bq-purple-500:#8460cb;--bq-purple-600:#6538be;--bq-purple-700:#512d98;--bq-purple-800:#3d2272;--bq-purple-900:#28164c;--bq-purple-1000:#140b26;--bq-red-100:#fce7ea;--bq-red-200:#f9d1d5;--bq-red-300:#f3a2ac;--bq-red-400:#ed7482;--bq-red-500:#e74559;--bq-red-600:#e1172f;--bq-red-700:#b41226;--bq-red-800:#870e1c;--bq-red-900:#5a0913;--bq-red-1000:#2d0509;--bq-sky-100:#eff4fb;--bq-sky-200:#dfeaf8;--bq-sky-300:#bfd5f1;--bq-sky-400:#9ec1e9;--bq-sky-500:#7eace2;--bq-sky-600:#5e97db;--bq-sky-700:#4b79af;--bq-sky-800:#385b83;--bq-sky-900:#263c58;--bq-sky-1000:#131e2c;--bq-teal-100:#e5f7f5;--bq-teal-200:#ccf0eb;--bq-teal-300:#99e1d8;--bq-teal-400:#66d2c4;--bq-teal-500:#33c3b1;--bq-teal-600:#00b49d;--bq-teal-700:#00907e;--bq-teal-800:#006c5e;--bq-teal-900:#00483f;--bq-teal-1000:#00241f;--bq-volcano-100:#feede7;--bq-volcano-200:#fddbd1;--bq-volcano-300:#fbb8a3;--bq-volcano-400:#fa9474;--bq-volcano-500:#f87146;--bq-volcano-600:#f64d18;--bq-volcano-700:#c53e13;--bq-volcano-800:#942e0e;--bq-volcano-900:#621f0a;--bq-volcano-1000:#310f05;--bq-yellow-100:#fefbe7;--bq-yellow-200:#fcf6d0;--bq-yellow-300:#faeea0;--bq-yellow-400:#f7e571;--bq-yellow-500:#f5dd41;--bq-yellow-600:#f2d412;--bq-yellow-700:#c2aa0e;--bq-yellow-800:#917f0b;--bq-yellow-900:#615507;--bq-yellow-1000:#302a04;--bq-endava-grey-50:#f7f7f8;--bq-endava-grey-100:#e4e6e7;--bq-endava-grey-200:#b5babe;--bq-endava-grey-300:#949ca1;--bq-endava-grey-400:#737d84;--bq-endava-grey-500:#525f67;--bq-endava-grey-600:#30404b;--bq-endava-grey-700:#2b3942;--bq-endava-grey-800:#263139;--bq-endava-grey-900:#192b37;--bq-endava-grey-950:#151b1e;--bq-endava-grey-1000:#0f1316;--bq-endava-neutral-white:#fafbfb;--bq-endava-neutral-black:#060708;--bq-endava-orange-100:#fef3f1;--bq-endava-orange-200:#fbd6d1;--bq-endava-orange-300:#fab7af;--bq-endava-orange-400:#fa988b;--bq-endava-orange-500:#fc7866;--bq-endava-orange-600:#ff5640;--bq-endava-orange-700:#ce4a39;--bq-endava-orange-800:#a03d30;--bq-endava-orange-900:#722e25;--bq-endava-orange-1000:#471e19;--bq-flypass-green-100:#e1ea80;--bq-flypass-green-200:#d9e560;--bq-flypass-green-300:#d1e040;--bq-flypass-green-400:#cada20;--bq-flypass-green-500:#c2d500;--bq-flypass-green-600:#afbf00;--bq-flypass-green-700:#9baa00;--bq-flypass-green-800:#889500;--bq-flypass-green-900:#738000;--bq-flypass-dark-grey-100:#bbb;--bq-flypass-dark-grey-200:#a4a4a4;--bq-flypass-dark-grey-300:#8d8d8d;--bq-flypass-dark-grey-400:#767676;--bq-flypass-dark-grey-500:#606060;--bq-flypass-dark-grey-600:#494949;--bq-flypass-dark-grey-700:#323232;--bq-flypass-dark-grey-800:#2c2c2c;--bq-flypass-dark-grey-900:#272727;--bq-flypass-sky-100:#a0e1f0;--bq-flypass-sky-200:#5fcde5;--bq-flypass-sky-300:#11b5d9;--bq-flypass-sky-400:#0f9ebd;--bq-flypass-sky-500:#0d87a2;--bq-flypass-sky-600:#0a6f86;--bq-flypass-sky-700:#085a6c;--bq-flypass-sky-800:#074553;--bq-flypass-sky-900:#05303a;--bq-flypass-blue-100:#cfe3f7;--bq-flypass-blue-200:#a0c8f0;--bq-flypass-blue-300:#70ace8;--bq-flypass-blue-400:#4191e1;--bq-flypass-blue-500:#1175d9;--bq-flypass-blue-600:#0e5eae;--bq-flypass-blue-700:#0a4682;--bq-flypass-blue-800:#072f57;--bq-flypass-blue-900:#03172b;--bq-flypass-orange-100:#ffddc7;--bq-flypass-orange-200:#ffccab;--bq-flypass-orange-300:#ffab74;--bq-flypass-orange-400:#ff812d;--bq-flypass-orange-500:#e17228;--bq-flypass-orange-600:#c16222;--bq-flypass-orange-700:#9f501c;--bq-flypass-orange-800:#804117;--bq-flypass-orange-900:#633211;--bq-flypass-violet-100:#e3cdff;--bq-flypass-violet-200:#b179ff;--bq-flypass-violet-300:#9747ff;--bq-flypass-violet-400:#7c3bd2;--bq-flypass-violet-500:#6a32b4;--bq-flypass-violet-600:#5b2b9b;--bq-flypass-violet-700:#4f2585;--bq-flypass-violet-800:#4f2585;--bq-flypass-violet-900:#391c62;--bq-flypass-yellow-100:#ffdf8e;--bq-flypass-yellow-200:#ffd773;--bq-flypass-yellow-300:#ffcf57;--bq-flypass-yellow-400:#ffc73a;--bq-flypass-yellow-500:#ffbf1f;--bq-flypass-yellow-600:#dfa61d;--bq-flypass-yellow-700:#bf8f18;--bq-flypass-yellow-800:#9f7713;--bq-flypass-yellow-900:#806010;--bq-flypass-red-100:#f9cccc;--bq-flypass-red-200:#f6adad;--bq-flypass-red-300:#ef8e8c;--bq-flypass-red-400:#ed6766;--bq-flypass-red-500:#e84241;--bq-flypass-red-600:#bc3535;--bq-flypass-red-700:#982c2b;--bq-flypass-red-800:#752121;--bq-flypass-red-900:#541718;--bq-flypass-blue-grey-100:#d3d7dd;--bq-flypass-blue-grey-200:#bcc2cb;--bq-flypass-blue-grey-300:#a5adbb;--bq-flypass-blue-grey-400:#8f98aa;--bq-flypass-blue-grey-500:#798499;--bq-flypass-blue-grey-600:#657189;--bq-flypass-blue-grey-700:#545e72;--bq-flypass-blue-grey-800:#434c5c;--bq-flypass-blue-grey-900:#343a47;--bq-flypass-grey-100:#fff;--bq-flypass-grey-200:#f5f5f5;--bq-flypass-grey-300:#efefef;--bq-flypass-grey-400:#e9e9e9;--bq-flypass-grey-500:#e3e3e3;--bq-flypass-grey-600:#dcdcdc;--bq-flypass-grey-700:#d6d6d6;--bq-flypass-grey-800:#d0d0d0;--bq-flypass-grey-900:#cacaca;--bq-flypass-light-100:#fff;--bq-flypass-light-200:#f5f5f5;--bq-flypass-light-300:#f4f7fa;--bq-flypass-light-400:#dde8f2;--bq-flypass-light-500:#d3d7dd;--bq-flypass-light-600:#657189;--bq-flypass-dart-100:#a1a1a1;--bq-flypass-dart-200:#515151;--bq-flypass-dart-300:#404040;--bq-flypass-dart-400:#2a2a2a;--bq-flypass-dart-500:#1b1b1b;--bq-flypass-dart-600:#0e100f}*,:after,:before{box-sizing:border-box}*{margin:0}[class^=bq-] *{font:inherit}ol[role=list],ul[role=list]{list-style-type:none}html:focus-within{scroll-behavior:smooth}[class^=bq-]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--bq-text--primary);font-family:var(--bq-font-family);font-size:var(--bq-font-size--m);letter-spacing:var(--bq-font-letter-spacing);line-height:var(--bq-font-line-height--regular);text-rendering:optimizeSpeed}a:not([class]){text-decoration-skip-ink:auto}canvas,img,picture,svg,video{display:block;max-width:100%}button,input,select,textarea{font:inherit}h1,h2,h3,h4,h5,h6,p{overflow-wrap:break-word}@media (prefers-reduced-motion:reduce){html:focus-within{scroll-behavior:auto}*,:after,:before{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto;transition-duration:.01ms!important}}:root{--bq-white:#fff;--bq-black:#060708;--bq-neutral-50:var(--bq-grey-50);--bq-neutral-100:var(--bq-grey-100);--bq-neutral-200:var(--bq-grey-200);--bq-neutral-300:var(--bq-grey-300);--bq-neutral-400:var(--bq-grey-400);--bq-neutral-500:var(--bq-grey-500);--bq-neutral-600:var(--bq-grey-600);--bq-neutral-700:var(--bq-grey-700);--bq-neutral-800:var(--bq-grey-800);--bq-neutral-900:var(--bq-grey-900);--bq-neutral-950:var(--bq-grey-950);--bq-neutral-1000:var(--bq-grey-1000);--bq-brand-light:var(--bq-iris-100);--bq-brand:var(--bq-iris-600);--bq-brand-dark:var(--bq-iris-1000);--bq-accent-light:var(--bq-purple-100);--bq-accent:var(--bq-purple-600);--bq-accent-dark:var(--bq-purple-1000);--bq-success-light:var(--bq-teal-100);--bq-success:var(--bq-teal-600);--bq-success-dark:var(--bq-teal-1000);--bq-danger-light:var(--bq-red-100);--bq-danger:var(--bq-red-600);--bq-danger-dark:var(--bq-red-1000);--bq-warning-light:var(--bq-gold-100);--bq-warning:var(--bq-gold-600);--bq-warning-dark:var(--bq-gold-1000);--bq-info-light:var(--bq-iris-100);--bq-info:var(--bq-iris-600);--bq-info-dark:var(--bq-iris-1000);--bq-focus:var(--bq-iris-600);--bq-data-01:var(--bq-brand);--bq-data-02:var(--bq-purple-600);--bq-data-03:var(--bq-magenta-600);--bq-data-04:var(--bq-cyan-600);--bq-data-05:var(--bq-teal-600);--bq-data-06:var(--bq-orange-600);--bq-data-07:var(--bq-yellow-600);--bq-data-08:var(--bq-red-600);--bq-data-09:var(--bq-blue-600);--bq-data-10:var(--bq-grey-600);--bq-data-11:var(--bq-black);--bq-data-12:var(--bq-white);--bq-radius--none:0;--bq-radius--xs2:0.125rem;--bq-radius--xs:0.313rem;--bq-radius--s:0.625rem;--bq-radius--m:0.75rem;--bq-radius--l:1.5rem;--bq-radius--full:9999px;--bq-box-shadow--xs:0 2px 0 rgba(0,0,0,.016);--bq-box-shadow--s:0 8px 24px rgba(0,0,0,.04);--bq-box-shadow--m:0 10px 48px -16px rgba(0,0,0,.12);--bq-box-shadow--l:0 20px 58px -16px rgba(0,0,0,.16);--bq-font-family:\"Outfit\",sans-serif;--bq-font-size--xs:0.75rem;--bq-font-size--s:0.875rem;--bq-font-size--m:1rem;--bq-font-size--l:1.125rem;--bq-font-size--xl:1.5rem;--bq-font-size--xxl:2rem;--bq-font-size--xxl2:2.5rem;--bq-font-size--xxl3:3rem;--bq-font-size--xxl4:3.5rem;--bq-font-size--xxl5:4rem;--bq-font-weight--thin:100;--bq-font-weight--light:300;--bq-font-weight--regular:400;--bq-font-weight--medium:500;--bq-font-weight--semibold:600;--bq-font-weight--bold:700;--bq-font-line-height--small:1.2;--bq-font-line-height--regular:1.5;--bq-font-line-height--large:1.5;--bq-spacing-xs3:0.125rem;--bq-spacing-xs2:0.25rem;--bq-spacing-xs:0.5rem;--bq-spacing-s:0.75rem;--bq-spacing-m:1rem;--bq-spacing-l:1.5rem;--bq-spacing-xl:2rem;--bq-spacing-xxl:2.5rem;--bq-spacing-xxl2:3.5rem;--bq-spacing-xxl3:4rem;--bq-spacing-xxl4:4.5rem;--bq-stroke-s:1px;--bq-stroke-m:2px;--bq-stroke-l:3px}.beeq.light,.light,:root,[bq-mode=light]{--bq-background--primary:var(--bq-white);--bq-background--secondary:var(--bq-neutral-100);--bq-background--tertiary:var(--bq-neutral-200);--bq-background--alt:var(--bq-neutral-300);--bq-background--inverse:var(--bq-neutral-900);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-800);--bq-icon--alt:var(--bq-white);--bq-icon--secondary:var(--bq-neutral-600);--bq-icon--inverse:var(--bq-neutral-50);--bq-icon--brand:var(--bq-brand);--bq-icon--info:var(--bq-brand);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-200);--bq-stroke--secondary:var(--bq-neutral-600);--bq-stroke--tertiary:var(--bq-neutral-900);--bq-stroke--inverse:var(--bq-white);--bq-stroke--brand:var(--bq-brand);--bq-stroke--alt:var(--bq-neutral-50);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-brand);--bq-text--primary:var(--bq-neutral-800);--bq-text--secondary:var(--bq-neutral-600);--bq-text--inverse:var(--bq-neutral-50);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-white);--bq-text--info:var(--bq-brand);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-white);--bq-ui--secondary:var(--bq-neutral-200);--bq-ui--tertiary:var(--bq-neutral-500);--bq-ui--inverse:var(--bq-neutral-900);--bq-ui--brand:var(--bq-brand);--bq-ui--brand-alt:var(--bq-brand-light);--bq-ui--alt:var(--bq-neutral-50);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-light);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-light);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-light);--bq-ui--info:var(--bq-brand);--bq-ui--info-alt:var(--bq-brand-light);--bq-hover:#bcbfc5;--bq-active:#444546}.beeq.dark,.dark,[bq-mode=dark]{--bq-background--primary:var(--bq-neutral-1000);--bq-background--secondary:var(--bq-neutral-950);--bq-background--tertiary:var(--bq-neutral-800);--bq-background--alt:var(--bq-neutral-700);--bq-background--inverse:var(--bq-neutral-600);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-100);--bq-icon--secondary:var(--bq-neutral-400);--bq-icon--inverse:var(--bq-neutral-800);--bq-icon--brand:var(--bq-brand);--bq-icon--alt:var(--bq-white);--bq-icon--info:var(--bq-brand);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-900);--bq-stroke--secondary:var(--bq-neutral-700);--bq-stroke--tertiary:var(--bq-neutral-400);--bq-stroke--inverse:var(--bq-neutral-950);--bq-stroke--brand:var(--bq-brand);--bq-stroke--alt:var(--bq-neutral-1000);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-brand);--bq-text--primary:var(--bq-neutral-100);--bq-text--secondary:var(--bq-neutral-400);--bq-text--inverse:var(--bq-neutral-800);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-white);--bq-text--info:var(--bq-brand);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-neutral-900);--bq-ui--secondary:var(--bq-neutral-800);--bq-ui--tertiary:var(--bq-neutral-700);--bq-ui--inverse:var(--bq-neutral-100);--bq-ui--brand:var(--bq-brand);--bq-ui--brand-alt:var(--bq-brand-dark);--bq-ui--alt:var(--bq-neutral-950);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-dark);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-dark);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-dark);--bq-ui--info:var(--bq-brand);--bq-ui--info-alt:var(--bq-brand-dark);--bq-hover:#444546;--bq-active:#1f2026}.endava,[bq-theme=endava]{--bq-font-family:\"Poppins\",sans-serif;--bq-white:#fafbfb;--bq-black:#030406;--bq-neutral-50:var(--bq-endava-grey-50);--bq-neutral-100:var(--bq-endava-grey-100);--bq-neutral-200:var(--bq-endava-grey-200);--bq-neutral-300:var(--bq-endava-grey-300);--bq-neutral-400:var(--bq-endava-grey-400);--bq-neutral-500:var(--bq-endava-grey-500);--bq-neutral-600:var(--bq-endava-grey-600);--bq-neutral-700:var(--bq-endava-grey-700);--bq-neutral-800:var(--bq-endava-grey-800);--bq-neutral-900:var(--bq-endava-grey-900);--bq-neutral-950:var(--bq-endava-grey-950);--bq-neutral-1000:var(--bq-endava-grey-1000);--bq-brand-light:var(--bq-endava-orange-100);--bq-brand:var(--bq-endava-orange-600);--bq-brand-dark:var(--bq-endava-orange-1000);--bq-accent-light:var(--bq-endava-orange-100);--bq-accent:var(--bq-endava-orange-600);--bq-accent-dark:var(--bq-endava-orange-1000);--bq-success-light:var(--bq-green-100);--bq-success:var(--bq-green-600);--bq-success-dark:var(--bq-green-1000);--bq-danger-light:var(--bq-corai-100);--bq-danger:var(--bq-corai-600);--bq-danger-dark:var(--bq-corai-1000);--bq-warning-light:var(--bq-yellow-100);--bq-warning:var(--bq-yellow-600);--bq-warning-dark:var(--bq-yellow-1000);--bq-info-light:var(--bq-blue-100);--bq-info:var(--bq-blue-600);--bq-info-dark:var(--bq-blue-1000);--bq-focus:var(--bq-endava-orange-600);--bq-data-01:var(--bq-brand);--bq-data-02:#af0cd8;--bq-data-03:#0ca8d8;--bq-data-04:var(--bq-teal-600);--bq-data-05:var(--bq-yellow-600);--bq-data-06:var(--bq-orange-600);--bq-data-07:var(--bq-blue-600);--bq-data-08:var(--bq-red-600);--bq-data-09:var(--bq-purple-600);--bq-data-10:#394b56;--bq-data-11:var(--bq-black);--bq-data-12:var(--bq-white)}.endava.light,[bq-theme=endava][bq-mode=light]{--bq-background--primary:var(--bq-white);--bq-background--secondary:var(--bq-neutral-100);--bq-background--tertiary:var(--bq-neutral-200);--bq-background--alt:var(--bq-neutral-300);--bq-background--inverse:var(--bq-neutral-900);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-800);--bq-icon--secondary:var(--bq-neutral-600);--bq-icon--inverse:var(--bq-neutral-50);--bq-icon--brand:var(--bq-brand);--bq-icon--alt:var(--bq-white);--bq-icon--info:var(--bq-info);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-200);--bq-stroke--secondary:var(--bq-neutral-600);--bq-stroke--tertiary:var(--bq-neutral-900);--bq-stroke--inverse:var(--bq-white);--bq-stroke--brand:var(--bq-brand);--bq-stroke--alt:var(--bq-neutral-50);--bq-stroke--brand-alt:var(--bq-brand-light);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-info);--bq-text--primary:var(--bq-neutral-800);--bq-text--secondary:var(--bq-neutral-600);--bq-text--inverse:var(--bq-neutral-50);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-white);--bq-text--info:var(--bq-info);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-white);--bq-ui--secondary:var(--bq-neutral-200);--bq-ui--tertiary:var(--bq-neutral-500);--bq-ui--inverse:var(--bq-neutral-900);--bq-ui--alt:var(--bq-neutral-50);--bq-ui--brand-alt:var(--bq-brand-light);--bq-ui--brand:var(--bq-brand);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-light);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-light);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-light);--bq-ui--info:var(--bq-info);--bq-ui--info-alt:var(--bq-info-light);--bq-hover:#444546;--bq-active:#1f2026}.endava.dark,[bq-theme=endava][bq-mode=dark]{--bq-background--primary:var(--bq-neutral-1000);--bq-background--secondary:var(--bq-neutral-900);--bq-background--tertiary:var(--bq-neutral-800);--bq-background--alt:var(--bq-neutral-700);--bq-background--inverse:var(--bq-neutral-600);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-100);--bq-icon--secondary:var(--bq-neutral-400);--bq-icon--inverse:var(--bq-neutral-800);--bq-icon--brand:var(--bq-brand);--bq-icon--alt:var(--bq-white);--bq-icon--info:var(--bq-info);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-900);--bq-stroke--secondary:var(--bq-neutral-700);--bq-stroke--tertiary:var(--bq-neutral-400);--bq-stroke--inverse:var(--bq-neutral-950);--bq-stroke--brand:var(--bq-brand);--bq-stroke--brand-alt:var(--bq-brand-dark);--bq-stroke--alt:var(--bq-neutral-1000);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-info);--bq-text--primary:var(--bq-neutral-100);--bq-text--secondary:var(--bq-neutral-400);--bq-text--inverse:var(--bq-neutral-800);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-neutral-white);--bq-text--info:var(--bq-info);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-neutral-900);--bq-ui--secondary:var(--bq-neutral-800);--bq-ui--tertiary:var(--bq-neutral-700);--bq-ui--inverse:var(--bq-neutral-100);--bq-ui--brand:var(--bq-brand);--bq-ui--brand-alt:var(--bq-brand-dark);--bq-ui--alt:var(--bq-neutral-950);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-dark);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-dark);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-dark);--bq-ui--info:var(--bq-info);--bq-ui--info-alt:var(--bq-info-dark);--bq-hover:#444546;--bq-active:#1f2026}.flypass,[bq-theme=flypass]{--bq-font-family:\"Inter\",sans-serif;--bq-white:#fff;--bq-black:#0e100f;--bq-neutral-50:var(--bq-flypass-dark-grey-100);--bq-neutral-100:var(--bq-flypass-dart-100);--bq-neutral-200:var(--bq-flypass-grey-200);--bq-neutral-300:var(--bq-flypass-dark-grey-300);--bq-neutral-400:var(--bq-flypass-dark-grey-400);--bq-neutral-500:var(--bq-flypass-dark-grey-500);--bq-neutral-600:var(--bq-flypass-dark-grey-600);--bq-neutral-700:var(--bq-flypass-dark-grey-700);--bq-neutral-800:var(--bq-flypass-dark-grey-800);--bq-neutral-900:var(--bq-flypass-dark-grey-900);--bq-neutral-950:var(--bq-flypass-dark-grey-900);--bq-neutral-1000:var(--bq-flypass-dark-grey-900);--bq-brand-light:var(--bq-flypass-green-200);--bq-brand:var(--bq-flypass-green-500);--bq-brand-dark:var(--bq-flypass-green-700);--bq-accent-light:var(--bq-flypass-green-300);--bq-accent:var(--bq-flypass-green-600);--bq-accent-dark:var(--bq-flypass-green-800);--bq-success-light:var(--bq-green-100);--bq-success:var(--bq-green-600);--bq-success-dark:var(--bq-green-1000);--bq-danger-light:var(--bq-corai-100);--bq-danger:var(--bq-corai-600);--bq-danger-dark:var(--bq-corai-1000);--bq-warning-light:var(--bq-yellow-100);--bq-warning:var(--bq-yellow-600);--bq-warning-dark:var(--bq-yellow-1000);--bq-info-light:var(--bq-blue-100);--bq-info:var(--bq-blue-600);--bq-info-dark:var(--bq-blue-1000);--bq-focus:var(--bq-flypass-green-500);--bq-data-01:var(--bq-brand);--bq-data-02:#af0cd8;--bq-data-03:#0ca8d8;--bq-data-04:var(--bq-teal-600);--bq-data-05:var(--bq-yellow-600);--bq-data-06:var(--bq-orange-600);--bq-data-07:var(--bq-blue-600);--bq-data-08:var(--bq-red-600);--bq-data-09:var(--bq-purple-600);--bq-data-10:#394b56;--bq-data-11:var(--bq-black);--bq-data-12:var(--bq-white)}.flypass.light,[bq-theme=flypass][bq-mode=light]{--bq-background--primary:var(--bq-white);--bq-background--secondary:var(--bq-neutral-100);--bq-background--tertiary:var(--bq-neutral-200);--bq-background--alt:var(--bq-neutral-300);--bq-background--inverse:var(--bq-neutral-900);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-800);--bq-icon--secondary:var(--bq-neutral-600);--bq-icon--inverse:var(--bq-neutral-50);--bq-icon--brand:var(--bq-brand);--bq-icon--alt:var(--bq-white);--bq-icon--info:var(--bq-info);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-200);--bq-stroke--secondary:var(--bq-neutral-600);--bq-stroke--tertiary:var(--bq-neutral-900);--bq-stroke--inverse:var(--bq-white);--bq-stroke--brand:var(--bq-brand);--bq-stroke--alt:var(--bq-neutral-50);--bq-stroke--brand-alt:var(--bq-brand-light);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-info);--bq-text--primary:var(--bq-neutral-700);--bq-text--secondary:var(--bq-neutral-600);--bq-text--inverse:var(--bq-neutral-50);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-neutral-700);--bq-text--info:var(--bq-info);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-white);--bq-ui--secondary:var(--bq-neutral-200);--bq-ui--tertiary:var(--bq-neutral-500);--bq-ui--inverse:var(--bq-neutral-900);--bq-ui--alt:var(--bq-neutral-50);--bq-ui--brand-alt:var(--bq-brand-light);--bq-ui--brand:var(--bq-brand);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-light);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-light);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-light);--bq-ui--info:var(--bq-info);--bq-ui--info-alt:var(--bq-info-light);--bq-hover:#444546;--bq-active:#1f2026}.flypass.dark,[bq-theme=flypass][bq-mode=dark]{--bq-background--primary:var(--bq-neutral-1000);--bq-background--secondary:var(--bq-neutral-900);--bq-background--tertiary:var(--bq-neutral-800);--bq-background--alt:var(--bq-neutral-700);--bq-background--inverse:var(--bq-neutral-600);--bq-background--brand:var(--bq-brand);--bq-background--overlay:var(--bq-neutral-900);--bq-icon--primary:var(--bq-neutral-100);--bq-icon--secondary:var(--bq-neutral-400);--bq-icon--inverse:var(--bq-neutral-800);--bq-icon--brand:var(--bq-brand);--bq-icon--alt:var(--bq-white);--bq-icon--info:var(--bq-info);--bq-icon--success:var(--bq-success);--bq-icon--warning:var(--bq-warning);--bq-icon--danger:var(--bq-danger);--bq-stroke--primary:var(--bq-neutral-900);--bq-stroke--secondary:var(--bq-neutral-700);--bq-stroke--tertiary:var(--bq-neutral-400);--bq-stroke--inverse:var(--bq-neutral-950);--bq-stroke--brand:var(--bq-brand);--bq-stroke--brand-alt:var(--bq-brand-dark);--bq-stroke--alt:var(--bq-neutral-1000);--bq-stroke--success:var(--bq-success);--bq-stroke--warning:var(--bq-warning);--bq-stroke--danger:var(--bq-danger);--bq-stroke--info:var(--bq-info);--bq-text--primary:var(--bq-neutral-100);--bq-text--secondary:var(--bq-neutral-400);--bq-text--inverse:var(--bq-neutral-800);--bq-text--brand:var(--bq-brand);--bq-text--alt:var(--bq-neutral-white);--bq-text--info:var(--bq-info);--bq-text--success:var(--bq-success);--bq-text--warning:var(--bq-warning);--bq-text--danger:var(--bq-danger);--bq-ui--primary:var(--bq-neutral-900);--bq-ui--secondary:var(--bq-neutral-800);--bq-ui--tertiary:var(--bq-neutral-700);--bq-ui--inverse:var(--bq-neutral-100);--bq-ui--brand:var(--bq-brand);--bq-ui--brand-alt:var(--bq-brand-dark);--bq-ui--alt:var(--bq-neutral-950);--bq-ui--success:var(--bq-success);--bq-ui--success-alt:var(--bq-success-dark);--bq-ui--warning:var(--bq-warning);--bq-ui--warning-alt:var(--bq-warning-dark);--bq-ui--danger:var(--bq-danger);--bq-ui--danger-alt:var(--bq-danger-dark);--bq-ui--info:var(--bq-info);--bq-ui--info-alt:var(--bq-info-dark);--bq-hover:#444546;--bq-active:#1f2026}.pointer-events-none{pointer-events:none}.block{display:block}.flex{display:flex}.hidden{display:none}.flex-1{flex:1 1 0%}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.select-none{user-select:none}.list-none{list-style-type:none}.items-center{align-items:center}.justify-center{justify-content:center}.gap-\\[--bq-accordion--medium-gap\\]{gap:var(--bq-accordion--medium-gap)}.gap-\\[--bq-accordion--small-gap\\]{gap:var(--bq-accordion--small-gap)}.overflow-clip{overflow:clip}.rounded-ee-\\[--bq-accordion--medium-radius\\]{border-end-end-radius:var(--bq-accordion--medium-radius)}.rounded-ee-\\[--bq-accordion--small-radius\\]{border-end-end-radius:var(--bq-accordion--small-radius)}.rounded-ee-\\[0px\\]{border-end-end-radius:0}.rounded-es-\\[--bq-accordion--medium-radius\\]{border-end-start-radius:var(--bq-accordion--medium-radius)}.rounded-es-\\[--bq-accordion--small-radius\\]{border-end-start-radius:var(--bq-accordion--small-radius)}.rounded-es-\\[0px\\]{border-end-start-radius:0}.rounded-se-\\[--bq-accordion--medium-radius\\]{border-start-end-radius:var(--bq-accordion--medium-radius)}.rounded-se-\\[--bq-accordion--small-radius\\]{border-start-end-radius:var(--bq-accordion--small-radius)}.rounded-se-\\[0px\\]{border-start-end-radius:0}.rounded-ss-\\[--bq-accordion--medium-radius\\]{border-start-start-radius:var(--bq-accordion--medium-radius)}.rounded-ss-\\[--bq-accordion--small-radius\\]{border-start-start-radius:var(--bq-accordion--small-radius)}.rounded-ss-\\[0px\\]{border-start-start-radius:0}.border-\\[length\\:--bq-accordion--collapsed-border-width\\]{border-width:var(--bq-accordion--collapsed-border-width)}.border-\\[length\\:--bq-accordion--expanded-border-width\\]{border-width:var(--bq-accordion--expanded-border-width)}.border-\\[length\\:--bq-accordion--panel-filled-border-width\\]{border-width:var(--bq-accordion--panel-filled-border-width)}.border-\\[length\\:--bq-accordion--panel-ghost-border-width\\]{border-width:var(--bq-accordion--panel-ghost-border-width)}.border-\\[color\\:--bq-accordion--collapsed-border-color\\]{border-color:var(--bq-accordion--collapsed-border-color)}.border-\\[color\\:--bq-accordion--expanded-border-color\\]{border-color:var(--bq-accordion--expanded-border-color)}.border-\\[color\\:--bq-accordion--panel-filled-border-color\\]{border-color:var(--bq-accordion--panel-filled-border-color)}.border-\\[color\\:--bq-accordion--panel-ghost-border-color\\]{border-color:var(--bq-accordion--panel-ghost-border-color)}.bg-\\[--bq-accordion--filled-collapsed-background\\]{background-color:var(--bq-accordion--filled-collapsed-background)}.bg-\\[--bq-accordion--filled-expanded-background\\]{background-color:var(--bq-accordion--filled-expanded-background)}.bg-\\[--bq-accordion--ghost-collapsed-background\\]{background-color:var(--bq-accordion--ghost-collapsed-background)}.bg-\\[--bq-accordion--ghost-expanded-background\\]{background-color:var(--bq-accordion--ghost-expanded-background)}.pe-\\[--bq-accordion--medium-padding-end\\]{padding-inline-end:var(--bq-accordion--medium-padding-end)}.pe-\\[--bq-accordion--panel-medium-filled-padding-end\\]{padding-inline-end:var(--bq-accordion--panel-medium-filled-padding-end)}.pe-\\[--bq-accordion--panel-medium-ghost-padding-end\\]{padding-inline-end:var(--bq-accordion--panel-medium-ghost-padding-end)}.pe-\\[--bq-accordion--panel-small-filled-padding-end\\]{padding-inline-end:var(--bq-accordion--panel-small-filled-padding-end)}.pe-\\[--bq-accordion--panel-small-ghost-padding-end\\]{padding-inline-end:var(--bq-accordion--panel-small-ghost-padding-end)}.pe-\\[--bq-accordion--small-padding-end\\]{padding-inline-end:var(--bq-accordion--small-padding-end)}.ps-\\[--bq-accordion--medium-padding-start\\]{padding-inline-start:var(--bq-accordion--medium-padding-start)}.ps-\\[--bq-accordion--panel-medium-filled-padding-start\\]{padding-inline-start:var(--bq-accordion--panel-medium-filled-padding-start)}.ps-\\[--bq-accordion--panel-medium-ghost-padding-start\\]{padding-inline-start:var(--bq-accordion--panel-medium-ghost-padding-start)}.ps-\\[--bq-accordion--panel-small-filled-padding-start\\]{padding-inline-start:var(--bq-accordion--panel-small-filled-padding-start)}.ps-\\[--bq-accordion--panel-small-ghost-padding-start\\]{padding-inline-start:var(--bq-accordion--panel-small-ghost-padding-start)}.ps-\\[--bq-accordion--small-padding-start\\]{padding-inline-start:var(--bq-accordion--small-padding-start)}.text-\\[--bq-accordion--filled-collapsed-text-color\\]{color:var(--bq-accordion--filled-collapsed-text-color)}.text-\\[--bq-accordion--filled-expanded-text-color\\]{color:var(--bq-accordion--filled-expanded-text-color)}.text-\\[--bq-accordion--ghost-collapsed-text-color\\]{color:var(--bq-accordion--ghost-collapsed-text-color)}.text-\\[--bq-accordion--ghost-expanded-text-color\\]{color:var(--bq-accordion--ghost-expanded-text-color)}.opacity-60{opacity:.6}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.bs-0{block-size:0}.bs-auto{block-size:auto}.p-b-\\[--bq-accordion--medium-padding-y\\]{padding-block:var(--bq-accordion--medium-padding-y)}.p-b-\\[--bq-accordion--panel-medium-filled-padding-y\\]{padding-block:var(--bq-accordion--panel-medium-filled-padding-y)}.p-b-\\[--bq-accordion--panel-medium-ghost-padding-y\\]{padding-block:var(--bq-accordion--panel-medium-ghost-padding-y)}.p-b-\\[--bq-accordion--panel-small-filled-padding-y\\]{padding-block:var(--bq-accordion--panel-small-filled-padding-y)}.p-b-\\[--bq-accordion--panel-small-ghost-padding-y\\]{padding-block:var(--bq-accordion--panel-small-ghost-padding-y)}.p-b-\\[--bq-accordion--small-padding-y\\]{padding-block:var(--bq-accordion--small-padding-y)}.\\[transition-behavior\\:allow-discrete\\]{transition-behavior:allow-discrete}@-webkit-keyframes fade-in{0%{opacity:0}}@keyframes fade-in{0%{opacity:0}}@-webkit-keyframes slide-in{0%{-webkit-transform:translateY(10px);transform:translateY(10px)}}@keyframes slide-in{0%{-webkit-transform:translateY(10px);transform:translateY(10px)}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}:host{--bq-accordion--small-padding-y:var(--bq-spacing-xs);--bq-accordion--small-padding-start:var(--bq-spacing-s);--bq-accordion--small-padding-end:var(--bq-spacing-s);--bq-accordion--small-gap:var(--bq-spacing-xs);--bq-accordion--small-radius:var(--bq-radius--xs);--bq-accordion--medium-padding-y:var(--bq-spacing-s);--bq-accordion--medium-padding-start:var(--bq-spacing-m);--bq-accordion--medium-padding-end:var(--bq-spacing-m);--bq-accordion--medium-gap:var(--bq-spacing-m);--bq-accordion--medium-radius:var(--bq-radius--xs);--bq-accordion--collapsed-border-color:transparent;--bq-accordion--collapsed-border-style:none;--bq-accordion--collapsed-border-width:unset;--bq-accordion--expanded-border-color:transparent;--bq-accordion--expanded-border-style:none;--bq-accordion--expanded-border-width:unset;--bq-accordion--filled-collapsed-background:var(--bq-ui--primary);--bq-accordion--filled-collapsed-text-color:var(--bq-text--primary);--bq-accordion--filled-expanded-background:var(--bq-ui--primary);--bq-accordion--filled-expanded-text-color:var(--bq-text--primary);--bq-accordion--ghost-collapsed-background:transparent;--bq-accordion--ghost-collapsed-text-color:var(--bq-text--primary);--bq-accordion--ghost-expanded-background:transparent;--bq-accordion--ghost-expanded-text-color:var(--bq-text--brand);--bq-accordion--panel-filled-border-color:var(--bq-stroke--primary);--bq-accordion--panel-filled-border-style:solid;--bq-accordion--panel-filled-border-width:var(--bq-stroke-s);--bq-accordion--panel-small-filled-padding-y:var(--bq-spacing-s);--bq-accordion--panel-small-filled-padding-start:var(--bq-spacing-s);--bq-accordion--panel-small-filled-padding-end:var(--bq-spacing-s);--bq-accordion--panel-medium-filled-padding-y:var(--bq-spacing-m);--bq-accordion--panel-medium-filled-padding-start:var(--bq-spacing-m);--bq-accordion--panel-medium-filled-padding-end:var(--bq-spacing-m);--bq-accordion--panel-ghost-border-color:transparent;--bq-accordion--panel-ghost-border-style:none;--bq-accordion--panel-ghost-border-width:unset;--bq-accordion--panel-small-ghost-padding-y:var(--bq-spacing-s);--bq-accordion--panel-small-ghost-padding-start:var(--bq-spacing-l);--bq-accordion--panel-small-ghost-padding-end:var(--bq-spacing-l);--bq-accordion--panel-medium-ghost-padding-y:var(--bq-spacing-m);--bq-accordion--panel-medium-ghost-padding-start:var(--bq-spacing-xl);--bq-accordion--panel-medium-ghost-padding-end:var(--bq-spacing-xl);display:block}@supports (interpolate-size:allow-keywords){.bq-accordion:not(.no-animation){interpolate-size:allow-keywords}}.bq-accordion.disabled{cursor:not-allowed;opacity:.6}.bq-accordion.disabled .bq-accordion__header{pointer-events:none}.bq-accordion.small .bq-accordion__header{border-end-end-radius:var(--bq-accordion--small-radius);border-end-start-radius:var(--bq-accordion--small-radius);border-start-end-radius:var(--bq-accordion--small-radius);border-start-start-radius:var(--bq-accordion--small-radius);gap:var(--bq-accordion--small-gap);padding-block:var(--bq-accordion--small-padding-y);padding-inline-end:var(--bq-accordion--small-padding-end);padding-inline-start:var(--bq-accordion--small-padding-start)}.bq-accordion.medium .bq-accordion__header{border-end-end-radius:var(--bq-accordion--medium-radius);border-end-start-radius:var(--bq-accordion--medium-radius);border-start-end-radius:var(--bq-accordion--medium-radius);border-start-start-radius:var(--bq-accordion--medium-radius);gap:var(--bq-accordion--medium-gap);padding-block:var(--bq-accordion--medium-padding-y);padding-inline-end:var(--bq-accordion--medium-padding-end);padding-inline-start:var(--bq-accordion--medium-padding-start)}.bq-accordion[open] .bq-accordion__header{border-color:var(--bq-accordion--expanded-border-color);border-end-end-radius:0;border-end-start-radius:0;border-style:var(--bq-accordion--expanded-border-style);border-width:var(--bq-accordion--expanded-border-width)}.bq-accordion.small .bq-accordion__content{border-end-end-radius:var(--bq-accordion--small-radius);border-end-start-radius:var(--bq-accordion--small-radius);border-start-end-radius:0;border-start-start-radius:0}.bq-accordion.medium .bq-accordion__content{border-end-end-radius:var(--bq-accordion--medium-radius);border-end-start-radius:var(--bq-accordion--medium-radius);border-start-end-radius:0;border-start-start-radius:0}.bq-accordion.filled .bq-accordion__header{background-color:var(--bq-accordion--filled-collapsed-background)}.bq-accordion.filled .bq-accordion__header:hover{background-color:color-mix(in srgb,var(--bq-ui--secondary),var(--bq-hover) 20%)}.bq-accordion.filled .bq-accordion__header--text{color:var(--bq-accordion--filled-collapsed-text-color)}.bq-accordion.filled .bq-accordion__content{border-color:var(--bq-accordion--panel-filled-border-color);border-style:var(--bq-accordion--panel-filled-border-style);border-width:var(--bq-accordion--panel-filled-border-width)}.bq-accordion.filled[open] .bq-accordion__header{background-color:var(--bq-accordion--filled-expanded-background)}.bq-accordion.filled[open] .bq-accordion__header:hover{background-color:color-mix(in srgb,var(--bq-ui--secondary),var(--bq-hover) 20%)}.bq-accordion.filled[open] .bq-accordion__header--text{color:var(--bq-accordion--filled-expanded-text-color)}.bq-accordion.ghost .bq-accordion__header{background-color:var(--bq-accordion--ghost-collapsed-background)}.bq-accordion.ghost .bq-accordion__header:hover{background-color:color-mix(in srgb,var(--bq-ui--secondary),var(--bq-hover) 20%)}.bq-accordion.ghost .bq-accordion__header--text{color:var(--bq-accordion--ghost-collapsed-text-color)}.bq-accordion.ghost .bq-accordion__content{border-color:var(--bq-accordion--panel-ghost-border-color);border-style:var(--bq-accordion--panel-ghost-border-style);border-width:var(--bq-accordion--panel-ghost-border-width)}.bq-accordion.ghost[open] .bq-accordion__header{background-color:var(--bq-accordion--ghost-expanded-background)}.bq-accordion.ghost[open] .bq-accordion__header:hover{background-color:color-mix(in srgb,var(--bq-ui--secondary),var(--bq-hover) 20%)}.bq-accordion.ghost[open] .bq-accordion__header--text{color:var(--bq-accordion--ghost-expanded-text-color)}.bq-accordion.small.filled .bq-accordion__content{padding-block:var(--bq-accordion--panel-small-filled-padding-y);padding-inline-end:var(--bq-accordion--panel-small-filled-padding-end);padding-inline-start:var(--bq-accordion--panel-small-filled-padding-start)}.bq-accordion.medium.filled .bq-accordion__content{padding-block:var(--bq-accordion--panel-medium-filled-padding-y);padding-inline-end:var(--bq-accordion--panel-medium-filled-padding-end);padding-inline-start:var(--bq-accordion--panel-medium-filled-padding-start)}.bq-accordion.small.ghost .bq-accordion__content{padding-block:var(--bq-accordion--panel-small-ghost-padding-y);padding-inline-end:var(--bq-accordion--panel-small-ghost-padding-end);padding-inline-start:var(--bq-accordion--panel-small-ghost-padding-start)}.bq-accordion.medium.ghost .bq-accordion__content{padding-block:var(--bq-accordion--panel-medium-ghost-padding-y);padding-inline-end:var(--bq-accordion--panel-medium-ghost-padding-end);padding-inline-start:var(--bq-accordion--panel-medium-ghost-padding-start)}.bq-accordion::details-content{transition-behavior:allow-discrete;block-size:0;display:block;overflow:clip;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.bq-accordion[open]::details-content{block-size:auto}.bq-accordion__header{--bq-ring-offset-width:-2px;align-items:center;border-color:var(--bq-accordion--collapsed-border-color);border-style:var(--bq-accordion--collapsed-border-style);border-width:var(--bq-accordion--collapsed-border-width);cursor:pointer;display:flex;list-style-type:none;transition-duration:.3s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);user-select:none}.bq-accordion__header:focus-visible{outline:var(--bq-ring-width,2px) solid var(--bq-ring-color-focus,var(--bq-focus));outline-offset:var(--bq-ring-offset-width,1px)}.bq-accordion__header::-webkit-details-marker,.bq-accordion__header::marker{display:none}.bq-accordion__header--text{flex:1 1 0%}.bq-accordion__header--prefix,.bq-accordion__header--suffix{align-items:center;display:flex;justify-content:center}.focus-visible\\:focus:focus-visible{outline:var(--bq-ring-width,2px) solid var(--bq-ring-color-focus,var(--bq-focus));outline-offset:var(--bq-ring-offset-width,1px)}.hover\\:bg-hover-ui-secondary:hover{background-color:color-mix(in srgb,var(--bq-ui--secondary),var(--bq-hover) 20%)}@supports (interpolate-size:allow-keywords){.supports-\\[interpolate-size\\:_allow-keywords\\]\\:\\[interpolate-size\\:_allow-keywords\\]{interpolate-size:allow-keywords}}.rotate-180{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-rotate:180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.collapse{visibility:collapse}.static{position:static}.\\!hidden{display:none!important}.overflow-hidden{overflow:hidden}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.focus{outline:var(--bq-ring-width,2px) solid var(--bq-ring-color-focus,var(--bq-focus));outline-offset:var(--bq-ring-offset-width,1px)}.text-\\[color\\:--bq-icon--color\\]{color:var(--bq-icon--color)}.bs-\\[--bq-icon--size\\]{block-size:var(--bq-icon--size)}.is-\\[--bq-icon--size\\]{inline-size:var(--bq-icon--size)}";

const BqAccordion = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bqBlur = index.createEvent(this, "bqBlur", 7);
        this.bqFocus = index.createEvent(this, "bqFocus", 7);
        this.bqOpen = index.createEvent(this, "bqOpen", 7);
        this.bqAfterOpen = index.createEvent(this, "bqAfterOpen", 7);
        this.bqClose = index.createEvent(this, "bqClose", 7);
        this.bqAfterClose = index.createEvent(this, "bqAfterClose", 7);
        this.bqClick = index.createEvent(this, "bqClick", 7);
    }
    // Own Properties
    // ====================
    accordion;
    prefixElem;
    suffixElem;
    detailsElem;
    get el() { return index.getElement(this); }
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    hasPrefix = false;
    hasSuffix = false;
    // Public Property API
    // ========================
    /** The appearance style of the Accordion */
    appearance = 'filled';
    /** If true, the Accordion is disabled */
    disabled = false;
    /** If true, the Accordion is expanded */
    expanded = false;
    /**
     * Animation is set through JS when the browser does not support CSS calc-size()
     * If true, the Accordion animation, will be disabled. No animation will be applied.
     */
    noAnimation = false;
    /** If true, the Accordion expand icon is rotate 180deg when expanded */
    rotate = false;
    /** The size of the Accordion */
    size = 'medium';
    // Prop lifecycle events
    // =======================
    checkPropValues() {
        index$1.validatePropValue(ACCORDION_SIZE, 'medium', this.el, 'size');
        index$1.validatePropValue(ACCORDION_APPEARANCE, 'filled', this.el, 'appearance');
    }
    handleExpandedChange() {
        const event = this.expanded ? this.bqOpen.emit(this.el) : this.bqClose.emit(this.el);
        if (event.defaultPrevented) {
            this.expanded = !this.expanded;
            return;
        }
        if (this.expanded) {
            this.accordion?.open();
        }
        else {
            this.accordion?.close();
        }
        if (!this.isCssInterpolateSizeSupported)
            return;
        // NOTE: This is a workaround to trigger the transitionEnd event
        // when the open/close animation is handled via CSS instead of JS
        setTimeout(() => {
            this.el.dispatchEvent(new CustomEvent('accordionTransitionEnd', { bubbles: false, composed: true }));
        }, 200);
    }
    handleDisabledChange() {
        if (!this.disabled)
            return;
        this.expanded = false;
    }
    handleJsAnimation() {
        if (this.isCssInterpolateSizeSupported)
            return;
        console.warn(`[bq-accordion] animating to/from intrinsic sizing keywords (interpolate-size: allow-keywords) is not supported and animation will be set through JS.
        For vertical layout, consider using the 'noAnimation' prop ('no-animation' attribute) to disable it`);
        this.accordion = !this.noAnimation ? new Accordion(this.detailsElem) : null;
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Handler to be called when the accordion loses focus */
    bqBlur;
    /** Handler to be called when the accordion gets focus */
    bqFocus;
    /** Handler to be called when the accordion is opened */
    bqOpen;
    /** Handler to be called after the accordion is opened */
    bqAfterOpen;
    /** Handler to be called when the accordion is closed */
    bqClose;
    /** Handler to be called after the accordion is closed */
    bqAfterClose;
    /** Handler to be called when the accordion is clicked */
    bqClick;
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    componentWillLoad() {
        this.checkPropValues();
    }
    componentDidLoad() {
        this.handleJsAnimation();
        this.handleExpandedChange();
    }
    // Listeners
    // ==============
    onAccordionTransitionEnd(event) {
        event.stopPropagation();
        if (event.target !== this.el)
            return;
        if (this.expanded) {
            this.bqAfterOpen.emit(this.el);
            return;
        }
        this.bqAfterClose.emit(this.el);
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
    handleClick = (event) => {
        event.preventDefault();
        if (this.disabled)
            return;
        this.bqClick.emit(this.el);
        this.expanded = !this.expanded;
    };
    handleFocus = () => {
        if (this.disabled)
            return;
        this.bqFocus.emit(this.el);
    };
    handleBlur = () => {
        this.bqBlur.emit(this.el);
    };
    handlePrefixSlotChange = () => {
        this.hasPrefix = index$1.hasSlotContent(this.prefixElem, 'prefix');
    };
    handleSuffixSlotChange = () => {
        this.hasSuffix = index$1.hasSlotContent(this.suffixElem, 'suffix');
    };
    get open() {
        return this.expanded && !this.disabled;
    }
    get isCssInterpolateSizeSupported() {
        return window.CSS?.supports('(interpolate-size: allow-keywords)');
    }
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        return (index.h("details", { key: 'a870407449d2cfeb32d4817e7d56018c7afc40fc', class: {
                [`bq-accordion overflow-hidden ${this.size} ${this.appearance}`]: true,
                'no-animation': this.noAnimation,
                disabled: this.disabled,
            }, ref: (detailsElem) => (this.detailsElem = detailsElem), open: this.open, part: "base" }, index.h("summary", { key: '6b1e2312519bf04dac0e4109817fc40c59857bf7', id: "bq-accordion__header", class: "bq-accordion__header", onClick: this.handleClick, onFocus: this.handleFocus, onBlur: this.handleBlur, "aria-expanded": this.expanded ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false', "aria-controls": "bq-accordion__content", tabindex: this.disabled ? -1 : 0, role: "button", part: "header" }, index.h("div", { key: '43e333e7a08eb42e893673809d2a0f4ac68f8c5e', ref: (element) => (this.prefixElem = element), class: { 'bq-accordion__header--prefix': true, '!hidden': !this.hasPrefix }, part: "prefix" }, index.h("slot", { key: 'ee464fd1e0a383beebefe4d713bda6f1c6c488fe', name: "prefix", onSlotchange: this.handlePrefixSlotChange })), index.h("div", { key: '09f8b02d8dce6fb7a3b1a28c3943c3d2d0aae755', class: "bq-accordion__header--text", part: "text" }, index.h("slot", { key: '7083b8911805c5d0cd617e9a4eef7235b2f4af7b', name: "header" })), index.h("div", { key: 'c3c678ad4f482b11efb584b273fcfd189a3203f9', ref: (element) => (this.suffixElem = element), class: { 'bq-accordion__header--suffix': true, '!hidden': !this.hasSuffix }, part: "suffix" }, index.h("slot", { key: '24abd092ca5a84ae39f4bb3aa1f924e7164805fa', name: "suffix", onSlotchange: this.handleSuffixSlotChange })), index.h("div", { key: 'efee2573a804ccd5b304c80cf605ceeb5ad7d71d', class: {
                'flex items-center justify-center transition-transform duration-300 ease-in-out': true,
                '!hidden': this.open && !this.rotate,
                'rotate-180': this.rotate && this.open,
            }, "aria-hidden": "true" }, index.h("slot", { key: '4ebb25cbe06bd0092a9786b650d06fca20518194', name: "expand" }, index.h("bq-icon", { key: 'b4a1a7819959dcc4e08efc8d1a95258f5d0fd199', name: "plus" }))), index.h("div", { key: 'b78d55a27e5cabe6075b0f8772bdb95f0e3cc08f', class: { 'flex items-center justify-center': true, '!hidden': (!this.open && !this.rotate) || this.rotate }, "aria-hidden": "true" }, index.h("slot", { key: '911ac4631b5df73d5935b8cf3c84d2d252877eb3', name: "collapse" }, index.h("bq-icon", { key: '112d66213061258d41bdce2661df09ff236ffca4', name: "minus" })))), index.h("div", { key: '26065bedbfdd0e24d6e40e3e27a2eb793695ab0d', class: "bq-accordion__body overflow-hidden", "aria-labelledby": "bq-accordion__header", role: "region", part: "panel" }, index.h("slot", { key: '5f4d340fa5f8d1f1277a322f1c43bb1165f4f23d', id: "bq-accordion__content", class: "bq-accordion__content block" }))));
    }
    static get watchers() { return {
        "size": ["checkPropValues"],
        "expanded": ["handleExpandedChange"],
        "disabled": ["handleDisabledChange"],
        "noAnimation": ["handleJsAnimation"]
    }; }
};
BqAccordion.style = bqAccordionCss;

exports.bq_accordion = BqAccordion;

//# sourceMappingURL=bq-accordion.cjs.entry.js.map