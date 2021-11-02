/**
 * Converts from a hexadecimal string to ArrayBuffer.
 *
 * ``` ts
 * import { hexToBuffer } from "./hex_to_buffer.ts";
 * const buffer = hexToBuffer("48656c6c6f20776f726c64");
 * console.log(new TextDecoder().decode(buffer));
 * ```
 */
export function hexToBuffer(hex: string): ArrayBuffer {
  if (hex.length % 2 != 0) {
    throw new TypeError(
      "Expecting an even number of characters in the hexString",
    );
  }

  const bad = hex.match(/[G-Z\s]{2}/gi);

  if (bad) {
    throw new TypeError(`Found non-hex characters [${bad.join()}]`);
  }

  const pairs = hex.match(/[\dA-F]{2}/gi);
  const integers = pairs!.map((s) => parseInt(s, 16));
  const array = new Uint8Array(integers);

  return array.buffer;
}
