/**
 * Generated by orval v6.21.0 🍺
 * Do not edit manually.
 * Sensorium API
 * OpenAPI spec version: 1.0.0
 */
import type { ControlEquipmentCreateDescriptionErrorComponentAttr } from './controlEquipmentCreateDescriptionErrorComponentAttr';
import type { ControlEquipmentCreateDescriptionErrorComponentCode } from './controlEquipmentCreateDescriptionErrorComponentCode';

export interface ControlEquipmentCreateDescriptionErrorComponent {
  attr: ControlEquipmentCreateDescriptionErrorComponentAttr;
  /** * `blank` - blank
* `invalid` - invalid
* `null` - null
* `null_characters_not_allowed` - null_characters_not_allowed
* `required` - required
* `surrogate_characters_not_allowed` - surrogate_characters_not_allowed */
  code: ControlEquipmentCreateDescriptionErrorComponentCode;
  detail: string;
}
