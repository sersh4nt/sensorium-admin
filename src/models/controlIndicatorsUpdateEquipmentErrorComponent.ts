/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * Sensorium API
 * OpenAPI spec version: 1.0.0
 */
import type { ControlIndicatorsUpdateEquipmentErrorComponentAttr } from './controlIndicatorsUpdateEquipmentErrorComponentAttr';
import type { ControlIndicatorsUpdateEquipmentErrorComponentCode } from './controlIndicatorsUpdateEquipmentErrorComponentCode';

export interface ControlIndicatorsUpdateEquipmentErrorComponent {
  attr: ControlIndicatorsUpdateEquipmentErrorComponentAttr;
  /** * `does_not_exist` - does_not_exist
* `incorrect_type` - incorrect_type */
  code: ControlIndicatorsUpdateEquipmentErrorComponentCode;
  detail: string;
}
