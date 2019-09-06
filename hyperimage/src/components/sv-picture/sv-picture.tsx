import { Component, Element, Prop, h } from "@stencil/core";

@Component({
  tag: "sv-picture",
  styleUrl: "sv-picture.css",
  shadow: true
})
export class hyperimage {
  @Element() el: HTMLElement;

  @Prop() srcset: string;
  @Prop() src: string;
  @Prop() alt: string;

  io: IntersectionObserver;
  sources: Array<any> = [];

  connectedCallback() {
    this.prepareSources();
  }

  componentDidLoad() {
    this.addIntersectionObserver();
  }

  prepareSources() {
    if (!this.srcset) return;

    const srcs = this.srcset.split(",");
    const sources = srcs
      .filter(str => str.length > 0)
      .map((srcstr: string) => {
        const trimmed = srcstr.trim();
        const [width, src] = trimmed.split("::");
        return { width, src };
      });
    sources.sort((a: any, b: any) => parseInt(b.width) - parseInt(a.width));
    this.sources = sources;
  }

  loadImage() {
    var sources = this.el.shadowRoot.querySelectorAll("[data-srcset]");
    for (var i = 0; i < sources.length; i++) {
      sources[i].setAttribute("srcset", sources[i].getAttribute("data-srcset"));
    }

    const image: HTMLImageElement = this.el.shadowRoot.querySelector("img");
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
      image.removeAttribute("data-src");
      for (var i = 0; i < sources.length; i++) {
        sources[i].removeAttribute("data-srcset");
      }
    };
  }

  addIntersectionObserver() {
    if (!this.src) return;

    this.io = new IntersectionObserver((entries: any) => {
      if (entries[0].isIntersecting) {
        this.loadImage();
        this.removeIntersectionObserver();
      }
    });

    this.io.observe(this.el.shadowRoot.querySelector("img"));
  }

  removeIntersectionObserver() {
    if (!this.io) return;

    this.io.disconnect();
    this.io = null;
  }

  render() {
    return (
      <picture>
        {this.sources.map(({ width, src }) => (
          <source data-srcset={src} media={`(min-width: ${width}px)`} />
        ))}
        <img data-src={this.src} alt={this.alt}></img>
      </picture>
    );
  }
}
