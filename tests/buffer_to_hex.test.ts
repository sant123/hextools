import { assertEquals } from "https://deno.land/std@0.82.0/testing/asserts.ts";
import { bufferToHex } from "../mod.ts";

Deno.test("Takes an ArrayBuffer and turn it into a hex string", () => {
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

  assertEquals(bufferToHex(buffer), "48656c6c6f20776f726c64");
});
