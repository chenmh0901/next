import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'app',
  webDir: 'dist',
  server: {
    cleartext: true
  },
  plugins: {
    Share: {}
  }
};

export default config;
