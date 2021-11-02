import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.82.0/testing/asserts.ts";

import { hexToBuffer } from "../mod.ts";

Deno.test("Takes a hex string and turn it into an ArrayBuffer", () => {
  const buffer = new Uint8Array([
    72,
    101,
    108,
    108,
    111,
    32,
    119,
    111,
    114,
    108,
    100,
  ]);

  assertEquals(hexToBuffer("48656c6c6f20776f726c64"), buffer.buffer);
  assertEquals(new TextDecoder().decode(buffer), "Hello world");
});

Deno.test("Throws if hex length is not even", () => {
  assertThrows(
    () => {
      hexToBuffer("abc");
    },
    TypeError,
    "Expecting an even number of characters in the hexString",
  );
});

Deno.test("Throws if hex has unrecognized characters", () => {
  assertThrows(
    () => {
      hexToBuffer("fajpspd6");
    },
    TypeError,
    `Found non-hex characters [jp,sp]`,
  );
});
