interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['App Owner'],
  customerRoles: [],
  tenantRoles: ['App Owner', 'App Administrator'],
  tenantName: 'Organization',
  applicationName: 'Getlove',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
