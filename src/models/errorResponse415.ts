/**
 * Generated by orval v6.21.0 🍺
 * Do not edit manually.
 * Sensorium API
 * OpenAPI spec version: 1.0.0
 */
import type { Error415 } from './error415';
import type { ClientErrorEnum } from './clientErrorEnum';

export interface ErrorResponse415 {
  errors: Error415[];
  /** * `client_error` - Client Error */
  type: ClientErrorEnum;
}
