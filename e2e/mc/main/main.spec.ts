import { test, expect } from '@playwright/test';

test.describe('MC > 메인', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://m.gongyoungshop.kr/main.do?idx=3');
    });
  
    test('사이트명 확인', async ({ page }) => {
        await expect(page).toHaveTitle(/공영홈쇼핑/);
    });

    test('컴포넌트 확인', async ({ page }) => {
        await expect(page.locator("#topAppBanner")).toBeVisible();        
        await expect(page.locator("#devGnbLiveBrcArea")).toBeVisible();
        await expect(page.locator("#gnbMenuWrapper")).toBeVisible();
        await expect(page.locator(".tp-rolling-banner-b")).toBeVisible();
        await expect(page.locator(".tp-main-services")).toBeVisible();
        /*
        await expect(page.locator(".s-home")).toBeAttached();
        await expect(page.locator(".s-home")).toBeVisible();
        await expect(page.locator(".s-themetab")).toBeVisible();
        */
    });
});