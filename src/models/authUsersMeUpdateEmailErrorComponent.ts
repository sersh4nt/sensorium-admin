/**
 * Generated by orval v6.21.0 🍺
 * Do not edit manually.
 * Sensorium API
 * OpenAPI spec version: 1.0.0
 */
import type { AuthUsersMeUpdateEmailErrorComponentAttr } from './authUsersMeUpdateEmailErrorComponentAttr';
import type { AuthUsersMeUpdateEmailErrorComponentCode } from './authUsersMeUpdateEmailErrorComponentCode';

export interface AuthUsersMeUpdateEmailErrorComponent {
  attr: AuthUsersMeUpdateEmailErrorComponentAttr;
  /** * `invalid` - invalid
* `max_length` - max_length
* `null` - null
* `null_characters_not_allowed` - null_characters_not_allowed
* `surrogate_characters_not_allowed` - surrogate_characters_not_allowed */
  code: AuthUsersMeUpdateEmailErrorComponentCode;
  detail: string;
}
