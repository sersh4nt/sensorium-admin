/**
 * Generated by orval v6.21.0 🍺
 * Do not edit manually.
 * Sensorium API
 * OpenAPI spec version: 1.0.0
 */
import type { ControlIndicatorsUpdateMaxValueErrorComponentAttr } from './controlIndicatorsUpdateMaxValueErrorComponentAttr';
import type { ControlIndicatorsUpdateMaxValueErrorComponentCode } from './controlIndicatorsUpdateMaxValueErrorComponentCode';

export interface ControlIndicatorsUpdateMaxValueErrorComponent {
  attr: ControlIndicatorsUpdateMaxValueErrorComponentAttr;
  /** * `blank` - blank
* `invalid` - invalid
* `max_length` - max_length
* `null` - null
* `null_characters_not_allowed` - null_characters_not_allowed
* `required` - required
* `surrogate_characters_not_allowed` - surrogate_characters_not_allowed */
  code: ControlIndicatorsUpdateMaxValueErrorComponentCode;
  detail: string;
}
