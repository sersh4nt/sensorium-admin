/**
 * Generated by orval v6.21.0 🍺
 * Do not edit manually.
 * Sensorium API
 * OpenAPI spec version: 1.0.0
 */
import type { ErrorCode401Enum } from './errorCode401Enum';

export interface Error401 {
  attr: string | null;
  /** * `authentication_failed` - Authentication Failed
* `not_authenticated` - Not Authenticated */
  code: ErrorCode401Enum;
  detail: string;
}
