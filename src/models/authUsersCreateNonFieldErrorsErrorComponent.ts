/**
 * Generated by orval v6.21.0 🍺
 * Do not edit manually.
 * Sensorium API
 * OpenAPI spec version: 1.0.0
 */
import type { AuthUsersCreateNonFieldErrorsErrorComponentAttr } from './authUsersCreateNonFieldErrorsErrorComponentAttr';
import type { AuthUsersCreateNonFieldErrorsErrorComponentCode } from './authUsersCreateNonFieldErrorsErrorComponentCode';

export interface AuthUsersCreateNonFieldErrorsErrorComponent {
  attr: AuthUsersCreateNonFieldErrorsErrorComponentAttr;
  /** * `cannot_create_user` - cannot_create_user
* `invalid` - invalid */
  code: AuthUsersCreateNonFieldErrorsErrorComponentCode;
  detail: string;
}
