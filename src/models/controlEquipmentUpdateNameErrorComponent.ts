/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * Sensorium API
 * OpenAPI spec version: 1.0.0
 */
import type { ControlEquipmentUpdateNameErrorComponentAttr } from './controlEquipmentUpdateNameErrorComponentAttr';
import type { ControlEquipmentUpdateNameErrorComponentCode } from './controlEquipmentUpdateNameErrorComponentCode';

export interface ControlEquipmentUpdateNameErrorComponent {
  attr: ControlEquipmentUpdateNameErrorComponentAttr;
  /** * `blank` - blank
* `invalid` - invalid
* `max_length` - max_length
* `null` - null
* `null_characters_not_allowed` - null_characters_not_allowed
* `required` - required
* `surrogate_characters_not_allowed` - surrogate_characters_not_allowed */
  code: ControlEquipmentUpdateNameErrorComponentCode;
  detail: string;
}
