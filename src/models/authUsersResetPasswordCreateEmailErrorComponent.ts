/**
 * Generated by orval v6.21.0 🍺
 * Do not edit manually.
 * Sensorium API
 * OpenAPI spec version: 1.0.0
 */
import type { AuthUsersResetPasswordCreateEmailErrorComponentAttr } from './authUsersResetPasswordCreateEmailErrorComponentAttr';
import type { AuthUsersResetPasswordCreateEmailErrorComponentCode } from './authUsersResetPasswordCreateEmailErrorComponentCode';

export interface AuthUsersResetPasswordCreateEmailErrorComponent {
  attr: AuthUsersResetPasswordCreateEmailErrorComponentAttr;
  /** * `blank` - blank
* `invalid` - invalid
* `null` - null
* `null_characters_not_allowed` - null_characters_not_allowed
* `required` - required
* `surrogate_characters_not_allowed` - surrogate_characters_not_allowed */
  code: AuthUsersResetPasswordCreateEmailErrorComponentCode;
  detail: string;
}