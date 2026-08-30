import { describe, expect, it } from 'vitest';
import { application } from './application';

describe('application contract', () => {
  it('exports the shared application metadata', () => {
    expect(application).toMatchObject({
      title: 'JavaScript Notepad',
      version: '0.1.0',
    });
  });
});
