/**
 * Generated by orval v6.21.0 🍺
 * Do not edit manually.
 * Sensorium API
 * OpenAPI spec version: 1.0.0
 */
import type { AuthTokenLoginCreatePasswordErrorComponentAttr } from './authTokenLoginCreatePasswordErrorComponentAttr';
import type { AuthTokenLoginCreatePasswordErrorComponentCode } from './authTokenLoginCreatePasswordErrorComponentCode';

export interface AuthTokenLoginCreatePasswordErrorComponent {
  attr: AuthTokenLoginCreatePasswordErrorComponentAttr;
  /** * `blank` - blank
* `invalid` - invalid
* `null` - null
* `null_characters_not_allowed` - null_characters_not_allowed
* `surrogate_characters_not_allowed` - surrogate_characters_not_allowed */
  code: AuthTokenLoginCreatePasswordErrorComponentCode;
  detail: string;
}
