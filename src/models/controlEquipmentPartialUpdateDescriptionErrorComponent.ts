/**
 * Generated by orval v6.21.0 🍺
 * Do not edit manually.
 * Sensorium API
 * OpenAPI spec version: 1.0.0
 */
import type { ControlEquipmentPartialUpdateDescriptionErrorComponentAttr } from './controlEquipmentPartialUpdateDescriptionErrorComponentAttr';
import type { ControlEquipmentPartialUpdateDescriptionErrorComponentCode } from './controlEquipmentPartialUpdateDescriptionErrorComponentCode';

export interface ControlEquipmentPartialUpdateDescriptionErrorComponent {
  attr: ControlEquipmentPartialUpdateDescriptionErrorComponentAttr;
  /** * `blank` - blank
* `invalid` - invalid
* `null` - null
* `null_characters_not_allowed` - null_characters_not_allowed
* `required` - required
* `surrogate_characters_not_allowed` - surrogate_characters_not_allowed */
  code: ControlEquipmentPartialUpdateDescriptionErrorComponentCode;
  detail: string;
}
