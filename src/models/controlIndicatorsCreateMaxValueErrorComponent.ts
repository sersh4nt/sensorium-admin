/**
 * Generated by orval v6.21.0 🍺
 * Do not edit manually.
 * Sensorium API
 * OpenAPI spec version: 1.0.0
 */
import type { ControlIndicatorsCreateMaxValueErrorComponentAttr } from './controlIndicatorsCreateMaxValueErrorComponentAttr';
import type { ControlIndicatorsCreateMaxValueErrorComponentCode } from './controlIndicatorsCreateMaxValueErrorComponentCode';

export interface ControlIndicatorsCreateMaxValueErrorComponent {
  attr: ControlIndicatorsCreateMaxValueErrorComponentAttr;
  /** * `blank` - blank
* `invalid` - invalid
* `max_length` - max_length
* `null` - null
* `null_characters_not_allowed` - null_characters_not_allowed
* `required` - required
* `surrogate_characters_not_allowed` - surrogate_characters_not_allowed */
  code: ControlIndicatorsCreateMaxValueErrorComponentCode;
  detail: string;
}
