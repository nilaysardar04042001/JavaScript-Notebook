import { describe, expect, it } from 'vitest';
import { createHealthPayload } from './index.js';

describe('backend health payload', () => {
  it('returns the application status payload', () => {
    expect(createHealthPayload()).toMatchObject({
      status: 'ok',
      application: 'JavaScript Notepad',
      version: '0.1.0',
    });
  });
});
