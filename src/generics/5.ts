export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

type UserRoleProps = Record<UserRole, string>;

// Замініть наступний код на версію за допомогою Record
const RoleDescription: UserRoleProps = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};
