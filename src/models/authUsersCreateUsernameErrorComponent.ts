/**
 * Generated by orval v6.21.0 🍺
 * Do not edit manually.
 * Sensorium API
 * OpenAPI spec version: 1.0.0
 */
import type { AuthUsersCreateUsernameErrorComponentAttr } from './authUsersCreateUsernameErrorComponentAttr';
import type { AuthUsersCreateUsernameErrorComponentCode } from './authUsersCreateUsernameErrorComponentCode';

export interface AuthUsersCreateUsernameErrorComponent {
  attr: AuthUsersCreateUsernameErrorComponentAttr;
  /** * `blank` - blank
* `invalid` - invalid
* `max_length` - max_length
* `null` - null
* `null_characters_not_allowed` - null_characters_not_allowed
* `required` - required
* `surrogate_characters_not_allowed` - surrogate_characters_not_allowed
* `unique` - unique */
  code: AuthUsersCreateUsernameErrorComponentCode;
  detail: string;
}
