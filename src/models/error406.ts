/**
 * Generated by orval v6.21.0 🍺
 * Do not edit manually.
 * Sensorium API
 * OpenAPI spec version: 1.0.0
 */
import type { ErrorCode406Enum } from './errorCode406Enum';

export interface Error406 {
  attr: string | null;
  /** * `not_acceptable` - Not Acceptable */
  code: ErrorCode406Enum;
  detail: string;
}
