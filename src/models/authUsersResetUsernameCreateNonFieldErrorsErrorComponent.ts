/**
 * Generated by orval v6.21.0 🍺
 * Do not edit manually.
 * Sensorium API
 * OpenAPI spec version: 1.0.0
 */
import type { AuthUsersResetUsernameCreateNonFieldErrorsErrorComponentAttr } from './authUsersResetUsernameCreateNonFieldErrorsErrorComponentAttr';
import type { AuthUsersResetUsernameCreateNonFieldErrorsErrorComponentCode } from './authUsersResetUsernameCreateNonFieldErrorsErrorComponentCode';

export interface AuthUsersResetUsernameCreateNonFieldErrorsErrorComponent {
  attr: AuthUsersResetUsernameCreateNonFieldErrorsErrorComponentAttr;
  /** * `email_not_found` - email_not_found
* `invalid` - invalid */
  code: AuthUsersResetUsernameCreateNonFieldErrorsErrorComponentCode;
  detail: string;
}
