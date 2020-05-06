import { newE2EPage } from '@stencil/core/testing';

describe('app-video-capacitor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-video-capacitor></app-video-capacitor>');

    const element = await page.find('app-video-capacitor');
    expect(element).toHaveClass('hydrated');
  });
});
