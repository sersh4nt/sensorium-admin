/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * Sensorium API
 * OpenAPI spec version: 1.0.0
 */
import type { ParseErrorCodeEnum } from './parseErrorCodeEnum';

export interface ParseError {
  attr: string | null;
  /** * `parse_error` - Parse Error */
  code: ParseErrorCodeEnum;
  detail: string;
}
