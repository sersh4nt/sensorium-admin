/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * Sensorium API
 * OpenAPI spec version: 1.0.0
 */
import type { AuthUsersActivationCreateNonFieldErrorsErrorComponentAttr } from './authUsersActivationCreateNonFieldErrorsErrorComponentAttr';
import type { AuthUsersActivationCreateNonFieldErrorsErrorComponentCode } from './authUsersActivationCreateNonFieldErrorsErrorComponentCode';

export interface AuthUsersActivationCreateNonFieldErrorsErrorComponent {
  attr: AuthUsersActivationCreateNonFieldErrorsErrorComponentAttr;
  /** * `invalid` - invalid
* `invalid_token` - invalid_token
* `invalid_uid` - invalid_uid
* `stale_token` - stale_token */
  code: AuthUsersActivationCreateNonFieldErrorsErrorComponentCode;
  detail: string;
}
