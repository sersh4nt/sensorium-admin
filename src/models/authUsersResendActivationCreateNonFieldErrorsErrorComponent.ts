/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * Sensorium API
 * OpenAPI spec version: 1.0.0
 */
import type { AuthUsersResendActivationCreateNonFieldErrorsErrorComponentAttr } from './authUsersResendActivationCreateNonFieldErrorsErrorComponentAttr';
import type { AuthUsersResendActivationCreateNonFieldErrorsErrorComponentCode } from './authUsersResendActivationCreateNonFieldErrorsErrorComponentCode';

export interface AuthUsersResendActivationCreateNonFieldErrorsErrorComponent {
  attr: AuthUsersResendActivationCreateNonFieldErrorsErrorComponentAttr;
  /** * `email_not_found` - email_not_found
* `invalid` - invalid */
  code: AuthUsersResendActivationCreateNonFieldErrorsErrorComponentCode;
  detail: string;
}
