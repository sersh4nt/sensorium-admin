/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * Sensorium API
 * OpenAPI spec version: 1.0.0
 */
import type { ControlIndicatorsCreateIndicatorTypeErrorComponentAttr } from './controlIndicatorsCreateIndicatorTypeErrorComponentAttr';
import type { ControlIndicatorsCreateIndicatorTypeErrorComponentCode } from './controlIndicatorsCreateIndicatorTypeErrorComponentCode';

export interface ControlIndicatorsCreateIndicatorTypeErrorComponent {
  attr: ControlIndicatorsCreateIndicatorTypeErrorComponentAttr;
  /** * `blank` - blank
* `invalid` - invalid
* `max_length` - max_length
* `null` - null
* `null_characters_not_allowed` - null_characters_not_allowed
* `surrogate_characters_not_allowed` - surrogate_characters_not_allowed */
  code: ControlIndicatorsCreateIndicatorTypeErrorComponentCode;
  detail: string;
}
