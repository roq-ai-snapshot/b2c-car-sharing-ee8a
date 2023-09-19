interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Fleet Manager', 'Admin', 'Business Owner'],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read company information',
    'Read car details',
    'Read booking information',
  ],
  ownerAbilities: ['Manage users', 'Manage companies', 'Manage cars', 'Manage bookings', 'Manage locations'],
  getQuoteUrl: 'https://app.roq.ai/proposal/f0b49bae-9ef0-4972-8dfb-559c91802c41',
};
