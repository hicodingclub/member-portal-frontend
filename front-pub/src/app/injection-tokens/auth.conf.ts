import { DropdownItem } from '@hicoder/angular-auth';
export const authentication_page_root_uri: string = '/auth';
export const authentication_server_root_uri: string = '/api/auth';
export const authentication_interfaces = 'users';
export const authentication_login_pipeline = '/membership/cust/check';
export const authentication_registration_pipeline = '/membership/additionalinfo/new';


export const authentication_dropdown_items: DropdownItem[] = [
    // {displayName: 'Student Profiles', routerLink: '/academics/student'},
    // {displayName: 'Class Enrollments', routerLink: '/academics/classenroll'},
] 

export const authentication_reg_required: any = {
    firstName: true,
    lastName: true,
    phone: false,
}