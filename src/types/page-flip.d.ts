declare module "page-flip" {
  export type FlipEvent = { data: number | string };

  export class PageFlip {
    constructor(element: HTMLElement, settings: Record<string, unknown>);
    destroy(): void;
    flipNext(corner?: "top" | "bottom"): void;
    flipPrev(corner?: "top" | "bottom"): void;
    getCurrentPageIndex(): number;
    getOrientation(): "portrait" | "landscape";
    loadFromImages(images: string[]): void;
    on(event: "flip", callback: (event: FlipEvent) => void): void;
  }
}
