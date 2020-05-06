import { newSpecPage } from '@stencil/core/testing';
import { AppVideoCapacitor } from './app-video-capacitor';

describe('app-video-capacitor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppVideoCapacitor],
      html: `<app-video-capacitor></app-video-capacitor>`,
    });
    expect(page.root).toEqualHtml(`
      <app-video-capacitor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-video-capacitor>
    `);
  });
});
