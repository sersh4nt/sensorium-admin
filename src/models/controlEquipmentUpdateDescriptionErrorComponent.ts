/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * Sensorium API
 * OpenAPI spec version: 1.0.0
 */
import type { ControlEquipmentUpdateDescriptionErrorComponentAttr } from './controlEquipmentUpdateDescriptionErrorComponentAttr';
import type { ControlEquipmentUpdateDescriptionErrorComponentCode } from './controlEquipmentUpdateDescriptionErrorComponentCode';

export interface ControlEquipmentUpdateDescriptionErrorComponent {
  attr: ControlEquipmentUpdateDescriptionErrorComponentAttr;
  /** * `blank` - blank
* `invalid` - invalid
* `null` - null
* `null_characters_not_allowed` - null_characters_not_allowed
* `required` - required
* `surrogate_characters_not_allowed` - surrogate_characters_not_allowed */
  code: ControlEquipmentUpdateDescriptionErrorComponentCode;
  detail: string;
}
