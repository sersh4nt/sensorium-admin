/**
 * Generated by orval v6.21.0 🍺
 * Do not edit manually.
 * Sensorium API
 * OpenAPI spec version: 1.0.0
 */
import type { ControlEquipmentPartialUpdateNameErrorComponentAttr } from './controlEquipmentPartialUpdateNameErrorComponentAttr';
import type { ControlEquipmentPartialUpdateNameErrorComponentCode } from './controlEquipmentPartialUpdateNameErrorComponentCode';

export interface ControlEquipmentPartialUpdateNameErrorComponent {
  attr: ControlEquipmentPartialUpdateNameErrorComponentAttr;
  /** * `blank` - blank
* `invalid` - invalid
* `max_length` - max_length
* `null` - null
* `null_characters_not_allowed` - null_characters_not_allowed
* `surrogate_characters_not_allowed` - surrogate_characters_not_allowed */
  code: ControlEquipmentPartialUpdateNameErrorComponentCode;
  detail: string;
}
