/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * Sensorium API
 * OpenAPI spec version: 1.0.0
 */
import type { AuthUsersSetPasswordCreateNewPasswordErrorComponentAttr } from './authUsersSetPasswordCreateNewPasswordErrorComponentAttr';
import type { AuthUsersSetPasswordCreateNewPasswordErrorComponentCode } from './authUsersSetPasswordCreateNewPasswordErrorComponentCode';

export interface AuthUsersSetPasswordCreateNewPasswordErrorComponent {
  attr: AuthUsersSetPasswordCreateNewPasswordErrorComponentAttr;
  /** * `blank` - blank
* `invalid` - invalid
* `null` - null
* `null_characters_not_allowed` - null_characters_not_allowed
* `required` - required
* `surrogate_characters_not_allowed` - surrogate_characters_not_allowed */
  code: AuthUsersSetPasswordCreateNewPasswordErrorComponentCode;
  detail: string;
}
