/* eslint-disable init-declarations */
/**
 * @file global modules
 * @author Dylan
 */

declare module '*.less' {
    const content: any;
    export default content;
}

declare module '*.png' {
    const url: string;
    export default url;
}

declare module '*.svg' {
    const url: string;
    export default url;
}

declare module '*.svg?react' {
    const SvgComponent: any;
    export default SvgComponent;
}
