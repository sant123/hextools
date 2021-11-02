/**
 * Converts from an ArrayBuffer to a hexadecimal string.
 *
 * ``` ts
 * import { bufferToHex } from "./buffer_to_hex.ts";
 * const buffer = new TextEncoder().encode("Hello world");
 * const hex = bufferToHex(buffer);
 *
 * ```
 */
export function bufferToHex(buffer: ArrayBuffer): string {
  return Array.prototype.map.call(
    new Uint8Array(buffer),
    (b) => b.toString(16).padStart(2, "0"),
  ).join("");
}
