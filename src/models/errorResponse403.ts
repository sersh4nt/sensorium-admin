/**
 * Generated by orval v6.21.0 🍺
 * Do not edit manually.
 * Sensorium API
 * OpenAPI spec version: 1.0.0
 */
import type { Error403 } from './error403';
import type { ClientErrorEnum } from './clientErrorEnum';

export interface ErrorResponse403 {
  errors: Error403[];
  /** * `client_error` - Client Error */
  type: ClientErrorEnum;
}
