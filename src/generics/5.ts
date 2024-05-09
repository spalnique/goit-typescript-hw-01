export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

type UserRoleProps = Record<UserRole, string>;

// Замініть наступний код на версію за допомогою Record
export const RoleDescription: UserRoleProps = {
  [UserRole.admin]: 'Admin User',
  [UserRole.editor]: 'Editor User',
  [UserRole.guest]: 'Guest User',
};
