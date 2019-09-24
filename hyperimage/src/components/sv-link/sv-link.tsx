import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sv-link',
  styleUrl: 'sv-link.css',
  shadow: true
})
export class SvLink {
  @Prop() href: string;
  @Prop() target: string = '_self';

  rel: string = this.target === '_blank' ? 'nofollow' : '';

  render() {
    if (!this.href || this.href === '') { return (<span><slot></slot></span>); }

    return (
      <a
        href={this.href}
        target={this.target}
        rel={this.rel}
      >
        <slot></slot>
      </a>
    );
  }

}
