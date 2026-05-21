import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  globalSetup: require.resolve('./global.setup.ts'),
  use: {
    baseURL:process.env.BASE_URL!,
    testIdAttribute:'data-test',
     headless: process.env.CI ? true : false,
   viewport: { width: 1280, height: 720 },
   
  },
  
expect:{
  toHaveScreenshot:{
    maxDiffPixels:100,
   
  }
},
  
 projects: [
    {
      name: 'no-auth',
      testMatch: /.*visual\.login\.spec\.ts/,
      use: { 
        // no storageState, so tests will run without authentication
       },
    },
    {
      name: 'auth',
      testMatch: /.*visual\.inventory\.spec\.ts/,
      use: { 
        storageState: './auth/user.json' // use the authenticated state for these tests
       }, 
    }
  ]
});
