/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface SvPicture {
    'alt': string;
    'src': string;
    'srcset': string;
  }
}

declare global {


  interface HTMLSvPictureElement extends Components.SvPicture, HTMLStencilElement {}
  var HTMLSvPictureElement: {
    prototype: HTMLSvPictureElement;
    new (): HTMLSvPictureElement;
  };
  interface HTMLElementTagNameMap {
    'sv-picture': HTMLSvPictureElement;
  }
}

declare namespace LocalJSX {
  interface SvPicture extends JSXBase.HTMLAttributes<HTMLSvPictureElement> {
    'alt'?: string;
    'src'?: string;
    'srcset'?: string;
  }

  interface IntrinsicElements {
    'sv-picture': SvPicture;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


