import { test, expect } from '@playwright/test';

test('getTest', async ({ request }) => {
    // const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
    //   data: {
    //     title: '[Bug] report 1',
    //     body: 'Bug description',
    //   }
    // });
    // expect(newIssue.ok()).toBeTruthy();
  
    const issues = await request.get(`/calculator/afford?repayment=100&productType=secured-loan`);
    expect(issues.ok()).toBeTruthy();
    const resp = await issues.json()
    expect(resp.rawCost).toBe(2397.65)
    // expect(await issues.json()).toContainEqual(expect.objectContaining({
    //   deposit: '0'
    // }));
  });