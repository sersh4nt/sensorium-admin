/**
 * Generated by orval v6.21.0 🍺
 * Do not edit manually.
 * Sensorium API
 * OpenAPI spec version: 1.0.0
 */
import type { Error406 } from './error406';
import type { ClientErrorEnum } from './clientErrorEnum';

export interface ErrorResponse406 {
  errors: Error406[];
  /** * `client_error` - Client Error */
  type: ClientErrorEnum;
}
