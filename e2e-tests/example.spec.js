import { test, describe, expect } from '@playwright/test'

describe('phonebook', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('Phonebook')).toBeVisible()
    await expect(page.getByText('Numbers')).toBeVisible()
    await expect(page.getByText('tuomas 4123')).toBeVisible()
  })
})